import * as React from "react";
import { Text, StyleSheet } from "react-native";

const Component = () => {
  return <Text style={styles.text}>비밀번호 찾기</Text>;
};

const styles = StyleSheet.create({
  text: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 13,
    letterSpacing: -1.3,
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "right",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 75,
  },
});

export default Component;