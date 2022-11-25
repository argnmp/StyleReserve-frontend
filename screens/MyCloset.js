import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Pressable, Text, Modal, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Alarmcenterbanner from "../components/Alarmcenterbanner";

const Mycloset = () => {
  const [notificationContainerVisible, setNotificationContainerVisible] =
    useState(false);
  const navigation = useNavigation();

  const openNotificationContainer = useCallback(() => {
    setNotificationContainerVisible(true);
  }, []);

  const closeNotificationContainer = useCallback(() => {
    setNotificationContainerVisible(false);
  }, []);
  return (
    <>
      <View style={styles.myclosetView}>
        <View style={styles.view}>
          <View style={styles.navigationBarView} />
          <View style={styles.rectangleView} />
          <View style={styles.frameView}>
            <Pressable
              style={styles.HomeIcon}
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
              source={require("../assets/closet.png")}
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
        <Pressable
          style={styles.rectanglePressable}
          onPress={() => navigation.navigate("AddClothesInfo")}
        />
        <Text style={styles.text}>새 옷 추가하기</Text>
        <View style={styles.searchView}>
          <View style={styles.searchfieldView} />
          <Text style={styles.text1}>Search</Text>
          <Image
            style={styles.iconsearch}
            resizeMode="cover"
            source={require("../assets/researchicon.png")}
          />
        </View>
        <Text style={styles.categoriesText}>Categories</Text>
        <View style={styles.categoriesView}>
          <Text style={styles.allText}>All</Text>
          <Image
            style={styles.ellipseIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-21.png")}
          />
          <View style={styles.groupView}>
            <Text style={styles.topsText}>Tops</Text>
            <Image
              style={styles.ellipseIcon1}
              resizeMode="cover"
              source={require("../assets/ellipse-31.png")}
            />
            <Image
              style={styles.shirtIcon}
              resizeMode="cover"
              source={require("../assets/shirt.png")}
            />
          </View>
          <View style={styles.groupView1}>
            <Text style={styles.bottomsText}>Bottoms</Text>
            <Image
              style={styles.ellipseIcon2}
              resizeMode="cover"
              source={require("../assets/ellipse-31.png")}
            />
            <Image
              style={styles.pantsIcon}
              resizeMode="cover"
              source={require("../assets/pants.png")}
            />
          </View>
          <View style={styles.groupView2}>
            <Text style={styles.dressesText}>Dresses</Text>
            <Image
              style={styles.ellipseIcon3}
              resizeMode="cover"
              source={require("../assets/ellipse-31.png")}
            />
            <Image
              style={styles.outlineEssentionalUIBo}
              resizeMode="cover"
              source={require("../assets/outline.png")}
            />
          </View>
          <Text style={styles.aText}>A</Text>
        </View>
        <Text style={styles.topsText1}>Tops</Text>
        <View style={styles.itemCardView}>
          <View style={styles.cardView} />
          <Text style={styles.text2}>핑크 후드티</Text>
          <Text style={styles.mixxoText}>Mixxo</Text>
          <Image
            style={styles.hoodie1Icon}
            resizeMode="cover"
            source={require("../assets/pink-hoodie.png")}
          />
          <View style={styles.cardBorderView} />
        </View>
        <View style={styles.itemCard2View}>
          <View style={styles.cardView1} />
          <Text style={styles.text3}>갈색 무스탕</Text>
          <Text style={styles.romistoryText}>Romistory</Text>
          <Image
            style={styles.image1Icon}
            resizeMode="cover"
            source={require("../assets/brown-mustang.png")}
          />
          <View style={styles.cardBorderView1} />
        </View>
        <View style={styles.itemCard3View}>
          <View style={styles.cardView2} />
          <Text style={styles.text4}>하와이안 셔츠</Text>
          <Text style={styles.uniqloText}>Uniqlo</Text>
          <Image
            style={styles.rectangleIcon}
            resizeMode="cover"
            source={require("../assets/hawai-shirts.png")}
          />
          <View style={styles.cardBorderView2} />
        </View>
        <Pressable
          style={styles.itemCard4Pressable}
          onPress={() => navigation.navigate("PersonalStylingCalender")}
        >
          <View style={styles.cardView3} />
          <Text style={styles.text5}>블랙 레더 자켓</Text>
          <Text style={styles.lapText}>Lap</Text>
          <Image
            style={styles.jacket1Icon}
            resizeMode="cover"
            source={require("../assets/black-leather.png")}
          />
          <View style={styles.cardBorderView3} />
        </Pressable>
        <View style={styles.menuView}>
          <View style={styles.rectangleView1} />
          <Pressable
            style={styles.notificationPressable}
            onPress={openNotificationContainer}
          >
            <View style={styles.rectangleView2} />
            <Image
              style={styles.notificationIcon}
              resizeMode="cover"
              source={require("../assets/notification.png")}
            />
          </Pressable>
          <Pressable
            style={styles.pressable}
            onPress={() => navigation.navigate("MainPage")}
          >
            <View style={styles.rectangleView3} />
            <Image
              style={styles.arrowLeft}
              resizeMode="cover"
              source={require("../assets/left-arrow.png")}
            />
          </Pressable>
          <View style={styles.view1}>
            <Text style={styles.wed15SeptemperText}>Add Schedule</Text>
          </View>
        </View>
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
    </>
  );
};

const styles = StyleSheet.create({
  ml74: {
    marginLeft: 74,
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
    height: 63,
  },
  rectangleView: {
    position: "absolute",
    top: 14.67,
    left: 227,
    borderRadius: 10,
    backgroundColor: "rgba(165, 0, 52, 0.2)",
    width: 34,
    height: 29.34,
  },
  icon: {
    width: "100%",
    height: "100%",
    flexShrink: 0,
    overflow: "hidden",
  },
  HomeIcon: {
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
    top: 18.12,
    left: 26,
    height: 20.71,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    position: "absolute",
    top: 781,
    left: 0,
    width: 390,
    height: 63,
  },
  rectanglePressable: {
    position: "absolute",
    top: 197,
    left: 103,
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
    width: 184,
    height: 40,
  },
  text: {
    position: "absolute",
    top: 209,
    left: 136,
    fontSize: 16,
    letterSpacing: -0.8,
    fontFamily: "BIZ UDGothic",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 128.53,
    height: 16.19,
  },
  searchfieldView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 27,
    backgroundColor: "#ebebeb",
  },
  text1: {
    position: "absolute",
    height: "50%",
    width: "77.54%",
    top: "24.32%",
    left: "16.58%",
    fontSize: 17,
    letterSpacing: -0.41,
    lineHeight: 22,
    fontFamily: "Roboto",
    color: "#717171",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  iconsearch: {
    position: "absolute",
    height: "51.35%",
    width: "6.1%",
    top: "24.32%",
    right: "88.11%",
    bottom: "24.32%",
    left: "5.79%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  searchView: {
    position: "absolute",
    top: 126,
    left: 31,
    width: 328,
    height: 37,
  },
  categoriesText: {
    position: "absolute",
    top: 251,
    left: 31,
    fontSize: 22,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#252525",
    textAlign: "left",
    width: 115,
    height: 24,
  },
  allText: {
    position: "absolute",
    top: 57,
    left: 17,
    fontSize: 13,
    fontFamily: "NanumGothic",
    color: "#252525",
    textAlign: "center",
  },
  ellipseIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 50,
    height: 50,
  },
  topsText: {
    position: "absolute",
    top: 57,
    left: 11,
    fontSize: 13,
    fontFamily: "NanumGothic",
    color: "#252525",
    textAlign: "center",
  },
  ellipseIcon1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 50,
    height: 50,
  },
  shirtIcon: {
    position: "absolute",
    top: 13,
    left: 13,
    width: 25,
    height: 25,
    overflow: "hidden",
  },
  groupView: {
    position: "absolute",
    top: 0,
    left: 65,
    width: 50,
    height: 70,
  },
  bottomsText: {
    position: "absolute",
    top: 57,
    left: 1,
    fontSize: 13,
    fontFamily: "NanumGothic",
    color: "#252525",
    textAlign: "center",
  },
  ellipseIcon2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 50,
    height: 50,
  },
  pantsIcon: {
    position: "absolute",
    top: 13,
    left: 13,
    width: 25,
    height: 25,
    overflow: "hidden",
  },
  groupView1: {
    position: "absolute",
    top: 0,
    left: 130,
    width: 52,
    height: 70,
  },
  dressesText: {
    position: "absolute",
    top: 57,
    left: 3,
    fontSize: 13,
    fontFamily: "NanumGothic",
    color: "#252525",
    textAlign: "center",
  },
  ellipseIcon3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 50,
    height: 50,
  },
  outlineEssentionalUIBo: {
    position: "absolute",
    top: 14,
    left: 13,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  groupView2: {
    position: "absolute",
    top: 0,
    left: 195,
    width: 50,
    height: 70,
  },
  aText: {
    position: "absolute",
    top: 12,
    left: 18,
    fontSize: 22,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  categoriesView: {
    position: "absolute",
    top: 299,
    left: 31,
    width: 331,
    height: 62,
  },
  topsText1: {
    position: "absolute",
    top: 394,
    left: 31,
    fontSize: 22,
    letterSpacing: -1.1,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#252525",
    textAlign: "left",
    width: 70,
    height: 24,
  },
  cardView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  text2: {
    position: "absolute",
    height: "9.48%",
    width: "81.92%",
    top: "73.37%",
    left: "9.04%",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#3d3d3d",
    textAlign: "left",
  },
  mixxoText: {
    position: "absolute",
    height: "6.52%",
    width: "29.22%",
    top: "85.33%",
    left: "9.09%",
    fontSize: 12,
    fontFamily: "Roboto",
    color: "rgba(69, 69, 69, 0.5)",
    textAlign: "left",
  },
  hoodie1Icon: {
    position: "absolute",
    height: "49.19%",
    width: "52.08%",
    top: "17.93%",
    right: "25.27%",
    bottom: "32.88%",
    left: "22.64%",
    borderRadius: 30,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  cardBorderView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "rgba(69, 69, 69, 0.5)",
    borderWidth: 1,
  },
  itemCardView: {
    position: "absolute",
    height: "19.43%",
    width: "39.49%",
    top: "50.83%",
    right: "52.82%",
    bottom: "29.74%",
    left: "7.69%",
    borderRadius: 15,
  },
  cardView1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  text3: {
    position: "absolute",
    height: "9.48%",
    width: "81.92%",
    top: "73.37%",
    left: "9.04%",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#3d3d3d",
    textAlign: "left",
  },
  romistoryText: {
    position: "absolute",
    height: "6.52%",
    width: "51.3%",
    top: "85.33%",
    left: "9.09%",
    fontSize: 12,
    fontFamily: "Roboto",
    color: "rgba(69, 69, 69, 0.5)",
    textAlign: "left",
  },
  image1Icon: {
    position: "absolute",
    top: 34,
    left: 28,
    borderRadius: 15,
    width: 90,
    height: 86,
  },
  cardBorderView1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "rgba(69, 69, 69, 0.5)",
    borderWidth: 1,
  },
  itemCard2View: {
    position: "absolute",
    height: "19.43%",
    width: "39.49%",
    top: "50.83%",
    right: "7.95%",
    bottom: "29.74%",
    left: "52.56%",
    borderRadius: 15,
  },
  cardView2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  text4: {
    position: "absolute",
    height: "9.48%",
    width: "81.92%",
    top: "73.37%",
    left: "9.04%",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#3d3d3d",
    textAlign: "left",
  },
  uniqloText: {
    position: "absolute",
    height: "6.52%",
    width: "29.22%",
    top: "85.33%",
    left: "9.09%",
    fontSize: 12,
    fontFamily: "Roboto",
    color: "rgba(69, 69, 69, 0.5)",
    textAlign: "left",
  },
  rectangleIcon: {
    position: "absolute",
    top: 14,
    left: 14,
    borderRadius: 59,
    width: 128,
    height: 113,
  },
  cardBorderView2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "rgba(69, 69, 69, 0.5)",
    borderWidth: 1,
  },
  itemCard3View: {
    position: "absolute",
    height: "19.55%",
    width: "39.49%",
    top: "71.8%",
    right: "52.82%",
    bottom: "8.65%",
    left: "7.69%",
    borderRadius: 15,
  },
  cardView3: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  text5: {
    position: "absolute",
    height: "9.48%",
    width: "81.92%",
    top: "73.37%",
    left: "9.04%",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#3d3d3d",
    textAlign: "left",
  },
  lapText: {
    position: "absolute",
    height: "6.52%",
    width: "29.22%",
    top: "85.33%",
    left: "9.09%",
    fontSize: 12,
    fontFamily: "Roboto",
    color: "rgba(69, 69, 69, 0.5)",
    textAlign: "left",
  },
  jacket1Icon: {
    position: "absolute",
    top: 22,
    left: 26,
    borderRadius: 15,
    width: 98,
    height: 98,
  },
  cardBorderView3: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "rgba(69, 69, 69, 0.5)",
    borderWidth: 1,
  },
  itemCard4Pressable: {
    position: "absolute",
    height: "19.55%",
    width: "39.49%",
    top: "71.8%",
    right: "7.95%",
    bottom: "8.65%",
    left: "52.56%",
    borderRadius: 15,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 390,
    height: 93,
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
  notificationIcon: {
    position: "absolute",
    height: "49.41%",
    width: "48.48%",
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
    top: 53,
    left: 319,
    width: 40,
    height: 40,
  },
  rectangleView3: {
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
    top: 53,
    left: 31,
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
  view1: {
    position: "absolute",
    top: 62,
    left: 134,
    width: 123,
    height: 23,
  },
  menuView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 390,
    height: 93,
  },
  myclosetView: {
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

export default Mycloset;