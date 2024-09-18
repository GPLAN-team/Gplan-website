import React, { useEffect, useRef } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import algoBG from "./../../public/algoBG.png";
import demoVideoDesktop from "../../public/Final_1.mp4";
import demoVideoMobile from "../../public/Final_1.mp4";
import userManualPDF from "../../public/userManual.pdf";
import FAQPDF from "../../public/faq.pdf";

export default function DemoVideo() {
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      threshold: 0.5, // 50% visibility
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          video.play().catch((error: any) => {
            // Handle autoplay restrictions or errors
            console.error("Error attempting to play", error);
          });
        } else {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    // Observe both desktop and mobile videos if they exist
    if (desktopVideoRef.current) {
      observer.observe(desktopVideoRef.current);
    }

    if (mobileVideoRef.current) {
      observer.observe(mobileVideoRef.current);
    }

    // Cleanup the observer on unmount
    return () => {
      if (desktopVideoRef.current) {
        observer.unobserve(desktopVideoRef.current);
      }
      if (mobileVideoRef.current) {
        observer.unobserve(mobileVideoRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <Grid
      spacing={5}
      sx={{
        backgroundColor: "#FFFFFF",
        pl: "5%",
        pr: "5%",
        pb: "32px",
        mb: "36px",
        mt: "36px",
      }}
    >
      <Box
        sx={{
          borderRadius: { xs: "24px", sm: "36px" },
          backgroundSize: "cover",
          backgroundImage: `url(${algoBG})`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden",
          mt: "90px",
          paddingTop: { xs: "20px", sm: "45px" },
          paddingBottom: { xs: "20px", sm: "45px" },
          paddingLeft: { xs: "0", sm: "45px" },
          paddingRight: { xs: "0", sm: "45px" },
        }}
      >
        <Typography
          sx={{
            color: "black",
            textAlign: "left",
            fontFamily: "Bebas Neue",
            fontSize: { xs: "32px", sm: "80px" },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            mb: { xs: "15px", sm: "40px" },
          }}
        >
          Algorithm in Action
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%", // Ensure full width for buttons
          }}
        >
          {/* Desktop Video */}
          <Box
            sx={{
              height: "60vh",
              display: { xs: "none", sm: "block" },
            }}
          >
            <video
              ref={desktopVideoRef}
              height="100%"
              width="100%"
              controls
              src={demoVideoDesktop}
              aria-label="Algorithm Video Desktop"
            />
          </Box>
          {/* Mobile Video */}
          <Box
            sx={{
              height: "400px",
              display: { xs: "block", sm: "none" },
            }}
          >
            <video
              ref={mobileVideoRef}
              height="100%"
              width="100%"
              controls
              src={demoVideoMobile}
              aria-label="Algorithm Video Mobile"
            />
          </Box>

          {/* Download Buttons */}
          <Box
            sx={{
              mt: 4, // Margin-top for spacing
              display: "flex",
              flexDirection: { xs: "column", sm: "row" }, // Stack vertically on mobile
              gap: 2, // Space between buttons
            }}
          >
            <Button
              variant="contained"
              component="a"
              href={userManualPDF}
              download
              sx={{ minWidth: "150px" }}
              className="pricing-footer-button"
            >
              Download User Manual
            </Button>
            <Button
              variant="contained"
              component="a"
              href={FAQPDF}
              download
              sx={{ minWidth: "150px" }}
              className="pricing-footer-button"
            >
              Download FAQ
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
