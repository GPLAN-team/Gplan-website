import React from "react";
import { Box, SvgIcon, Typography } from "@mui/material";
import Navbar from "./Navbar";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import HorizontalScroller from "./HorizontalScroller";
import Footer from "./Footer";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import AboutUs from "../pages/AboutUs";
import Policy from "./Policy";
import AppPolicy from "./AppPolicy";
import Terms from "./Terms";

function Home() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/app-policy" element={<AppPolicy />} />
        </Routes>
      </Router>
      {/* <Navbar/>
    <Section1/>
    <Box sx={{display:'flex', justifyContent:"center", my:'20px'}}><Typography variant="h3">Features</Typography></Box>
    
    <Section2/>
    <Section3/>    
    <Section3/>
    <Box sx={{display:'flex', justifyContent:"left" , marginLeft:'32px', marginTop:'32px'}}><Typography variant="h3">Workflow</Typography></Box>
    <Section4/>
    <Box sx={{display:'flex', justifyContent:"left", margin:'32px'}}><Typography variant="h3">Quick Start Guides</Typography></Box>
    <HorizontalScroller/>
    <Footer/> */}
      {/* 
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <ColorPotIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <LeftArrowIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <LeftCurvedArrowIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <MagnetIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <MenuIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <PenIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <MinusIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <PlusIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <RightArrowIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <RightCurvedArrowIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <ScaleIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <ScalePencilIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <SelectBoxIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <TagIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <TextBoxIcon color={""} />
      </TestButton>
      <TestButton
        func={(msg : String) => {
          alert(msg);
        }}
      >
        <UpLeftCursorIcon color={""} />
      </TestButton>
      <Dropmenu />
       */}
    </>
  );
}

export default Home;
