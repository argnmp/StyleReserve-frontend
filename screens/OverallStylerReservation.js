import * as React from "react";
import { useState, useCallback } from "react";
import { Text, StyleSheet, View, Image, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Alarmcenterbanner from "../components/Alarmcenterbanner";

const OverallStylerReservation = () => {
  const [notificationContainer1Visible, setNotificationContainer1Visible] =
    useState(false);
  const navigation = useNavigation();

  const openNotificationContainer1 = useCallback(() => {
    setNotificationContainer1Visible(true);
  }, []);

  const closeNotificationContainer1 = useCallback(() => {
    setNotificationContainer1Visible(false);
  }, []);
  return (
    <>
      <View style={styles.overallStylerReservationView}>
        <Text
          style={styles.todaysReservationText}
        >{`Today’s Reservation  `}</Text>
        <Text style={styles.text}>
          오늘의 스타일러 예약 일정을 확인해보세요
        </Text>
        <View style={styles.lineView} />
        <View style={styles.menuView}>
          <View style={styles.notificationView}>
            <View style={styles.rectangleView} />
            <Image
              style={styles.notificationIcon}
              resizeMode="cover"
              source={require("../assets/notification-black.png")}
            />
          </View>
          <Pressable
            style={styles.pressable}
            onPress={() => navigation.navigate("MainPage")}
          >
            <View style={styles.rectangleView1} />
            <Image
              style={styles.arrowLeft}
              resizeMode="cover"
              source={require("../assets/back-arrow.png")}
            />
          </Pressable>
          <View style={styles.view}>
            <Text style={styles.wed15SeptemperText}>Styler Reservation</Text>
          </View>
        </View>
        <View style={styles.view1}>
          <View style={styles.rectangleView2} />
          <View style={styles.rectangleView3} />
          <Text style={styles.amText}>09:00 am</Text>
          <Text style={styles.amText1}>11:00 am</Text>
          <Text style={styles.pmText}>01:00 pm</Text>
          <Text style={styles.pmText1}>03:00 pm</Text>
          <Text style={styles.pmText2}>05:00 pm</Text>
          <Text style={styles.pmText3}>07:00 pm</Text>
          <View style={styles.rectangleView4} />
          <View style={styles.rectangleView5} />
          <View style={styles.rectangleView6} />
        </View>
        <View style={styles.groupView1}>
          <View style={styles.groupView}>
            <View style={styles.rectangleView7} />
            <View style={styles.rectangleView8} />
          </View>
          <Text style={styles.text1}>장마철 빨래건조 코스</Text>
        </View>
        <View style={styles.view2}>
          <View style={styles.groupView2}>
            <View style={styles.rectangleView9} />
            <View style={styles.rectangleView10} />
          </View>
          <Text style={styles.text2}>살균 코스</Text>
        </View>
        <View style={styles.view3}>
          <View style={styles.groupView3}>
            <View style={styles.rectangleView11} />
            <View style={styles.rectangleView12} />
          </View>
          <Text style={styles.text3}>정장/코트 코스</Text>
        </View>
        <View style={styles.view4}>
          <View style={styles.groupView4}>
            <View style={styles.rectangleView13} />
            <View style={styles.rectangleView14} />
          </View>
          <Text style={styles.text4}>울/니트 코스</Text>
        </View>
        <View style={styles.view5}>
          <View style={styles.groupView5}>
            <View style={styles.rectangleView15} />
            <View style={styles.rectangleView16} />
          </View>
          <Text style={styles.text5}>정장/코트 코스</Text>
        </View>
        <Pressable
          style={styles.pressable1}
          onPress={() => navigation.navigate("StylerReservation")}
        >
          <View style={styles.rectangleView17} />
          <Text style={styles.text6}>스타일러 예약하기</Text>
        </Pressable>
        <View style={styles.groupView6}>
          <View style={styles.view6}>
            <Text style={styles.text7}>9:00 - 10:30</Text>
            <Image
              style={styles.timeCircleIcon}
              resizeMode="cover"
              source={require("../assets/clock.png")}
            />
          </View>
          <View style={styles.view7}>
            <Text style={styles.text8}>허정윤, 이승호</Text>
            <Image
              style={styles.userIcon}
              resizeMode="cover"
              source={require("../assets/group.png")}
            />
          </View>
        </View>
        <View style={styles.groupView7}>
          <View style={styles.view8}>
            <Text style={styles.text9}>11:00 - 11:40</Text>
            <Image
              style={styles.timeCircleIcon1}
              resizeMode="cover"
              source={require("../assets/clock.png")}
            />
          </View>
          <View style={styles.view9}>
            <Text style={styles.text10}>박세은</Text>
            <Image
              style={styles.userIcon1}
              resizeMode="cover"
              source={require("../assets/group.png")}
            />
          </View>
        </View>
        <View style={styles.groupView8}>
          <View style={styles.view10}>
            <Text style={styles.text11}>13:00 - 14:40</Text>
            <Image
              style={styles.timeCircleIcon2}
              resizeMode="cover"
              source={require("../assets/clock.png")}
            />
          </View>
          <View style={styles.view11}>
            <Text style={styles.text12}>김태현, 이승호</Text>
            <Image
              style={styles.userIcon2}
              resizeMode="cover"
              source={require("../assets/group.png")}
            />
          </View>
        </View>
        <View style={styles.groupView9}>
          <View style={styles.view12}>
            <Text style={styles.text13}>15:10 - 15:50</Text>
            <Image
              style={styles.timeCircleIcon3}
              resizeMode="cover"
              source={require("../assets/clock.png")}
            />
          </View>
          <View style={styles.view13}>
            <Text style={styles.text14}>박세은, 허정윤</Text>
            <Image
              style={styles.userIcon3}
              resizeMode="cover"
              source={require("../assets/group.png")}
            />
          </View>
        </View>
        <View style={styles.groupView10}>
          <View style={styles.view14}>
            <Text style={styles.text15}>17:00-17:30</Text>
            <Image
              style={styles.timeCircleIcon4}
              resizeMode="cover"
              source={require("../assets/clock.png")}
            />
          </View>
          <View style={styles.view15}>
            <Text style={styles.text16}>김태현, 박세은</Text>
            <Image
              style={styles.userIcon4}
              resizeMode="cover"
              source={require("../assets/group.png")}
            />
          </View>
        </View>
        <View style={styles.view16}>
          <View style={styles.navigationBarView}>
            <View style={styles.rectangleView18} />
          </View>
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
            <Image
              style={[styles.boldTimeCalendar, styles.ml74]}
              resizeMode="cover"
              source={require("../assets/timetable_fill.png")}
            />
            <Pressable
              style={[styles.clothPressable, styles.ml74]}
              onPress={() => navigation.navigate("MyCloset")}
            >
              <Image
                style={styles.icon1}
                resizeMode="cover"
                source={require("../assets/closet.png")}
              />
            </Pressable>
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
        <View style={styles.menuView1}>
          <Pressable
            style={styles.notificationPressable}
            onPress={openNotificationContainer1}
          >
            <View style={styles.rectangleView19} />
            <Image
              style={styles.notificationIcon1}
              resizeMode="cover"
              source={require("../assets/notification-black.png")}
            />
          </Pressable>
          <Pressable
            style={styles.pressable2}
            onPress={() => navigation.navigate("MainPage")}
          >
            <View style={styles.rectangleView20} />
            <Image
              style={styles.arrowLeft1}
              resizeMode="cover"
              source={require("../assets/back-arrow.png")}
            />
          </Pressable>
          <View style={styles.view17}>
            <Text style={styles.wed15SeptemperText1}>Styler Reservation</Text>
          </View>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={notificationContainer1Visible}
      >
        <View style={styles.notificationContainer1Overlay}>
          <Pressable
            style={styles.notificationContainer1Bg}
            onPress={closeNotificationContainer1}
          />
          <Alarmcenterbanner onClose={closeNotificationContainer1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  ml74: {
    marginLeft: 74,
  },
  notificationContainer1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  notificationContainer1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  todaysReservationText: {
    position: "absolute",
    top: 121,
    left: 31,
    fontSize: 20,
    letterSpacing: -1,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 174,
    height: 47,
  },
  text: {
    position: "absolute",
    top: 160,
    left: 31,
    fontSize: 12,
    letterSpacing: -0.6,
    fontFamily: "Roboto",
    color: "#8d8d8d",
    textAlign: "left",
  },
  lineView: {
    position: "absolute",
    top: 144.5,
    left: 204.5,
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 1,
    width: 154,
    height: 1,
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
  notificationView: {
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
    fontFamily: "Roboto",
    color: "#a50034",
    textAlign: "center",
  },
  view: {
    position: "absolute",
    top: 9,
    left: 84,
    width: 161,
    height: 23,
  },
  menuView: {
    position: "absolute",
    top: 53,
    left: 31,
    width: 328,
    height: 40,
    display: "none",
  },
  rectangleView2: {
    position: "absolute",
    top: 286,
    left: 23,
    borderRadius: 8,
    backgroundColor: "rgba(1, 116, 204, 0.4)",
    width: 3,
    height: 63,
  },
  rectangleView3: {
    position: "absolute",
    top: 375,
    left: 23,
    borderRadius: 8,
    backgroundColor: "rgba(0, 48, 73, 0.4)",
    width: 3,
    height: 63,
  },
  amText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#454545",
    textAlign: "left",
    width: 60,
    height: 27,
  },
  amText1: {
    position: "absolute",
    top: 90,
    left: 0,
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#454545",
    textAlign: "left",
    width: 60,
    height: 26,
  },
  pmText: {
    position: "absolute",
    top: 177,
    left: 0,
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#454545",
    textAlign: "left",
    width: 60,
    height: 26,
  },
  pmText1: {
    position: "absolute",
    top: 266,
    left: 0,
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#454545",
    textAlign: "left",
    width: 60,
    height: 27,
  },
  pmText2: {
    position: "absolute",
    top: 355,
    left: 0,
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#454545",
    textAlign: "left",
    width: 60,
    height: 26,
  },
  pmText3: {
    position: "absolute",
    top: 444,
    left: 0,
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#454545",
    textAlign: "left",
    width: 60,
    height: 26,
  },
  rectangleView4: {
    position: "absolute",
    top: 19,
    left: 23,
    borderRadius: 8,
    backgroundColor: "rgba(42, 157, 143, 0.4)",
    width: 3,
    height: 63,
  },
  rectangleView5: {
    position: "absolute",
    top: 108,
    left: 23,
    borderRadius: 8,
    backgroundColor: "rgba(248, 171, 128, 0.4)",
    width: 3,
    height: 63,
  },
  rectangleView6: {
    position: "absolute",
    top: 197,
    left: 23,
    borderRadius: 8,
    backgroundColor: "rgba(226, 52, 36, 0.4)",
    width: 3,
    height: 63,
  },
  view1: {
    position: "absolute",
    top: 202,
    left: 35,
    width: 60,
    height: 470,
  },
  rectangleView7: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 4,
    backgroundColor: "rgba(83, 175, 170, 0.28)",
    width: 264,
    height: 59,
  },
  rectangleView8: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: "#2a9d8f",
    width: 4.26,
    height: 59,
  },
  groupView: {
    position: "absolute",
    top: 29,
    left: 0,
    width: 264,
    height: 59,
  },
  text1: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 11,
    letterSpacing: -0.2,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#454545",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 236,
    height: 31,
  },
  groupView1: {
    position: "absolute",
    top: 193,
    left: 95,
    width: 264,
    height: 88,
  },
  rectangleView9: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 4,
    backgroundColor: "rgba(248, 171, 128, 0.28)",
    width: 264,
    height: 59,
  },
  rectangleView10: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: "#f8ab80",
    width: 4.26,
    height: 59,
  },
  groupView2: {
    position: "absolute",
    top: 29,
    left: 0,
    width: 264,
    height: 59,
  },
  text2: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 11,
    letterSpacing: -0.2,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#454545",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 236,
    height: 31,
  },
  view2: {
    position: "absolute",
    top: 283,
    left: 95,
    width: 264,
    height: 88,
  },
  rectangleView11: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 4,
    backgroundColor: "rgba(226, 52, 36, 0.28)",
    width: 264,
    height: 59,
  },
  rectangleView12: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: "#e23424",
    width: 4.26,
    height: 59,
  },
  groupView3: {
    position: "absolute",
    top: 29,
    left: 0,
    width: 264,
    height: 59,
  },
  text3: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 11,
    letterSpacing: -0.2,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#454545",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 236,
    height: 31,
  },
  view3: {
    position: "absolute",
    top: 372,
    left: 95,
    width: 264,
    height: 88,
  },
  rectangleView13: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 4,
    backgroundColor: "rgba(1, 116, 204, 0.28)",
    width: 264,
    height: 59,
  },
  rectangleView14: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: "#0174cc",
    width: 4.26,
    height: 59,
  },
  groupView4: {
    position: "absolute",
    top: 29,
    left: 0,
    width: 264,
    height: 59,
  },
  text4: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 11,
    letterSpacing: -0.2,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#454545",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 236,
    height: 31,
  },
  view4: {
    position: "absolute",
    top: 461,
    left: 95,
    width: 264,
    height: 88,
  },
  rectangleView15: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 4,
    backgroundColor: "rgba(0, 48, 73, 0.28)",
    width: 264,
    height: 59,
  },
  rectangleView16: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: "#003049",
    width: 4.26,
    height: 59,
  },
  groupView5: {
    position: "absolute",
    top: 29,
    left: 0,
    width: 264,
    height: 59,
  },
  text5: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 11,
    letterSpacing: -0.2,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#454545",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 236,
    height: 31,
  },
  view5: {
    position: "absolute",
    top: 550,
    left: 95,
    width: 264,
    height: 88,
  },
  rectangleView17: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 50,
    backgroundColor: "#a50034",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 233,
    height: 43,
  },
  text6: {
    position: "absolute",
    top: 13,
    left: 52,
    fontSize: 16,
    letterSpacing: -0.8,
    fontFamily: "BIZ UDGothic",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 128.53,
    height: 17,
  },
  pressable1: {
    position: "absolute",
    top: 687,
    left: 79,
    width: 233,
    height: 42,
  },
  text7: {
    position: "absolute",
    top: -1,
    left: 17,
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  timeCircleIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 13,
    height: 13,
    overflow: "hidden",
  },
  view6: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 75,
    height: 13,
  },
  text8: {
    position: "absolute",
    top: 0,
    left: 17,
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  userIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 12.93,
    height: 12.5,
    overflow: "hidden",
  },
  view7: {
    position: "absolute",
    top: 18,
    left: 0,
    width: 120,
    height: 12.5,
  },
  groupView6: {
    position: "absolute",
    top: 236,
    left: 110,
    width: 80,
    height: 29.75,
  },
  text9: {
    position: "absolute",
    top: -1,
    left: 17,
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  timeCircleIcon1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 13,
    height: 13,
    overflow: "hidden",
  },
  view8: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 81,
    height: 13,
  },
  text10: {
    position: "absolute",
    top: 0,
    left: 17,
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  userIcon1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 12.93,
    height: 12.5,
    overflow: "hidden",
  },
  view9: {
    position: "absolute",
    top: 18,
    left: 0,
    width: 100,
    height: 12.5,
  },
  groupView7: {
    position: "absolute",
    top: 327,
    left: 110,
    width: 81,
    height: 29.75,
  },
  text11: {
    position: "absolute",
    top: -1,
    left: 17,
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  timeCircleIcon2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 13,
    height: 13,
    overflow: "hidden",
  },
  view10: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 81,
    height: 13,
  },
  text12: {
    position: "absolute",
    top: 0,
    left: 17,
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  userIcon2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 12.93,
    height: 12.5,
    overflow: "hidden",
  },
  view11: {
    position: "absolute",
    top: 18,
    left: 0,
    width: 100,
    height: 12.5,
  },
  groupView8: {
    position: "absolute",
    top: 416,
    left: 110,
    width: 81,
    height: 29.75,
  },
  text13: {
    position: "absolute",
    top: -2,
    left: 17,
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  timeCircleIcon3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 13,
    height: 13,
    overflow: "hidden",
  },
  view12: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 81,
    height: 13,
  },
  text14: {
    position: "absolute",
    top: 0,
    left: 17,
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  userIcon3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 12.93,
    height: 12.5,
    overflow: "hidden",
  },
  view13: {
    position: "absolute",
    top: 17.25,
    left: 0,
    width: 120,
    height: 12.5,
  },
  groupView9: {
    position: "absolute",
    top: 505,
    left: 110,
    width: 81,
    height: 29.75,
  },
  text15: {
    position: "absolute",
    top: -2,
    left: 17,
    fontSize: 10,
    fontFamily: " Roboto",
    color: "#000",
    textAlign: "left",
  },
  timeCircleIcon4: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 13,
    height: 13,
    overflow: "hidden",
  },
  view14: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 76,
    height: 13,
  },
  text16: {
    position: "absolute",
    top: 0,
    left: 17,
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  userIcon4: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 12.93,
    height: 12.5,
    overflow: "hidden",
  },
  view15: {
    position: "absolute",
    top: 17.25,
    left: 0,
    width: 100,
    height: 12.5,
  },
  groupView10: {
    position: "absolute",
    top: 594,
    left: 110,
    width: 80,
    height: 29.75,
  },
  rectangleView18: {
    position: "absolute",
    top: 17,
    left: 129,
    borderRadius: 10,
    backgroundColor: "rgba(165, 0, 52, 0.2)",
    width: 34,
    height: 34,
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
    width: 390,
    height: 73,
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
  boldTimeCalendar: {
    position: "relative",
    borderRadius: 5,
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  icon1: {
    width: "100%",
    height: "100%",
    flexShrink: 0,
    overflow: "hidden",
  },
  clothPressable: {
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
  userPressable: {
    position: "relative",
    width: 24,
    height: 24,
  },
  frameView: {
    position: "absolute",
    top: 21,
    left: 26,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  view16: {
    position: "absolute",
    top: 771,
    left: 0,
    width: 390,
    height: 73,
  },
  rectangleView19: {
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
  notificationIcon1: {
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
  rectangleView20: {
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
  arrowLeft1: {
    position: "absolute",
    top: 10,
    left: 10,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  pressable2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  wed15SeptemperText1: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 20,
    fontFamily: "Roboto",
    color: "#a50034",
    textAlign: "center",
  },
  view17: {
    position: "absolute",
    top: 9,
    left: 84,
    width: 200,
    height: 23,
  },
  menuView1: {
    position: "absolute",
    top: 53,
    left: 31,
    width: 328,
    height: 40,
  },
  overallStylerReservationView: {
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

export default OverallStylerReservation;
