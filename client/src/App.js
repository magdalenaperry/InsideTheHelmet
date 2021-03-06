import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


// import pages and components to render at the specified routes
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Demographics from "./pages/Demographics"
import Form from "./components/Questionnaires/Form";
import Launch from "./pages/Launch"
import Admin from "./pages/Admin"

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          {/* <StoreProvider> */}
            <Header />
            <Routes>
              {/* create new route here and add element to render */}
              <Route path="/about" element={<About />} />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/users/:id" element={<Profile />} />
              <Route path="/me" element={<Profile />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/demographics" element={<Demographics/>} />
              <Route path="/questionnaires" element={<Form/>}/>
              <Route path="/launch" element={<Launch/>}/>
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            {/* add footer below routes */}
            <Footer />
          {/* </StoreProvider> */}
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
