import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    FlatList,
    TouchableOpacity,
    Image,
    ScrollView,
    ImageBackground,
} from "react-native";
import { useEffect, useState } from "react";
import dynasty from "../../assets/database/dynasty.json";
import play from "../../assets/play.png";
import mute from "../../assets/mute.png";
import Sounds from "./ImportSound";
import { Audio } from "expo-av";
import bg from "../../assets/background.jpg";
import images from "./Images";

export default function TrieuDai() {
    const data = dynasty.dynasty;
    const [sound, setSound] = useState();

    const TrieuDai = (item) => {
        // console.log(item);

        async function playSound(controller, sName) {
            // console.log(sName);

            const { sound } = await Audio.Sound.createAsync(Sounds[sName]);
            setSound(sound);
            // console.log("Playing Sound");
            if (controller == "play") await sound.playAsync();
            else await sound.pauseAsync();
        }

        useEffect(() => {
            return sound
                ? () => {
                      //   console.log("Unloading Sound");
                      sound.unloadAsync();
                  }
                : undefined;
        }, [sound]);

        return (
            <ImageBackground source={bg} style={styles.trieuDaiView}>
                <View style={styles.mainView}>
                    <View style={{ width: "100%", height: "95%" }}>
                        <Text style={styles.title}>{item.text.name}</Text>
                        <Image
                            source={images[item.text.id]}
                            style={{ width: "100%", height: "30%" }}
                        />
                        <ScrollView>
                            <Text style={styles.content}>
                                {item.text.content}
                            </Text>
                        </ScrollView>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                playSound("play", item.text.sound);
                            }}
                        >
                            <Image style={styles.icon} source={play} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => playSound(".", item.text.sound)}
                        >
                            <Image style={styles.icon} source={mute} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text>Kéo sang phải để xem tiếp</Text>
            </ImageBackground>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => <TrieuDai text={item} />}
                keyExtractor={(item) => item.id}
                snapToAlignment="start"
                decelerationRate={"fast"}
                snapToInterval={Dimensions.get("window").width}
                horizontal
            />

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#89B3F6",
    },
    trieuDaiView: {
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        alignItems: "center",
        paddingTop: 5,
    },
    mainView: {
        width: "90%",
        height: "85%",
        borderRadius: 15,
        padding: 10,
        backgroundColor: "rgba(72, 115, 8, 0.6)",
        borderWidth: 1,
        borderColor: "gray",
    },
    title: {
        fontSize: 18,
        // color: "white",
        fontWeight: "bold",
        textDecorationLine: "underline",
    },
    icon: {
        width: 30,
        height: 30,
        marginHorizontal: 20,
    },
    content: {
        fontSize: 20,
        textAlign: "justify",
        paddingHorizontal: 10,
        paddingTop: 1,
        // color: "white",
    },
});
