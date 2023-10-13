export const typography = {
  fontFamily: '"Roboto", sans-serif',
  variants: {
    title1: {
      fontWeight: {
        xs: '700',
      },
      fontSize: {
        lg: '48px',
        md: '36px',
        xs: '28px',

      },
    },
    title2: {
      fontWeight: {
        xs: '700',
      },
      fontSize: {
        xs: '12px',
        md: '16px'
      },
    },
    title3: {
      fontWeight: {
        xs: '750',
        md: '700',
      },
      fontSize: {
        xs: '12px',
        md: '16px'
      },
    },
    body2: {
      fontWeight: {
        xs: '400',
      },
      fontSize: {
        xs: '14px',
      },
    },
    body1: {
      fontWeight: {
        xs: '700',
      },
      fontSize: {
        xs: '12px',
        md: '16px'
      },
    },
  }
} as const;
