import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
// import { setContext } from '@apollo/client/link/context'

import Home from "./pages/Home";
import Header from './components/Header';
import Footer from './components/Footer'

import { theme } from "./theme";
import { ThemeProvider } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"COPYRIGHT © "}
      <Link
        color="inherit"
        href="https://www.github.com/olivelliott"
        target="_blank"
        underline="none"
      >
        OLIVE
      </Link>{" "}
      {new Date().getFullYear()}
      {""}
    </Typography>
  );
}

function App() {
  const httpLink = createHttpLink({
    uri: "/graphql",
  });

  const client = new ApolloClient({
    // link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Header />
          <Box sx={{ my: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              <Router>
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
              </Router>
            </Typography>
            <Copyright />
          </Box>
        <Footer />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
