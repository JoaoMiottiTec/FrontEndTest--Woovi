import React from "react";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const CustomButton = styled(Button)({
  backgroundColor: "#133A6F",
  color: "#FFFFFF",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "8px",
  marginBottom: "16px",
  padding: "8px 16px",
  "&:hover": {
    backgroundColor: "#133A6F",
  },
});

const QRCodeContainer = styled(Box)({
  border: "2px solid #03D69D",
  borderRadius: "10px",
  padding: "4px",
  display: "inline-block",
  marginBottom: "8px",
});

const SecureText = styled(Typography)({
  color: '#B2B2B2', 
  fontSize: '14px', 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px', 
});

const DropdownMenu = styled(Box)({
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    textDecoration: "underline",
  },
});

const QRCodePage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCopyQRCode = () => {

    navigate('/payment-form');
  };

  const handleTitleClick = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        padding: isMobile ? "8px" : "16px",
        maxWidth: "400px",
        margin: "auto",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: isMobile ? "none" : "0 2px 4px rgba(0,0,0,0.1)",
        fontFamily: "Nunito, Arial, sans-serif",
        textAlign: "center",
      }}
    >
   <Box
        sx={{ textAlign: "center", marginTop: "40px", marginBottom: "24px" }}
        onClick={handleTitleClick}
        style={{ cursor: "pointer" }}
      >
        <img
          src="./images/logo-placeholder.svg"
          alt="Logo"
          width={isMobile ? "100" : "120"}
        />
      </Box>
      <Box sx={{ margin: "auto", maxWidth: "300px" }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ color: "#4D4D4D", fontWeight: 800 }}
        >
          João, pague a entrada de R$ 15.300,00 pelo Pix
        </Typography>
      </Box>
      <QRCodeContainer>
        <img
          src={"./images/qr-code.png"}
          alt="QR Code"
          style={{ width: "100%", height: "auto" }}
        />
      </QRCodeContainer>
      <CustomButton fullWidth onClick={handleCopyQRCode}>
        Clique para copiar QR CODE
        <img
          src={"./images/copy.svg"}
          alt="Copy Icon"
          style={{ marginLeft: "8px" }}
        />
      </CustomButton>
      <Box sx={{ textAlign: "center", marginBottom: "16px" }}>
        <Typography variant="body2" sx={{ color: "#B2B2B2", fontSize: "16px" }}>
          Prazo de pagamento:
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#4D4D4D", fontSize: "16px", fontWeight: 800 }}
        >
          15/12/2021 - 08:17
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="body1" sx={{ color: "#4D4D4D" }}>
            1ª entrada no Pix
          </Typography>
          <Typography variant="body1" sx={{ color: "#4D4D4D" }}>
            2ª no cartão
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: "#4D4D4D", fontWeight: 800 }}
          >
            R$ 15.300,00
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#4D4D4D", fontWeight: 800 }}
          >
            R$ 15.300,00
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ marginY: "16px" }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "8px",
          marginBottom: "8px",
          color: "#4D4D4D",
          fontSize: "16px",
        }}
      >
        <Typography variant="body2" sx={{ color: "#4D4D4D" }}>
          CET: 0,5%
        </Typography>
        <Typography variant="body2" sx={{ color: "#4D4D4D", fontWeight: 800 }}>
          Total: R$ 30.600,00
        </Typography>
      </Box>
      <Divider sx={{ marginY: "16px" }} />
      <DropdownMenu onClick={toggleDropdown}>
        <Typography variant="body2" sx={{ color: "#4D4D4D", fontWeight: 800 }}>
          Como funciona?
        </Typography>
      </DropdownMenu>
      {isOpen && (
        <Box sx={{ marginTop: "8px" }}>
          <Typography
            variant="body2"
            sx={{ color: "#B2B2B2", fontSize: "16px" }}
          >
            Opção 1: Informação fictícia
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#B2B2B2", fontSize: "16px" }}
          >
            Opção 2: Informação fictícia
          </Typography>
        </Box>
      )}
      <Divider sx={{ marginY: "16px" }} />
      <Box sx={{ textAlign: "center", marginTop: "16px" }}>
        <Typography variant="body2" sx={{ color: "#B2B2B2", fontSize: "14px" }}>
          Identificador
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#4D4D4D", fontSize: "14px", fontWeight: 800 }}
        >
          2c1b951f356c4680b13ba1c9fc889c47
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center", marginTop: "16px" }}>
        <SecureText variant="body2">
          <img
            src={"./images/shield.svg"}
            alt="Check Icon"
            width="16"
            height="16"
          />
          Pagamento 100% seguro via
          <img
            src={"./images/logo-footer.svg"}
            alt="Rocket Icon"
            width="38"
            height="16"
          />
        </SecureText>
      </Box>
    </Box>
  );
};

export default QRCodePage;
