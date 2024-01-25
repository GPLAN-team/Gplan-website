import React from 'react'
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react'
import { Box, Toolbar, IconButton, SwipeableDrawer } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import GplanIconWhite from '../icons/GplanIconWhite'
import GplanIconBlue from '../icons/GplanIconBlue'
import { Link } from 'react-router-dom'

function Navbar() {
  const [toggler, setToggler] = useState(false)

  //handle menu click
  const handleDrawerToggle = () => {
    setToggler(!toggler)
  }

  //menu drawer
  const drawer = (
    <div className='DrawerOuterDiv'>
      <div className='DrawerNav'>
        <div className='LogoBox'>
          <GplanIconWhite />
          <p className='DrawerLogoText'>GPLAN</p>
        </div>
        <IconButton
          aria-label='close drawer'
          size='large'
          sx={{ display: { sm: 'none' } }}
          onClick={handleDrawerToggle}
        >
          <CloseIcon sx={{ color: 'white' }}></CloseIcon>
        </IconButton>
      </div>

      <div style={{ paddingBottom: "24px" }}>
        {/* <p className="DrawerButtons">Home</p>
        <a
          className="DrawerButtons"
          href="#features-section"
          onClick={handleDrawerToggle}
        >
          Features
        </a>
        <p className="DrawerButtons">Quickstart Guides</p>
        <p className="DrawerButtons">About Us</p>

        <a
          className='DrawerButtons'
          href='#footer'
          onClick={handleDrawerToggle}
        >
          Contact Us
        </a> */}
        <Link to='/' className='linkNav'>
          <p className='DrawerButtons'>Home</p>
        </Link>
        <HashLink className="DrawerButtons" smooth to="/#features-section" onClick={handleDrawerToggle}>
          Features
        </HashLink>
        <Link to='/guide' className='linkNav'>
          <p className='DrawerButtons'>Quickstart Guides</p>
        </Link>
        <Link to='/about-us' className='linkNav'>
          <p className='DrawerButtons'>About Us</p>
        </Link>
        <HashLink className='DrawerButtons' smooth to="#footer" onClick={handleDrawerToggle}>
          Contact Us
        </HashLink>
      </div>
    </div>
  )
  // const contactDivRef = useRef<HTMLDivElement>(null);
  // const handleContactUs = () => {
  //   contactDivRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  // };
  return (
    <>
      <div>
        <nav className='NavMain'>
          <Toolbar className='Toolbar' sx={{ margin: { sm: '0px 24px' } }}>
            <Link to='/' className='linkNav'>
              <div className='LogoBox'>
                <GplanIconBlue />
                <p className='NavLogoText'>GPLAN</p>
              </div>
            </Link>
            <Box
              className='NavButtonBox'
              sx={{
                display: { xs: 'none', sm: 'flex' },
              }}
            >
              <Link to='/' className='linkNav'>
                <p className='NavButtons'>Home</p>
              </Link>
              <HashLink className="NavButtons" smooth to="/#features-section">
                Features
              </HashLink>
              <Link to='/guide' className='linkNav'>
                <p className='NavButtons'>Quickstart Guides</p>
              </Link>
              <Link to='/about-us' className='linkNav'>
                <p className='NavButtons'>About Us</p>
              </Link>
              <HashLink className='NavButtons' smooth to="#footer">
                Contact Us
              </HashLink>
              <Link to='/login' className='linkNav'>
                <button className='NavLoginButton'>Login</button>
              </Link>
            </Box>
            <IconButton
              aria-label='open drawer'
              size='large'
              sx={{ display: { sm: 'none' } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon sx={{ color: '#1C4C82' }}></MenuIcon>
            </IconButton>
          </Toolbar>
        </nav>
        <SwipeableDrawer
          anchor='top'
          open={toggler}
          onOpen={handleDrawerToggle}
          onClose={handleDrawerToggle}
        >
          {drawer}
        </SwipeableDrawer>
      </div>
    </>
  )
}

export default Navbar
