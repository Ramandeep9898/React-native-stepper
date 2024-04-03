import React, { useEffect, useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { personalInfoDataConfig } from "../config/config";
import {
  Sheet,
  Typography,
  InputWithLabel,
  Header,
  Button,
  DialogBox,
} from "../components";
import { colors } from "../utils/theme";
import { useData } from "../hooks/useStore";
import { commonCss } from "../utils/common";
import { useNavigation } from "@react-navigation/native";

export const PersonalInfo = () => {
  const navigation = useNavigation();
  const { data, updateState } = useData();
  const [errorMessage, setErrorMessage] = useState(false); // Changed isError state to boolean
  const { heading, mutedText, input } = personalInfoDataConfig;
  const { visitedPage } = data;
  const onTextChange = (key, value) => {
    updateState(key, value);
  };

  const onPress = () => {
    const { name, email, phoneNumber } = data; // Destructure data object

    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
    const isValidEmail = emailPattern.test(email);

    const phonePattern = /^[6-9]\d{9}$/;
    const isValidPhone = phonePattern.test(phoneNumber);

    const reqArray = [];
    for (let item of Object.keys(data)) {
      if (data[item] === "" || !data[item]) {
        reqArray.push(item);
      }
    }
    let errMsg = "";
    if (reqArray.length) {
      errMsg = reqArray.join(" and ") + " is required !";
    }
    if (!isValidEmail && email.length) {
      errMsg = errMsg + "invalid format email !";
    }
    if (!isValidPhone && phoneNumber.length) {
      errMsg = errMsg + "invalid format phone !";
    }
    if (errMsg.length) {
      setErrorMessage(errMsg);
    } else {
      updateState("visitedPage", "SelectYourPlan");
      setErrorMessage("");
      navigation.navigate("SelectYourPlan");
    }
  };

  return (
    <SafeAreaView style={commonCss.container}>
      <View style={commonCss.containerBg}>
        <View style={commonCss.pageContainer}>
          <Header />
          <DialogBox heading={heading} subheading={mutedText}>
            {errorMessage && (
              <Typography variant={"errorText"} style={{ marginBottom: 8 }}>
                {errorMessage}
              </Typography>
            )}
            {input.map((ele, index) => (
              <InputWithLabel
                key={index}
                keyName={ele.keyName}
                value={data[ele.key]}
                label={ele.label}
                placeholder={ele.placeHolder}
                updateState={onTextChange}
              />
            ))}
          </DialogBox>
        </View>
      </View>

      <View style={commonCss.footer}>
        <View></View>
        <Button
          variant={"secondary"}
          title={"Next page"}
          onPress={onPress}
          pageName={"SelectYourPlan"}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  errorText: {
    color: "red",
  },
});
