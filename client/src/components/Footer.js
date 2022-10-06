import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

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
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
