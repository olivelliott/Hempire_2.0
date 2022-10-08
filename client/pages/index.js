import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
// import { setContext } from '@apollo/client/link/context'
import Head from 'next/head';

import Home from './Home'

import Header from '../components/Header'






export default function App() {
  const httpLink = createHttpLink({
    uri: "/graphql",
  });

  const client = new ApolloClient({
    // link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    // <ApolloProvider client={client}>
    //   <ThemeProvider theme={theme}>
    //     <Header />
    //       <Box sx={{ my: 4 }}>
    //         <Typography variant="h4" component="h1" gutterBottom>
    //           <Router>
    //             <Routes>
    //               <Route path="/" element={<Home />} />
    //               <Route path='/Merch' element={<Merch />} />
    //               <Route path='/Shows' element={<Shows />} />
    //               <Route path='/Booking' element={<Booking />} />
    //               <Route path='/About' element={<About />} />
    //             </Routes>
    //           </Router>
    //         </Typography>
    //       </Box>
    //     <Footer />
    //   </ThemeProvider>
    // </ApolloProvider>
    
    <ApolloProvider client={client}>
    <Head>
        <title>Hempire</title>
      </Head>
      <section>
        <Header />
        <Home/>
      </section>
      </ApolloProvider>
     
  );
}
