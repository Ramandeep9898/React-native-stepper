import React from "react";
import { PaginationButton } from "../Button/Button";
import { StyleSheet, View } from "react-native";

const headerConfig = [
  { title: "1", pageName: "PersonalInfo" },
  { title: "2", pageName: "SelectYourPlan" },
  { title: "3", pageName: "PickAddOn" },
  { title: "4", pageName: "FinishingUp" },
];

export const Header = () => {
  return (
    <View style={styles.header}>
      {headerConfig.map((ele, index) => (
        <PaginationButton
          title={ele.title}
          pageName={ele.pageName}
          key={index}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    justifyContent: "center",
    marginBottom: 20,
  },
});
