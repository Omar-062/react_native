import React from 'react';
import { Svg, Rect, Path, G, Defs, ClipPath } from 'react-native-svg';

const CheckBoxFilledIcon = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Rect width="24" height="24" fill="#1E1E1E" />
      <G id="Components">
        <Path
          d="M-968 -238C-968 -239.105 -967.105 -240 -966 -240H134C135.104 -240 136 -239.105 136 -238V160C136 161.105 135.105 162 134 162H-966C-967.105 162 -968 161.105 -968 160V-238Z"
          fill="#E5E5E5"
        />
        <Path
          d="M-966 -239H134V-241H-966V-239ZM135 -238V160H137V-238H135ZM134 161H-966V163H134V161ZM-967 160V-238H-969V160H-967ZM-966 161C-966.552 161 -967 160.552 -967 160H-969C-969 161.657 -967.657 163 -966 163V161ZM135 160C135 160.552 134.552 161 134 161V163C135.657 163 137 161.657 137 160H135ZM134 -239C134.552 -239 135 -238.552 135 -238H137C137 -239.657 135.657 -241 134 -241V-239ZM-966 -241C-967.657 -241 -969 -239.657 -969 -238H-967C-967 -238.552 -966.552 -239 -966 -239V-241Z"
          fill="black"
          fill-opacity="0.1"
        />
        <G id="Todo Item">
          <Rect x="-319.5" y="-133.5" width="375" height="201" rx="4.5" stroke="#9747FF" stroke-dasharray="10 5" />
          <G id="Completed=True">
            <Rect width="344" height="80" transform="translate(-304 -28)" fill="white" />
            <G id="Checkbox">
              <G clip-path="url(#clip0_0_1)">
                <Rect width="24" height="24" rx="3" fill="#4A3780" />
                <G id="icon / check-fill" clip-path="url(#clip1_0_1)">
                  <G id="Group">
                    <Path id="Vector" d="M10 15.172L19.192 5.979L20.607 7.393L10 18L3.636 11.636L5.05 10.222L10 15.172Z" fill="white" />
                  </G>
                </G>
              </G>
              <Rect x="0.5" y="0.5" width="23" height="23" rx="2.5" stroke="#4A3780" />
            </G>
          </G>
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_0_1">
          <Rect width="24" height="24" rx="3" fill="white" />
        </ClipPath>
        <ClipPath id="clip1_0_1">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default CheckBoxFilledIcon;
