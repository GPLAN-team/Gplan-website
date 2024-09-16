import {
  Box,
  InputAdornment,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import React, { useState } from "react";
import GplanIconWhite from "../icons/GplanIconWhite";
import RightArrowBlueBG from "../../public/right-arrow-blue-bg.svg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import emailjs from "@emailjs/browser";
import { PinDrop, WhatsApp, YouTube } from "@mui/icons-material";
//import Link as RouterLink
import { Link as RouterLink } from "react-router-dom";

interface Popup1Props {
  textToPop: string;
}

const Popup1: React.FC<Popup1Props> = ({ textToPop }) => {
  return (
    <Box
      id="popup"
      sx={{
        position: "fixed",
        background: "rgba(0, 0, 0, 0.8)",
        top: 20,
        right: 20,
        padding: "10px",
        borderRadius: "10px",
        transition: "all 0.5s ease-in-out",
        color: "white",
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
        {textToPop}
      </Typography>
    </Box>
  );
};

function Footer() {
  const [Email, setEmail] = useState("");
  const handleEmailChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(event.target.value);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.currentTarget.Email.value === "") {
      console.log("Email is empty");
      return;
    }
    const email = e.currentTarget.Email.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.match(emailRegex)) {
      console.log("Invalid Email Format");
      setShowEmailPopup(true);
      setTimeout(() => setShowEmailPopup(false), 2000);
      return;
    }
    emailjs
      .sendForm("service_33u9zzp", "demo", e.currentTarget, "ZmHT-LEvyKBSsbp-t")
      .then(
        (result) => {
          console.log(result.text);
          setEmail("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [showPopup, setShowPopup] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);

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
                    <button
                      type="submit"
                      style={{
                        border: "none",
                        background: "none",
                        margin: 0,
                        padding: 0,
                        paddingTop: "4px",
                        cursor: "pointer",
                      }}
                    >
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
        {showEmailPopup && <Popup1 textToPop="Invalid Email Format" />}
        <Box
          className="footer-bottom-social-link-div"
          sx={{ display: { xs: "none", sm: "flex", marginTop: "15px" } }}
        >
          {showPopup && <Popup1 textToPop="Copied to Clipboard" />}
          {/* <Link href="#" style={{ textDecoration: "none" }}>
            <p className="footer-social-links">Instagram</p>
          </Link> */}
          {/* <Link href="#" style={{ textDecoration: "none" }}>
            <p className="footer-social-links">Youtube</p>
          </Link> */}
          <div onClick={() => handleCopy("+91 94688 39182")}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <LocalPhoneIcon
                htmlColor="white"
                style={{ paddingRight: "3px", fontSize: "20px" }}
              />
              <p className="footer-social-links">+91 94688 39182</p>
            </Box>
          </div>
          <div onClick={() => handleCopy("support@gplan.in")}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <MailIcon
                htmlColor="white"
                style={{ paddingRight: "3px", fontSize: "20px" }}
              />
              <p className="footer-social-links">support@gplan.in</p>
            </Box>
          </div>
          <Link
            href="https://www.youtube.com/@GPLAN2024/videos"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <YouTube
                htmlColor="white"
                style={{ paddingRight: "3px", fontSize: "20px" }}
              />
              <p className="footer-social-links">Youtube</p>
            </Box>
          </Link>
          <Link
            href="https://www.linkedin.com/company/graphplan/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <LinkedInIcon
                htmlColor="white"
                style={{ paddingRight: "3px", fontSize: "20px" }}
              />
              <p className="footer-social-links">LinkedIn</p>
            </Box>
          </Link>
          <Link
            href="https://whatsapp.com/channel/0029VajTRLkEQIam6IHBek2W/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <WhatsApp
                htmlColor="white"
                style={{ paddingRight: "3px", fontSize: "20px" }}
              />
              <p className="footer-social-links">WhatsApp</p>
            </Box>
          </Link>
          <Link href="" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <PinDrop
                htmlColor="white"
                style={{ paddingRight: "3px", fontSize: "20px" }}
              />
              <p className="footer-social-links">
                Gplan Services Private Limited, P33 Shriram Colony, Pilani,
                Jhunjhunu - 333031, Rajasthan
              </p>
            </Box>
          </Link>
        </Box>
        <Box
          className="footer-bottom-social-link-div"
          sx={{
            display: {
              xs: "none",
              sm: "flex",
              margin: "0",
              marginBottom: "15px",
            },
          }}
        >
          <RouterLink to="/policy" style={{ textDecoration: "none" }}>
            <p className="footer-social-links">Privacy Policy </p>
          </RouterLink>
          <RouterLink to="/terms" style={{ textDecoration: "none" }}>
            <p className="footer-social-links">Terms and Conditions</p>
          </RouterLink>
        </Box>

        <Box
          className="footer-bottom-social-link-div"
          sx={{ display: { xs: "flex", sm: "none" } }}
        >
          <div
            onClick={async () => {
              navigator.clipboard.writeText("+91 94688 39182");
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <LocalPhoneIcon
                htmlColor="white"
                style={{ paddingRight: "3px", fontSize: "20px" }}
              />
              <p className="footer-social-links" style={{ fontSize: "10px" }}>
                +91 94688 39182
              </p>
            </Box>
          </div>
          <div
            onClick={async () => {
              navigator.clipboard.writeText("support@gplan.in");
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <MailIcon
                htmlColor="white"
                style={{ paddingRight: "3px", fontSize: "20px" }}
              />
              <p className="footer-social-links" style={{ fontSize: "10px" }}>
                support@gplan.in
              </p>
            </Box>
          </div>
          <Link
            href="https://www.linkedin.com/company/graphplan/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <LinkedInIcon
                htmlColor="white"
                style={{ paddingRight: "3px", fontSize: "20px" }}
              />
              <p className="footer-social-links" style={{ fontSize: "10px" }}>
                LinkedIn
              </p>
            </Box>
          </Link>
        </Box>
      </div>
    </>
  );
}

export default Footer;
