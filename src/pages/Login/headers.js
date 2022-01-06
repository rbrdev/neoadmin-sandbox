import React from "react";
import { pages } from "@neoco/neoco-backoffice";
import { loginRequest } from "utils/requests";

const { Login } = pages;

const headers = {
  type: "Page",
  options: {
    name: "Login",
    route: {
      path: "/",
      unAuth: true,
      auth: false,
      exact: true,
      component: (props) => <Login {...props} onSubmit={loginRequest} />,
    },
  },
};

export default headers;
