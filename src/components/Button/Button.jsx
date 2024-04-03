import React from "react";
import { TouchableOpacity, Text, StyleSheet, Switch } from "react-native";
import { colors } from "../../utils/theme";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useData } from "../../hooks/useStore";

export const Button = ({
  onPress,
  title,
  variant,
  value,
  disable = false,
  ...rest
}) => {
  const [isEnabled, setIsEnabled] = useState(
    value === "monthly" ? false : true
  );
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onPress("monthlyOrYearly", isEnabled ? "yearly" : "monthly");
  };

  const getButtonStyle = () => {
    switch (variant) {
      case "primary":
        return styles.primaryButton;
      case "secondary":
        return styles.secondaryButton;
      case "ghost":
        return styles.ghostButton;
      default:
        return styles.primaryButton;
    }
  };

  const getButtonTextStyle = () => {
    switch (variant) {
      case "ghost":
        return styles.buttonGhostText;
      default:
        return styles.ghostButton;
    }
  };

  return variant !== "toggleButton" ? (
    <TouchableOpacity
      style={[styles.button, getButtonStyle()]}
      disabled={disable}
      {...rest}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, getButtonTextStyle()]}>{title}</Text>
    </TouchableOpacity>
  ) : (
    <Switch
      trackColor={{ false: colors.secondary, true: colors.secondary }}
      thumbColor={"#fff"}
      ios_backgroundColor={colors.secondary}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    alignItems: "center",
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
  secondaryButton: {
    backgroundColor: colors.secondary,
  },
  ghostButton: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  buttonGhostText: {
    color: colors.grey,
    fontSize: 16,
  },
});
import { useRoute } from "@react-navigation/native";

export const PaginationButton = ({ title, pageName, ...rest }) => {
  const navigation = useNavigation();
  const { data } = useData();
  const { visitedPage } = data;
  const route = useRoute();
  const currentScreenName = route.name;

  const navigateHeader = () => {
    const isPageVisited = visitedPage.includes(pageName);
    if (isPageVisited) {
      navigation.navigate(pageName);
    }
  };

  return (
    <TouchableOpacity
      style={[
        currentScreenName === pageName
          ? buttonStyles.clickedButton
          : buttonStyles.button,
      ]}
      onPress={navigateHeader}
      {...rest}
    >
      <Text
        style={[
          currentScreenName === pageName
            ? buttonStyles.selectedText
            : buttonStyles.text,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const buttonStyles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: colors.lightPurple,
    borderRadius: "50%",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  clickedButton: {
    borderWidth: 1,
    borderColor: colors.lightPurple,
    borderRadius: "50%",
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: colors.lightPurple,
  },
  text: {
    color: colors.lightPurple,
  },
  selectedText: {
    color: colors.primary,
  },
});
