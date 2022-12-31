import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../HomeScreen/HomeScreen";
import ThoiKy from "../ThoiKy/ThoiKy";
import CauChuyen from "../CauChuyen/CauChuyen";
import NhanVat from "../NhanVat/NhanVat";
import TrieuDai from "../TrieuDai/TrieuDai";
import ThoiKyChiTiet from "../ThoiKyChiTiet/ThoiKyChiTiet";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import Setting from "../Setting/Setting";
import Notification from "../Notification/Notification";
import ReadAndListen from "../ReadAndListen/ReadAndListen";
import NhanVatChiTiet from "../NhanVat/NhanVatChiTiet";
import CauChuyenChiTiet from "../CauChuyen/CauChuyenChiTiet";

const Stack = createNativeStackNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    animation: "fade_from_bottom",
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="vietnam"
                    component={ThoiKy}
                    options={{
                        title: "Thời Kỳ Lịch Sử",
                        headerStyle: {
                            backgroundColor: "#B3D5AE",
                        },
                    }}
                />
                <Stack.Screen
                    name="flag"
                    component={TrieuDai}
                    options={{
                        title: "Triều Đại và Quốc Hiệu",
                        headerStyle: {
                            backgroundColor: "#70B2A8",
                        },
                    }}
                />

                <Stack.Screen
                    name="book"
                    component={CauChuyen}
                    options={{
                        title: "Câu Chuyện Lịch Sử",
                        headerStyle: {
                            backgroundColor: "#acd177",
                        },
                    }}
                />
                <Stack.Screen
                    name="ThoiKyChiTiet"
                    component={ThoiKyChiTiet}
                    options={({ route }) => ({
                        title: route.params.title,
                        headerStyle: {
                            backgroundColor: "#5B9976",
                        },
                    })}
                />
                <Stack.Screen
                    name="CaiDat"
                    component={Setting}
                    options={{
                        title: "Cài Đặt",
                    }}
                />
                <Stack.Screen
                    name="ThongBao"
                    component={Notification}
                    options={{
                        title: "Thông Báo!!!",
                    }}
                />
                <Stack.Screen
                    name="Doc"
                    component={ReadAndListen}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="muquan"
                    component={NhanVat}
                    options={{
                        title: "Các Nhân Vật Lịch Sử",
                        headerStyle: {
                            backgroundColor: "#696643",
                        },
                    }}
                />
                <Stack.Screen
                    name="nhanvat"
                    component={NhanVatChiTiet}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="cauchuyen"
                    component={CauChuyenChiTiet}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        // alignItems: "center",
        // justifyContent: "center",
        borderWidth: 1,
    },
});
