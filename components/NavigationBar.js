import * as React from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function navigationBar({select}) {
    const navigation = useNavigation();

    return (
    <>
    
    <View style={styles.frameView}>
            <Pressable
            style={[styles.iconPressable, select==1 && styles.iconBack]}
            onPress={() => navigation.navigate("MainPage")}
            >
              <Image
                  style={styles.homeIcon}
                  resizeMode="cover"
                  source={require("../assets/home.png")} />
            </Pressable>
            <Pressable
                style={[styles.iconPressable, select==2 && styles.iconBack]}
                onPress={() => navigation.navigate("OverallStylerReservation")}
            >
                <Image
                    style={styles.icon}
                    resizeMode="cover"
                    source={require("../assets/timetable.png")} />
            </Pressable>
            <Pressable
                style={[styles.iconPressable, select==3 && styles.iconBack]}
                onPress={() => navigation.navigate("MyCloset")}
            >
                <Image
                    style={styles.icon1}
                    resizeMode="cover"
                    source={require("../assets/closet.png")} />
            </Pressable>
            <Pressable
                style={[styles.iconPressable, select==4 && styles.iconBack]}
                onPress={() => navigation.navigate("MyPage")}
            >
                <Image
                    style={styles.icon2}
                    resizeMode="cover"
                    source={require("../assets/user.png")} />
            </Pressable>
        </View></>
    );
};

const styles = StyleSheet.create ({
    mt4: {
        marginTop: 6,
      },
      ml74: {
        marginLeft: 74,
      },
      ml24: {
        marginLeft: 24,
      },
      container9Overlay: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(113, 113, 113, 0.3)",
      },
      container9Bg: {
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
      },
      frameIcon: {
        position: "relative",
        width: 40,
        height: 40,
        flexShrink: 0,
        overflow: "hidden",
      },
      view: {
        position: "absolute",
        top: 19,
        left: 332,
        borderRadius: 8,
        borderStyle: "solid",
        borderColor: "rgba(237, 237, 237, 0.1)",
        borderWidth: 1,
        width: 42,
        height: 42,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      },
      navigationBarView: {
        position: "relative",
        top: 30,
        left: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "#fff",
        shadowColor: "rgba(0, 0, 0, 0.06)",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowRadius: 40,
        elevation: 40,
        shadowOpacity: 1,
        width: 415,
        height: 93,
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
        position: "",
        width: '100%',
        height: '100%',
        left:0,
        bottom: 0,
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 0,
        boxSizing: "border-box",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "white"
      },
      rectangleView: {
        position: "absolute",
        top: -4,
        left: 4.5,
        borderRadius: 10,
        backgroundColor: "rgba(165, 0, 52, 0.2)",
        width: 34,
        height: 34,
      },
      view2: {
        position: "absolute",
        top: 771,
        left: 0,
        width: 390,
        height: 73,
      },
      rectangleView1: {
        position: "absolute",
        top: 105,
        left: 0,
        backgroundColor: "#a50034",
        width: 600,
        height: 333,
      },
      rectangleView2: {
        position: "absolute",
        top: 68.84,
        left: 477.67,
        width: 487.67,
        height: 52.2,
        transform: [
          {
            rotate: "128.22deg",
          },
        ],
        opacity: 0.8,
      },
      rectangleView3: {
        position: "absolute",
        top: 34.07,
        left: 357.42,
        width: 513.83,
        height: 52.2,
        transform: [
          {
            rotate: "128.22deg",
          },
        ],
        opacity: 0.8,
      },
      view3: {
        position: "absolute",
        top: -105,
        left: -13.42,
        width: 477.67,
        height: 452,
      },
      text2: {
        position: "relative",
        fontSize: 22,
        lineHeight: 30,
        fontWeight: "700",
     
        color: "#fff",
        textAlign: "left",
        width: 200,
        height: 30,
      },
      oOOText1: {
        position: "relative",
        fontSize: 52,
        lineHeight: 50,
        fontWeight: "800",
     
        color: "#fff",
        textAlign: "left",
        width: 200,
        height: 40,
      },
      view4: {
        position: "absolute",
        top: 70,
        left: 31,
        width: 147,
        height: 39,
        flexDirection: "column",
      },
      brokenEssentionalUITS: {
        position: "absolute",
        top: 171,
        left: 218,
        width: 20,
        height: 19,
        overflow: "hidden",
      },
      text3: {
        position: "absolute",
        top: 171,
        left: 68,
        fontSize: 15,
        letterSpacing: -1.5,
        fontWeight: "700",
        color: "#fff",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        width: 96,
      },
      text4: {
        position: "absolute",
        top: 171,
        left: 241,
        fontSize: 15,
        letterSpacing: -1.5,
        fontWeight: "700",
        color: "#fff",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        width: 96,
      },
      bulletListIcon: {
        position: "absolute",
        top: 171,
        left: 45,
        width: 20,
        height: 19,
        overflow: "hidden",
      },
      rectangleView4: {
        position: "absolute",
        top: 15,
        left: 10,
        borderRadius: 20,
        backgroundColor: "#fff",
        width: 154,
        height: 119,
      },
      text5: {
        position: "absolute",
        top: 15,
        left: 15,
        fontSize: 25,
        letterSpacing: -1,
        fontWeight: "700",
        color: "#a50034",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        width: 118.93,
        height: 30,
      },
      may2021Text: {
        flex: 1,
        position: "relative",
        fontSize: 11,
        color: "#cfd5e2",
        textAlign: "left",
      },
      text6: {
        flex: 1,
        position: "relative",
        fontSize: 11,
        fontWeight: "500",
        color: "#6f7277",
        textAlign: "left",
      },
      clistView: {
        position: "absolute",
        top: 50,
        left: 15,
        width: 123.64,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
      },
      may2021Text1: {
        flex: 1,
        position: "relative",
        fontSize: 11,
        color: "#cfd5e2",
        textAlign: "left",
      },
      text7: {
        flex: 1,
        position: "relative",
        fontSize: 11,
        fontWeight: "500",
        color: "#6f7277",
        textAlign: "left",
      },
      clistView1: {
        position: "absolute",
        top: 65,
        left: 15,
        width: 123.59,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
      },
      may2021Text2: {
        flex: 1,
        position: "relative",
        fontSize: 11,
        color: "#cfd5e2",
        textAlign: "left",
      },
      text8: {
        flex: 1,
        position: "relative",
        fontSize: 11,
        fontWeight: "500",
        color: "#6f7277",
        textAlign: "left",
      },
      clistView2: {
        position: "absolute",
        top: 80,
        left: 15,
        width: 123.82,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
      },
      groupView: {
        position: "absolute",
        top: 19,
        left: 13,
        width: 129,
        height: 80.39,
      },
      view5: {
        position: "absolute",
        top: 180,
        left: 205,
        width: 154,
        height: 119,
      },
      rectangleView5: {
        position: "absolute",
        top: 15,
        left: 10,
        borderRadius: 20,
        backgroundColor: "#fff",
        width: 154,
        height: 119,
      },
      text9: {
        position: "absolute",
        top: 32,
        left: 25,
        fontSize: 25,
        letterSpacing: -1,
        fontWeight: "700",
        color: "#a50034",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        width: 118.93,
        height: 29,
      },
      may2021Text3: {
        flex: 1,
        position: "relative",
        fontSize: 11,
        color: "#cfd5e2",
        textAlign: "left",
      },
      text10: {
        flex: 1,
        position: "relative",
        fontSize: 11,
        fontWeight: "500",
        color: "#6f7277",
        textAlign: "left",
      },
      clistView3: {
        position: "absolute",
        top: 70,
        left: 25,
        width: 123.64,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        transform: [
          {
            rotate: "-0.18deg",
          },
        ],
      },
      may2021Text4: {
        flex: 1,
        position: "relative",
        fontSize: 11,
        color: "#cfd5e2",
        textAlign: "left",
      },
      text11: {
        flex: 1,
        position: "relative",
        fontSize: 11,
        fontWeight: "500",
        color: "#6f7277",
        textAlign: "left",
      },
      clistView4: {
        position: "absolute",
        top: 85,
        left: 25,
        width: 123.59,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
      },
      may2021Text5: {
        flex: 1,
        position: "relative",
        fontSize: 11,
        color: "#cfd5e2",
        textAlign: "left",
      },
      text12: {
        flex: 1,
        position: "relative",
        fontSize: 11,
        fontWeight: "500",
        color: "#6f7277",
        textAlign: "left",
      },
      clistView5: {
        position: "absolute",
        top: 100,
        left: 26,
        width: 123.82,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
      },
      groupView1: {
        position: "absolute",
        top: 0,
        left: 0,
        width: 154,
        height: 119,
      },
      view6: {
        position: "absolute",
        top: 180,
        left: 31,
        width: 154,
        height: 119,
      },
      wardrobeRenovationWinter1Icon: {
        position: "absolute",
        top: 0,
        left: 0,
        borderRadius: 24,
        width: 353,
        height: 179,
        opacity: 0.4,
      },
      stylerReservationText: {
        position: "absolute",
        top: 20,
        left: 20,
        fontSize: 35,
        letterSpacing: -0.5,
        fontWeight: "700",
        color: "#a50034",
        textAlign: "left",
      },
      text15: {
        position: "absolute",
        bottom: 22,
        left: 20,
        fontSize: 15,
        letterSpacing: -1.2,
        width: 200,
        color: "#1e1d1d",
        textAlign: "left",
      },
      pressable: {
        position: "absolute",
        top: 370,
        left: 31,
        borderRadius: 24,
        backgroundColor: "#fff",
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowRadius: 4,
        elevation: 4,
        shadowOpacity: 1,
        borderStyle: "solid",
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 1,
        width: 355,
        height: 180,
      },
      icon3: {
        position: "absolute",
        top: 0,
        left: 0,
        borderRadius: 24,
        width: 352,
        height: 179,
        opacity: 0.4,
      },
      stylingReservationText: {
        position: "absolute",
        top: 21,
        left: 20,
        fontSize: 35,
        letterSpacing: -0.5,
        fontWeight: "700",
        color: "#a50034",
        textAlign: "left",
      },
      text18: {
        position: "absolute",
        bottom: 22,
        left: 20,
        fontSize: 15,
        letterSpacing: -1.2,
        width: 200,
        color: "#1e1d1d",
        textAlign: "left",
      },
      pressable1: {
        position: "absolute",
        top: 575,
        left: 31,
        borderRadius: 24,
        backgroundColor: "#fff",
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowRadius: 4,
        elevation: 4,
        shadowOpacity: 1,
        borderStyle: "solid",
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 1,
        width: 355,
        height: 180,
      },
      mainPageView: {
        position: "relative",
        backgroundColor: "#fff",
        borderStyle: "solid",
        borderColor: "#000",
        borderWidth: 1,
        flex: 1,
        width: "100%",
        height: 844,
        overflow: "hidden",
      },
      iconBack: {
        
        backgroundColor: "rgba(165, 0, 52, 0.2)",
      }
});
