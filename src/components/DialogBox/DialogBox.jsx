import React from "react";
import { Sheet } from "../Sheet/Sheet";
import { Typography } from "../Typography/Typography";
import { View } from "react-native";

export const DialogBox = ({ heading, subheading, children }) => {
  return (
    <Sheet>
      <Typography variant="heading">{heading}</Typography>
      <Typography
        variant="mutedText"
        style={{ marginBottom: 20, marginTop: -4 }}
      >
        {subheading}
      </Typography>
      <View>{children}</View>
    </Sheet>
  );
};
