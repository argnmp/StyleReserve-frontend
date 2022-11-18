import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Alarmcenterbanner = ({ onClose }) => {
  return (
    <View style={styles.alarmcenterbannerView}>
      <Text style={styles.text}>No Notification</Text>
      <Text style={styles.text2}>알림 센터</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    position: "absolute",
    top: 136,
    left: 75,
    fontSize: 14,
    lineHeight: 17,
    fontFamily: "Nanum Gothic",
    color: "#323232",
    textAlign: "center",
    width: 166,
    height: 20,
  },
  text2: {
    position: "absolute",
    top: 23,
    left: 23,
    fontSize: 22,
    letterSpacing: -1.1,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#252525",
    textAlign: "left",
    width: 101,
    height: 24,
  },
  alarmcenterbannerView: {
    position: "relative",
    borderRadius: 30,
    backgroundColor: "#fff",
    width: 328,
    height: 327,
    maxWidth: "90%",
    maxHeight: "90%",
  },
});

export default Alarmcenterbanner;
