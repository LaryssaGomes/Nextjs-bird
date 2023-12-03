import styled, { useTheme } from 'styled-components';
import Box from '../Box/Box';
import Text from '../Text/Text';
import InputBase from '../Input/InputBase';
import ButtonBase from '../Button/ButtonBase';
import { useDebounce } from 'use-debounce';
import { useEffect, useState } from 'react';

interface BoxSearchProps {
  onFiltroChange: (value: string) => void;
}

const BoxSearch = ({ onFiltroChange }: BoxSearchProps) => {
  const [inputValue, setInputValue] = useState('');
  const [debouncedSearchTerm] = useDebounce(inputValue, 1000);

  useEffect(() => {
    onFiltroChange(inputValue);
  }, [debouncedSearchTerm]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInput = () => {
    onFiltroChange(inputValue);
  };

  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        background: theme.colors.primary.x200,
        padding: { xs: '0.6rem 1.2rem', md: '1rem 2rem' },
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '10px',
        transform: 'skew(-20deg)',
      }}
    >
      <InputBase
        placeholder="Tucanos, Arara ..."
        styleSheet={{
          color: '#fff',
          fontWeight: '700',
          fontSize: { xs: '14px', md: '16px', lg: '18px' },
          transform: 'skew(20deg)',
          width: '50%',
        }}
        onChange={handleInputChange}
      />

      <ButtonBase
        onClick={handleInput}
        styleSheet={{
          alignSelf: 'center',
          justifyContent: 'center',
          background: '#fff',
          padding: { xs: '0.8rem', md: '1rem' },
          color: '#31754C',
          borderRadius: '5px',
        }}
      >
        <Text
          styleSheet={{
            transform: 'skew(20deg)',
            textAlign: 'center',
            fontWeight: '700',
          }}
          variant="body1"
        >
          ENCONTRAR
        </Text>
      </ButtonBase>
    </Box>
  );
};

export default BoxSearch;
