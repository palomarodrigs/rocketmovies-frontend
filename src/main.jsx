import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";

import theme from "./styles/theme";

import { MoviePreview } from "./pages/MoviePreview";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SignUp />
    </ThemeProvider>
  </React.StrictMode>
);
