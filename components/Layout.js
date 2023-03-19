import { AppBar, Box, Container,createTheme,CssBaseline, ThemeProvider, Toolbar, Typography} from '@mui/material'
import Head from 'next/head'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import classes from '@/utils/classes';

function Layout({children ,title ,description}) {
    const theme = createTheme({
        components: {
          MuiLink: {
            defaultProps: {
              underline: 'hover',
            },
          },
        },
        typography: {
          h1: {
            fontSize: '1.6rem',
            fontWeight: 400,
            margin: '1rem 0',
          },
          h2: {
            fontSize: '1.4rem',
            fontWeight: 400,
            margin: '1rem 0',
          },
        },
        palette: {
          mode: 'dark',
          primary: {
            main: '#f0c000',
          },
          secondary: {
            main: '#208080',
          },
        },
      });


  return (
   <>
   <Head>
    <title>{title ? `${title} - E-coomerce Amazon ` : "E-coomerce Amazon"}</title>
    {description && <meta name='description' content={description}></meta>}
   </Head>
 <ThemeProvider theme={theme}>
 <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" position='static' sx={classes.appbar}>
        <Toolbar sx={classes.toolbar}>
            
            <Link href="/">
            <Typography sx={classes.brand}>amazon</Typography>
            </Link>
        </Toolbar>
        
      </AppBar>
      
      </Box>
 </ThemeProvider>
    <Container component="main" sx={classes.main}>
        {children}
    </Container>
    <Box component="footer" sx={classes.footer}>
    <Typography>All rights reserved. E-coomerce Amazona.</Typography>
    </Box>
   </>
  )
}

export default Layout