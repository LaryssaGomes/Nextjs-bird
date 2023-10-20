import styled, { useTheme } from 'styled-components';
import Box from '../Box/Box';
import Button from '../Button/Button';
import Text from '../Text/Text';
import InputBase from '../Input/InputBase';
import ButtonBase from '../Button/ButtonBase';

const BoxSearch = ({ onFiltroChange }) => {
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
        onChange={handleInputChange}
        styleSheet={{
          color: '#fff',
          fontWeight: '700',
          fontSize: { xs: '14px', md: '16px', lg: '18px' },
          transform: 'skew(20deg)',
          width: '50%',
        }}
      />

      <ButtonBase
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
