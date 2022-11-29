import * as React from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function navigationBar({select}) {
    const navigation = useNavigation();

    return (
    
      <View style={styles.frameView}>
        <Pressable
          style={[styles.iconPressable, select == 1 && styles.iconBack]}
          onPress={() => navigation.navigate("MainPage")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/home.png")} />
        </Pressable>
        <Pressable
          style={[styles.iconPressable, select == 2 && styles.iconBack]}
          onPress={() => navigation.navigate("StylerReservation")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/timetable.png")} />
        </Pressable>
        <Pressable
          style={[styles.iconPressable, select == 3 && styles.iconBack]}
          onPress={() => navigation.navigate("MyCloset")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/closet.png")} />
        </Pressable>
        <Pressable
          style={[styles.iconPressable, select == 4 && styles.iconBack]}
          onPress={() => navigation.navigate("MyPage")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/user.png")} />
        </Pressable>
      </View>
    );
};

const styles = StyleSheet.create ({
      frameIcon: {
        position: "relative",
        width: 40,
        height: 40,
        flexShrink: 0,
        overflow: "hidden",
      },
      homeIcon: {
        position: "relative",
        width: 24,
        height: 24,
        flexShrink: 0,
        overflow: "hidden",
      },
      icon: {
        borderRadius: 5,
        width: "100%",
        height: "100%",
        flexShrink: 0,
        overflow: "hidden",
      },
      icon1: {
        width: "100%",
        height: "100%",
        flexShrink: 0,
        overflow: "hidden",
      },
      iconPressable: {
        position: "relative",
        width: 24,
        height: 24,
      },
      icon2: {
        width: "100%",
        height: "100%",
        flexShrink: 0,
        overflow: "hidden",
      },
      frameView: {
        width: '100%',
        height: 80,
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 0,
        boxSizing: "border-box",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "white"
      },
      iconBack: {
        
        backgroundColor: "rgba(165, 0, 52, 0.2)",
      }
});
