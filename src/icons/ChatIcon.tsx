import * as React from "react";
import { Svg } from '../ui/Svg';

type Props = {
  size: number,
  color: string,
}
const ChatIcon = ({ size = 28, color = '#000', ...props }: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 29 29" fill="none" {...props}>
      <path
        d="M26 2H2v18.818h5.474V25l4.631-4.182H26V2z"
        stroke={color}
        strokeWidth={3}
      />
    </Svg>
  );
}

export default ChatIcon;
