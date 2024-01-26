import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import algoPlaceH from '../../public/algoPlaceH.png'
import algoPlaceHM from '../../public/algoPlaceHM.png'
import algoBG from '../../public/algoBG.png'

export default function DemoVideo() {
  return (
    <>
      <Grid
        spacing={5}
        sx={{
          backgroundColor: '#FFFFFF',
          pl: '5%',
          pr: '5%',
          pb: '32px',
          mb: '36px',
          mt: '36px',
        }}
      >
        <Box
          sx={{
            borderRadius: { xs: '24px', sm: '36px' },
            backgroundSize: "cover",
            backgroundImage: `url(${algoBG})`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            overflow: 'hidden',
            mt: '90px',
            paddingTop: { xs: '20px', sm: '45px' },
            paddingBottom: { xs: '20px', sm: '45px' },
            paddingLeft: { xs: '0', sm: '45px' },
            paddingRight: { xs: '0', sm: '45px' },
          }}
        >
          <Typography
            sx={{
              color: 'black',
              textAlign: 'left',
              fontFamily: 'Bebas Neue',
              fontSize: { xs: '32px', sm: '80px' },
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              mb: { xs: '55px', sm: '40px' },
            }}
          >
            Algorithm in Action
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                height: '500px',
                display: { xs: 'none', sm: 'block' },
              }}
            >
              <img src={algoPlaceH} height='100%' width='100%' alt='placeHolderDesktop' />
            </Box>
            <Box
              sx={{
                height: '400px',
                display: { xs: 'block', sm: 'none' },
              }}
            >
              <img src={algoPlaceHM} height='100%' width='100%' alt='placeHolderMobile' />
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  )
}
