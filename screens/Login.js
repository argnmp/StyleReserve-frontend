import * as React from "react";
import { useState, } from "react";
import { StyleSheet, View, Text, Pressable, Image, TextInput } from "react-native";
import { AsyncStorage} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import FindMyPW from "../components/FindMyPW";
import SignUpPage from "../components/SignUpPage";
import axios from "axios";

const loginApi = async (navigation, email, password) => {
  let result = await axios.post('http://15.165.172.198/auth/signIn', {
    email,
    password
  });
  if(result.data.code == Number(2011)){
    console.log('login failed');
    return;
  }
  await AsyncStorage.setItem('access_token', result.data.data.access_token);
  navigation.navigate("MainPage");
}

const SignInScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  return (
    <>
      <View style={styles.enterLoginView}>
        <View style={styles.enterEmailView}>
          <View style={styles.emailboxView} />
          <TextInput
          style={styles.inputtext1}
          placeholder="이메일을 입력하세요"
          onChangeText={newText => setEmail(newText)}
          />
        </View>
        <View style={styles.enterPasswordView}>
          <View style={styles.passwordBoxView} />
          <TextInput
          style={styles.inputtext2}
          placeholder="비밀번호를 입력하세요"
          onChangeText={newText => setPassword(newText)}
          />
        </View>
      </View>

      <View style={styles.signUpButtonView}>
        <Pressable
          onPress={() => navigation.navigate("SignUpScreen")}
        >
          <SignUpPage />
        </Pressable>
      </View>

      <View style={styles.findPasswordButtonView}>
        <Pressable
          onPress={() => navigation.navigate("FindPassword")}
        >
          <FindMyPW />
        </Pressable>
      </View>
      <Pressable
        style={styles.loginButtonPressable}
        onPress={async () => {await loginApi(navigation, email, password)}}
      >
        <View style={styles.rectangleView} />
        <Text style={styles.text4}>로그인</Text>
      </Pressable>

      <Image
        style={styles.serviceLogoIcon}
        resizeMode="cover"
        source={require("../assets/logo-grad.png")}
      />
      <View style={styles.splitView}>
        <Text style={styles.orText}>{`-------------------- Or --------------------`}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  emailboxView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#b5b5b5",
    borderWidth: 1,
    width: 328,
    height: 45.2,
  },
  inputtext1: {
    position: "absolute",
    top: 16.01,
    left: 10.16,
    fontSize: 14,
    letterSpacing: -1.4,
    color: "#b5b5b5",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 302.39,
    height: 14.13,
  },
  enterEmailView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 328,
    height: 45.2,
  },
  passwordBoxView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#b5b5b5",
    borderWidth: 1,
    width: 328,
    height: 45.2,
  },
  inputtext2: {
    position: "absolute",
    top: 16.01,
    left: 10.16,
    fontSize: 14,
    letterSpacing: -1.4,
    color: "#b5b5b5",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 275.76,
    height: 14.13,
  },
  enterPasswordView: {
    position: "absolute",
    top: 51.79,
    left: 0,
    width: 328,
    height: 45.2,
  },
  enterLoginView: {
    position: "absolute",
    top: 380,
    left: 41,
    width: 328,
    height: 97,
  },
  text2: {
    letterSpacing: "-5%",
  },
  styleReserveText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 13,
    color: "#757171",
    textAlign: "right",
  },
  text3: {
    fontSize: 15,
    letterSpacing: -0.6,
    top: 80,
    left: 1,
    fontWeight: "700",
    color: "#a50034",
    textAlign: "center",
    opacity: 0.5,
  },
  pressable: {
    position: "absolute",
    left: 150,
    top: 0,
  },
  signUpButtonView: {
    position: "absolute",
    top: 635,
    left: 88,
    width: 238,
    height: 15,
  },
  findPasswordButtonView: {
    position: "absolute",
    top: 447,
    left: 288,
    width: 71,
    height: 15,
  },
  rectangleView: {
    position: "absolute",
    top: 40,
    left: 7,
    borderRadius: 50,
    backgroundColor: "#a50034",
    width: 128,
    height: 40,
  },
  text4: {
    position: "absolute",
    top: 53,
    left: 38,
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 67,
    height: 14,
  },
  loginButtonPressable: {
    position: "absolute",
    top: 498,
    left: 131,
    width: 128,
    height: 40,
  },
  serviceLogoIcon: {
    position: "absolute",
    top: 190,
    left: 132,
    width: 139,
    height: 168,
  },
  orText: {
    position: "absolute",
    top: 68,
    left: 44,
    fontSize: 12,
    color: "#757171",
    textAlign: "center",
  },
  splitView: {
    position: "absolute",
    top: 583,
    left: 46,
    width: 298,
    height: 14,
  },
  signInScreenPressable: {
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

export default SignInScreen;