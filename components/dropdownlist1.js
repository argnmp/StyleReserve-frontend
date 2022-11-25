import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DropdownList1 = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.dropdownListView}>
      <View style={styles.item1View}>
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("StylerReservation")}
        >
          <Text style={styles.text}>정장 / 코트 코스</Text>
        </Pressable>
      </View>
      <View style={[styles.item2View, styles.mt1]}>
        <Text style={styles.text1}>살균 코스</Text>
      </View>
      <View style={[styles.item3View, styles.mt1]}>
        <Text style={styles.text2}>울/니트 코스</Text>
      </View>
      <View style={[styles.item4View, styles.mt1]}>
        <Text style={styles.text3}>침구 관리 코스</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt1: {
    marginTop: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
 
    color: "#a50034",
    textAlign: "left",
  },
  pressable: {
    position: "absolute",
    left: 16,
    top: 12,
  },
  item1View: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: "#fff",
    height: 44,
    flexShrink: 0,
    overflow: "hidden",
  },
  text1: {
    position: "absolute",
    top: 12,
    left: 16,
    fontSize: 16,
 
    color: "#333",
    textAlign: "left",
  },
  item2View: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: "#fff",
    height: 44,
    flexShrink: 0,
    overflow: "hidden",
  },
  text2: {
    position: "absolute",
    top: 12,
    left: 16,
    fontSize: 16,
 
    color: "#333",
    textAlign: "left",
  },
  item3View: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: "#fff",
    height: 44,
    flexShrink: 0,
    overflow: "hidden",
  },
  text3: {
    position: "absolute",
    top: 12,
    left: 16,
    fontSize: 16,
 
    color: "#333",
    textAlign: "left",
  },
  item4View: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: "#fff",
    height: 44,
    flexShrink: 0,
    overflow: "hidden",
  },
  dropdownListView: {
    position: "relative",
    borderRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 14,
    elevation: 14,
    shadowOpacity: 1,
    width: 295,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "90%",
    maxHeight: "90%",
  },
});

export default DropdownList1;
