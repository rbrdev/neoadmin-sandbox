const primary = "#FC025A";
const secondary = "#014161";
const _default = "#014161";
const yellow = "#FAFF00";
const white = "#ffffff";

const black = "#242424";
const darkGray = "#4A4A4A";
const gray = "#5A5A5A";
const grayAlpha = "#5A5A5A66";
const lightGray = "#BFBFBF";
const offWhite = "#F2F2F2";

const darkBlue = "#002145";
const neonBlue = "#00D1FF";
const lightBlue = "#D8EBFF";
const blueGradient =
  "linear-gradient(180deg, #BADBFF 0%, rgba(255, 255, 255, 0) 100%);";

const fontFamily = "'Assistant', sans-serif";
const borderRadius = "0px";
const padding = "10px 16px";
const fontSize = "14px";
const width = "15px";

const buttonsColors = {
  primary: {
    background: primary,
    text: white,
  },
  secondary: {
    background: white,
    text: primary,
  },
  default: {
    background: primary,
    text: secondary,
  },
};

const paginationColors = {
  active: {
    ...buttonsColors.primary,
  },
  default: {
    background: white,
    text: _default,
  },
  arrows: {
    fillColor: _default,
  },
};

const colors = {
  primary,
  secondary,
  default: _default,
  yellow,
  black,
  darkGray,
  gray,
  grayAlpha,
  lightGray,
  offWhite,
  white,
  darkBlue,
  neonBlue,
  lightBlue,
  blueGradient,
};

const theme = {
  fontFamily,
  borderRadius,
  ...colors,
  button: {
    fontFamily,
    borderRadius,
    padding,
    ...buttonsColors,
  },
  pagination: {
    fontFamily,
    borderRadius,
    borderColor: lightGray,
    borderWidth: "1px",
    padding: "8px",
    ...paginationColors,
    mobile: {
      borderRadius,
      borderColor: _default,
      borderWidth: "1px",
      padding: "8px 13px",
    },
  },
  link: {
    fontFamily,
    fontSize,
    padding,
    ...buttonsColors,
    default: {
      text: _default,
    },
  },
  input: {
    fontFamily,
    fontSize: "14px",
    placeholderFontSize: "14px",
    borderFocusColor: primary,
    borderRadius,
    padding: "10px 0px 10px 10px",
    active: {
      borderColor: lightGray,
      backgroundColor: "transparent",
      color: darkGray,
      placeholderColor: lightGray,
      borderWidth: "1px",
    },
    disabled: {
      borderColor: lightGray,
      backgroundColor: "transparent",
      color: darkGray,
      placeholderColor: lightGray,
      borderWidth: "1px",
    },
    checkbox: {
      width,
      borderWidth: "2px",
      borderRadius: "0px",
    },
    radio: {
      width,
    },
  },
  label: {
    fontFamily,
    color: secondary,
    fontSize,
  },
  card: {
    undefined: {
      background: white,
    },
    borderRadius,
    padding: "10px 15px",
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
  },
  modal: {
    fontFamily,
    borderRadius,
    padding: "10px 15px",
    maxWidth: "500px",
    blur: {
      backgroundColor: secondary,
    },
    backgroundColor: white,
    backdropFilter: "blur(10px)",
    opacity: "0.6",
  },
};

export default theme;
