import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Clipboard } from "react-native";

export default function Setting() {
    return (
        <View style={styles.container}>
            <View style={{ width: "100%", height: "50%", padding: 10 }}>
                <Text>Phiên bản: 1.0.0</Text>
                <Text selectable={true}>SĐT liên hệ: 0373165882</Text>

                <Text selectable={true}>
                    Địa chỉ email: hgnguyen47347714@gmail.com
                </Text>
            </View>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text style={styles.text}>
                    Tất cả các thông tin trong phần mềm được lấy từ trang
                    wikipedia và một số trang web khác lên có thể không chính
                    xác, quý độc giả xem với tinh thần tham khảo. Trân trọng cảm
                    ơn !!!.
                </Text>
            </View>
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
    text: {
        fontSize: 20,
        padding: 10,
        textAlign: "justify",
    },
});
