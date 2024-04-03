import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { colors } from "../../utils/theme";

export const CheckBoxComponent = ({
  details,
  selectedPickOn,
  onCheckBoxSelected,
}) => {
  const [checkBoxStates, setCheckBoxStates] = useState(selectedPickOn);

  const toggleCheckBox = (index) => {
    const newCheckBoxStates = [...checkBoxStates];
    newCheckBoxStates[index] = !newCheckBoxStates[index];
    setCheckBoxStates(newCheckBoxStates);
  };
  useEffect(() => {
    onCheckBoxSelected("pickOns", checkBoxStates);
  }, [checkBoxStates]);

  return (
    <View>
      {details.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => toggleCheckBox(index)}
          style={[
            {
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
              borderColor: colors.grey,
              padding: 15,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "space-between",
            },
            checkBoxStates[index] && {
              borderColor: colors.primary,
              backgroundColor: "#f8f9fe",
            },
          ]}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={[
                {
                  width: 24,
                  height: 24,
                  borderWidth: 1,
                  marginRight: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: colors.grey,
                  borderRadius: 4,
                  marginTop: 5,
                },
                checkBoxStates[index] && {
                  backgroundColor: colors.primary,
                  borderColor: "transparent",
                },
              ]}
            >
              {checkBoxStates[index] && (
                <View
                  style={{
                    width: 12,
                    height: 12,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontWeight: "bold",
                      marginTop: -1,
                    }}
                  >
                    ✓
                  </Text>
                </View>
              )}
            </View>
            <View>
              <Text
                style={{
                  color: colors.secondary,
                  fontWeight: "bold",
                }}
              >
                {item.heading}
              </Text>
              <Text
                style={{
                  color: colors.grey,
                  fontWeight: "normal",
                  fontSize: 14,
                }}
              >
                {item.subHeading}
              </Text>
            </View>
          </View>

          <Text
            style={{
              color: colors.primary,
              fontWeight: "normal",
              fontSize: 14,
            }}
          >
            +{item.price}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
