import { BaseComponent } from "@src/theme/BaseComponent";
import React from "react";
import { StyleSheet } from "@src/theme/StyleSheet";

interface BoxProps
{
  tag?: 'main' | 'div' | 'article' | 'section' | 'ul' | string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
}

export default function Box({ styleSheet, children, tag = "div", ...props }: BoxProps)
{
  return (
    <BaseComponent as={tag} styleSheet={styleSheet} {...props}>
      {children}
    </BaseComponent>
  )
}
