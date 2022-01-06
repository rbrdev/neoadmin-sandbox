import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "bluejay-ui";
import { apps, contexts } from "@neoco/neoco-backoffice";
import theme from "utils/theme";
import { headers } from "pages";
import "languages/i18next";
import "./Global.css";

const { App } = apps;
const { AuthProvider } = contexts;

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <App
          headers={headers}
          options={{
            wysiwyg: {
              apiKey: "vrs1q275q482m5em1el96e57gfb55525ketzt1ulyk3z12fb",
            },
          }}
        />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
