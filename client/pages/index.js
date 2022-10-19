import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
// import { setContext } from '@apollo/client/link/context'
import Head from "next/head";

import Home from "./Home";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function App() {
  const httpLink = createHttpLink({
    uri: "/graphql",
  });

  const client = new ApolloClient({
    // link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client} data-theme='halloween'>
      <Head>
        <title>Hempire</title>
      </Head>

      <header>
        <Header />
      </header>

      <section>
        <Home />
        <button className="btn">button</button>
      </section>
        <Footer />
    </ApolloProvider>
  );
}
