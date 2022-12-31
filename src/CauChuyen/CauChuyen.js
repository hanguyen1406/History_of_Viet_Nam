import { StatusBar } from "expo-status-bar";
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import data from "../../assets/database/storys.json";
import bg from "../../assets/cauchuyen_bg.jpg";

export default function CauChuyen() {
    const navigator = useNavigation();

    const OnPress = (data) => {
        navigator.navigate("cauchuyen", data);
    };

    const Story = (item) => {
        return (
            <View
                style={{
                    width: "100%",
                    height: 70,
                    marginVertical: 10,
                }}
            >
                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        borderWidth: 1,
                        width: "100%",
                        height: "100%",
                        borderRadius: 15,
                        backgroundColor: "gray",

                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 4,
                        },
                        shadowOpacity: 0.3,
                        shadowRadius: 4.65,

                        elevation: 8,
                    }}
                    onPress={() => OnPress(item.item)}
                >
                    <View
                        style={{
                            width: 30,
                            height: 30,
                            borderWidth: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 20,
                            backgroundColor: "pink",
                            marginHorizontal: 10,
                            borderColor: "white",
                        }}
                    >
                        <Text style={{ fontSize: 15 }}>{item.item.id}</Text>
                    </View>
                    <Text
                        style={{ maxWidth: "80%", color: "#fff" }}
                        numberOfLines={1}
                    >
                        {item.item.name}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <ImageBackground source={bg} style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => <Story item={item} />}
            />
            <StatusBar style="auto" />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        alignItems: "center",
    },
});
