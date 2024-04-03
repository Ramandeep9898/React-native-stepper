import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { colors } from "../utils/theme";
import {
  Button,
  Sheet,
  Header,
  Typography,
  CheckBoxComponent,
  DialogBox,
} from "../components/";
import { addOnDataConfig } from "../config/config";
import { useRoute } from "@react-navigation/native";
import { useData } from "../hooks/useStore";
import { useNavigation } from "@react-navigation/native";
import { commonCss } from "../utils/common";

export const PickAddOn = () => {
  const navigation = useNavigation();
  const { data, updateState } = useData();
  const { heading, mutedText, cardDetails } = addOnDataConfig;
  const route = useRoute();

  const addPickOnStateUpdate = (key, value) => {
    updateState(key, value);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerBg}></View>
      {/* Addon */}
      <View style={styles.pageContainer}>
        <Header />

        <DialogBox heading={heading} subheading={mutedText}>
          <CheckBoxComponent
            selectedPickOn={data.pickOns}
            details={cardDetails}
            onCheckBoxSelected={addPickOnStateUpdate}
          />
        </DialogBox>
      </View>

      <View style={commonCss.footer}>
        <Button
          variant={"ghost"}
          title={"Go Back"}
          onPress={() => navigation.goBack()}
        />
        <Button
          variant={"secondary"}
          title={"Next page"}
          onPress={() => {
            updateState("visitedPage", "FinishingUp");
            navigation.navigate("FinishingUp");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerBg: {
    height: 150,
    width: "100%",
    backgroundColor: colors.primary,
  },
  pageContainer: {
    margin: 30,
    marginTop: -120,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    justifyContent: "center",
    marginBottom: 20,
  },
});
