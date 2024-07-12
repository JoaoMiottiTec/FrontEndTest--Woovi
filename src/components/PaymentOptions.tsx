import React from 'react';
import { Box, Typography, RadioGroup, FormControlLabel, FormControl, Paper, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import CustomRadio from './CustomRadio';

const getPaperStyles = (checked: boolean, hasBanner: boolean) => ({
  border: checked ? '2px solid #03D69D' : '1px solid #ddd',
  backgroundColor: checked ? '#F4FBF9' : 'inherit',
  borderRadius: '8px',
  padding: '30px',
  paddingTop: hasBanner ? '12px' : '32px', 
  paddingBottom: hasBanner ? '8px' : '16px',
  position: 'relative',
});

const StyledFormControlLabel = styled(FormControlLabel)({
  margin: 0,
  width: '100%',
  justifyContent: 'space-between',
  flexDirection: 'row-reverse',
});

const SubText = styled(Typography)({
  color: '#AFAFAF',
  fontWeight: 'semibold',
  fontSize: '16px',
});

const CashbackText = styled(Typography)({
  color: '#03D69D',
  fontWeight: 'semibold',
  fontSize: '16px',
});

const Banner = styled('div')({
  backgroundColor: '#133A6F',
  color: '#FFFFFF',
  padding: '2px 8px',
  borderRadius: '4px',
  display: 'inline-block',
  marginTop: '8px',
  fontWeight: 'semibold',
  fontSize: '12px',
  textAlign: 'left',
});

const ExtraBoldText = styled('span')({
  fontWeight: 800,
  fontSize: '24px',
});

const Label = styled(Box)({
  position: 'absolute',
  top: '-12px',
  left: '16px',
  backgroundColor: '#F0F0F0',
  padding: '4px 8px',
  borderRadius: '8px',
  fontWeight: 'bold',
  zIndex: 1,
  fontSize: '12px',
});

const SecureText = styled(Typography)({
  color: '#B2B2B2',
  fontSize: '14px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
});

const PaymentOptions: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedValue, setSelectedValue] = React.useState('');

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (value === 'pix-parcelado-2x') {
      navigate('/qrcode');
    }
  };

  return (
    <Box sx={{
      padding: isMobile ? '8px' : '16px',
      maxWidth: '400px',
      margin: 'auto',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: isMobile ? 'none' : '0 2px 4px rgba(0,0,0,0.1)',
      fontFamily: 'Nunito, Arial, sans-serif',
      textAlign: 'center',
    }}>
      {/* Placeholder para a logo */}
      <Box sx={{ textAlign: 'center', marginTop: '40px', marginBottom: '24px' }}>
        <img src="./images/logo-placeholder.svg" alt="Logo" width={isMobile ? "100" : "120"} />
      </Box>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 800, paddingBottom: '16px' }}>
        João, como você quer pagar?
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup value={selectedValue} onChange={handleChange}>
          {[
            { value: 'pix', label: 'Pix', text: '1x R$ 30.500,00', subtext: 'Ganha 3% de Cashback', extra: '🤑 R$ 300,00 de volta no seu Pix na hora' },
            { value: 'pix-parcelado-2x', label: 'Pix Parcelado', text: '2x R$ 15.300,00', subtext: 'Total: R$ 30.600,00', extra: '' },
            { value: 'pix-parcelado-3x', label: '', text: '3x R$ 10.196,66', subtext: 'Total: R$ 30.620,00', extra: '' },
            { value: 'pix-parcelado-4x', label: '', text: '4x R$ 7.725,00', subtext: 'Total: R$ 30.900,00', extra: '-3% de juros: Melhor opção de parcelamento' },
            { value: 'pix-parcelado-5x', label: '', text: '5x R$ 6.300,00', subtext: 'Total: R$ 31.500,00', extra: '' },
            { value: 'pix-parcelado-6x', label: '', text: '6x R$ 5.283,33', subtext: 'Total: R$ 31.699,98', extra: '' },
            { value: 'pix-parcelado-7x', label: '', text: '7x R$ 4.542,85', subtext: 'Total: R$ 31.800,00', extra: '' },
          ].map((option, index) => (
            <Box key={index} sx={{ position: 'relative', marginBottom: index === 0 ? '24px' : '0' }}>
              {option.label && (
                <Label>
                  {option.label}
                </Label>
              )}
              <Paper sx={getPaperStyles(selectedValue === option.value, !!option.extra)}>
                <StyledFormControlLabel
                  value={option.value}
                  control={<CustomRadio />}
                  label={
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
                      <Typography variant="body1" sx={{ fontWeight: 500, fontSize: '24px' }}>
                        <ExtraBoldText>{option.text.split(' ')[0]}</ExtraBoldText> {option.text.split(' ').slice(1).join(' ')}
                      </Typography>
                      {option.subtext === 'Ganha 3% de Cashback' ? (
                        <CashbackText variant="body2">{option.subtext}</CashbackText>
                      ) : (
                        <SubText variant="body2">{option.subtext}</SubText>
                      )}
                      {option.extra && <Banner>{option.extra}</Banner>}
                    </Box>
                  }
                />
              </Paper>
            </Box>
          ))}
        </RadioGroup>
      </FormControl>
      <Box sx={{ textAlign: 'center', marginTop: '16px' }}>
        <SecureText variant="body2">
          <img src={'./images/shield.svg'} alt="Check Icon" width="16" height="16" />
          Pagamento 100% seguro via
          <img src={'./images/logo-footer.svg'} alt="Rocket Icon" width="38" height="16" />
        </SecureText>
      </Box>
    </Box>
  );
};

export default PaymentOptions;
