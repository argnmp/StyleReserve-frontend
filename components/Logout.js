import * as React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Logout = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.logoutPressable}
      onPress={() => navigation.navigate("SignInScreen")}
    >
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/check.png")}
      />
      <Text style={[styles.text2, styles.mt56]}>
        <Text style={styles.text}>로그아웃 되었습니다{"\n"}</Text>
        <Text style={styles.text1}>서비스 이용을 위해{"\n"} 재로그인 해주세요</Text>
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mt56: {
    marginTop: 56,
  },
  icon: {
    position: "relative",
    width: 97,
    height: 97,
    flexShrink: 0,
    overflow: "hidden",
  },
  text: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text1: {
    margin: 0,
  },
  text2: {
    position: "relative",
    fontSize: 14,
    lineHeight: 17,
 
    color: "#323232",
    textAlign: "center",
    width: 238,
    height: 55,
  },
  logoutPressable: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#fff",
    width: 296,
    height: 297,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 40,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
    maxWidth: "90%",
    maxHeight: "90%",
  },
});

export default Logout;