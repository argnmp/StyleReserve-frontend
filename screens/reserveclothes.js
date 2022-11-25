import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Pressable, Modal, Text, TextInput } from "react-native";
import Alarmcenterbanner from "../components/Alarmcenterbanner";
import { useNavigation } from "@react-navigation/native";
import Signupbanner2 from "../components/signupbanner2";

const ReserveClothes = () => {
  const [notificationContainerVisible, setNotificationContainerVisible] =
    useState(false);
  const navigation = useNavigation();
  const [container3Visible, setContainer3Visible] = useState(false);
  const [date, setdate] = useState();{/*수정*/}
  const [memo, setmemo] = useState();{/*수정*/}


  const openNotificationContainer = useCallback(() => {
    setNotificationContainerVisible(true);
  }, []);

  const closeNotificationContainer = useCallback(() => {
    setNotificationContainerVisible(false);
  }, []);

  const openContainer3 = useCallback(() => {
    setContainer3Visible(true);
  }, []);

  const closeContainer3 = useCallback(() => {
    setContainer3Visible(false);
  }, []);
  return (
    <>
      <View style={styles.reserveClothesView}>
        <View style={styles.menuView}>
          <Pressable
            style={styles.notificationPressable}
            onPress={openNotificationContainer}
          >
            <View style={styles.rectangleView} />
            <Image
              style={styles.notificationIcon}
              resizeMode="cover"
              source={require("../assets/notification.png")}
            />
          </Pressable>
          <Pressable
            style={styles.pressable}
            onPress={() => navigation.navigate("PersonalStylingCalender")}
          >
            <View style={styles.rectangleView1} />
            <Image
              style={styles.arrowLeft}
              resizeMode="cover"
              source={require("../assets/left-arrow.png")}
            />
          </Pressable>
          <View style={styles.view}>
            <Text style={styles.wed15SeptemperText}>Add Schedule</Text>
          </View>
        </View>

        <View style={styles.rectangleView2} />
        <TextInput style={styles.text}
        placeholder="2022.12.08 금요일"
        onChangeText={newText => setdate(newText)}
        />{/*수정*/}
        <View style={styles.rectangleView3} />
        <TextInput style={styles.text1}
        placeholder="메모를 입력하세요"
        onChangeText={newText => setmemo(newText)}
        />{/*수정*/}
        <Text style={styles.text2}>블랙 레더 자켓</Text>
        <Text style={styles.text3}>예약일자</Text>
        <Text style={styles.text4}>메모</Text>



        <Image
          style={styles.jacket3Icon}
          resizeMode="cover"
          source={require("../assets/big-black-leather.png")}
        />
        <View style={styles.view1}>
          <View style={styles.navigationBarView} />
          <View style={styles.rectangleView4} />
          <View style={styles.frameView}>
            <Pressable
              style={styles.brokenEssentionalUIHom}
              onPress={() => navigation.navigate("MainPage")}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/home.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.calendarPressable, styles.ml74]}
              onPress={() => navigation.navigate("OverallStylerReservation")}
            >
              <Image
                style={styles.icon1}
                resizeMode="cover"
                source={require("../assets/timetable.png")}
              />
            </Pressable>
            <Image
              style={[styles.boldEssentionalUIHange, styles.ml74]}
              resizeMode="cover"
              source={require("../assets/hanger2.png")}
            />
            <Pressable
              style={[styles.userPressable, styles.ml74]}
              onPress={() => navigation.navigate("MyPage")}
            >
              <Image
                style={styles.icon2}
                resizeMode="cover"
                source={require("../assets/user.png")}
              />
            </Pressable>
          </View>
        </View>
        <Pressable style={styles.pressable1} onPress={openContainer3}>
          <View style={styles.rectangleView5} />
          <Text style={styles.text5}>예약 완료하기</Text>
        </Pressable>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={notificationContainerVisible}
      >
        <View style={styles.notificationContainerOverlay}>
          <Pressable
            style={styles.notificationContainerBg}
            onPress={closeNotificationContainer}
          />
          <Alarmcenterbanner onClose={closeNotificationContainer} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={container3Visible}>
        <View style={styles.container3Overlay}>
          <Pressable style={styles.container3Bg} onPress={closeContainer3} />
          <Signupbanner2 onClose={closeContainer3} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  notificationContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  notificationContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  ml74: {
    marginLeft: 74,
  },
  container3Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  container3Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 14,
    },
    shadowRadius: 96,
    elevation: 96,
    shadowOpacity: 1,
    width: 40,
    height: 40,
  },
  notificationIcon: {
    position: "absolute",
    height: "48.48%",
    width: "48.48%",
    top: "27.27%",
    right: "24.24%",
    bottom: "24.24%",
    left: "27.27%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  notificationPressable: {
    position: "absolute",
    top: 0,
    left: 288,
    width: 40,
    height: 40,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 14,
    },
    shadowRadius: 96,
    elevation: 96,
    shadowOpacity: 1,
    width: 40,
    height: 40,
  },
  arrowLeft: {
    position: "absolute",
    top: 10,
    left: 10,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  pressable: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  wed15SeptemperText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 20,
 
    color: "#a50034",
    textAlign: "center",
  },
  view: {
    position: "absolute",
    top: 9,
    left: 103,
    width: 123,
    height: 23,
  },
  menuView: {
    position: "absolute",
    top: 53,
    left: 31,
    width: 328,
    height: 40,
  },
  rectangleView2: {
    position: "absolute",
    top: 522,
    left: 31,
    borderRadius: 15,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#b5b5b5",
    borderWidth: 1,
    width: 328,
    height: 42,
  },
  text: {
    position: "absolute",
    top: 536,
    left: 46,
    fontSize: 15,
 
    color: "#000",
    textAlign: "left",
  },
  rectangleView3: {
    position: "absolute",
    top: 601,
    left: 31,
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: "#b5b5b5",
    borderWidth: 1,
    width: 328,
    height: 67,
  },
  text1: {
    position: "absolute",
    top: 613,
    left: 46,
    fontSize: 15,
 
    color: "#c7c7c7",
    textAlign: "left",
  },
  text2: {
    position: "absolute",
    top: 450,
    left: 27,
    fontSize: 20,
    letterSpacing: -0.3,
    fontWeight: "700",
 
    color: "#323232",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 209,
    height: 25,
  },
  text3: {
    position: "absolute",
    top: 503,
    left: 31,
    fontSize: 12,
    letterSpacing: -0.3,
    fontWeight: "700",
 
    color: "#a50034",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 63,
    height: 13,
  },
  text4: {
    position: "absolute",
    top: 580,
    left: 31,
    fontSize: 12,
    letterSpacing: -0.3,
    fontWeight: "700",
 
    color: "#a50034",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 63,
    height: 13,
  },
  jacket3Icon: {
    position: "absolute",
    top: 109,
    left: 80,
    borderRadius: 15,
    width: 250,
    height: 270,
  },
  navigationBarView: {
    position: "absolute",
    top: 0,
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
    width: 386,
    height: 73,
  },
  rectangleView4: {
    position: "absolute",
    top: 17,
    left: 224.67,
    borderRadius: 10,
    backgroundColor: "rgba(165, 0, 52, 0.2)",
    width: 33.65,
    height: 34,
  },
  icon: {
    width: "100%",
    height: "100%",
    flexShrink: 0,
    overflow: "hidden",
  },
  brokenEssentionalUIHom: {
    position: "relative",
    width: 24,
    height: 24,
  },
  icon1: {
    borderRadius: 5,
    width: "100%",
    height: "100%",
    flexShrink: 0,
    overflow: "hidden",
  },
  calendarPressable: {
    position: "relative",
    width: 24,
    height: 24,
  },
  boldEssentionalUIHange: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  icon2: {
    width: "100%",
    height: "100%",
    flexShrink: 0,
    overflow: "hidden",
  },
  userPressable: {
    position: "relative",
    width: 24,
    height: 24,
  },
  frameView: {
    position: "absolute",
    top: 21,
    left: 25.73,
    width: 334.53,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  view1: {
    position: "absolute",
    top: 769,
    left: 3,
    width: 386,
    height: 73,
  },
  rectangleView5: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 50,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: "rgba(165,0,52,1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 181,
    height: 40,
  },
  text5: {
    position: "absolute",
    top: 12.38,
    left: 26,
    fontSize: 16,
    letterSpacing: -0.8,
 
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 128.53,
    height: 16.19,
  },
  pressable1: {
    position: "absolute",
    top: 699,
    left: 105,
    width: 181,
    height: 40,
  },
  reserveClothesView: {
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
});

export default ReserveClothes;