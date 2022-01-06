const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "styled-components": "node_modules/styled-components",
    react: "node_modules/react",
    "react-dom": "node_modules/react-dom",
    "react-router": "node_modules/react-router",
    "react-router-dom": "node_modules/react-router-dom",
    "neoco-backoffice": "node_modules/@neoco/neoco-backoffice",
    "neoco-form": "node_modules/@neoco/neoco-form",
    i18next: "node_modules/i18next",
    "react-i18next": "node_modules/react-i18next",
    "bluejay-ui": "node_modules/bluejay-ui",
    "@tinymce/tinymce-react/lib/es2015/":
      "node_modules/@tinymce/tinymce-react/lib/es2015/",
  })(config);

  return config;
};
