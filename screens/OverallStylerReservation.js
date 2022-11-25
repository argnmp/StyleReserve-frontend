import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Text, Image, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PlusReservation from "../components/PlusReservation";
import NewReservation from "../components/NewReservation";
import Alarmcenterbanner from "../components/Alarmcenterbanner";
import NavigationBar from "../components/NavigationBar";

const StylerReservation = () => {
  const [container1Visible, setContainer1Visible] = useState(false);
  const [ellipsisV1IconVisible, setEllipsisV1IconVisible] = useState(false);
  const [ellipsisV1Icon1Visible, setEllipsisV1Icon1Visible] = useState(false);
  const [ellipsisV1Icon2Visible, setEllipsisV1Icon2Visible] = useState(false);
  const [notificationContainerVisible, setNotificationContainerVisible] =
    useState(false);
  const navigation = useNavigation();

  const openContainer1 = useCallback(() => {
    setContainer1Visible(true);
  }, []);

  const closeContainer1 = useCallback(() => {
    setContainer1Visible(false);
  }, []);

  const openEllipsisV1Icon = useCallback(() => {
    setEllipsisV1IconVisible(true);
  }, []);

  const closeEllipsisV1Icon = useCallback(() => {
    setEllipsisV1IconVisible(false);
  }, []);

  const openEllipsisV1Icon1 = useCallback(() => {
    setEllipsisV1Icon1Visible(true);
  }, []);

  const closeEllipsisV1Icon1 = useCallback(() => {
    setEllipsisV1Icon1Visible(false);
  }, []);

  const openEllipsisV1Icon2 = useCallback(() => {
    setEllipsisV1Icon2Visible(true);
  }, []);

  const closeEllipsisV1Icon2 = useCallback(() => {
    setEllipsisV1Icon2Visible(false);
  }, []);

  const openNotificationContainer = useCallback(() => {
    setNotificationContainerVisible(true);
  }, []);

  const closeNotificationContainer = useCallback(() => {
    setNotificationContainerVisible(false);
  }, []);
  return (
      <><><><View style={styles.stylerReservationView}>
      <View style={styles.startWithSelectionPage}>
        <View style={styles.rectangleView} />
        <Text style={styles.text}>09:00</Text>
        <Text style={styles.text1}>09:30</Text>
        <Text style={styles.text2}>10:00</Text>
        <Text style={styles.text3}>10:30</Text>
        <Text style={styles.text4}>11:00</Text>
        <View style={styles.rectangleView1} />
        <View style={styles.rectangleView2} />
        <Text style={styles.aMText}>AM</Text>
        <Text style={styles.pMText}>PM</Text>
      </View>
      <View style={styles.courseSelectionPage}>
        <View style={styles.rectangleView3} />
        <Text style={styles.text5}>장마철 빨래건조 코스</Text>
        <Text style={styles.text6}>살균 코스</Text>
        <Text style={styles.text7}>정장 / 코트 코스</Text>
        <Text style={styles.text8}>울 / 니트 코스</Text>
        <Text style={styles.text9}>기능성 의류 관리 코스</Text>
        <Text style={styles.text10}>침구 관리 코스</Text>
      </View>
      <View style={styles.numberOfClothesSelectionPa}>
        <View style={styles.rectangleView4} />
        <Text style={styles.text11}>1</Text>
        <Text style={styles.text12}>2</Text>
        <Text style={styles.text13}>3</Text>
        <Text style={styles.text14}>4</Text>
        <Text style={styles.text15}>5</Text>
        <Text style={styles.text16}>6</Text>
      </View>
      
      <View style={styles.view}>
        <NavigationBar />
        <View style={styles.rectangleView5} />
      </View>
    </View>
    
    <Pressable style={styles.pressable} onPress={openContainer1}>
        <View style={styles.rectangleView6} />
        <Text style={styles.text17}>새로운 예약하기</Text>
      </Pressable><View style={styles.calendarView}>
        <Text
          style={styles.todaysReservationText}
        >
          {`Today’s Reservation  `}
        </Text>
        <Text style={styles.text0}>
          오늘의 스타일러 예약 일정을 확인해보세요
        </Text>
        <View style={styles.SplitlineView} />

      </View>
      <View style={styles.scheduleView}>
        <View style={styles.groupView17}>
          <View style={styles.rectangleView8} />
          <View style={styles.groupView11}>
            <View style={styles.groupView9}>
              <Text style={styles.text25}>11:00</Text>
              <Text style={styles.text26}>12:00</Text>
            </View>
            <View style={styles.groupView10}>
              <View style={styles.rectangleView9} />
              <Pressable
                style={styles.ellipsisV1Pressable}
                onPress={openEllipsisV1Icon}
              >
                <Image
                  style={styles.icon3}
                  resizeMode="cover"
                  source={require("../assets/add-red.png")} />
              </Pressable>
              <Text style={styles.text27}>살균 코스</Text>
              <Text style={styles.text28}>/ 5</Text>
              <Text style={styles.text29}>3</Text>
              <Text style={styles.text30}>김태현, 박세은</Text>
              <Image
                style={styles.userIcon}
                resizeMode="cover"
                source={require("../assets/group.png")} />
              <Image
                style={styles.brokenEssentionalUITS}
                resizeMode="cover"
                source={require("../assets/clothes-hanger.png")} />
            </View>
          </View>
          <View style={styles.groupView13}>
            <Text style={styles.text31}>12:00</Text>
            <Text style={styles.text32}>12:30</Text>
            <View style={styles.groupView12}>
              <View style={styles.rectangleView10} />
              <Pressable
                style={styles.ellipsisV1Pressable1}
                onPress={openEllipsisV1Icon1}
              >
                <Image
                  style={styles.icon4}
                  resizeMode="cover"
                  source={require("../assets/add-red.png")} />
              </Pressable>
              <Text style={styles.text33}>정장/코트 코스</Text>
              <Text style={styles.text34}>/ 5</Text>
              <Text style={styles.text35}>2</Text>
              <Text style={styles.text36}>이승호, 허정윤</Text>
              <Image
                style={styles.userIcon1}
                resizeMode="cover"
                source={require("../assets/group.png")} />
              <Image
                style={styles.brokenEssentionalUITS1}
                resizeMode="cover"
                source={require("../assets/clothes-hanger.png")} />
            </View>
          </View>
          <View style={styles.groupView16}>
            <View style={styles.groupView14}>
              <View style={styles.rectangleView11} />
              <Pressable
                style={styles.ellipsisV1Pressable2}
                onPress={openEllipsisV1Icon2}
              >
                <Image
                  style={styles.icon5}
                  resizeMode="cover"
                  source={require("../assets/add.png")} />
              </Pressable>
              <Text style={styles.text37}>침구관리 코스</Text>
              <Text style={styles.text38}>/ 5</Text>
              <Text style={styles.text39}>5</Text>
              <Text style={styles.text40}>김태현, 박세은</Text>
              <Image
                style={styles.userIcon2}
                resizeMode="cover"
                source={require("../assets/group-white.png")} />
              <Image
                style={styles.brokenEssentionalUITS2}
                resizeMode="cover"
                source={require("../assets/clothes-hanger-white.png")} />
            </View>
            <View style={styles.groupView15}>
              <Text style={styles.text41}>09:00</Text>
              <Text style={styles.text42}>11:00</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.menuView}>
          <View style={styles.rectangleView12} />
          <Pressable
            style={styles.notificationPressable}
            onPress={openNotificationContainer}
          >
            <View style={styles.rectangleView13} />
            <Image
              style={styles.notificationIcon}
              resizeMode="cover"
              source={require("../assets/notification-black.png")} />
          </Pressable>
          <Pressable
            style={styles.pressable1}
            onPress={() => navigation.navigate("MainPage")}
          >
            <View style={styles.rectangleView14} />
            <Image
              style={styles.arrowLeft}
              resizeMode="cover"
              source={require("../assets/back-arrow.png")} />
          </Pressable>
          <View style={styles.view1}>
            <Text style={styles.wed15SeptemperText}>Styler Reservation</Text>
          </View>
        </View>
        </>
        
        <Modal animationType="fade" transparent visible={container1Visible}>
          <View style={styles.container1Overlay}>
            <Pressable style={styles.container1Bg} onPress={closeContainer1} />
            <PlusReservation onClose={closeContainer1} />
          </View>
        </Modal>
        
        <Modal animationType="fade" transparent visible={ellipsisV1IconVisible}>
          <View style={styles.ellipsisV1IconOverlay}>
            <Pressable
              style={styles.ellipsisV1IconBg}
              onPress={closeEllipsisV1Icon} />
            <NewReservation onClose={closeEllipsisV1Icon} />
          </View>
        </Modal>
        
        <Modal animationType="fade" transparent visible={ellipsisV1Icon1Visible}>
          <View style={styles.ellipsisV1Icon1Overlay}>
            <Pressable
              style={styles.ellipsisV1Icon1Bg}
              onPress={closeEllipsisV1Icon1} />
            <NewReservation onClose={closeEllipsisV1Icon1} />
          </View>
        </Modal>
        
        <Modal animationType="fade" transparent visible={ellipsisV1Icon2Visible}>
          <View style={styles.ellipsisV1Icon2Overlay}>
            <Pressable
              style={styles.ellipsisV1Icon2Bg}
              onPress={closeEllipsisV1Icon2} />
            <NewReservation onClose={closeEllipsisV1Icon2} />
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
              onPress={closeNotificationContainer} />
            <Alarmcenterbanner onClose={closeNotificationContainer} />
          </View>
        </Modal>
        </>
        </>
  );
};

const styles = StyleSheet.create({
  ml74: {
    marginLeft: 74,
  },
  container1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  container1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  ellipsisV1IconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  ellipsisV1IconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  ellipsisV1Icon1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  ellipsisV1Icon1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  ellipsisV1Icon2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  ellipsisV1Icon2Bg: {
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
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
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
    borderColor: "#f3f3f3",
    borderWidth: 1,
    width: 144,
    height: 117,
  },
  text: {
    position: "absolute",
    top: 12,
    left: 18,
    fontSize: 12,
    color: "#adadad",
    textAlign: "left",
    width: 33.92,
  },
  text1: {
    position: "absolute",
    top: 33,
    left: 18,
    fontSize: 12,
    color: "#adadad",
    textAlign: "left",
    width: 33.92,
  },
  text2: {
    position: "absolute",
    top: 54,
    left: 18,
    fontSize: 12,
    color: "#a50034",
    textAlign: "left",
    width: 33.92,
  },
  text3: {
    position: "absolute",
    top: 75,
    left: 18,
    fontSize: 12,
    fontWeight: "800",
    color: "#a50034",
    textAlign: "left",
    width: 33.92,
  },
  text4: {
    position: "absolute",
    top: 96,
    left: 18,
    fontSize: 12,
    color: "#adadad",
    textAlign: "left",
    width: 33.92,
  },
  rectangleView1: {
    position: "absolute",
    top: 9,
    left: 62,
    borderRadius: 3,
    backgroundColor: "#a50034",
    borderStyle: "solid",
    borderColor: "#cacaca",
    borderWidth: 1,
    width: 20.56,
    height: 15,
  },
  rectangleView2: {
    position: "absolute",
    top: 32,
    left: 62,
    borderRadius: 3,
    backgroundColor: "#fcfcfc",
    borderStyle: "solid",
    borderColor: "#d3d3d3",
    borderWidth: 1,
    width: 20.56,
    height: 15,
  },
  aMText: {
    position: "absolute",
    top: 13,
    left: 65,
    fontSize: 8,
    fontWeight: "800",
    color: "#fff",
    textAlign: "center",
    width: 14.39,
  },
  pMText: {
    position: "absolute",
    top: 36,
    left: 66,
    fontSize: 8,
    fontWeight: "800",
    color: "#c0c0c0",
    textAlign: "center",
    width: 13.36,
  },
  startWithSelectionPage: {
    position: "absolute",
    top: 512,
    left: 44,
    width: 144,
    height: 117,
    display: "none",
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
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
    borderColor: "#f3f3f3",
    borderWidth: 1,
    width: 305,
    height: 142,
  },
  text5: {
    position: "absolute",
    top: 13,
    left: 19,
    fontSize: 11,
    color: "#adadad",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 139.79,
  },
  text6: {
    position: "absolute",
    top: 34,
    left: 19,
    fontSize: 11,
    color: "#adadad",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 139.79,
  },
  text7: {
    position: "absolute",
    top: 55,
    left: 19,
    fontSize: 11,
    fontWeight: "800",
    color: "#a50034",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 139.79,
  },
  text8: {
    position: "absolute",
    top: 76,
    left: 19,
    fontSize: 11,
    color: "#adadad",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 139.79,
  },
  text9: {
    position: "absolute",
    top: 97,
    left: 19,
    fontSize: 11,
    color: "#adadad",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 139.79,
  },
  text10: {
    position: "absolute",
    top: 118,
    left: 19,
    fontSize: 11,
    color: "#adadad",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 139.79,
  },
  courseSelectionPage: {
    position: "absolute",
    top: 571,
    left: 44,
    width: 305,
    height: 142,
    display: "none",
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
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
    borderColor: "#f3f3f3",
    borderWidth: 1,
    width: 84,
    height: 118,
  },
  text11: {
    position: "absolute",
    top: 9,
    left: 18,
    fontSize: 11,
    color: "#adadad",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 8,
  },
  text12: {
    position: "absolute",
    top: 27,
    left: 18,
    fontSize: 11,
    fontWeight: "800",
    color: "#a50034",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 8,
  },
  text13: {
    position: "absolute",
    top: 45,
    left: 18,
    fontSize: 11,
    color: "#adadad",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 8,
  },
  text14: {
    position: "absolute",
    top: 63,
    left: 18,
    fontSize: 11,
    color: "#adadad",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 8,
  },
  text15: {
    position: "absolute",
    top: 81,
    left: 18,
    fontSize: 11,
    color: "#adadad",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 8,
  },
  text16: {
    position: "absolute",
    top: 99,
    left: 18,
    fontSize: 11,
    color: "#adadad",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 8,
  },
  numberOfClothesSelectionPa: {
    position: "absolute",
    top: 630,
    left: 42,
    width: 84,
    height: 118,
    display: "none",
  },
  rectangleView5: {
    position: "absolute",
    top: 45.5,
    left: 141.5,
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
  view: {
    position: "absolute",
    top: 771,
    left: 0,
    width: 390,
    height: 73,
  },
  rectangleView6: {
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
    height: 42,
  },
  text17: {
    position: "absolute",
    top: 13,
    left: 52,
    fontSize: 16,
    letterSpacing: -0.8,
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 128.53,
    height: 17,
  },
  pressable: {
    position: "absolute",
    top: 720,
    left: 90,
    width: 233,
    height: 42,
  },
  sText: {
    position: "absolute",
    top: 0,
    left: 4,
    fontSize: 12,
    fontWeight: "500",
    color: "#bcc1cd",
    textAlign: "center",
  },
  text18: {
    position: "absolute",
    top: 19,
    left: 0,
    fontSize: 16,
    fontWeight: "600",
    color: "#212525",
    textAlign: "center",
  },
  groupView: {
    position: "absolute",
    top: 7,
    left: 0,
    width: 15,
    height: 43,
  },
  text19: {
    position: "absolute",
    top: 19,
    left: 0,
    fontSize: 16,
    fontWeight: "600",
    color: "#212525",
    textAlign: "center",
  },
  mText: {
    position: "absolute",
    top: 0,
    left: 4,
    fontSize: 12,
    fontWeight: "500",
    color: "#bcc1cd",
    textAlign: "center",
  },
  groupView1: {
    position: "absolute",
    top: 7,
    left: 48,
    width: 19,
    height: 43,
  },
  text20: {
    position: "absolute",
    top: 19,
    left: 0,
    fontSize: 16,
    fontWeight: "600",
    color: "#212525",
    textAlign: "center",
  },
  tText: {
    position: "absolute",
    top: 0,
    left: 5,
    fontSize: 12,
    fontWeight: "500",
    color: "#bcc1cd",
    textAlign: "center",
  },
  groupView2: {
    position: "absolute",
    top: 7,
    left: 100,
    width: 19,
    height: 43,
  },
  rectangleView7: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#e85483",
    width: 40,
    height: 57,
  },
  text21: {
    position: "absolute",
    top: 19,
    left: 0,
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
  },
  wText: {
    position: "absolute",
    top: 0,
    left: 4,
    fontSize: 12,
    fontWeight: "500",
    color: "#fff",
    textAlign: "left",
  },
  groupView3: {
    position: "absolute",
    top: 7,
    left: 10,
    width: 20,
    height: 43,
  },
  groupView4: {
    position: "absolute",
    top: 0,
    left: 142,
    width: 40,
    height: 57,
  },
  text22: {
    position: "absolute",
    top: 19,
    left: 0,
    fontSize: 16,
    fontWeight: "600",
    color: "#212525",
    textAlign: "center",
  },
  tText1: {
    position: "absolute",
    top: 0,
    left: 7,
    fontSize: 12,
    fontWeight: "500",
    color: "#bcc1cd",
    textAlign: "center",
  },
  groupView5: {
    position: "absolute",
    top: 7,
    left: 202,
    width: 20,
    height: 43,
  },
  text23: {
    position: "absolute",
    top: 19,
    left: 0,
    fontSize: 16,
    fontWeight: "600",
    color: "#212525",
    textAlign: "center",
  },
  fText: {
    position: "absolute",
    top: 0,
    left: 7,
    fontSize: 12,
    fontWeight: "500",
    color: "#bcc1cd",
    textAlign: "center",
  },
  groupView6: {
    position: "absolute",
    top: 7,
    left: 253,
    width: 20,
    height: 43,
  },
  text24: {
    position: "absolute",
    top: 19,
    left: 0,
    fontSize: 16,
    fontWeight: "600",
    color: "#212525",
    textAlign: "center",
  },
  sText1: {
    position: "absolute",
    top: 0,
    left: 6,
    fontSize: 12,
    fontWeight: "500",
    color: "#bcc1cd",
    textAlign: "center",
  },
  groupView7: {
    position: "absolute",
    top: 7,
    left: 305,
    width: 18,
    height: 43,
  },
  groupView8: {
    position: "absolute",
    top: 0,
    left: 25,
    width: 323,
    height: 57,
  },
  calendarView: {
    position: "absolute",
    top: 137,
    left: 8,
    width: 375,
    height: 69,
  },
  rectangleView8: {
    position: "absolute",
    top: 0,
    left: 61,
    backgroundColor: "#faf9f9",
    width: 2,
    height: 467,
  },
  text25: {
    position: "absolute",
    top: 5,
    left: -8,
    fontSize: 17,
    width: 50,
    fontWeight: "700",
    color: "#212525",
    textAlign: "right",
  },
  text26: {
    position: "absolute",
    top: 28,
    left: 7,
    fontSize: 14,
    fontWeight: "500",
    color: "#bcc1cd",
    textAlign: "right",
  },
  groupView9: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 36,
    height: 49,
  },
  rectangleView9: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 16,
    backgroundColor: "#f6f6f5",
    width: 250,
    height: 137,
  },
  barIcon: {
    position: "absolute",
    width: 24,
    height: 24,
    top: 50.5,
    left: 145.5,
    overflow: "hidden",
  },
  icon3: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  ellipsisV1Pressable: {
    position: "absolute",
    left: 218,
    top: 16,
    width: 24,
    height: 24,
  },
  text27: {
    position: "absolute",
    top: 16,
    left: 16,
    fontSize: 18,
    fontWeight: "600",
    color: "#212525",
    textAlign: "left",
  },
  text28: {
    position: "absolute",
    top: 78,
    left: 51,
    fontSize: 12,
    color: "#212525",
    textAlign: "left",
  },
  text29: {
    position: "absolute",
    top: 78,
    left: 40,
    fontSize: 12,
    color: "#212525",
    textAlign: "left",
  },
  text30: {
    position: "absolute",
    top: 103,
    left: 42,
    fontSize: 12,
    color: "#212525",
    textAlign: "left",
    width: 132,
  },
  userIcon: {
    position: "absolute",
    top: 105,
    left: 16,
    width: 14.48,
    height: 14,
    overflow: "hidden",
  },
  brokenEssentionalUITS: {
    position: "absolute",
    height: "9.71%",
    width: "5.6%",
    top: "58.39%",
    right: "88%",
    bottom: "31.9%",
    left: "6.4%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView10: {
    position: "absolute",
    top: 0,
    left: 70,
    width: 250,
    height: 137,
  },
  groupView11: {
    position: "absolute",
    top: 153,
    left: 9,
    width: 320,
    height: 137,
  },
  text31: {
    position: "absolute",
    top: 5,
    left: -5,
    fontSize: 17,
    fontWeight: "700",
    width: 50,
    color: "#212525",
    textAlign: "right",
  },
  text32: {
    position: "absolute",
    top: 28,
    left: 10,
    fontSize: 14,
    fontWeight: "500",
    color: "#bcc1cd",
    textAlign: "right",
  },
  rectangleView10: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 16,
    backgroundColor: "#f6f6f5",
    width: 250,
    height: 137,
  },
  icon4: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  ellipsisV1Pressable1: {
    position: "absolute",
    left: 218,
    top: 16,
    width: 24,
    height: 24,
  },
  text33: {
    position: "absolute",
    top: 16,
    left: 16,
    fontSize: 18,
    fontWeight: "600",
    color: "#212525",
    textAlign: "left",
  },
  text34: {
    position: "absolute",
    top: 80,
    left: 51,
    fontSize: 12,
 
    color: "#212525",
    textAlign: "left",
  },
  text35: {
    position: "absolute",
    top: 80,
    left: 40,
    fontSize: 12,
 
    color: "#212525",
    textAlign: "left",
  },
  text36: {
    position: "absolute",
    top: 103,
    left: 42,
    fontSize: 12,
 
    color: "#212525",
    textAlign: "left",
    width: 132,
  },
  userIcon1: {
    position: "absolute",
    top: 105,
    left: 16,
    width: 14.48,
    height: 14,
    overflow: "hidden",
  },
  brokenEssentionalUITS1: {
    position: "absolute",
    height: "9.71%",
    width: "5.6%",
    top: "58.39%",
    right: "88%",
    bottom: "31.9%",
    left: "6.4%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView12: {
    position: "absolute",
    top: 0,
    left: 74,
    width: 250,
    height: 137,
  },
  groupView13: {
    position: "absolute",
    top: 306,
    left: 5,
    width: 324,
    height: 137,
  },
  rectangleView11: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 16,
    backgroundColor: "#a50034",
    width: 250,
    height: 137,
  },
  icon5: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  ellipsisV1Pressable2: {
    position: "absolute",
    left: 218,
    top: 16,
    width: 24,
    height: 24,
  },
  text37: {
    position: "absolute",
    top: 16,
    left: 16,
    fontSize: 18,
    fontWeight: "600",
 
    color: "#fff",
    textAlign: "left",
  },
  text38: {
    position: "absolute",
    top: 78,
    left: 51,
    fontSize: 12,
 
    color: "#fff",
    textAlign: "left",
  },
  text39: {
    position: "absolute",
    top: 78,
    left: 40,
    fontSize: 12,
 
    color: "#fff",
    textAlign: "left",
  },
  text40: {
    position: "absolute",
    top: 103,
    left: 42,
    fontSize: 12,
 
    color: "#fff",
    textAlign: "left",
    width: 132,
  },
  userIcon2: {
    position: "absolute",
    top: 105,
    left: 16,
    width: 14.48,
    height: 14,
    overflow: "hidden",
  },
  brokenEssentionalUITS2: {
    position: "absolute",
    height: "9.71%",
    width: "5.6%",
    top: "58.39%",
    right: "88%",
    bottom: "31.9%",
    left: "6.4%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView14: {
    position: "absolute",
    top: 0,
    left: 79,
    width: 250,
    height: 137,
  },
  text41: {
    position: "absolute",
    top: 5,
    left: 0,
    fontSize: 17,
    width: 50,
    fontWeight: "700",
    color: "#212525",
    textAlign: "right",
  },
  text42: {
    position: "absolute",
    top: 28,
    left: 15,
    fontSize: 14,
    fontWeight: "500",
 
    color: "#bcc1cd",
    textAlign: "right",
  },
  groupView15: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 45,
    height: 49,
  },
  groupView16: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 329,
    height: 137,
  },
  groupView17: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 329,
    height: 467,
  },
  scheduleView: {
    position: "absolute",
    top: 230,
    left: 35,
    width: 329,
    height: 467,
  },
  rectangleView12: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 390,
    height: 93,
  },
  rectangleView13: {
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
    height: "49.41%",
    width: "48.49%",
    top: "30.32%",
    right: "24.24%",
    bottom: "20.27%",
    left: "27.27%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  notificationPressable: {
    position: "absolute",
    top: 73,
    left: 325,
    width: 40,
    height: 40,
  },
  rectangleView14: {
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
    top: 73,
    left: 41,
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
  view1: {
    position: "absolute",
    top: 82,
    left: 134,
    width: 161,
    height: 23,
  },
  menuView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 390,
    height: 93,
  },
  stylerReservationView: {
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
  todaysReservationText: {
    position: "absolute",
    top: 0,
    left: 31,
    fontSize: 30,
    letterSpacing: -1,
    fontWeight: "600",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 300,
    height: 47,
  },
  text0: {
    position: "absolute",
    top: 35,
    left: 31,
    fontSize: 12,
    letterSpacing: -0.6,
 
    color: "#8d8d8d",
    textAlign: "left",
  },
  SplitlineView: {
    position: "absolute",
    top: 17,
    left: 260,
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 2,
    width: 100,
    height: 1,
  },
});

export default StylerReservation;