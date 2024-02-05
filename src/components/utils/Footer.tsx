import {
  Box,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import GplanIconWhite from "../icons/GplanIconWhite";
import RightArrowBlueBG from "../../public/right-arrow-blue-bg.svg";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import emailjs from '@emailjs/browser';

function Footer() {
  const [Email, setEmail] = useState("");
  const handleEmailChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(event.target.value);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm('service_33u9zzp', 'demo', e.currentTarget, 'ZmHT-LEvyKBSsbp-t')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  const [showPopup, setShowPopup] = useState(false);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <>
      <div className="footer-outer-div" id="footer">
        <div className="footer-logo-box">
          <GplanIconWhite />
          <p className="footer-logo-text">GPLAN</p>
        </div>
        <Box sx={{ display: { xs: "none", sm: "block" }, marginTop: "64px" }}>
          <p className="footer-heading">CREATE SOMETHING NEW TODAY!</p>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" }, marginTop: "16px" }}>
          <p
            className="footer-heading"
            style={{ fontSize: "20px", fontFamily: "Poppins" }}
          >
            Meet your deadlines and take on extra projects. <br />
            Email us your design brief, and GPLAN will handle your floor plans.
          </p>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" }, marginTop: "16px" }}>
          <p
            className="footer-heading"
            style={{ fontSize: "20px", fontFamily: "Poppins" }}
          >
            Or enter your email below <br /> and the GPLAN team will get back to
            you :
          </p>
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none" }, marginTop: "32px" }}>
          <p className="footer-heading" style={{ fontSize: "36px" }}>
            CREATE SOMETHING NEW TODAY!
          </p>
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none" }, marginTop: "8px" }}>
          <p
            className="footer-heading"
            style={{ fontSize: "10px", fontFamily: "Poppins" }}
          >
            Meet your deadlines and take on extra projects. <br />
            Email us your design brief, and GPLAN will handle your floor plans.
          </p>
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none" }, marginTop: "8px" }}>
          <p
            className="footer-heading"
            style={{ fontSize: "10px", fontFamily: "Poppins" }}
          >
            Or enter your email below <br /> and the GPLAN team will get back to
            you :
          </p>
        </Box>
        <Box
          className="text-field-div"
          sx={{ width: { xs: "340px", sm: "625px" } }}
        >
          <form onSubmit={sendEmail}>
            <TextField
              sx={{
                backgroundColor: "white",
                padding: "4px",
                textAlign: "center",
                "& fieldset": { border: "none" },
              }}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <button type="submit" style={{ border: "none", background: "none",margin:0, padding: 0, paddingTop: "4px", cursor: "pointer" }}>
                      <img
                        className="text-field-img"
                        src={RightArrowBlueBG}
                        alt="right-arrow-blue-bg"
                      />
                    </button>
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                shrink: false,
                className: "input-label-props",
              }}
              type="text"
              label={Email === "" ? "Email" : ""}
              name="Email"
              value={Email}
              onChange={handleEmailChange}
            />
          </form>
        </Box>
        <Box
          className="footer-bottom-social-link-div"
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          {showPopup && (
            <Box
              id="popup"
              sx={{
                position: 'fixed',
                background: 'rgba(0, 0, 0, 0.8)',
                top: 20,
                right: 20,
                padding: '10px',
                borderRadius: '10px',
                transition: 'all 0.5s ease-in-out',
                color: 'white',
                zIndex: 2,
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontFamily: "Montserrat",
                  fontSize: { xs: "10px", sm: "20px" },
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                Copied to Clipboard!
              </Typography>
            </Box>)}
          {/* <Link href="#" style={{ textDecoration: "none" }}>
            <p className="footer-social-links">Instagram</p>
          </Link> */}
          {/* <Link href="#" style={{ textDecoration: "none" }}>
            <p className="footer-social-links">Youtube</p>
          </Link> */}
          <div onClick={() => handleCopy("+91 94688 39182")}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center'
            }}>
              <LocalPhoneIcon htmlColor="white" style={{ paddingRight: "3px", fontSize: "20px" }} />
              <p className="footer-social-links">+91 94688 39182</p>
            </Box>
          </div>
          <div onClick={() => handleCopy("support@gplan.in")}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center'
            }}>
              <MailIcon htmlColor="white" style={{ paddingRight: "3px", fontSize: "20px" }} />
              <p className="footer-social-links">support@gplan.in</p>
            </Box>
          </div>
          <Link href="https://www.linkedin.com/company/graphplan/" target="_blank" style={{ textDecoration: "none" }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center'
            }}>
              <LinkedInIcon htmlColor="white" style={{ paddingRight: "3px", fontSize: "20px" }} />
              <p className="footer-social-links">LinkedIn</p>
            </Box>
          </Link>
        </Box>
        <Box
          className="footer-bottom-social-link-div"
          sx={{ display: { xs: "flex", sm: "none" } }}
        >
          <div onClick={async () => { navigator.clipboard.writeText("+91 94688 39182") }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center'
            }}>
              <LocalPhoneIcon htmlColor="white" style={{ paddingRight: "3px", fontSize: "20px" }} />
              <p className="footer-social-links" style={{ fontSize: "10px" }}>+91 94688 39182</p>
            </Box>
          </div>
          <div onClick={async () => { navigator.clipboard.writeText("support@gplan.in") }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center'
            }}>
              <MailIcon htmlColor="white" style={{ paddingRight: "3px", fontSize: "20px" }} />
              <p className="footer-social-links" style={{ fontSize: "10px" }}>support@gplan.in</p>
            </Box>
          </div>
          <Link href="https://www.linkedin.com/company/graphplan/" target="_blank" style={{ textDecoration: "none" }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center'
            }}>
              <LinkedInIcon htmlColor="white" style={{ paddingRight: "3px", fontSize: "20px" }} />
              <p className="footer-social-links" style={{ fontSize: "10px" }}>LinkedIn</p>
            </Box>
          </Link>
        </Box>
      </div>
    </>
  );
}

export default Footer;
