import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import Layout from './layout';

const MyPage = () => {
  return (
    <Layout title={'My Page'}>
      <View style={styles.groupView1}>
        <Text style={styles.userNameText}>User Name</Text>
        <View style={styles.rectangleView4}>
          <Text style={styles.text1}>박세은</Text>
        </View>
      </View>

      <View style={styles.groupView2}>
        <Text style={styles.emailText}>Email</Text>
        <View style={styles.rectangleView5}>
          <Text style={styles.text1}>abc@abc.com</Text>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  InfoArea: {
    position: "absolute",
    top: 200,
    left: 200,
  },
  groupView2: {
    position: "absolute",
    top: 20,
    left: 31,
    width: 328,
    height: 64.2,
  },
  groupView1: {
    position: "absolute",
    top: -50,
    left: 31,
    width: 328,
    height: 64.2,
  },
  text1: {
    position: "absolute",
    top: 15,
    left: 15,
    fontSize: 15,
    color: "#6a6a6a",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 150,
  },
  rectangleView5: {
    position: "absolute",
    top: 120,
    left: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#b5b5b5",
    borderWidth: 1,
    width: 328,
    height: 45.2,
  },
  rectangleView4: {
    position: "absolute",
    top: 100,
    left: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#b5b5b5",
    borderWidth: 1,
    width: 328,
    height: 45.2,
  },
  notificationContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  notificationIcon: {
    position: "absolute",
    height: "49.41%",
    width: "48.49%",
    top: "29.32%",
    right: "24.24%",
    bottom: "20.27%",
    left: "27.27%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView13: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 14,
    },
    shadowRadius: 96,
    elevation: 96,
    shadowOpacity: 1,
    width: 40,
    height: 40,
  },
  userNameText: {
    position: "absolute",
    top: 75,
    left: 15,
    fontSize: 16,
    color: "#6a6a6a",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 95,
  },
  emailText: {
    position: "absolute",
    top: 95,
    left: 15,
    fontSize: 16,
    color: "#6a6a6a",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 95,
  },
  menuView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  },
  view: {
    position: "absolute",
    top: 771,
    left: 0,
    width: 390,
    height: 73,
  },
  redbox: {
    position: "absolute",
    top: 45.5,
    left: 337.5,
    borderRadius: 10,
    backgroundColor: "rgba(165, 0, 52, 0.2)",
    width: 34,
    height: 34,
  },
  notificationPressable: {
    position: "absolute",
    top: 73,
    left: 325,
    width: 40,
    height: 40,
  },
  rectangleView14: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 14,
    },
    shadowRadius: 96,
    elevation: 96,
    shadowOpacity: 1,
    width: 40,
    height: 40,
  },
  arrowLeft: {
    position: "absolute",
    top: 10,
    left: 10,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  pressable1: {
    position: "absolute",
    top: 73,
    left: 41,
    width: 40,
    height: 40,
  },
  rectangleView12: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 390,
    height: 93,
  },
  notificationContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  wed15SeptemperText: {
    position: "absolute",
    top: 0,
    left: 40,
    fontSize: 20,
    color: "#a50034",
    textAlign: "center",
  },
  view1: {
    position: "absolute",
    top: 82,
    left: 134,
    width: 161,
    height: 23,
  },

});

export default MyPage;
