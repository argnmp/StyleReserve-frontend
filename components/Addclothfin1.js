import * as React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Addclothfin1 = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.addclothfinView}>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/check.png")}
      />
      <Text style={[styles.text2, styles.mt8]}>
        <Text style={styles.text}>수정이 완료되었습니다{"\n"}</Text>
        <Text style={styles.text1}>옷장에서 확인 가능합니다</Text>
      </Text>
      <Pressable
        style={[styles.groupPressable, styles.mt8]}
        onPress={() => navigation.navigate("MyCloset")}
      >
        <View style={styles.rectangleView} />
        <Text style={styles.text3}>돌아가기</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt8: {
    marginTop: 8,
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
    fontSize: 16,
  },
  text1: {
    margin: 0,
    fontSize: 16,
  },
  text2: {
    position: "relative",
    fontSize: 14,
    lineHeight: 17,
 
    color: "#323232",
    textAlign: "center",
    width: 166,
    height: 55,
  },
  rectangleView: {
    position: "absolute",
    top: -2,
    left: 0,
    borderRadius: 50,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: "rgba(165,0,52,1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 118,
    height: 40,
  },
  text3: {
    position: "absolute",
    top: 9,
    left: 0,
    fontSize: 16,
 
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 118,
    height: 22,
  },
  groupPressable: {
    position: "relative",
    width: 118,
    height: 40,
    flexShrink: 0,
  },
  addclothfinView: {
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

export default Addclothfin1;
