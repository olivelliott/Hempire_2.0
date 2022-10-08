import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Box,
  Typography,
  Container,
  Link,
  Button,
  IconButton
} from '@mui/material'

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import HeadphonesIcon from '@mui/icons-material/Headphones';

function Copyright() {
  return (
    <Typography variant="body2" color="contrast">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://www.github.com/olivelliott"
        target="_blank"
        underline="none"
      >
        OE
      </Link>{" "}
      {new Date().getFullYear()}
      {""}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
      textAlign="center"
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: '#232b2b'
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1" color="secondary">
            HEMPIRE
          </Typography>
          <IconButton href={`https://www.instagram.com/hempirerocks`} target='_blank' color="primary">
            <InstagramIcon sx={{ "&:hover": { color: "#ff7400" } }}/>
          </IconButton>
          <IconButton href={`https://www.facebook.com/hempire`} color="primary">
            <FacebookIcon sx={{ "&:hover": { color: "#ff7400" } }}/>
          </IconButton>
          <IconButton href={`https://hempirerocks.bandcamp.com/`} target='_blank' color="primary">
            <HeadphonesIcon sx={{ "&:hover": { color: "#ff7400" } }}/>
          </IconButton>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
