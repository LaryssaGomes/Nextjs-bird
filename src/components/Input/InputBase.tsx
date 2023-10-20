import { BaseComponent } from '@src/theme/BaseComponent';
import React from 'react';
import { StyleSheet } from '@src/theme/StyleSheet';

interface InputBaseProps {
  placeholder: string;
  styleSheet?: StyleSheet;
  onChange: any;
}

export default function InputBase({
  placeholder,
  styleSheet,
  ...rest
}: InputBaseProps) {
  return (
    <BaseComponent
      as="input"
      placeholder={placeholder}
      styleSheet={styleSheet}
      {...rest}
    />
  );
}

InputBase.defaultProps = {
  tag: 'p',
  variant: 'body2',
  color: 'primary',
};
