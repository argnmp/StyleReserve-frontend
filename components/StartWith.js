import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const StartWith = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.startWithView}>
      <View style={styles.dropdownListView}>
        <View style={styles.frameView5}>
          <View style={styles.frameView}>
            <Text style={styles.buttonText}>09:00</Text>
          </View>
          <Text style={[styles.buttonText1, styles.mt16]}>09:30</Text>
          <View style={[styles.frameView1, styles.mt16]}>
            <Text style={styles.buttonText2}>10:00</Text>
          </View>
          <Pressable
            style={[styles.buttonTextPressable, styles.mt16]}
            onPress={() => navigation.navigate("StylerReservation2")}
          >
            <Text style={styles.text}>10:30</Text>
          </Pressable>
          <View style={[styles.frameView3, styles.mt16]}>
            <View style={styles.frameView2}>
              <Text style={styles.buttonText3}>11:00</Text>
            </View>
          </View>
          <View style={[styles.frameView4, styles.mt16]} />
        </View>
      </View>
      <View style={styles.rectangleView} />
      <View style={styles.rectangleView1} />
    </View>
  );
};

const styles = StyleSheet.create({
  mt16: {
    marginTop: 16,
  },
  buttonText: {
    position: "absolute",
    marginTop: -6,
    top: "50%",
    left: 0,
    fontSize: 13,
    lineHeight: 13,
    fontWeight: "500",
 
    color: "#1f1f1f",
    textAlign: "left",
  },
  frameView: {
    alignSelf: "stretch",
    position: "relative",
    height: 32,
    flexShrink: 0,
  },
  buttonText1: {
    position: "relative",
    fontSize: 13,
    lineHeight: 13,
    fontWeight: "500",
 
    color: "#1f1f1f",
    textAlign: "left",
  },
  buttonText2: {
    position: "absolute",
    marginTop: -6,
    top: "50%",
    left: 0,
    fontSize: 13,
    lineHeight: 13,
    fontWeight: "500",
 
    color: "#1f1f1f",
    textAlign: "left",
  },
  frameView1: {
    alignSelf: "stretch",
    position: "relative",
    height: 32,
    flexShrink: 0,
  },
  text: {
    fontSize: 13,
    lineHeight: 13,
    fontWeight: "500",
 
    color: "#a50034",
    textAlign: "left",
  },
  buttonTextPressable: {
    position: "relative",
  },
  buttonText3: {
    position: "absolute",
    marginTop: -6,
    top: "50%",
    left: 0,
    fontSize: 13,
    lineHeight: 13,
    fontWeight: "500",
 
    color: "#1f1f1f",
    textAlign: "left",
  },
  frameView2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 56,
    height: 32,
  },
  frameView3: {
    alignSelf: "stretch",
    position: "relative",
    height: 32,
    flexShrink: 0,
  },
  frameView4: {
    alignSelf: "stretch",
    position: "relative",
    height: 32,
    flexShrink: 0,
  },
  frameView5: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  dropdownListView: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    borderRadius: 6,
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 12,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView: {
    position: "absolute",
    top: 12,
    right: 4,
    bottom: 12,
    borderRadius: 8,
    backgroundColor: "#000",
    width: 2,
    opacity: 0.06,
  },
  rectangleView1: {
    position: "absolute",
    top: 12,
    right: 4,
    borderRadius: 8,
    backgroundColor: "#1f1f1f",
    width: 2,
    height: 148,
    opacity: 0.2,
  },
  startWithView: {
    position: "relative",
    borderRadius: 6,
    backgroundColor: "#f5f5f5",
    shadowColor: "rgba(0, 14, 51, 0.15)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 68,
    height: 208,
    overflow: "hidden",
    maxWidth: "90%",
    maxHeight: "90%",
  },
});

export default StartWith;
