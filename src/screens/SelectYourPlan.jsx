import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { colors } from "../utils/theme";
import {
  Button,
  Sheet,
  Header,
  SelectPlanCard,
  Typography,
  DialogBox,
} from "../components/";
import { selectPlanDataConfig } from "../config/config";
import { useData } from "../hooks/useStore";
import { commonCss } from "../utils/common";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export const SelectYourPlan = () => {
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState("");
  const { data, updateState } = useData();
  const { heading, mutedText, cardDetails } = selectPlanDataConfig;
  const selectYourPlanStateUpdate = (key, value) => {
    updateState(key, value);
  };
  const { monthlyOrYearly, selectedPlan } = data;

  const onPress = () => {
    if (selectedPlan.length === 0) {
      setErrorMessage("Selecting a plan required!");
    } else {
      updateState("visitedPage", "PickAddOn");
      navigation.navigate("PickAddOn");
    }
  };
  return (
    <SafeAreaView style={commonCss.container}>
      <View style={commonCss.containerBg}></View>

      {/* select plan */}
      <View
        style={[
          commonCss.pageContainer,
          {
            marginTop: -120,
          },
        ]}
      >
        <Header />
        <DialogBox heading={heading} subheading={mutedText}>
          {errorMessage && (
            <Typography variant={"errorText"}>{errorMessage}</Typography>
          )}
          <SelectPlanCard
            selectedCard={data.selectedPlan}
            cardDetails={cardDetails}
            onBoxSelect={selectYourPlanStateUpdate}
          />
          <View
            style={{
              backgroundColor: "#fbf9f9",
              padding: 10,
              borderRadius: 8,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Text
              style={[
                monthlyOrYearly === "yearly"
                  ? style.toggleSelectedButtonText
                  : style.toggleButtonText,
              ]}
            >
              Yearly
            </Text>
            <Button
              value={data.monthlyOrYearly}
              variant={"toggleButton"}
              onPress={selectYourPlanStateUpdate}
            />
            <Text
              style={[
                monthlyOrYearly === "monthly"
                  ? style.toggleSelectedButtonText
                  : style.toggleButtonText,
              ]}
            >
              Monthly
            </Text>
          </View>
        </DialogBox>
      </View>

      <View style={commonCss.footer}>
        <Button
          variant={"ghost"}
          title={"Go Back"}
          onPress={() => navigation.goBack()}
        />
        <Button variant={"secondary"} title={"Next page"} onPress={onPress} />
      </View>
    </SafeAreaView>
  );
};

export const style = StyleSheet.create({
  toggleButtonText: {
    color: colors.grey,
    fontWeight: "normal",
  },
  toggleSelectedButtonText: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
