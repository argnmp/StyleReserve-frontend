import * as React from "react";
import { useState, useCallback } from "react";
import { Text, StyleSheet, View, Pressable, Modal, TextInput } from "react-native";
import Signupbanner from "../components/SignUpBanner";

const SignUpScreen = () => {
  const [username, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordconfirm, setPasswordConfirm] = useState();

    const [signUpButtonContainerVisible, setSignUpButtonContainerVisible] =
    useState(!true);

  const openSignUpButtonContainer = useCallback(() => {
    setSignUpButtonContainerVisible(true);
  }, []);

  const closeSignUpButtonContainer = useCallback(() => {
    setSignUpButtonContainerVisible(!true);
  }, []);

  return (
    <>
      <View style={styles.signUpScreenView}>
        <Text style={styles.text}>환영합니다!</Text>
        <Text style={styles.text1}>
          서비스 이용을 위해 회원가입이 필요합니다
        </Text>
        <View style={styles.usernameView}>
          <Text style={styles.userNameText}>User Name</Text>
          <View style={styles.userEnterBoxView}>
            <View style={styles.enterBoxView} />
            <TextInput
            style={styles.text2}
            placeholder="사용자 이름"
            onChangeText={newText => setName(newText)}
            />
          </View>
        </View>
        <View style={styles.emailView}>
          <Text style={styles.emailText}>Email</Text>
          <View style={styles.emailEnterBoxView}>
            <View style={styles.enterBoxView1} />
            <TextInput
            style={styles.text2}
            placeholder="이메일 주소"
            onChangeText={newText => setEmail(newText)}
            />
          </View>
        </View>
        <View style={styles.passwordView}>
          <Text style={styles.passwordText}>Password</Text>
          <View style={styles.passwordEnterBoxView}>
            <View style={styles.enterBoxView2} />
            <TextInput
            style={styles.text2}
            placeholder="6자 이상"
            onChangeText={newText => setPassword(newText)}
            />
          </View>
        </View>
        <View style={styles.confirmPasswordView}>
          <Text style={styles.confirmPasswordText}>Confirm Password</Text>
          <View style={styles.confirmPasswordBoxView}>
            <View style={styles.enterBoxView3} />
            <TextInput
            style={styles.text2}
            placeholder="6자 이상"
            onChangeText={newText => setPasswordConfirm(newText)}
            />
          </View>
        </View>
        <Pressable
          style={styles.signUpButtonPressable}
          onPress={openSignUpButtonContainer}
        >
          <View style={styles.buttonView} />
          <Text style={styles.text6}>회원가입하기</Text>
        </Pressable>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={signUpButtonContainerVisible}
      >
        <View style={styles.signUpButtonContainerOverlay}>
          <Pressable
            style={styles.signUpButtonContainerBg}
            onPress={closeSignUpButtonContainer}
          />
          <Signupbanner />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  signUpButtonContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  signUpButtonContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  text: {
    position: "absolute",
    top: 160,
    left: 32,
    fontSize: 38,
    letterSpacing: -2.1,
    fontWeight: "700",
 
    color: "#a50034",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 309,
  },
  text1: {
    position: "absolute",
    top: 204,
    left: 31,
    fontSize: 14,
    letterSpacing: -0.7,
 
    color: "#6a6a6a",
    textAlign: "left",
  },
  userNameText: {
    position: "absolute",
    top: 0,
    left: 1,
    fontSize: 13,
 
    color: "#6a6a6a",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 95,
  },
  enterBoxView: {
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
  text2: {
    position: "absolute",
    top: 16.01,
    left: 10.16,
    fontSize: 14,
    letterSpacing: -1.4,
 
    color: "#b5b5b5",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 202.39,
    height: 14.13,
  },
  userEnterBoxView: {
    position: "absolute",
    top: 19,
    left: 0,
    width: 328,
    height: 45.2,
  },
  usernameView: {
    position: "absolute",
    top: 262,
    left: 41,
    width: 328,
    height: 64.2,
  },
  emailText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 13,
 
    color: "#6a6a6a",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 53,
  },
  enterBoxView1: {
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
  emailEnterBoxView: {
    position: "absolute",
    top: 19,
    left: 0,
    width: 328,
    height: 45.2,
  },
  emailView: {
    position: "absolute",
    top: 348,
    left: 41,
    width: 328,
    height: 64.2,
  },
  passwordText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 13,
 
    color: "#6a6a6a",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 86,
  },
  enterBoxView2: {
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
  passwordEnterBoxView: {
    position: "absolute",
    top: 19,
    left: 0,
    width: 328,
    height: 45.2,
  },
  passwordView: {
    position: "absolute",
    top: 434,
    left: 41,
    width: 328,
    height: 64.2,
  },
  confirmPasswordText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 13,
 
    color: "#6a6a6a",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 154,
  },
  enterBoxView3: {
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
  confirmPasswordBoxView: {
    position: "absolute",
    top: 19,
    left: 0,
    width: 328,
    height: 45.2,
  },
  confirmPasswordView: {
    position: "absolute",
    top: 520,
    left: 41,
    width: 328,
    height: 64.2,
  },
  buttonView: {
    position: "absolute",
    top: 0,
    left: 10,
    borderRadius: 50,
    backgroundColor: "#a50034",
    width: 177,
    height: 40,
  },
  text6: {
    position: "absolute",
    top: 12,
    left: 48,
    fontSize: 16,
    letterSpacing: -0.8,
 
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 102,
    height: 17,
  },
  signUpButtonPressable: {
    position: "absolute",
    top: 639,
    left: 107,
    width: 177,
    height: 40,
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  xMarkPressable: {
    position: "absolute",
    left: "88.97%",
    top: "2.73%",
    right: "4.87%",
    bottom: "94.43%",
    width: "6.15%",
    height: "2.84%",
  },
  signUpScreenView: {
    position: "relative",
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default SignUpScreen;
