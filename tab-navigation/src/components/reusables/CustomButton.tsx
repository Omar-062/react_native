import { Pressable } from "react-native";
import React, { ReactNode } from "react";
import { Colors } from "../unknown/Colors";

interface IBaseButton {
  height: number;
  width?: number;
  borderRadius: number;
  backgroundColor?: string;
  onPress: () => void;
  children: ReactNode;
}

export const BaseButton = ({
  height,
  width,
  borderRadius,
  backgroundColor,
  onPress,
  children,
  ...props
}: IBaseButton) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          height,
          width,
          borderRadius,
          backgroundColor,
        },
      ]}
      {...props}
    >
      {children}
    </Pressable>
  );
};

export const PrimaryButton = (props: any) => (
  <BaseButton
    backgroundColor={Colors.green}
    {...props}
  />
);