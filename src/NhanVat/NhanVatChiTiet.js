import { StatusBar } from "expo-status-bar";
import {
    Button,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import images from "./ImportImage";
import { useNavigation } from "@react-navigation/native";
import play from "../../assets/play.png";
import mute from "../../assets/mute.png";
import Sounds from "./ImportSounds";
import { useEffect, useState } from "react";
import { Audio } from "expo-av";

export default function NhanVatChiTiet() {
    const data = useRoute().params;
    const navigator = useNavigation();

    const [sound, setSound] = useState();

    async function playSound(controller, sName) {
        console.log(sName);

        const { sound } = await Audio.Sound.createAsync(Sounds[sName]);
        setSound(sound);
        console.log("Playing Sound");
        if (controller == "play") await sound.playAsync();
        else await sound.pauseAsync();
    }

    useEffect(() => {
        return sound
            ? () => {
                  console.log("Unloading Sound");
                  sound.unloadAsync();
              }
            : undefined;
    }, [sound]);

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                    style={{
                        borderWidth: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 30,
                        width: 50,
                        height: 50,
                        backgroundColor: "green",
                        marginRight: 5,
                    }}
                >
                    <Text style={{ fontSize: 15, color: "white" }}>
                        {data.id}
                    </Text>
                </View>
                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        maxWidth: "80%",
                    }}
                >
                    {data.hoVaTen}
                </Text>
            </View>
            <Image style={styles.img} source={images[data.id]} />
            <View style={{ flex: 5, alignItems: "center" }}>
                <ScrollView>
                    <Text
                        style={{
                            textAlign: "justify",
                            paddingHorizontal: 5,
                            fontSize: 18,
                        }}
                    >
                        {data.content}
                    </Text>
                </ScrollView>
            </View>
            <View
                style={{
                    flex: 1,
                    justifyContent: "space-around",
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <TouchableOpacity onPress={() => playSound("play", data.id)}>
                    <Image source={play} style={styles.sound} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => playSound(".", data.id)}>
                    <Image source={mute} style={styles.sound} />
                </TouchableOpacity>
                <Button title="Quay lại" onPress={() => navigator.goBack()} />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: "gray",
        padding: 15,
    },
    img: {
        width: "100%",
        height: "60%",
        marginVertical: 5,
    },
    sound: {
        width: 30,
        height: 30,
    },
});
