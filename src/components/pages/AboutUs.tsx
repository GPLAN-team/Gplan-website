import React from "react"
import {
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import Navbar from "../utils/Navbar";
import Footer from "../utils/Footer";
import "../../styles/home.css"

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
            marginBottom: "20px",
          }}
        >
          <Grid container>
            <Box sx={{ color: "black", marginRight: "4px" }}>Mission</Box>
          </Grid>
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
          To elevate the landscape of architectural design.
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
        {/* bullets  */}
        {/* <Grid container spacing={2}>
          <Grid item xs={12} md={6.9} sx={{ height: '100%' }}>
            <Box
              sx={{
                borderRadius: '8px',
              }}
            >
              <svg width="100%" height="auto" viewBox="0 0 910 792">
                <rect width="100%" height="100%" fill="#DDDDDD" rx="8" ry="8" />
              </svg>
            </Box>
          </Grid>
          <Grid item xs={12} md={5.1}>
            <Grid
              container
              alignContent="space-between"
              style={{ height: '100%' }}
            >
              <Grid item xs={12}>
                <Box
                  sx={{
                    background: '#F2F7FC',
                    paddingTop: '20px',
                    paddingBottom: '20px',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    borderRadius: '8px',
                  }}
                >
                  <Typography
                    sx={{
                      color: "#4F4F4F",
                      textAlign: "left",
                      fontFamily: "Montserrat",
                      fontSize: { xs: "16px", sm: "20px" },
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "normal",
                    }}
                  >
                    Born in the desert sands of BITS Pilani, India, GPLAN is the brainchild of Prof. Krishnendra Shekhawat, an esteemed mathematics professor, and his students.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Grid sx={{ height: '100%' }} container spacing={2} >
                  <Grid item xs={6}>
                    <Box
                      sx={{
                        background: '#DDDDDD',
                        paddingTop: '5px',
                        paddingBottom: '5px',
                        height: '200px',
                        mt: { xs: '20px', sm: '0px' },
                        mb: { xs: '0px', sm: '5px' },
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '8px',
                      }}
                    >
                      <Typography
                        sx={{
                          color: "black",
                          textAlign: "center",
                          fontFamily: "Inter",
                          fontSize: { xs: "16px", sm: "20px" },
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "normal",
                        }}
                      >
                        Our Team
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                      sx={{
                        background: '#DDDDDD',
                        paddingTop: '5px',
                        paddingBottom: '5px',
                        height: '200px',
                        mt: { xs: '20px', sm: '0px' },
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '8px',
                      }}
                    >
                      <Typography
                        sx={{
                          color: "black",
                          textAlign: "center",
                          fontFamily: "Inter",
                          fontSize: { xs: "16px", sm: "20px" },
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "normal",
                        }}
                      >
                        What we are Up to
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid> */}
      </Grid>
      <Grid
        spacing={5}
        sx={{
          backgroundColor: "#fff",
          pl: "7%",
          pr: "7%",
          pb: "32px",
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
            marginBottom: "20px",
          }}
        >
          <Grid container>
            <Box sx={{ color: "black", marginRight: "4px" }}>Our</Box>
            <Box sx={{ color: { xs: "#1C4C82", sm: "black" } }}>Team</Box>
          </Grid>
        </Typography>
        <Box sx={{
          display: "flex",
        }}>
          <Box>
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
              Dr. Krishnendra Shekhawat
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
              Founder @GPLAN
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
              Professor @BITS Pilani
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
              PhD Mathematics @University of Geneva
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Footer />
    </>
  )
}