import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{
        width: "auto",
        paddingHorizontal: 5,
        paddingBottom: 5,
        marginBottom: 5,
    },
    label:{
        fontSize: 14,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 5
    },
    control:{
        width: "100%",
        fontSize: 16,
        height: 45,
        borderColor: "#999",
        borderStyle: "solid",
        borderWidth: 1,
        padding: 10
    },
    textArea:{
        width: "100%",
        fontSize: 16,
        height: 120,
        borderColor: "#999",
        borderStyle: "solid",
        borderWidth: 1,
        padding: 10,
        justifyContent: "flex-start"
    }
});

export default styles;