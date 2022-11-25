import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FindPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.findPasswordView}>
      <View style={styles.groupView}>
        <View style={styles.rectangleView} />
        <View style={styles.rectangleView1} />
        <TextInput
          style={styles.userNameText}
          placeholder = "회원가입시 작성한 User Name"
          onChangeText={newText => setText(newText)}
        />
        <TextInput
          style={styles.emailText}
          placeholder = "회원가입시 작성한 Email"
          onChangeText={newText => setText(newText)}
        />
      </View>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("FoundPassword")}
      >
        <View style={styles.rectangleView2} />
        <Text style={styles.text}>비밀번호 확인</Text>
      </Pressable>
      <Text style={styles.text1}>비밀번호 찾기</Text>
      <Text style={styles.userNameEmail}>
        <Text style={styles.text2}>{`회원가입시 작성한 User Name과 Email을 입력하세요`}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#b5b5b5",
    borderWidth: 1,
    width: 328,
    height: 45.2,
  },
  rectangleView1: {
    position: "absolute",
    top: 51.79,
    left: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#b5b5b5",
    borderWidth: 1,
    width: 328,
    height: 45.2,
  },
  userNameText: {
    position: "absolute",
    top: 16,
    left: 24,
    fontSize: 14,
    letterSpacing: -0.5,
    color: "#b5b5b5",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 171.7,
    height: 14,
  },
  emailText: {
    position: "absolute",
    top: 68,
    left: 24,
    fontSize: 14,
    letterSpacing: -0.5,
    color: "#b5b5b5",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 138.34,
    height: 14,
  },
  groupView: {
    position: "absolute",
    top: 378,
    left: 31,
    width: 328,
    height: 97,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 14,
    borderRadius: 50,
    backgroundColor: "#a50034",
    width: 177,
    height: 40,
  },
  text: {
    position: "absolute",
    top: 12,
    left: 32,
    fontSize: 16,
 
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 141,
    height: 17,
  },
  pressable: {
    position: "absolute",
    top: 538,
    left: 107,
    width: 177,
    height: 40,
  },
  text1: {
    position: "absolute",
    top: 283,
    left:41,
    fontSize: 42,
    letterSpacing: -2.1,
    fontWeight: "700",
 
    color: "#a50034",
    textAlign: "left",
  },
  text2: {
  },
  userNameText1: {
    fontWeight: "300",
 
  },
  emailText1: {
    fontWeight: "300",
 
  },
  userNameEmail: {
    position: "absolute",
    top: 330,
    left: 41,
    fontSize: 14,
    letterSpacing: -0.7,
    color: "#6a6a6a",
    textAlign: "left",
  },
  findPasswordView: {
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

export default FindPassword;
