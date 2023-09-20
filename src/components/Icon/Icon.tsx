import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";
import * as icons from './svgs/_index';
import { colors } from "@src/theme/defaults/colors";

const iconSizes = {
  xs: '12px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '36px',
} as const;

interface IconProps {
  name: keyof typeof icons;
  styleSheet?: StyleSheet;
  size?: keyof typeof iconSizes;
  color?: keyof typeof colors ;
}
export default function Icon({ size, name, color }: IconProps) {
  const CurrentIcon = icons[name];
  if(!CurrentIcon) return <>"${name}" is not a valid <Icon /></>;
  return (
    // <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <BaseComponent
      as="svg"
      styleSheet={{
        width: iconSizes[size],
        height: iconSizes[size],
      }}
      color="red"
      fill="red"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox={`0 0 ${iconSizes[size]} ${iconSizes[size]}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <CurrentIcon />
    </BaseComponent>
  )
}

Icon.defaultProps = {
  name: 'default_icon',
  size: 'md',
  color: 'primary'
}