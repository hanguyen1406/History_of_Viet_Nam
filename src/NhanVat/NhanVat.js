import { StatusBar } from "expo-status-bar";
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Foundation } from "@expo/vector-icons";
import data from "../../assets/database/character.json";
import bg from "../../assets/nhan_vat_bg.png";

export default function NhanVat() {
    const navagator = useNavigation();

    const OnPress = (hi) => {
        navagator.navigate("nhanvat", hi);
    };

    const Character = (user) => {
        // console.log(user.user.hoVaTen);
        return (
            <View
                style={{
                    width: "100%",
                    height: 70,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        width: "90%",
                        height: "80%",
                        borderRadius: 10,
                        alignItems: "center",
                        paddingHorizontal: 10,
                        backgroundColor: "rgb(43, 60, 21)",

                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 6,
                        },
                        shadowOpacity: 0.39,
                        shadowRadius: 8.3,

                        elevation: 13,
                    }}
                    onPress={() => OnPress(user.user)}
                >
                    <Foundation
                        name={
                            user.user.sex == 0 ? "male-symbol" : "female-symbol"
                        }
                        size={35}
                        color={user.user.sex == 0 ? "#1cb0ff" : "#d438ff"}
                    />
                    <Text
                        style={{
                            fontSize: 15,
                            marginLeft: 15,
                            fontWeight: "bold",
                            color: "#fff",
                        }}
                        numberOfLines={1}
                    >
                        {user.user.hoVaTen}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <ImageBackground source={bg} style={styles.container}>
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                Tổng số nhân vật hiện tại: {data.length}
            </Text>
            <FlatList
                data={data}
                renderItem={({ item }) => <Character user={item} />}
            />
            <StatusBar style="auto" />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        // backgroundColor: "#fff",
    },
});
