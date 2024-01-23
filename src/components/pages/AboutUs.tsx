import React from "react"
import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import Navbar from "../utils/Navbar";
import Footer from "../utils/Footer";
import "../../styles/home.css"

function TeamMemberCard({ name, text1, text2, text3, text4 }: any) {
  return (
    <Grid item xs={12} md={4}>
      <Box
        sx={{
          backgroundColor: '#EAECF0',
          borderRadius: '10px',
          padding: '20px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          height: '300px',
        }}
      >
        <Typography
          sx={{
            textAlign: 'left',
            fontFamily: 'Montserrat',
            fontSize: { xs: '24px', sm: '28px' },
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '36px',
            marginBottom: '20px',
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            textAlign: 'left',
            fontFamily: 'Montserrat',
            fontSize: { xs: '18px', sm: '22px' },
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '36px',
            marginBottom: '20px',
          }}
        >
          {text1}
        </Typography>
        <Typography
          sx={{
            textAlign: 'left',
            fontFamily: 'Montserrat',
            fontSize: { xs: '18px', sm: '22px' },
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '36px',
            marginBottom: '20px',
          }}
        >
          {text2}
        </Typography>
        <Typography
          sx={{
            textAlign: 'left',
            fontFamily: 'Montserrat',
            fontSize: { xs: '18px', sm: '22px' },
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '36px',
            marginBottom: '20px',
          }}
        >
          {text3}
        </Typography>
        <Typography
          sx={{
            textAlign: 'left',
            fontFamily: 'Montserrat',
            fontSize: { xs: '18px', sm: '22px' },
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '36px',
            marginBottom: '20px',
          }}
        >
          {text4}
        </Typography>
      </Box>
    </Grid>
  );
}

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <Grid
        spacing={5}
        sx={{
          backgroundColor: "#fff",
          pl: "7%",
          pr: "7%",
          pb: "32px",
          pt: "32px",
          mb: "36px",
          mt: "100px",
        }}
      >
        <Typography
          sx={{
            textAlign: "left",
            fontFamily: "Bebas Neue",
            fontSize: { xs: "36px", sm: "56px" },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            marginBottom: "4px",
          }}
        >
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Box sx={{ color: "black", marginRight: "10px" }}>Our Mission</Box>
          </Box>
        </Typography>
        <Typography
          sx={{
            textAlign: "left",
            fontFamily: "Bebas Neue",
            fontSize: { xs: "36px", sm: "56px" },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            marginBottom: "20px",
          }}
        >
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Box sx={{ color: "#1C4C82" }}>To elevate the landscape of architectural design</Box>
          </Box>
        </Typography>
        <Typography
          sx={{
            textAlign: "left",
            fontFamily: "Bebas Neue",
            fontSize: { xs: "36px", sm: "56px" },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            marginBottom: "20px",
          }}
        >
        </Typography>
        <Typography
          sx={{
            textAlign: "left",
            fontFamily: "Bebas Neue",
            fontSize: { xs: "36px", sm: "56px" },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            marginBottom: "20px",
          }}
        >
          GPLAN: A Game-Changing Approach To Revolutionize Architectural Design
        </Typography>
        <Typography
          sx={{
            textAlign: "left",
            fontFamily: "Montserrat",
            fontSize: { xs: "18px", sm: "22px" },
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "36px",
            marginBottom: "20px",
          }}
        >
          By leveraging advanced algorithms deeply rooted in Graph Theory we want to unleash architectural creativity through automated floor planning.        </Typography>
        <Typography
          sx={{
            textAlign: "left",
            fontFamily: "Montserrat",
            fontSize: { xs: "18px", sm: "22px" },
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "36px",
            marginBottom: "20px",
          }}
        >
          Tailored for architects, designers, builders, contractors, and developers, GPLAN optimizes efficiency by reducing the time and resources typically expended in manual design processes.
        </Typography>
        <Typography
          sx={{
            textAlign: "left",
            fontFamily: "Montserrat",
            fontSize: { xs: "18px", sm: "22px" },
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "36px",
            marginBottom: "20px",
          }}
        >
          We aim to drive automation and spark innovation in floor planning for AEC professionals, transforming the way architectural projects are envisioned.
        </Typography>
      </Grid>
      <Grid
        spacing={5}
        sx={{
          backgroundColor: "#fff",
          pl: "7%",
          pr: "7%",
          pb: "32px",
          mb: "36px",
          mt: "36px",
        }}
      >
        <Typography
          sx={{
            textAlign: "left",
            fontFamily: "Bebas Neue",
            fontSize: { xs: "36px", sm: "56px" },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            marginBottom: "20px",
          }}
        >
          <Grid container>
            <Box sx={{ color: "black", marginRight: "4px" }}>Vision</Box>
          </Grid>
        </Typography>
        <Typography
          sx={{
            textAlign: "left",
            fontFamily: "Montserrat",
            fontSize: { xs: "18px", sm: "22px" },
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "36px",
            marginBottom: "20px",
          }}
        >
          Our purpose lies in empowering architects with a plethora of design options within milliseconds. From homeowners trying to DIY, to urban planners shaping cities, GPLAN streamlines the process of floor planning for all. So, architects save time and concentrate on other aspects of construction, completing projects on time.
        </Typography>
      </Grid>
      <Grid
        spacing={5}
        sx={{
          backgroundColor: "#fff",
          pl: "7%",
          pr: "7%",
          pb: "32px",
          mb: "36px",
          mt: "36px",
        }}
      >
        <Typography
          sx={{
            textAlign: "left",
            fontFamily: "Bebas Neue",
            fontSize: { xs: "36px", sm: "56px" },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            marginBottom: "20px",
          }}
        >
          <Grid container>
            <Box sx={{ color: "black", marginRight: "4px" }}>Our</Box>
            <Box sx={{ color: { xs: "#1C4C82", sm: "black" } }}>Story</Box>
          </Grid>
        </Typography>
        <Typography
          sx={{
            textAlign: "left",
            fontFamily: "Montserrat",
            fontSize: { xs: "18px", sm: "22px" },
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "36px",
            marginBottom: "20px",
          }}>
          In 2020, a friend struggling with a floor plan for #placeholder# approached Professor Shekhawat, to help him efficiently draw a plan of this scale. With his expertise in graph theory, he started formulating an algorithm. On completion, he had a way to not only make the process swift but also give all the possible options to save his friend the trouble of redrawing every time the client didn’t approve the design. The gratitude was customer validation in disguise, fueling an urge to expand this algorithm to a project and then to a company.
        </Typography>
        <Typography
          sx={{
            textAlign: "left",
            fontFamily: "Montserrat",
            fontSize: { xs: "18px", sm: "22px" },
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "36px",
            marginBottom: "20px",
          }}>
          With this vision, our founder, Prof. Shekhawat, with a group of his students, sat every week devising algorithms to incorporate an algorithm for every problem that architects might face while drawing out a floor plan, into GPLAN. Thus, #x# research papers and countless hours later, we propose GPLAN.
        </Typography>
      </Grid>
      <Grid
        spacing={5}
        sx={{
          backgroundColor: "#fff",
          pl: "7%",
          pr: "7%",
          pb: "32px",
          mb: "36px",
          mt: "36px",
        }}
      >
        <Typography
          sx={{
            textAlign: "left",
            fontFamily: "Bebas Neue",
            fontSize: { xs: "36px", sm: "56px" },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            marginBottom: "20px",
          }}
        >
          <Grid container>
            <Box sx={{ color: "black", marginRight: "4px" }}>Our</Box>
            <Box sx={{ color: { xs: "#1C4C82", sm: "black" } }}>Team</Box>
          </Grid>
        </Typography>
        <Grid container spacing={4}>
          <TeamMemberCard name="Dr. Krishnendra Shekhawat" text1="Founder @GPLAN" text2="Professor @BITS Pilani" text3="PhD Mathematics @University of Geneva" />
          <TeamMemberCard name="Rahil N Jain" text1="Tech & Product Lead" text2="Associate @Goldman Sachs" text3="Ex - Amazon" text4="MSc. Mathematics and BE. Computer Science @BITS Pilani" />
          <TeamMemberCard name="Ayush Agarwal" text1="Tech Lead" text2="Ex - Sprinklr" text3="MSc. Mathematics and BE. Computer Science @BITS Pilani" text4="" />
          <TeamMemberCard name="Sujay Rastogi" text1="Tech Lead" text2="Ex - Amazon" text3="MSc. Mathematics and BE. Computer Science @BITS Pilani" text4="" />
          <TeamMemberCard name="Bhavy Goel" text1="Tech Lead" text2="Ex - Moveworks" text3="MSc. Mathematics and BE. Computer Science @BITS Pilani" text4="" />
          <TeamMemberCard name="Fahad Qureshi" text1="Strategy & Business Head" text2="PM @Swiggy" text3="Ex - GE HealthCare" text4="BE. Manufacturing @BITS Pilani" />
        </Grid>
      </Grid>
      <Footer />
    </>
  )
}