import React from "react";
import { Text } from "react-native";
import { Colors } from "../unknown/Colors";

interface IBaseText {
  fontSize: number;
  fontWeight: "400" | "500" | "600";
  textAlign: "center" | "justify" | "auto" | "left" | "right" | undefined;
  color: string;
  children: string;
}

const BaseText = ({
  fontSize,
  fontWeight,
  textAlign,
  color = Colors.black,
  ...props
}: IBaseText) => {
  return (
    <Text
      style={[
        {
          fontSize,
          fontWeight,
          textAlign,
          color,
        },
      ]}
      {...props}
    />
  );
};

export const Typography = (props: any) => <BaseText {...props} />;

export const H1 = (props: any) => (
  <BaseText
    fontSize={30}
    lineHeight={36}
    fontWeight="600"
    textAlign="center"
    {...props}
  />
);

export const H2 = (props: any) => (
  <BaseText
    fontSize={24}
    lineHeight={29}
    fontWeight="500"
    textAlign="left"
    {...props}
  />
);

export const H3 = (props: any) => (
  <BaseText
    fontSize={16}
    lineHeight={19}
    fontWeight="600"
    textAlign="left"
    {...props}
  />
);

export const Regular = (props: any) => (
  <BaseText
    fontSize={14}
    lineHeight={17}
    fontWeight="400"
    textAlign="left"
    {...props}
  />
);

export const ButtonText = (props: any) => (
  <BaseText
    fontSize={16}
    lineHeight={19}
    fontWeight="600"
    textAlign="center"
    color={Colors.white}
    {...props}
  />
);
