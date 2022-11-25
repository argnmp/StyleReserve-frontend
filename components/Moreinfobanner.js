import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const Moreinfobanner = ({ onClose }) => {
  return (
    <View style={styles.moreinfobannerView}>
      <View style={styles.groupView}>
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-31.png")}
        />
        <Text style={styles.text}>닫기</Text>
      </View>
      <Text style={styles.productInfoText}>Product Info</Text>
      <Text style={styles.text1}>품번</Text>
      <Text style={styles.text2}>브랜드</Text>
      <Text style={styles.text4}>
        <Text style={styles.text3}>분류</Text>
      </Text>
      <Text style={styles.mMAUL707BKText}>MMAUL707-BK</Text>
      <Text style={styles.mUSINSASTANDARDText}>MUSINSA STANDARD</Text>
      <Text style={styles.topsText}>Tops</Text>
      <Text style={styles.text7}>
        <Text style={styles.text5}>비건 레더 오버사이즈{"\n"}</Text>
        <Text style={styles.text6}>크롭 필드 재킷 [블랙]</Text>
      </Text>
      <Image
        style={styles.jacket3Icon}
        resizeMode="cover"
        source={require("../assets/small-black-leather.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleIcon: {
    position: "absolute",
    top: 0,
    left: -4,
    borderRadius: 50,
    width: 87,
    height: 48,
  },
  text: {
    position: "absolute",
    top: 9,
    left: 12.5,
    fontSize: 16,
 
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 55,
    height: 22,
  },
  groupView: {
    position: "absolute",
    top: 268,
    left: 125,
    width: 79,
    height: 40,
  },
  productInfoText: {
    position: "absolute",
    top: 23,
    left: 23,
    fontSize: 19,
    letterSpacing: -1.1,
    fontWeight: "600",
 
    color: "#252525",
    textAlign: "left",
    width: 157,
    height: 24,
  },
  text1: {
    position: "absolute",
    top: 180,
    left: 24,
    fontSize: 16,
    lineHeight: 22,
 
    color: "#5e5d5d",
    textAlign: "left",
    width: 214,
  },
  text2: {
    position: "absolute",
    top: 205,
    left: 24,
    fontSize: 16,
    lineHeight: 22,
 
    color: "#5e5d5d",
    textAlign: "left",
    width: 214,
  },
  text3: {
    marginBlockStart: 0,
    marginBlockEnd: 10,
  },
  text4: {
    position: "absolute",
    top: 230,
    left: 24,
    fontSize: 16,
    lineHeight: 22,
 
    color: "#5e5d5d",
    textAlign: "left",
    width: 214,
    height: 25,
  },
  mMAUL707BKText: {
    position: "absolute",
    top: 180,
    left: 120,
    fontSize: 14,
    lineHeight: 22,
 
    color: "#5e5d5d",
    textAlign: "right",
    width: 157,
  },
  mUSINSASTANDARDText: {
    position: "absolute",
    top: 205,
    left: 120,
    fontSize: 14,
    lineHeight: 22,
 
    color: "#5e5d5d",
    textAlign: "right",
    width: 167,
  },
  topsText: {
    position: "absolute",
    top: 230,
    left: 120,
    fontSize: 14,
    lineHeight: 22,
 
    color: "#5e5d5d",
    textAlign: "right",
    width: 157,
    height: 25,
  },
  text5: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
    fontSize: 16,
  },
  text6: {
    margin: 0,
    fontSize: 16,
  },
  text7: {
    position: "absolute",
    top: 97,
    left: 118,
    fontSize: 20,
    lineHeight: 22,
    fontWeight: "700",
 
    color: "#000",
    textAlign: "left",
  },
  jacket3Icon: {
    position: "absolute",
    top: 77,
    left: 28,
    borderRadius: 15,
    width: 78,
    height: 83,
  },
  moreinfobannerView: {
    position: "relative",
    borderRadius: 30,
    backgroundColor: "#fff",
    width: 328,
    height: 327,
    maxWidth: "90%",
    maxHeight: "90%",
  },
});

export default Moreinfobanner;