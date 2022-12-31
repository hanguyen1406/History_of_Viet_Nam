import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import data from "../../assets/database/priod.json";
import nguoitiensu from "../../assets/nguoitiensu.jpg";
import KyHongBang from "../../assets/KyHongBang.jpg";
import ThoiBacThuoc from "../../assets/ThoiBacThuoc.png";
import ThoiQuanChu from "../../assets/ThoiQuanChu.png";
import ThoiHienDai from "../../assets/ThoiHienDai.png";
import bg from "../../assets/bg.png";
import { useNavigation } from "@react-navigation/native";

export default function ThoiKy() {
    const Navigation = useNavigation();
    const onPress = (item) => {
        Navigation.navigate("ThoiKyChiTiet", item);
    };

    const Object = (item) => {
        var image;
        switch (item.name) {
            case "Thời kỳ tiền sử": {
                image = nguoitiensu;
                break;
            }
            case "Thời kỳ cổ đại (2879 - 111 TCN)": {
                image = KyHongBang;
                break;
            }
            case "Thời kỳ Bắc thuộc (179 TCN - 938 SCN)": {
                image = ThoiBacThuoc;
                break;
            }
            case "Thời kỳ quân chủ (939 - 1945)": {
                image = ThoiQuanChu;
                break;
            }
            case "Thời kỳ hiện đại (1858 - nay)": {
                image = ThoiHienDai;
                break;
            }
        }

        return (
            <TouchableOpacity
                key={item.num}
                style={styles.contain}
                onPress={() => onPress(item)}
            >
                <View style={[styles.num, { backgroundColor: item.color }]}>
                    <Text style={styles.numtext}>{item.num}</Text>
                </View>
                <View style={styles.object}>
                    <Text style={styles.text}>{item.name}</Text>
                    <ImageBackground
                        style={{
                            flex: 1,
                        }}
                        source={image}
                    />
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <ImageBackground style={styles.container} source={bg}>
            {data.period.map((item) => Object(item))}
            <StatusBar style="auto" />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
    },
    object: {
        width: "85%",
        height: "100%",
        flexDirection: "row",
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        paddingLeft: 8,
        backgroundColor: "#F6F1DA",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 10,
    },
    contain: {
        width: "100%",
        height: 120,
        marginVertical: 5,
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        maxWidth: 80,
        fontStyle: "italic",
        fontWeight: "bold",
        marginTop: 8,
    },
    image: {
        borderRadius: 20,
    },
    num: {
        borderWidth: 1,
        width: 30,
        height: 30,
        marginLeft: 10,
        margin: 4,
        alignItems: "center",
        borderRadius: 30,
        borderColor: "whitesmoke",
    },
    numtext: {
        color: "black",
        fontSize: 20,
    },
});
