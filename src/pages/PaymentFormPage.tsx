import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  MenuItem,
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

const SecureText = styled(Typography)({
  color: "#B2B2B2",
  fontSize: "14px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
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

const PaymentFormPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [installments, setInstallments] = useState("1x de R$ 15.300,00");
  const [errors, setErrors] = useState({
    name: false,
    cpf: false,
    cardNumber: false,
    expiry: false,
    cvv: false,
  });
  const [errorMessages, setErrorMessages] = useState({
    name: "",
    cpf: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const validateFields = () => {
    let isValid = true;
    const newErrors = { ...errors };
    const newErrorMessages = { ...errorMessages };

    if (name.trim() === "") {
      newErrors.name = true;
      newErrorMessages.name = "Nome completo é obrigatório";
      isValid = false;
    } else {
      newErrors.name = false;
      newErrorMessages.name = "";
    }

    if (cpf.trim().length !== 11) {
      newErrors.cpf = true;
      newErrorMessages.cpf = "CPF deve ter 11 dígitos";
      isValid = false;
    } else {
      newErrors.cpf = false;
      newErrorMessages.cpf = "";
    }

    if (cardNumber.trim().length !== 16) {
      newErrors.cardNumber = true;
      newErrorMessages.cardNumber = "Número do cartão deve ter 16 dígitos";
      isValid = false;
    } else {
      newErrors.cardNumber = false;
      newErrorMessages.cardNumber = "";
    }

    if (expiry.trim().length !== 4) {
      newErrors.expiry = true;
      newErrorMessages.expiry = "Vencimento deve ter 4 dígitos (MMYY)";
      isValid = false;
    } else {
      newErrors.expiry = false;
      newErrorMessages.expiry = "";
    }

    if (cvv.trim().length !== 3) {
      newErrors.cvv = true;
      newErrorMessages.cvv = "CVV deve ter 3 dígitos";
      isValid = false;
    } else {
      newErrors.cvv = false;
      newErrorMessages.cvv = "";
    }

    setErrors(newErrors);
    setErrorMessages(newErrorMessages);

    return isValid;
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (/^\d{0,11}$/.test(value)) {
      setCpf(value);
    }
  };

  const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (/^\d{0,16}$/.test(value)) {
      setCardNumber(value);
    }
  };

  const handleExpiryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (/^\d{0,4}$/.test(value)) {
      setExpiry(value);
    }
  };

  const handleCvvChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (/^\d{0,3}$/.test(value)) {
      setCvv(value);
    }
  };

  const handleInstallmentsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInstallments(event.target.value);
  };

  const handleTitleClick = () => {
    navigate("/");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateFields()) {
      navigate("/");
    }
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
          João, pague o restante em 1x no cartão
        </Typography>
      </Box>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ textAlign: "left" }}
        onSubmit={handleSubmit}
      >
        <TextField
          fullWidth
          label="Nome completo"
          placeholder="João Linaldo Dias Fraga Santos"
          value={name}
          onChange={handleNameChange}
          error={errors.name}
          helperText={errorMessages.name}
          margin="normal"
        />
        <TextField
          fullWidth
          label="CPF"
          placeholder="405.503.503-15"
          value={cpf}
          onChange={handleCpfChange}
          error={errors.cpf}
          helperText={errorMessages.cpf}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Número do cartão"
          placeholder="405.503.503-15"
          value={cardNumber}
          onChange={handleCardNumberChange}
          error={errors.cardNumber}
          helperText={errorMessages.cardNumber}
          margin="normal"
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <TextField
            label="Vencimento"
            placeholder="10/11"
            value={expiry}
            onChange={handleExpiryChange}
            error={errors.expiry}
            helperText={errorMessages.expiry}
            margin="normal"
            sx={{ width: "48%" }}
          />
          <TextField
            label="CVV"
            placeholder="405"
            value={cvv}
            onChange={handleCvvChange}
            error={errors.cvv}
            helperText={errorMessages.cvv}
            margin="normal"
            sx={{ width: "48%" }}
          />
        </Box>
        <TextField
          select
          fullWidth
          label="Parcelas"
          value={installments}
          onChange={handleInstallmentsChange}
          margin="normal"
        >
          <MenuItem value="1x de R$ 15.300,00">1x de R$ 15.300,00</MenuItem>
        </TextField>
        <CustomButton type="submit" fullWidth>
          Pagar
        </CustomButton>
      </Box>
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
          Total: R$ 31.500,00
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

export default PaymentFormPage;
