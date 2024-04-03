import { StyleSheet } from "react-native";
import { colors } from "./theme";


export const commonCss = StyleSheet.create({
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
        // marginTop: -120,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        justifyContent: "center",
        marginBottom: 20,
    },
    spaceBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 4,
    },

    // footer
    footer: {
        backgroundColor: "white",
        paddingVertical: 24,
        paddingHorizontal: 16,
        position: "absolute",
        bottom: 0,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    }
});
