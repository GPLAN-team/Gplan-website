import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import loginBG from "../public/loginBG.png";
import googleLogo from "../public/googleLogo.png";
import fbLogo from "../public/fbLogo.png";

function SignUpPage() {
  const [name, setName] = useState("");
  const [pswd, setPswd] = useState("");
  const [confirmPswd, setConfirmPswd] = useState("");
  const [isVisible1, setvisibility1] = useState(false);
  const [isVisible2, setvisibility2] = useState(false);

  console.log(name);
  console.log(pswd);
  console.log(confirmPswd);

  const handleChangeVisibility1 = () => {
    setvisibility1(!isVisible1);
  };

  const handleChangeVisibility2 = () => {
    setvisibility2(!isVisible2);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
          background: `url(${loginBG}) , lightgray 50% / cover no-repeat`,
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            padding: "44px 44px 49.5px 44px",
            flexDirection: "column",
            alignItems: "center",
            gap: "33px",
            borderRadius: "8px",
            background: "#FFF",
            boxShadow: "0px 4.4px 11px 0px rgba(138, 142, 148, 0.05)",
          }}
        >
          <Box sx={{ height: "91.204px", width: "105.313px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="96"
              height="110"
              viewBox="0 0 96 110"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M48.0009 2L93.6018 28.3283V80.9839L48.0009 107.313L2.39819 80.9839V28.3283L48.0009 2Z"
                stroke="#1C4C82"
                stroke-width="3.59941"
                stroke-miterlimit="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.5623 69.9565L65.9584 96.2337"
                stroke="#1C4C82"
                stroke-width="3.78886"
                stroke-miterlimit="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M74.6055 69.9565L29.2772 96.2336"
                stroke="#1C4C82"
                stroke-width="3.81813"
                stroke-miterlimit="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M47.9983 2V54.6563M47.9983 54.6563L2.94873 80.8096M47.9983 54.6563L93.6012 80.6264"
                stroke="#1C4C82"
                stroke-width="3.59941"
                stroke-miterlimit="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.2759 18.6323L21.3536 50.033L21.3345 69.6664"
                stroke="#1C4C82"
                stroke-width="3.78886"
                stroke-miterlimit="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M48.2749 3.3501L74.6075 69.9564"
                stroke="#1C4C82"
                stroke-width="3.78886"
                stroke-miterlimit="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5.5px",
            }}
          >
            <Typography
              sx={{
                display: "inline",
                color: "#282828",
                fontFeatureSettings: `'clig' off, 'liga' off`,
                fontFamily: "Poppins",
                fontSize: "26.4px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "39.6px" /* 150% */,
              }}
            >
              Start Your Journey With
              <Typography
                component="span"
                sx={{
                  color: "#1C4C82",
                  fontFeatureSettings: `'clig' off, 'liga' off`,
                  fontFamily: "Poppins",
                  fontSize: "26.4px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "39.6px",
                }}
              >
                {" "}
                GPlan
              </Typography>
            </Typography>
            <Typography
              sx={{
                color: "#949CA9",
                /* SubText */
                fontFamily: "Poppins",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "24px" /* 150% */,
              }}
            >
              Lets Design Something Great
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "22px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "506px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "5.5px",
              }}
            >
              <Typography
                sx={{
                  alignSelf: "stretch",
                  color: "#282828",

                  /* SubText */
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "24px",
                }}
              >
                Username
              </Typography>
              <TextField
                fullWidth
                size="small"
                required
                InputLabelProps={{
                  shrink: false,
                  style: {
                    color: "#949CA9",
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "24px",
                  },
                }}
                label={name===""?"Enter your username":""}
                id="fullWidth"
                value={name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setName(event.target.value);
                }}
              />
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "flex-start", gap: "22px" }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "242px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "5.5px",
                }}
              >
                <Typography
                  sx={{
                    color: "#282828",

                    /* SubText */
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "24px",
                  }}
                >
                  Password
                </Typography>
                <TextField
                  fullWidth
                  required
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {isVisible1 ? (
                          <VisibilityOffOutlinedIcon
                            onClick={handleChangeVisibility1}
                            sx={{
                              "&:hover": {
                                cursor: "pointer",
                              },
                            }}
                          />
                        ) : (
                          <RemoveRedEyeOutlinedIcon
                            onClick={handleChangeVisibility1}
                            sx={{
                              "&:hover": {
                                cursor: "pointer",
                              },
                            }}
                          />
                        )}
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    shrink: false,
                    style: {
                      color: "#949CA9",
                      fontFamily: "Poppins",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "24px",
                    },
                  }}
                  type={isVisible1 ? "text" : "password"}
                  label={pswd === "" ? `${"Enter your password"}` : ""}
                  name="password"
                  value={pswd}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setPswd(event.target.value);
                  }}
                  sx={{"input::-ms-reveal, input::-ms-clear":{
                      display: 'none'
                    }}}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "242px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "5.5px",
                }}
              >
                <Typography
                  sx={{
                    color: "#282828",

                    /* SubText */
                    // fontFamily: "Poppins",
                    // fontSize: "16px",
                    // fontStyle: "normal",
                    // fontWeight: 400,
                    // lineHeight: "24px",
                  }}
                >
                  Confirm Password
                </Typography>
                <TextField
                  fullWidth
                  required
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {isVisible2 ? (
                          <VisibilityOffOutlinedIcon
                            onClick={handleChangeVisibility2}
                            sx={{
                              "&:hover": {
                                cursor: "pointer",
                              },
                            }}
                          />
                        ) : (
                          <RemoveRedEyeOutlinedIcon
                            onClick={handleChangeVisibility2}
                            sx={{
                              "&:hover": {
                                cursor: "pointer",
                              },
                            }}
                          />
                        )}
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    shrink: false,
                    style: {
                      color: "#949CA9",
                      fontFamily: "Poppins",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "24px",
                    },
                  }}
                  type={isVisible2 ? "text" : "password"}
                  label={confirmPswd === "" ? `${"Re-Enter your password"}` : ""}
                  name="confirm-password"
                  value={confirmPswd}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setConfirmPswd(event.target.value);
                  }}
                  sx={{"input::-ms-reveal, input::-ms-clear":{
                    display: 'none'
                  }}}
                />
              </Box>
            </Box>
            <Button
              fullWidth
              size="large"
              variant="contained"
              sx={{
                backgroundColor: "#1C4C82",
              }} /* sx={{textTransform: "lowercase !important"}} */
            >
              <Typography
                sx={{
                  color: "#FFF",
                  fontFamily: "Poppins",
                  fontSize: "17.6px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "26.4px",
                }}
              >
                Sign Up
              </Typography>
            </Button>
            {/*
            <Box
              sx={{
                width: "506px",
                display: "flex",
                alignItems: "flex-start",
                gap: "22px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "242px",
                  padding: "16.5px",
                  alignItems: "center",
                  gap: "11px",
                  borderRadius: "8px",
                  border: "1.1px solid #E8E9EA",
                  background: "#FFF",
                }}
              >
                <img src={`${googleLogo}`} alt="" height="22px" width="22px" />
                <Typography
                  sx={{
                    flex: "1 0 0",
                    color: "#282828",
                    fontFeatureSettings: `'clig' off, 'liga' off`,
                   
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "22px",
                  }}
                >
                  Sign Up with Google
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "242px",
                  padding: "16.5px",
                  alignItems: "center",
                  gap: "11px",
                  borderRadius: "8px",
                  border: "1.1px solid #E8E9EA",
                  background: "#FFF",
                }}
              >
                <img src={`${fbLogo}`} alt="" height="22px" width="22px" />
                <Typography
                  sx={{
                    flex: "1 0 0",
                    color: "#282828",
                    fontFeatureSettings: `'clig' off, 'liga' off`,
                  
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "22px",
                  }}
                >
                  Sign Up with Facebook
                </Typography>
              </Box>
                </Box> */}
          </Box>
          <Typography
            sx={{
              color: "#282828",
              /* SubText */
              fontFamily: "Poppins",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "24px",
            }}
          >
            {" "}
            Already a member?{" "}
            <Link to="/login">
              <Typography
                component="span"
                sx={{
                  color: "#009EF7",

                  /* SubText */
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px",
                }}
              >
                Login
              </Typography>
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default SignUpPage;
