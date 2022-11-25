import * as React from "react";
import { Text, StyleSheet } from "react-native";

const SignUpScreen = () => {
  return <Text style={styles.text}>이메일로 회원가입하기</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    letterSpacing: -0.6,
    top: 80,
    left: 1,
    fontWeight: "700",
    color: "#a50034",
    textAlign: "center",
    opacity: 0.5,
  },
});

export default SignUpScreen;