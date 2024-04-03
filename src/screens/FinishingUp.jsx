import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { colors } from "../utils/theme";
import { Button, Sheet, Header, Typography, DialogBox } from "../components/";
import { finishingUpDataConfig } from "../config/config";
import { useData } from "../hooks/useStore";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { addOnDataConfig } from "../config/config";
import { commonCss } from "../utils/common";
import { useState } from "react";

export const FinishingUp = () => {
  const navigation = useNavigation();
  const { heading, mutedText } = finishingUpDataConfig;
  const { data } = useData();
  const { selectedPlan, pickOns, monthlyOrYearly } = data;
  const [isOpen, setIsOpen] = useState(false);

  const { cardDetails } = addOnDataConfig;
  let sum = selectedPlan[0]?.amt;
  const selectedCards = [];
  for (let idx in pickOns) {
    if (pickOns[idx]) {
      selectedCards.push(cardDetails[idx]);
      sum = sum + (cardDetails[idx]?.amt || 0);
    }
  }

  return (
    <SafeAreaView style={commonCss.container}>
      <View style={commonCss.containerBg}></View>

      {/* Finishing up  */}
      <View style={[commonCss.pageContainer, { marginTop: -120 }]}>
        <Header />
        <DialogBox heading={heading} subheading={mutedText}>
          <Sheet variant={"greyBg"}>
            <View
              style={[
                commonCss.spaceBetween,
                {
                  borderBottomWidth: 1,
                  borderBottomColor: colors.grey,
                  paddingBottom: 10,
                },
              ]}
            >
              <View>
                <Typography variant={"secondaryBoldText"}>
                  {selectedPlan[0]?.heading}({monthlyOrYearly})
                </Typography>
                <Pressable
                  onPress={() => navigation.navigate("SelectYourPlan")}
                >
                  <Typography
                    variant={"mutedSmallText"}
                    style={{ textDecorationLine: "underline" }}
                  >
                    change
                  </Typography>
                </Pressable>
              </View>
              <Typography variant={"secondaryBoldText"}>
                {monthlyOrYearly === "yearly"
                  ? `$${selectedPlan[0]?.amt * 10}/mo`
                  : selectedPlan[0]?.subHeading}
              </Typography>
            </View>

            {selectedCards.map((item, index) => (
              <View style={commonCss.spaceBetween} key={index}>
                <Typography variant={"mutedSmallText"}>
                  {item.heading}
                </Typography>
                <Typography variant={"secondarySmallText"}>
                  +${monthlyOrYearly === "yearly" ? item.amt * 10 : item.amt}/mo
                </Typography>
              </View>
            ))}
          </Sheet>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 8,
              paddingHorizontal: 16,
            }}
          >
            <Text style={{ color: colors.grey, fontWeight: "normal" }}>
              Total (per month)
            </Text>
            <Text style={{ color: colors.primary, fontWeight: "bold" }}>
              +${monthlyOrYearly === "yearly" ? sum * 10 : sum}/mo
            </Text>
          </View>
        </DialogBox>
      </View>

      {isOpen && (
        <View style={style.modalContainer}>
          <DialogBox>
            <Typography
              variant={"heading"}
              style={{ color: colors.primary, textAlign: "center" }}
            >
              Submitted
            </Typography>
            <Typography
              variant={"mutedText"}
              style={{
                color: colors.secondary,
                textAlign: "center",
                marginBottom: 16,
              }}
            >
              Your response is submitted successfully.
            </Typography>
            <Button
              title={"Close"}
              variant={"primary"}
              onPress={() => setIsOpen(false)}
            />
          </DialogBox>
        </View>
      )}

      <View style={commonCss.footer}>
        <Button
          variant={"ghost"}
          title={"Go Back"}
          onPress={() => navigation.goBack()}
        />
        <Button
          variant={"primary"}
          title={"Confirm"}
          onPress={() => setIsOpen(true)}
          pageName={"SelectYourPlan"}
        />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  modalContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
});
