import { BaseComponent } from '@src/theme/BaseComponent';
import React from 'react';
import { StyleSheet } from '@src/theme/StyleSheet';

interface InputBaseProps {
  placeholder: string;
  styleSheet?: StyleSheet;
}

export default function InputBase({ placeholder, styleSheet }: InputBaseProps) {
  return (
    <BaseComponent
      as="input"
      placeholder={placeholder}
      styleSheet={styleSheet}
    />
  );
}

InputBase.defaultProps = {
  tag: 'p',
  variant: 'body2',
  color: 'primary',
};
