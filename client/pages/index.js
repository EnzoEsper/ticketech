import React from "react";
import axios from "axios";
import { buildClient } from "../api/buildClient";

const LandingPage = ({ currentUser }) => {
  return currentUser ? <h1>You are signed in</h1> : <h1>You are NOT signed id</h1>;
};

LandingPage.getInitialProps = async (context) => {
  console.log("LANDING PAGE");
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");

  return data;
};

export default LandingPage;
