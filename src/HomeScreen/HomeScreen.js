import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
} from "react-native";
import VietNamBG from "../../assets/vietnam.png";
import LichSuBG from "../../assets/lichsu.png";
import book from "../../assets/icon/book.png";
import flag from "../../assets/icon/flag.png";
import muquan from "../../assets/icon/muquan.png";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
    const Navigation = useNavigation();
    const onPress = (icon) => {
        //console.warn(icon);
        Navigation.navigate(icon);
    };

    const Hello = ({ text, icon }) => {
        const iconstyle = {
            width: 35,
            height: icon === "vietnam" ? 64 : 35,
        };
        var image;
        switch (icon) {
            case "book": {
                image = book;
                break;
            }
            case "flag": {
                image = flag;
                break;
            }
            case "vietnam": {
                image = VietNamBG;
                break;
            }
            case "muquan": {
                image = muquan;
                break;
            }
        }

        return (
            <TouchableOpacity
                onPress={() => onPress(icon)}
                style={styles.touchableBelow}
            >
                <View style={styles.touchableAbove}>
                    <Image style={iconstyle} source={image} />
                    <Text style={styles.text}>{text}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <ImageBackground style={styles.container} source={LichSuBG}>
            <View style={styles.view1}>
                <View style={styles.viewtitle}>
                    <Text style={styles.text}>LỊCH SỬ VIỆT NAM</Text>
                    <View
                        style={{
                            flexDirection: "row",
                            width: 60,
                            justifyContent: "space-between",
                        }}
                    >
                        <Ionicons
                            name="notifications"
                            size={24}
                            color="black"
                            onPress={() => onPress("ThongBao")}
                        />
                        <Ionicons
                            name="settings-sharp"
                            size={24}
                            color="black"
                            onPress={() => onPress("CaiDat")}
                        />
                    </View>
                </View>
            </View>

            <View style={styles.view2}>
                <Hello text="Thời Kỳ Lịch Sử" icon="vietnam" />
                <Hello text="Triều Đại và Quốc Hiệu" icon="flag" />
                <Hello text="Các Nhân Vật Lịch Sử" icon="muquan" />
                <Hello text="Câu Chuyện Lịch Sử" icon="book" />
                <Image source={VietNamBG} style={styles.img} />
            </View>
            <StatusBar style="auto" backgroundColor="#CCEDD4" />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
    img: {
        width: "25%",
        height: "25%",
        marginBottom: 80,
    },
    text: {
        fontSize: 25,
        paddingLeft: 8,
        fontWeight: "bold",
    },
    touchableAbove: {
        paddingHorizontal: 15,
        width: "100%",
        height: "100%",
        borderRadius: 12,
        backgroundColor: "rgba(200, 200, 200, 0.9)",
        flexDirection: "row",
        alignItems: "center",
    },
    touchableBelow: {
        paddingBottom: 4,
        margin: 5,
        width: "90%",
        height: "10%",
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
    view1: {
        backgroundColor: "#CCEDD4",
        width: "100%",
        height: "10%",
    },
    viewtitle: {
        flex: 1,
        backgroundColor: "#f5fabe",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 25,
        justifyContent: "space-between",
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
    },
    view2: {
        width: "100%",
        height: "90%",
        alignItems: "center",
        justifyContent: "center",
    },
});
