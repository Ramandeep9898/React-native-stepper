import React from "react";
import { Text, StyleSheet } from "react-native";
import { colors } from "../../utils/theme";

export const Typography = ({ variant, children, style, ...rest }) => {
  const getVariantStyle = () => {
    switch (variant) {
      case "heading":
        return styles.heading;
      case "mutedText":
        return styles.mutedText;
      case "secondaryBoldText":
        return styles.secondaryBoldText;
      case "secondarySmallText":
        return styles.secondarySmallText;
      case "mutedSmallText":
        return styles.mutedSmallText;
      case "errorText":
        return styles.errorText;
      default:
        return {};
    }
  };

  return (
    <Text style={[styles.text, getVariantStyle(), style]} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: "normal",
  },
  heading: {
    fontSize: 22,
    color: colors.secondary,
    fontWeight: "bold",
    marginBottom: 8,
  },
  mutedText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.grey,
    marginBottom: 4,
  },
  secondaryBoldText: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  secondarySmallText: {
    color: colors.secondary,
    fontWeight: "normal",
    fontSize: 14,
  },
  mutedSmallText: {
    fontSize: 14,
    color: colors.grey,
    fontWeight: "normal",
  },
  errorText: {
    color: colors.error,
    fontSize: 14,
    fontWeight: "normal",
    textTransform: "capitalize",
  },
});
