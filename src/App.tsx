import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PaymentOptionsPage from "./pages/PaymentOptionsPage";
import QRCodePage from "./pages/QRCodePage";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import PaymentFormPage from "./pages/PaymentFormPage";

const theme = createTheme({
  typography: {
    fontFamily: "Nunito, Arial, sans-serif",
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Routes>
            <Route path="/" element={<PaymentOptionsPage />} />
            <Route path="/qrcode" element={<QRCodePage />} />
            <Route path="/payment-form" element={<PaymentFormPage />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;