import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ShowPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.showPasswordView}>
      <Pressable
        style={styles.groupPressable}
        onPress={() => navigation.navigate("Login")}
      >
        <View style={styles.rectangleView} />
        <Text style={styles.text}>로그인 화면으로 돌아가기</Text>
      </Pressable>

      <Text style={styles.text3}>
        <Text style={styles.text1}>회원가입시 작성한 이메일로 비밀번호를 보내드렸으니 확인해주시기 바랍니다</Text>
      </Text>
      <Pressable
        style={styles.xMarkNormalPressable}
        onPress={() => navigation.navigate("Login")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/close.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 50,
    backgroundColor: "#a50034",
    elevation: 4,
    shadowOpacity: 1,
    width: 270,
    height: 40,
  },
  text: {
    position: "absolute",
    top: 9,
    left: 45,
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 22,
  },
  groupPressable: {
    position: "absolute",
    top: 491,
    left: 60,
    width: 270,
    height: 40,
  },
  text1: {
    marginBlockStart: 0,
    marginBlockEnd: 5,
  },
  text3: {
    position: "absolute",
    top: 388,
    left: 63,
    fontSize: 14,
    letterSpacing: -0.7,
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "center",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  xMarkNormalPressable: {
    position: "absolute",
    left: "91.28%",
    top: "1.18%",
    right: "2.56%",
    bottom: "95.97%",
    width: "6.15%",
    height: "2.84%",
  },
  showPasswordView: {
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

export default ShowPassword;
