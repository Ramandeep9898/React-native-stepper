import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

export const InputWithLabel = ({ label, placeholder, value, updateState, ...rest }) => {


    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} {...rest} placeholder={placeholder} value={value} onChangeText={(text) => updateState(rest.keyName, text)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        width: "100%"
    },
    label: {
        marginBottom: 4,
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.secondary
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 16,
    },
});

