import * as React from "react";
import { useState, useCallback } from "react";
import { View, StyleSheet, Text, Image, Pressable, Modal } from "react-native";
import StartWith from "../components/StartWith";
import NumOfClothes from "../components/NumOfClothes";
import Signupbanner1 from "../components/ReserveDoneBanner";

const NewReservation = ({ onClose }) => {
  const [outlineArrowsAltArrowDVisible, setOutlineArrowsAltArrowDVisible] =
    useState(false);
  const [outlineArrowsAltArrowD1Visible, setOutlineArrowsAltArrowD1Visible] =
    useState(false);
  const [containerVisible, setContainerVisible] = useState(false);

  const openOutlineArrowsAltArrowD = useCallback(() => {
    setOutlineArrowsAltArrowDVisible(true);
  }, []);

  const closeOutlineArrowsAltArrowD = useCallback(() => {
    setOutlineArrowsAltArrowDVisible(false);
  }, []);

  const openOutlineArrowsAltArrowD1 = useCallback(() => {
    setOutlineArrowsAltArrowD1Visible(true);
  }, []);

  const closeOutlineArrowsAltArrowD1 = useCallback(() => {
    setOutlineArrowsAltArrowD1Visible(false);
  }, []);

  const openContainer = useCallback(() => {
    setContainerVisible(true);
  }, []);

  const closeContainer = useCallback(() => {
    setContainerVisible(false);
  }, []);
  return (
    <>
      <View style={styles.newReservationView}>
        <View style={styles.groupView}>
          <View style={styles.rectangleView} />
          <Text style={styles.startWithText}>Start with</Text>
          <Text style={styles.aMText}>10:30 AM</Text>
          <Pressable
            style={styles.outlineArrowsAltArrowD}
            onPress={openOutlineArrowsAltArrowD}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/down-arrow.png")}
            />
          </Pressable>
          <Image
            style={styles.lineDuotoneTimeStopwatc}
            resizeMode="cover"
            source={require("../assets/clock.png")}
          />
        </View>
        <View style={styles.groupView1}>
          <View style={styles.numberofClothesView}>
            <View style={styles.rectangleView1} />
            <Text style={styles.numberOfClothes}>Number of Clothes</Text>
            <Text style={styles.text}>2</Text>
            <Image
              style={styles.lineDuotoneEssentionalUI}
              resizeMode="cover"
              source={require("../assets/tshirt.png")}
            />
          </View>
          <Pressable
            style={styles.outlineArrowsAltArrowD1}
            onPress={openOutlineArrowsAltArrowD1}
          >
            <Image
              style={styles.icon1}
              resizeMode="cover"
              source={require("../assets/down-arrow.png")}
            />
          </Pressable>
        </View>
        <Pressable style={styles.pressable} onPress={openContainer}>
          <View style={styles.rectangleView2} />
          <Text style={styles.text1}>예약 확정하기</Text>
        </Pressable>
        <View style={styles.groupView3}>
          <View style={styles.groupView2}>
            <View style={styles.rectangleView3} />
            <Text style={styles.courseSelectionText}>Course Selection</Text>
            <Text style={styles.text2}>정장 / 코트 코스</Text>
            <Image
              style={styles.lineDuotoneHomeFurniture}
              resizeMode="cover"
              source={require("../assets/multiple.png")}
            />
          </View>
          <Image
            style={styles.outlineArrowsAltArrowD2}
            resizeMode="cover"
            source={require("../assets/down-arrow.png")}
          />
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={outlineArrowsAltArrowDVisible}
      >
        <View style={styles.outlineArrowsAltArrowDOverlay}>
          <Pressable
            style={styles.outlineArrowsAltArrowDBg}
            onPress={closeOutlineArrowsAltArrowD}
          />
          <StartWith onClose={closeOutlineArrowsAltArrowD} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={outlineArrowsAltArrowD1Visible}
      >
        <View style={styles.outlineArrowsAltArrowD1Overlay}>
          <Pressable
            style={styles.outlineArrowsAltArrowD1Bg}
            onPress={closeOutlineArrowsAltArrowD1}
          />
          <NumOfClothes onClose={closeOutlineArrowsAltArrowD1} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={containerVisible}>
        <View style={styles.containerOverlay}>
          <Pressable style={styles.containerBg} onPress={closeContainer} />
          <Signupbanner1 onClose={closeContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  outlineArrowsAltArrowDOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  outlineArrowsAltArrowDBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  outlineArrowsAltArrowD1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  outlineArrowsAltArrowD1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  containerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  containerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  rectangleView: {
    position: "absolute",
    top: 12,
    left: 1.06,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    borderStyle: "solid",
    borderColor: "#e8e1e1",
    borderWidth: 1,
    width: 146.23,
    height: 35,
  },
  startWithText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 8,
    fontWeight: "700",
    fontFamily: "Nanum Gothic",
    color: "#ad8c8c",
    textAlign: "left",
    width: 59.75,
    height: 13,
  },
  aMText: {
    position: "absolute",
    top: 23,
    left: 41,
    fontSize: 13,
    fontWeight: "700",
    fontFamily: "Nanum Gothic",
    color: "#444",
    textAlign: "left",
    width: 63.87,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  outlineArrowsAltArrowD: {
    position: "absolute",
    left: 123.62,
    top: 21,
    width: 16.48,
    height: 18,
  },
  lineDuotoneTimeStopwatc: {
    position: "absolute",
    top: 22,
    left: 18,
    width: 15,
    height: 15,
    overflow: "hidden",
  },
  groupView: {
    position: "absolute",
    top: 104,
    left: 37,
    width: 146.29,
    height: 46,
  },
  rectangleView1: {
    position: "absolute",
    top: 12,
    left: 1,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    borderStyle: "solid",
    borderColor: "#e8e1e1",
    borderWidth: 1,
    width: 84,
    height: 35,
  },
  numberOfClothes: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 8,
    fontWeight: "700",
    fontFamily: "Nanum Gothic",
    color: "#ad8c8c",
    textAlign: "left",
    width: 77,
    height: 13,
  },
  text: {
    position: "absolute",
    top: 23,
    left: 40,
    fontSize: 13,
    fontWeight: "700",
    fontFamily: "Nanum Gothic",
    color: "#444",
    textAlign: "left",
  },
  lineDuotoneEssentionalUI: {
    position: "absolute",
    top: 22,
    left: 18,
    width: 16,
    height: 15,
    overflow: "hidden",
  },
  numberofClothesView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 84,
    height: 46,
  },
  icon1: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  outlineArrowsAltArrowD1: {
    position: "absolute",
    left: 61,
    top: 21,
    width: 16.48,
    height: 18,
  },
  groupView1: {
    position: "absolute",
    top: 40,
    left: 37,
    width: 84,
    height: 46,
  },
  rectangleView2: {
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
  text1: {
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
  pressable: {
    position: "absolute",
    top: 296,
    left: 73.5,
    width: 233,
    height: 42,
  },
  rectangleView3: {
    position: "absolute",
    top: 12,
    left: 1,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    borderStyle: "solid",
    borderColor: "#e8e1e1",
    borderWidth: 1,
    width: 307,
    height: 35,
  },
  courseSelectionText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 8,
    fontWeight: "700",
    fontFamily: "Nanum Gothic",
    color: "#ad8c8c",
    textAlign: "left",
    width: 77,
    height: 13,
  },
  text2: {
    position: "absolute",
    top: 23,
    left: 43,
    fontSize: 13,
    fontWeight: "700",
    fontFamily: "Nanum Gothic",
    color: "#444",
    textAlign: "left",
  },
  lineDuotoneHomeFurniture: {
    position: "absolute",
    top: 22,
    left: 18,
    width: 16,
    height: 15,
    overflow: "hidden",
  },
  groupView2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 307,
    height: 46,
  },
  outlineArrowsAltArrowD2: {
    position: "absolute",
    top: 21,
    left: 283,
    width: 16.48,
    height: 18,
    overflow: "hidden",
  },
  groupView3: {
    position: "absolute",
    top: 168,
    left: 37,
    width: 307,
    height: 46,
  },
  newReservationView: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#fff",
    width: 380,
    height: 455,
    maxWidth: "90%",
    maxHeight: "90%",
  },
});

export default NewReservation;
