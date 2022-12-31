import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { useState, useEffect } from "react";
import play from "../../assets/play.png";
import mute from "../../assets/mute.png";
import Sounds from "../TrieuDai/ImportSound";
import images from "./Images";

export default function ReadAndListen() {
    const data = useRoute().params;
    const navigator = useNavigation();

    const [sound, setSound] = useState();

    async function playSound(controller, sName) {
        // console.log(sName);

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

    const goBack = () => {
        navigator.goBack();
    };

    return (
        <View style={styles.container} key={data.name}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => goBack()}
                    style={{ width: "15%" }}
                >
                    <Ionicons name="arrow-back" size={25} color="black" />
                </TouchableOpacity>
                <View
                    style={{
                        width: "85%",
                        height: "100%",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "bold",
                        }}
                    >
                        {data.namesmall}
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity
                            onPress={() => playSound("play", data.sound)}
                        >
                            <Image style={styles.icon} source={play} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => playSound(".", data.sound)}
                        >
                            <Image style={styles.icon} source={mute} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.contain}>
                <Image
                    source={images[data.image]}
                    style={{ width: "100%", height: "30%" }}
                />
                <ScrollView>
                    <Text
                        style={{
                            fontSize: 20,
                            textAlign: "justify",
                        }}
                    >
                        {data.content}
                    </Text>
                </ScrollView>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#989974",
    },
    header: {
        width: "100%",
        height: "10%",
        backgroundColor: "#b9deb6",
        alignItems: "center",
        paddingLeft: 15,
        paddingTop: 25,
        flexDirection: "row",
    },
    contain: {
        width: "100%",
        height: "90%",
        justifyContent: "center",
        padding: 20,
    },
    icon: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
});
