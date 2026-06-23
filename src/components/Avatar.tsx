import React from "react";
import { AvatarProps } from "@/types/components";
import { colors } from "@/constants/global";

const Avatar: React.FC<AvatarProps> = ({ name, width = 35, height = 35 }) => {
  const initial = name.charAt(0).toUpperCase();
  const index1 = name.length % colors.length;

  const gradientClass = `${colors[index1]}`;

  return (
    <div
      className={`w-10 h-10 rounded-full flex items-center justify-center font-sans font-bold text-background ${gradientClass}`}
      style={{ width, height }}
    >
      <p style={{ fontSize: width / 2.5 }}>{initial}</p>
    </div>
  );
};

export default Avatar;
