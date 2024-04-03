import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../utils/theme";

export const SelectPlanCard = ({ cardDetails, onBoxSelect, selectedCard }) => {
  const [selectedBox, setSelectedBox] = useState(selectedCard[0]?.id);

  const selectBox = (boxId) => {
    setSelectedBox(boxId);
    const cardSelected = cardDetails.filter((ele) => ele.id === boxId);
    onBoxSelect("selectedPlan", cardSelected);
  };

  return (
    <View style={styles.container}>
      {cardDetails.map((box) => (
        <TouchableOpacity
          key={box.id}
          style={[styles.box, selectedBox === box.id && styles.selectedBox]}
          onPress={() => selectBox(box.id)}
        >
          <View
            style={{
              backgroundColor: colors.primary,
              width: 50,
              height: 50,
              borderRadius: 40,
            }}
          ></View>
          <View>
            <Text style={styles.heading}>{box.heading}</Text>
            <Text style={styles.subheading}>{box.subHeading}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    height: 250,
    gap: 8,
    marginVertical: 15,
  },
  box: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    borderColor: colors.grey,
    borderWidth: 1,
    gap: 8,
    alignItems: "center",
  },
  selectedBox: {
    backgroundColor: "#f8f9fe",
    borderColor: colors.primary,
    borderWidth: 1,
  },
  heading: {
    fontSize: 14,
    color: colors.secondary,
    fontWeight: "bold",
  },
  subheading: {
    fontSize: 14,
    color: colors.grey,
  },
});
