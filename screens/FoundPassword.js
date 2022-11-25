import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FoundPassword = () => {
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
        <Text style={styles.text1}>회원가입시 작성한 이메일로 비밀번호를 보내드렸으니</Text>
      </Text>
      <Text style={styles.text2}>
        <Text style={styles.text1}>확인 후 다시 로그인 바랍니다</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 10,
    borderRadius: 50,
    backgroundColor: "#a50034",
    elevation: 4,
    width: 270,
    height: 40,
  },
  text: {
    position: "absolute",
    top: 11,
    left: 49,
    fontSize: 16,
 
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
  text2: {
    position: "absolute",
    top: 410,
    left: 125,
    fontSize: 17,
    letterSpacing: -0.7,
 
    color: "#6a6a6a",
    textAlign: "center",
  },
  text3: {
    position: "absolute",
    top: 388,
    left: 60,
    fontSize: 17,
    letterSpacing: -0.7,
    color: "#6a6a6a",
    textAlign: "center",
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

export default FoundPassword;
