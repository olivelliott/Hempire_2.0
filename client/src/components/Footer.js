import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Box,
  Typography,
  Container,
  Link,
  Button
} from '@mui/material'

import InstagramIcon from '@mui/icons-material/Instagram';

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
        OLIVE
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
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
          <Button href={`https://www.instagram.com/hempirerocks`} target='_blank'>
            <InstagramIcon/>
          </Button>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
