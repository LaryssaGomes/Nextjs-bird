import styled, { useTheme } from 'styled-components';
import Box from '../Box/Box';
import Button from '../Button/Button';
import Text from '../Text/Text';
import InputBase from '../Input/InputBase';
import ButtonBase from '../Button/ButtonBase';

export default function BoxSearch() {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        background: theme.colors.primary.x200,
        height: '60px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: '10px',
        transform: 'skew(-20deg)',
      }}
    >
      <InputBase
        placeholder="Tucanos, Arara ..."
        styleSheet={{
          height: '1.5rem',
          color: '#fff',
          fontWeight: '700',
          fontSize: '18px',
          transform: 'skew(20deg)',
        }}
      />

      <ButtonBase
        styleSheet={{
          alignSelf: 'center',
          justifyContent: 'center',
          background: '#fff',
          height: '40px',
          width: '150px',
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
}
