import React from "react"
import {
  Box,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import Navbar from "../utils/Navbar";
import Footer from "../utils/Footer";
import LinkIcon from '@mui/icons-material/Link';
import "../../styles/home.css"

function TeamMemberCard({ name, text1, text2, text3, text4, link }: any) {
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
        <Link href={link} target="_blank" style={{ textDecoration: "none", color: "black" }}>
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
        </Link>
      </Box>
    </Grid>
  );
}

function BioCard({ text, link }: any) {
  return (
    <Grid item xs={12} md={6}>
      <Box
        sx={{
          backgroundColor: '#EAECF0',
          borderRadius: '10px',
          padding: '20px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          height: '50px',
        }}
      >
        <Link href={link} target="_blank" style={{ textDecoration: "none", color: "black" }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
          }}>
            <LinkIcon sx={{
              fontSize: '22px',
              marginRight: '10px'
            }}/>
            <Typography
              sx={{
                textAlign: 'left',
                fontFamily: 'Montserrat',
                fontSize: { xs: '13px', sm: '16px' },
                fontStyle: 'normal',
                fontWeight: 500,
              }}
            >
              {text}
            </Typography>
          </Box>
        </Link>
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
          backgroundColor: "#1C4C82",
          pl: "7%",
          pr: "7%",
          pb: "32px",
          pt: "32px",
          mb: "15px",
          mt: "100px",
          height: "50vh"
        }}
      >
        <Box sx={{
          display: 'flex',
          height: "100%",
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Bebas Neue",
              fontSize: { xs: "36px", sm: "56px" },
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              marginBottom: "4px",
            }}
          >
            <Box sx={{ color: "white", marginRight: "10px" }}>Our Mission</Box>
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Bebas Neue",
              fontSize: { xs: "30px", sm: "45px" },
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              marginBottom: "20px",
            }}
          >
            <Box sx={{ color: "#fff" }}>To elevate the landscape of architectural design</Box>
          </Typography>
        </Box>
      </Grid>
      <Grid
        spacing={5}
        sx={{
          backgroundColor: "#fff",
          pl: "7%",
          pr: "7%",
          pb: "32px",
          pt: "32px",
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
        </Typography>
        <Typography
          sx={{
            textAlign: "left",
            fontFamily: "Bebas Neue",
            fontSize: { xs: "36px", sm: "56px" },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            mr: "10px"
          }}
        >
          GPLAN
        </Typography>
        <Typography
          sx={{
            textAlign: "left",
            fontFamily: "Bebas Neue",
            color: "#828282",
            fontSize: { xs: "25px", sm: "40px" },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            marginBottom: "5px",
          }}
        >
          A Game-Changing Approach To Revolutionize Architectural Design
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
      {/* <Grid
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
      </Grid> */}
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
            <Box sx={{ color: "black" }}>Story</Box>
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
            {/* <Box sx={{ color: "black", marginRight: "4px" }}>Our</Box> */}
            <Box sx={{ color: "black" }}>Bio</Box>
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
          Prof. Krishnendra Shekhawat has completed his PhD in Mathematics from University of Geneva
          in the guidance of Prof. Daniel Coray. During his PhD, he has also worked with Prof. Pierre
          Pellegrino on an Architecture Design Project. After finishing the PhD work, he joined
          Department of Architecture (Design & amp; Computational Lab) at University of Lisbon to work as a
          Postdoctoral Fellow in the guidance of Prof. Jose Pinto Duarte. Presently, he is an Associate
          Professor at Department of Mathematics, BITS Pilani, India. Last year, he is appointed as
          Scientific Advisor to Digital Blue Foam, Singapore. He has published many research papers in
          the field of Computer-aided Architectural Design, mainly focusing on Automated Generation of
          Floorplan Layouts. A few of them are as follows:
        </Typography>
        <Grid container spacing={3}>
          <BioCard text="Raveena, Shekhawat, K. (2023) A Theory of L-shaped Floor-plans, Theoretical Computer
Science, 942: 57 – 92." link="" />
          <BioCard text="Bisht, S., Shekhawat, K., Upasani, N., Jain, RN., Tiwaskar, RJ., Hebbar, C. (2022)
Transforming an Adjacency Graph into Dimensioned Floorplan Layouts, Computer Graphics
Forum, 1-18." link="" />
          <BioCard text="Shekhawat, K., Upasani, N., Bisht, S., Jain, RN. (2021) A Tool for Computer-Generated
Dimensioned Floorplans based on given Adjacencies, Automation in Construction, Vol. 127." link="" />
          <BioCard text="Shekhawat K. (2017). A computer-generated plus-shaped arrangement and its architectural
applications. Journal of Computational Design and Engineering 4(4): 318-329." link="" />
        </Grid>
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
          <TeamMemberCard name="Dr. Krishnendra Shekhawat" text1="Founder @GPLAN" text2="Professor @BITS Pilani" text3="PhD Mathematics @University of Geneva" link="https://www.bits-pilani.ac.in/pilani/krishnendra-shekhawat/" />
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