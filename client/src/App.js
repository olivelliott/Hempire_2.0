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
import Merch from './pages/Merch';
import Shows from "./pages/Shows";
import Booking from './pages/Booking';
import About from './pages/About'

import Header from './components/Header';
import Footer from './components/Footer';

import { theme } from "./theme";
import { ThemeProvider } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";


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
                  <Route path='/Merch' element={<Merch />} />
                  <Route path='/Shows' element={<Shows />} />
                  <Route path='/Booking' element={<Booking />} />
                  <Route path='/About' element={<About />} />
                </Routes>
              </Router>
            </Typography>
          </Box>
        <Footer />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
