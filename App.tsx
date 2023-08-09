import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, TextInput } from "react-native-paper";

export default function App() {
    return (
        <View style={style.container}>
            <TextInput style={style.input} label="Write a lot of text here" />
            <Text style={{ width: 100 }}>
                I want this text visible at all times
            </Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },

    input: {
        flexGrow: 1,
    },
});
