import { BaseComponent } from "@src/theme/BaseComponent";
import { colors } from "@src/theme/defaults/colors";
import { StyleSheet } from "@src/theme/StyleSheet";
import { ThemeTypographyVariants } from "@src/theme/theme";
import { useTheme } from "@src/theme/ThemeProvider";
import React from 'react';

export interface TextProps
{
  variant?: ThemeTypographyVariants;
  tag?: 'p' | 'li' | 'h1' | 'h2' | 'h2' | string;
  children?: React.ReactNode;
  color?: keyof typeof colors;
  styleSheet?: StyleSheet;
  ref: any;
}
const Text = React.forwardRef(({
  tag,
  styleSheet,
  variant,
  color,
  ...props
}: TextProps, ref) =>
{
  const theme = useTheme();
  const textVariant = theme.typography.variants[variant];
  return (
    <BaseComponent
      as={tag}
      styleSheet={{
        color: theme.colors[color].main,
        fontFamily: theme.typography.fontFamily,
        ...textVariant,
        ...styleSheet,
      }}
      ref={ref}
      {...props}
    />
  )
})

Text.defaultProps = {
  tag: 'p',
  variant: 'body2',
  color: 'primary'
};

export default Text;
