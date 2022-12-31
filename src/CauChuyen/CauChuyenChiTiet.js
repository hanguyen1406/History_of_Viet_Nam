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
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import data from "./ImportImages";
import play from "../../assets/play.png";
import mute from "../../assets/mute.png";
import { useEffect, useState } from "react";
import { Audio } from "expo-av";
import Sounds from "./Sounds";

export default function CauChuyenChiTiet() {
    const story = useRoute().params;
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
            <View
                style={{
                    width: "100%",
                    height: 30,
                }}
            ></View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                    style={{
                        width: 30,
                        height: 30,
                        borderWidth: 1,
                        borderRadius: 20,
                        textAlign: "center",
                        margin: 10,
                        padding: 5,
                        backgroundColor: "#b2e86f",
                        borderColor: "white",
                    }}
                >
                    {story.id}
                </Text>
                <Text
                    style={{
                        fontWeight: "bold",
                        textDecorationLine: "underline",
                    }}
                    numberOfLines={1}
                >
                    {story.name}
                </Text>
            </View>

            <View style={{ alignItems: "center", marginBottom: 5 }}>
                <Image
                    style={{ width: 350, height: 250 }}
                    source={data[story.image]}
                />
            </View>
            <View style={{ flex: 9, paddingHorizontal: 15 }}>
                <ScrollView>
                    <Text
                        style={{
                            textAlign: "justify",
                            fontSize: 20,
                            color: "#fff",
                        }}
                    >
                        {story.content}
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
                <TouchableOpacity onPress={() => playSound("play", story.id)}>
                    <Image source={play} style={styles.sound} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => playSound(".", story.id)}>
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
        backgroundColor: "#615837",
    },
    sound: {
        width: 30,
        height: 30,
    },
});
