import { Pressable } from "react-native";
import React, { ReactNode } from "react";
import { Colors } from "../unknown/Colors";

interface IBaseButton {
  height: number;
  width?: number;
  borderRadius: number;
  backgroundColor?: string;
  justifyContent:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  onPress: () => void;
  children: ReactNode;
}

export const BaseButton = ({
  height = 48,
  width,
  borderRadius,
  backgroundColor,
  justifyContent = "center",
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
          justifyContent,
        },
      ]}
      {...props}
    >
      {children}
    </Pressable>
  );
};

export const PrimaryButton = (props: any) => (
  <BaseButton backgroundColor={Colors.green} {...props} />
);
