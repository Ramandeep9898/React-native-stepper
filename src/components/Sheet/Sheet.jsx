import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { colors } from "../../utils/theme";

export const Sheet = ({ variant, children }) => {
  const getVariantStyle = () => {
    switch (variant) {
      case "greyBg":
        return styles.greyBg;
      default:
        return {}; // Default to an empty object
    }
  };

  return <View style={[styles.sheet, getVariantStyle()]}>{children}</View>;
};

const styles = StyleSheet.create({
  sheet: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    width: "100%",
    borderRadius: 8,
    backgroundColor: "white",
    marginBottom: 16,

    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  greyBg: {
    backgroundColor: "#f8f9fe",
    ...Platform.select({
      ios: {
        shadowColor: "#fff",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 0,
      },
    }),
  },
});
