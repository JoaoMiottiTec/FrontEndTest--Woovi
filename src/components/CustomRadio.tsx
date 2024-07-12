import React from 'react';
import { Radio, RadioProps } from '@mui/material';
import { styled } from '@mui/system';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const CustomRadio = styled((props: RadioProps) => (
  <Radio
    {...props}
    icon={<RadioButtonUncheckedIcon />}
    checkedIcon={<CheckCircleIcon />}
  />
))(({ theme }) => ({
  '&.Mui-checked': {
    color: '#03D69D',
  },
  '& .MuiSvgIcon-root': {
    fontSize: 24,
  },
}));

export default CustomRadio;