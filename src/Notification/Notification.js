import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Notification() {
    return (
        <View style={styles.container}>
            <Text>Hiện không có thông báo mới nào!!!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center",
    },
});
