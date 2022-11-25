import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal, Image } from "react-native";
import Moreinfobanner from "../components/Moreinfobanner";
import Alarmcenterbanner from "../components/Alarmcenterbanner";
import { useNavigation } from "@react-navigation/native";

const PersonalStylingCalender = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [notificationContainerVisible, setNotificationContainerVisible] =
    useState(false);
  const navigation = useNavigation();

  const openText = useCallback(() => {
    setTextVisible(true);
  }, []);

  const closeText = useCallback(() => {
    setTextVisible(false);
  }, []);

  const openNotificationContainer = useCallback(() => {
    setNotificationContainerVisible(true);
  }, []);

  const closeNotificationContainer = useCallback(() => {
    setNotificationContainerVisible(false);
  }, []);
  return (
    <>
      <View style={styles.personalStylingCalender}>
        <View style={styles.rectangleView} />
        <Pressable style={styles.pressable} onPress={openText}>
          <Text style={styles.text}>상세보기</Text>
        </Pressable>
        <View style={styles.menuView}>
          <Pressable
            style={styles.notificationPressable}
            onPress={openNotificationContainer}
          >
            <View style={styles.rectangleView1} />
            <Image
              style={styles.notificationIcon}
              resizeMode="cover"
              source={require("../assets/notification.png")}
            />
          </Pressable>
          <Pressable
            style={styles.pressable1}
            onPress={() => navigation.navigate("MyCloset")}
          >
            <View style={styles.rectangleView2} />
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
        <Text style={styles.reservationListText}>Reservation List</Text>
        <Pressable
          style={styles.pressable2}
          onPress={() => navigation.navigate("reserveclothes")}
        >
          <View style={styles.rectangleView3} />
          <Text style={styles.text1}>새 일정 예약하기</Text>
        </Pressable>
        <Image
          style={styles.jacket3Icon}
          resizeMode="cover"
          source={require("../assets/small-black-leather.png")}
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
        <View style={styles.groupView}>
          <Text style={styles.text2}>제품명</Text>
          <Text style={styles.text3}>예약일자</Text>
          <Text style={styles.text4}>메모</Text>
          <Text style={styles.text5}>블랙 레더 자켓</Text>
          <Text style={styles.text6}>2022.11. 20</Text>
          <Text style={styles.text7}>친구들과 놀이공원 갈 때 입을 옷</Text>
        </View>
        <View style={styles.calendarView}>
          <View style={styles.dateView}>
            <View style={styles.backgroundView} />
            <Text style={styles.text8}>1</Text>
          </View>
          <View style={styles.dateView1}>
            <View style={styles.backgroundView1} />
            <Text style={styles.text9}>5</Text>
          </View>
          <View style={styles.dateView2}>
            <View style={styles.backgroundView2} />
            <Text style={styles.text10}>12</Text>
          </View>
          <View style={styles.dateView3}>
            <View style={styles.backgroundView3} />
            <Text style={styles.text11}>19</Text>
          </View>
          <View style={styles.dateView4}>
            <View style={styles.backgroundView4} />
            <Text style={styles.text12}>26</Text>
          </View>
          <View style={styles.dateView5}>
            <View style={styles.backgroundView5} />
            <Text style={styles.text13}>2</Text>
          </View>
          <View style={styles.dateView6}>
            <View style={styles.backgroundView6} />
            <Text style={styles.text14}>6</Text>
          </View>
          <View style={styles.dateView7}>
            <View style={styles.backgroundView7} />
            <Text style={styles.text15}>13</Text>
          </View>
          <View style={styles.dateView8}>
            <View style={styles.backgroundView8} />
            <Text style={styles.text16}>20</Text>
          </View>
          <View style={styles.dateView9}>
            <View style={styles.backgroundView9} />
            <Text style={styles.text17}>27</Text>
          </View>
          <View style={styles.dateView10}>
            <View style={styles.backgroundView10} />
            <Text style={styles.text18}>3</Text>
          </View>
          <View style={styles.dateView11}>
            <View style={styles.backgroundView11} />
            <Text style={styles.text19}>7</Text>
          </View>
          <View style={styles.dateView12}>
            <View style={styles.backgroundView12} />
            <Text style={styles.text20}>14</Text>
          </View>
          <View style={styles.dateView13}>
            <View style={styles.backgroundView13} />
            <Text style={styles.text21}>21</Text>
          </View>
          <View style={styles.dateView14}>
            <View style={styles.backgroundView14} />
            <Text style={styles.text22}>28</Text>
          </View>
          <View style={styles.dateView15}>
            <View style={styles.backgroundView15} />
            <Text style={styles.text23}>4</Text>
          </View>
          <View style={styles.dateView16}>
            <View style={styles.backgroundView16} />
            <Text style={styles.text24}>8</Text>
          </View>
          <View style={styles.dateView17}>
            <View style={styles.backgroundView17} />
            <Text style={styles.text25}>15</Text>
          </View>
          <View style={styles.dateView18}>
            <View style={styles.backgroundView18} />
            <Text style={styles.text26}>22</Text>
          </View>
          <View style={styles.dateView19}>
            <View style={styles.backgroundView19} />
            <Text style={styles.text27}>29</Text>
          </View>
          <View style={styles.dateView20}>
            <View style={styles.backgroundView20} />
            <Text style={styles.text28}>9</Text>
          </View>
          <View style={styles.dateView21}>
            <View style={styles.backgroundView21} />
            <Text style={styles.text29}>16</Text>
          </View>
          <View style={styles.dateView22}>
            <View style={styles.backgroundView22} />
            <Text style={styles.text30}>23</Text>
          </View>
          <View style={styles.dateView23}>
            <View style={styles.backgroundView23} />
            <Text style={styles.text31}>30</Text>
          </View>
          <View style={styles.dateView24}>
            <View style={styles.backgroundView24} />
            <Text style={styles.text32}>10</Text>
          </View>
          <View style={styles.dateView25}>
            <View style={styles.backgroundView25} />
            <Text style={styles.text33}>17</Text>
          </View>
          <View style={styles.dateView26}>
            <View style={styles.backgroundView26} />
            <Text style={styles.text34}>18</Text>
          </View>
          <View style={styles.dateView27}>
            <View style={styles.backgroundView27} />
            <Text style={styles.text35}>24</Text>
          </View>
          <View style={styles.dateView28}>
            <View style={styles.backgroundView28} />
            <Text style={styles.text36}>25</Text>
          </View>
          <View style={styles.dateView29}>
            <View style={styles.backgroundView29} />
            <Text style={styles.text37}>11</Text>
          </View>
          <View style={styles.weekdayView}>
            <Text style={styles.moText}>Mo</Text>
          </View>
          <View style={styles.weekdayView1}>
            <Text style={styles.moText1}>Tu</Text>
          </View>
          <View style={styles.weekdayView2}>
            <Text style={styles.moText2}>We</Text>
          </View>
          <View style={styles.weekdayView3}>
            <Text style={styles.moText3}>Th</Text>
          </View>
          <View style={styles.weekdayView4}>
            <Text style={styles.moText4}>Fr</Text>
          </View>
          <View style={styles.weekdayView5}>
            <Text style={styles.moText5}>Sa</Text>
          </View>
          <View style={styles.weekdayView6}>
            <Text style={styles.moText6}>Su</Text>
          </View>
          <View style={styles.headingView}>
            <View style={styles.monthYear}>
              <Text style={styles.buttonText}>April 2021</Text>
              <Image
                style={[styles.icon3, styles.ml4_8]}
                resizeMode="cover"
                source={require("../assets/icon5.png")}
              />
            </View>
            <View style={styles.monthPagesView}>
              <Image
                style={styles.iconButton}
                resizeMode="cover"
                source={require("../assets/icon-button2.png")}
              />
              <Image
                style={[styles.iconButton1, styles.ml9_61]}
                resizeMode="cover"
                source={require("../assets/icon-button3.png")}
              />
            </View>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={textVisible}>
        <View style={styles.textOverlay}>
          <Pressable style={styles.textBg} onPress={closeText} />
          <Moreinfobanner onClose={closeText} />
        </View>
      </Modal>

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
    </>
  );
};

const styles = StyleSheet.create({
  textOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  textBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
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
  ml4_8: {
    marginLeft: 4.8,
  },
  ml9_61: {
    marginLeft: 9.61,
  },
  rectangleView: {
    position: "absolute",
    top: 520,
    left: 31,
    borderRadius: 15,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#b5b5b5",
    borderWidth: 1,
    width: 328,
    height: 222,
  },
  text: {
    fontSize: 11,
 
    color: "#a50034",
    textAlign: "right",
  },
  pressable: {
    position: "absolute",
    left: 300,
    top: 715,
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
  rectangleView2: {
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
  pressable1: {
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
    fontSize: 18,
 
    fontWeight: "bold",
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
  reservationListText: {
    position: "absolute",
    top: 487,
    left: 31,
    fontSize: 22,
    fontWeight: "700",
 
    color: "#252525",
    textAlign: "left",
    width: 247,
    height: 24,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 50,
    backgroundColor: "rgba(165,0,52,1)",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 233,
    height: 40,
  },
  text1: {
    position: "absolute",
    top: 12.38,
    left: 52,
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
  pressable2: {
    position: "absolute",
    top: 414,
    left: 79,
    width: 233,
    height: 40,
  },
  jacket3Icon: {
    position: "absolute",
    top: 544,
    left: 156,
    borderRadius: 15,
    width: 78,
    height: 83,
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
  rectangleView4: {
    position: "absolute",
    top: 17,
    left: 227,
    borderRadius: 10,
    backgroundColor: "rgba(165, 0, 52, 0.2)",
    width: 34,
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
    left: 26,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  view1: {
    position: "absolute",
    top: 771,
    left: 0,
    width: 390,
    height: 73,
  },
  text2: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 13,
 
    color: "#727272",
    textAlign: "left",
  },
  text3: {
    position: "absolute",
    top: 24,
    left: 0,
    fontSize: 13,
 
    color: "#727272",
    textAlign: "left",
  },
  text4: {
    position: "absolute",
    top: 48,
    left: 0,
    fontSize: 13,
 
    color: "#727272",
    textAlign: "left",
  },
  text5: {
    position: "absolute",
    top: 0,
    left: 165,
    fontSize: 13,
    letterSpacing: -0.6,
    fontWeight: "700",
 
    color: "#000",
    textAlign: "right",
    width: 122,
  },
  text6: {
    position: "absolute",
    top: 24,
    left: 165,
    fontSize: 13,
    letterSpacing: -0.6,
    fontWeight: "700",
 
    color: "#000",
    textAlign: "right",
    width: 122,
  },
  text7: {
    position: "absolute",
    top: 48,
    left: 104,
    fontSize: 13,
    letterSpacing: -0.6,
    fontWeight: "700",
 
    color: "#000",
    textAlign: "right",
    width: 183,
  },
  groupView: {
    position: "absolute",
    top: 643,
    left: 52,
    width: 287,
    height: 61,
  },
  backgroundView: {
    position: "absolute",
    top: 2.4,
    right: 2.83,
    bottom: 2.83,
    left: 2.4,
    borderRadius: 12006.31,
  },
  text8: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
 
    color: "#2d3748",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  dateView: {
    position: "absolute",
    top: 81.65,
    left: 115.27,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
    opacity: 0.5,
  },
  backgroundView1: {
    position: "absolute",
    top: 2.4,
    right: 2.83,
    bottom: 2.83,
    left: 2.4,
    borderRadius: 12006.31,
  },
  text9: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
 
    color: "#2d3748",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  dateView1: {
    position: "absolute",
    top: 120.08,
    left: 0,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
    opacity: 0.5,
  },
  backgroundView2: {
    position: "absolute",
    top: 2.4,
    right: 2.83,
    bottom: 2.83,
    left: 2.4,
    borderRadius: 12006.31,
  },
  text10: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
 
    color: "#2d3748",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  dateView2: {
    position: "absolute",
    top: 158.5,
    left: 0,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
  },
  backgroundView3: {
    position: "absolute",
    top: 2.4,
    right: 2.83,
    bottom: 2.83,
    left: 2.4,
    borderRadius: 12006.31,
  },
  text11: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
 
    color: "#2d3748",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  dateView3: {
    position: "absolute",
    top: 196.92,
    left: 0,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
  },
  backgroundView4: {
    position: "absolute",
    top: 2.4,
    right: 2.83,
    bottom: 2.83,
    left: 2.4,
    borderRadius: 12006.31,
  },
  text12: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
 
    color: "#2d3748",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  dateView4: {
    position: "absolute",
    top: 235.35,
    left: 0,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
  },
  backgroundView5: {
    position: "absolute",
    top: 2.4,
    right: 2.83,
    bottom: 2.83,
    left: 2.4,
    borderRadius: 12006.31,
  },
  text13: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
 
    color: "#2d3748",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  dateView5: {
    position: "absolute",
    top: 81.65,
    left: 153.7,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
    opacity: 0.5,
  },
  backgroundView6: {
    position: "absolute",
    top: 2.4,
    right: 2.83,
    bottom: 2.83,
    left: 2.4,
    borderRadius: 12006.31,
  },
  text14: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
 
    color: "#2d3748",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  dateView6: {
    position: "absolute",
    top: 120.08,
    left: 38.42,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
    opacity: 0.5,
  },
  backgroundView7: {
    position: "absolute",
    top: 2.4,
    right: 2.83,
    bottom: 2.83,
    left: 2.4,
    borderRadius: 12006.31,
  },
  text15: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
 
    color: "#2d3748",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  dateView7: {
    position: "absolute",
    top: 158.5,
    left: 38.42,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
  },
  backgroundView8: {
    position: "absolute",
    top: 2.4,
    right: 2.83,
    bottom: 2.83,
    left: 2.4,
    borderRadius: 12006.31,
  },
  text16: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
 
    color: "#2d3748",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  dateView8: {
    position: "absolute",
    top: 196.92,
    left: 38.42,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
  },
  backgroundView9: {
    position: "absolute",
    top: 2.4,
    right: 2.83,
    bottom: 2.83,
    left: 2.4,
    borderRadius: 12006.31,
  },
  text17: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
 
    color: "#2d3748",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  dateView9: {
    position: "absolute",
    top: 235.35,
    left: 38.42,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
  },
  backgroundView10: {
    position: "absolute",
    top: 2.4,
    right: 2.83,
    bottom: 2.83,
    left: 2.4,
    borderRadius: 12006.31,
  },
  text18: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
 
    color: "#2d3748",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  dateView10: {
    position: "absolute",
    top: 81.65,
    left: 192.12,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
    opacity: 0.5,
  },
  backgroundView11: {
    position: "absolute",
    top: 2.4,
    right: 2.83,
    bottom: 2.83,
    left: 2.4,
    borderRadius: 12006.31,
  },
  text19: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
 
    color: "#2d3748",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  dateView11: {
    position: "absolute",
    top: 120.08,
    left: 76.85,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
    opacity: 0.5,
  },
  backgroundView12: {
    position: "absolute",
    top: 2.4,
    right: 2.83,
    bottom: 2.83,
    left: 2.4,
    borderRadius: 12006.31,
  },
  text20: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
 
    color: "#2d3748",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  dateView12: {
    position: "absolute",
    top: 158.5,
    left: 76.85,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
  },
  backgroundView13: {
    position: "absolute",
    top: 2.4,
    right: 2.83,
    bottom: 2.83,
    left: 2.4,
    borderRadius: 12006.31,
  },
  text21: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
 
    color: "#2d3748",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  dateView13: {
    position: "absolute",
    top: 196.92,
    left: 76.85,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
  },
  backgroundView14: {
    position: "absolute",
    top: 2.4,
    right: 2.83,
    bottom: 2.83,
    left: 2.4,
    borderRadius: 12006.31,
  },
  text22: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
 
    color: "#2d3748",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  dateView14: {
    position: "absolute",
    top: 235.35,
    left: 76.85,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
  },
  backgroundView15: {
    position: "absolute",
    top: 2.4,
    right: 2.83,
    bottom: 2.83,
    left: 2.4,
    borderRadius: 12006.31,
  },
  text23: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
 
    color: "#2d3748",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  dateView15: {
    position: "absolute",
    top: 81.65,
    left: 230.54,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
    opacity: 0.5,
  },
  backgroundView16: {
    position: "absolute",
    top: 2.4,
    right: 2.83,
    bottom: 2.83,
    left: 2.4,
    borderRadius: 12006.31,
  },
  text24: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
 
    color: "#2d3748",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  dateView16: {
    position: "absolute",
    top: 120.08,
    left: 115.27,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
    opacity: 0.5,
  },
  backgroundView17: {
    position: "absolute",
    top: 2.4,
    right: 2.83,
    bottom: 2.83,
    left: 2.4,
    borderRadius: 12006.31,
  },
  text25: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
 
    color: "#2d3748",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  dateView17: {
    position: "absolute",
    top: 158.5,
    left: 115.27,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
  },
  backgroundView18: {
    position: "absolute",
    top: 2.4,
    right: 2.83,
    bottom: 2.83,
    left: 2.4,
    borderRadius: 12006.31,
  },
  text26: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
 
    color: "#2d3748",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  dateView18: {
    position: "absolute",
    top: 196.92,
    left: 115.27,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
  },
  backgroundView19: {
    position: "absolute",
    top: 2.4,
    right: 2.83,
    bottom: 2.83,
    left: 2.4,
    borderRadius: 12006.31,
  },
  text27: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
 
    color: "#2d3748",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  dateView19: {
    position: "absolute",
    top: 235.35,
    left: 115.27,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
  },
  backgroundView20: {
    position: "absolute",
    top: 2.4,
    right: 2.83,
    bottom: 2.83,
    left: 2.4,
    borderRadius: 12006.31,
  },
  text28: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
 
    color: "#2d3748",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  dateView20: {
    position: "absolute",
    top: 120.08,
    left: 153.7,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
    opacity: 0.5,
  },
  backgroundView21: {
    position: "absolute",
    top: 2.4,
    right: 2.83,
    bottom: 2.83,
    left: 2.4,
    borderRadius: 12006.31,
  },
  text29: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
 
    color: "#2d3748",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  dateView21: {
    position: "absolute",
    top: 158.5,
    left: 153.7,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
  },
  backgroundView22: {
    position: "absolute",
    top: 2.4,
    right: 2.83,
    bottom: 2.83,
    left: 2.4,
    borderRadius: 12006.31,
  },
  text30: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
 
    color: "#2d3748",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  dateView22: {
    position: "absolute",
    top: 196.92,
    left: 153.7,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
  },
  backgroundView23: {
    position: "absolute",
    top: 2.4,
    right: 2.83,
    bottom: 2.83,
    left: 2.4,
    borderRadius: 12006.31,
  },
  text31: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
 
    color: "#2d3748",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  dateView23: {
    position: "absolute",
    top: 235.35,
    left: 153.7,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
  },
  backgroundView24: {
    position: "absolute",
    top: 2.4,
    right: 2.83,
    bottom: 2.83,
    left: 2.4,
    borderRadius: 12006.31,
  },
  text32: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
 
    color: "#2d3748",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  dateView24: {
    position: "absolute",
    top: 120.08,
    left: 192.12,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
    opacity: 0.5,
  },
  backgroundView25: {
    position: "absolute",
    top: 2.4,
    right: 2.83,
    bottom: 2.83,
    left: 2.4,
    borderRadius: 12006.31,
  },
  text33: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
 
    color: "#2d3748",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  dateView25: {
    position: "absolute",
    top: 158.5,
    left: 192.12,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
  },
  backgroundView26: {
    position: "absolute",
    top: 2.4,
    right: 2.83,
    bottom: 2.83,
    left: 2.4,
    borderRadius: 12006.31,
  },
  text34: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
 
    color: "#2d3748",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  dateView26: {
    position: "absolute",
    top: 158.5,
    left: 230.54,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
  },
  backgroundView27: {
    position: "absolute",
    top: 2.4,
    right: 2.83,
    bottom: 2.83,
    left: 2.4,
    borderRadius: 12006.31,
  },
  text35: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
 
    color: "#2d3748",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  dateView27: {
    position: "absolute",
    top: 196.92,
    left: 192.12,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
  },
  backgroundView28: {
    position: "absolute",
    top: 2.4,
    right: 2.83,
    bottom: 2.83,
    left: 2.4,
    borderRadius: 12006.31,
  },
  text36: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
 
    color: "#2d3748",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  dateView28: {
    position: "absolute",
    top: 196.92,
    left: 230.54,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
  },
  backgroundView29: {
    position: "absolute",
    top: 2.4,
    right: 2.83,
    bottom: 2.83,
    left: 2.4,
    borderRadius: 12006.31,
    backgroundColor: "#edf2f7",
  },
  text37: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
 
    color: "#2d3748",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  dateView29: {
    position: "absolute",
    top: 120.08,
    left: 230.54,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
  },
  moText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "500",
 
    color: "#718096",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  weekdayView: {
    position: "absolute",
    top: 43.23,
    left: 0,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
  },
  moText1: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "500",
 
    color: "#718096",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  weekdayView1: {
    position: "absolute",
    top: 43.23,
    left: 38.42,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
  },
  moText2: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "500",
 
    color: "#718096",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  weekdayView2: {
    position: "absolute",
    top: 43.23,
    left: 76.85,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
  },
  moText3: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "500",
 
    color: "#718096",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  weekdayView3: {
    position: "absolute",
    top: 43.23,
    left: 115.27,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
  },
  moText4: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "500",
 
    color: "#718096",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  weekdayView4: {
    position: "absolute",
    top: 43.23,
    left: 153.7,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
  },
  moText5: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "500",
 
    color: "#718096",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  weekdayView5: {
    position: "absolute",
    top: 43.23,
    left: 192.12,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
  },
  moText6: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "500",
 
    color: "#718096",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  weekdayView6: {
    position: "absolute",
    top: 43.23,
    left: 230.54,
    borderRadius: 12006.31,
    width: 38.42,
    height: 38.42,
    overflow: "hidden",
  },
  buttonText: {
    position: "relative",
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "500",
 
    color: "#2d3748",
    textAlign: "left",
  },
  icon3: {
    position: "relative",
    width: 14.41,
    height: 14.41,
    flexShrink: 0,
    overflow: "hidden",
  },
  monthYear: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 7.2,
    height: 28.82,
    flexDirection: "row",
    paddingHorizontal: 9.606009483337402,
    paddingVertical: 12.007512092590332,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  iconButton: {
    position: "relative",
    borderRadius: 7.2,
    width: 28.82,
    height: 28.82,
    flexShrink: 0,
    overflow: "hidden",
  },
  iconButton1: {
    position: "relative",
    borderRadius: 7.2,
    width: 28.82,
    height: 28.82,
    flexShrink: 0,
    overflow: "hidden",
  },
  monthPagesView: {
    position: "absolute",
    top: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  headingView: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 28.82,
  },
  calendarView: {
    position: "absolute",
    top: 124,
    left: 69,
    width: 268.97,
    height: 273.77,
  },
  personalStylingCalender: {
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

export default PersonalStylingCalender;
