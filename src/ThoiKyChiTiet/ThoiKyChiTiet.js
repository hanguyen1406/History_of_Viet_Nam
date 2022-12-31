import {
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Text,
    View,
    FlatList,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import chieuvua2 from "../../assets/chieuvua2.png";
import BG from "../../assets/background.jpg";
import { ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ThoiKyChiTiet() {
    const navagator = useNavigation();
    const data = useRoute().params;
    // console.log(data.age);

    const onPress = (hi) => {
        navagator.navigate("Doc", hi);
        // console.log(hi);
    };
    const RenderIdem = (item) => {
        // console.log(item);
        return (
            <View
                style={{
                    width: "100%",
                    marginVertical: 25,
                    borderTopWidth: 1,
                    borderColor: "#ebccab",
                }}
                key={1}
            >
                <ImageBackground
                    source={chieuvua2}
                    style={{
                        width: "100%",
                        height: 120,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Text
                        style={{
                            width: "60%",
                            textAlign: "center",
                            fontSize: 18,
                            fontWeight: "bold",
                        }}
                    >
                        {item.item.name}
                    </Text>
                </ImageBackground>
                <View
                    style={{ width: "100%", height: 30, alignItems: "center" }}
                >
                    <TouchableOpacity
                        style={{
                            width: "40%",
                            height: "100%",
                            backgroundColor: "#3D5D7F",
                            borderRadius: 20,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 4,
                            },
                            shadowOpacity: 0.32,
                            shadowRadius: 5.46,

                            elevation: 9,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        onPress={() => onPress(item.item)}
                    >
                        <Text style={{ color: "white", fontSize: 18 }}>
                            Đọc
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <ImageBackground source={BG} style={styles.container}>
            <FlatList
                data={data.age}
                renderItem={({ item }) => <RenderIdem item={item} />}
            />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
    },
    chieuvua: {
        width: 270,
        height: 210,
        alignItems: "center",
    },
    tieude: {
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "italic",
    },
    div: {
        justifyContent: "center",
        flexDirection: "row",
        width: "100%",
        height: "25%",
        // borderWidth: 1,
    },
    touchableAbove: {
        paddingHorizontal: 10,
        width: "100%",
        height: "100%",
        borderRadius: 12,
        backgroundColor: "#1F6B64",
        alignItems: "center",
        justifyContent: "center",
    },
    touchableBelow: {
        paddingBottom: 3,
        marginVertical: 5,
        width: "90%",
        height: "35%",
        borderRadius: 12,
        backgroundColor: "rgba(10, 10, 10, 0.5)",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    viewButton: {
        paddingTop: "17%",
        flex: 1,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
    scrollView: {
        // borderWidth: 1,
        width: "80%",
        height: "60%",
        marginTop: 20,
    },
});
