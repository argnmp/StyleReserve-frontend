import * as React from "react";
import { useState, useCallback } from "react";
import { View, StyleSheet, Text, Image, Pressable, Modal, AsyncStorage, Button, TouchableOpacity, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import axios from 'axios';
import StartWith from "../components/StartWith";
import NumOfClothes from "../components/NumOfClothes";
import ReserveDoneBanner from "../components/ReserveDoneBanner";
import RNPickerSelect from 'react-native-picker-select';

const courses = ["미세먼지 제거", "눈/비 건조", "정장/코트", "스팀살균", "표준"];
const addSreserve = async (start_time, course_id, count) => {
  let result = await axios.post('http://15.165.172.198/sr/addReserve', {
    access_token: await AsyncStorage.getItem('access_token'),
    start_time,
    course_id,
    count,
  });
  console.log(result.data);

}
const AddReservation = ({ onClose, datetime}) => {
    const selectList = [];
    const selectCountList = [];
    for (let i = 1; i <= 5; i++) {
        selectList.push({ label: `${courses[i-1]}`, value: i });
        selectCountList.push({ label: `${i}`, value: i});
    }
    const [containerVisible, setContainerVisible] = useState(false);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectTime, setSelectTime] = useState(null);
    const [selectCourse, setSelectCourse] = useState(null);
    const [selectCount, setSelectCount] = useState(null);

    const navigation = useNavigation();
    const openContainer = useCallback(() => {
        setContainerVisible(true);
    }, []);

    const closeContainer = useCallback(() => {
        setContainerVisible(false);
    }, []);
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        hideDatePicker();
        const dat = new Date(date);
        dat.setFullYear(datetime.getFullYear());
        dat.setMonth(datetime.getMonth());
        dat.setDate(datetime.getDate());
        console.log(dat);
        setSelectTime(dat)
    };
    return (
        <>
            <View style={styles.addReservationView}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={showDatePicker} style={styles.containerInner}>
                        <TextInput
                            pointerEvents="none"
                            style={styles.textInput}
                            placeholder={selectTime ? selectTime.toTimeString() : "시간을 선택해주세요"}
                            placeholderTextColor="#000000"
                            value={selectTime}
                        />
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="time"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                    </TouchableOpacity>	
                    <View style={styles.containerInner}>
                        <RNPickerSelect
                            onValueChange={(value) => setSelectCourse(value)}
                            style={{ ...pickerSelectStyles }}
                            placeholder={{
                                label: "코스를 선택해주세요",
                            }}
                            items={selectList}
                        />
                    </View>
                    <View style={styles.containerInner}>
                        <RNPickerSelect
                            onValueChange={(value) => setSelectCount(value)}
                            style={{ ...pickerSelectStyles }}
                            placeholder={{
                                label: "옷의 개수를 선택해주세요",
                            }}
                            items={selectCountList}
                        />
                    </View>
                    <Pressable style={styles.pressable} onPress={() => {
                        addSreserve(selectTime, selectCourse, selectCount);
                        navigation.pop();
                    }}>
                        <View style={styles.rectangleView2} />
                        <Text style={styles.text1}>예약 확정하기</Text>
                    </Pressable>

                </View>
            </View>

            <Modal animationType="fade" transparent visible={containerVisible}>
                <View style={styles.containerOverlay}>
                    <Pressable style={styles.containerBg} onPress={closeContainer} />
                    <ReserveDoneBanner onClose={closeContainer} />
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
  containerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  containerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  startWithText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 8,
    fontWeight: "700",
    color: "#ad8c8c",
    textAlign: "left",
    width: 59.75,
    height: 13,
  },
  aMText: {
    position: "absolute",
    top: 21,
    left: 41,
    fontSize: 13,
    fontWeight: "700",
 
    color: "#444",
    textAlign: "left",
    width: 63.87,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  outlineArrowsAltArrowD: {
    position: "absolute",
    left: 115.62,
    top: 21,
    width: 16.48,
    height: 18,
  },
  lineDuotoneTimeStopwatc: {
    position: "absolute",
    top: 22,
    left: 18,
    width: 15,
    height: 15,
    overflow: "hidden",
  },
  groupView: {
    position: "absolute",
    top: 104,
    left: 37,
    width: 146.29,
    height: 46,
  },
  rectangleView1: {
    position: "absolute",
    top: 12,
    left: 1,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    borderStyle: "solid",
    borderColor: "#e8e1e1",
    borderWidth: 1,
    width: 84,
    height: 35,
  },
  numberOfClothes: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 8,
    fontWeight: "700",
 
    color: "#ad8c8c",
    textAlign: "left",
    width: 120,
    height: 13,
  },
  text: {
    position: "absolute",
    top: 21,
    left: 42,
    fontSize: 13,
    fontWeight: "700",
 
    color: "#444",
    textAlign: "left",
  },
  lineDuotoneEssentionalUI: {
    position: "absolute",
    top: 22,
    left: 18,
    width: 16,
    height: 15,
    overflow: "hidden",
  },
  numberofClothesView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 84,
    height: 46,
  },
  icon1: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  outlineArrowsAltArrowD1: {
    position: "absolute",
    left: 61,
    top: 21,
    width: 16.48,
    height: 18,
  },
  groupView1: {
    position: "absolute",
    top: 40,
    left: 37,
    width: 84,
    height: 46,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 50,
    backgroundColor: "#a50034",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 233,
    height: 42,
  },
  text1: {
    position: "absolute",
    top: 13,
    left: 52,
    fontSize: 16,
    letterSpacing: -0.8,
 
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 128.53,
    height: 17,
  },
  pressable: {
    width: 233,
    height: 42,
    margin: 10,
  },
  rectangleView3: {
    position: "absolute",
    top: 12,
    left: 1,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    borderStyle: "solid",
    borderColor: "#e8e1e1",
    borderWidth: 1,
    width: 207,
    height: 35,
  },
  courseSelectionText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 8,
    fontWeight: "700",
 
    color: "#ad8c8c",
    textAlign: "left",
    width: 120,
    height: 13,
  },
  text2: {
    position: "absolute",
    top: 21,
    left: 43,
    fontSize: 13,
    fontWeight: "700",
 
    color: "#444",
    textAlign: "left",
  },
  lineDuotoneHomeFurniture: {
    position: "absolute",
    top: 22,
    left: 18,
    width: 16,
    height: 15,
    overflow: "hidden",
  },
  groupView2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 307,
    height: 46,
  },
  outlineArrowsAltArrowD2: {
    position: "absolute",
    top: 21,
    left: 183,
    width: 16.48,
    height: 18,
    overflow: "hidden",
  },
  groupView3: {
    position: "absolute",
    top: 168,
    left: 37,
    width: 307,
    height: 46,
  },
  addReservationView: {
    borderRadius: 10,
    backgroundColor: "#fff",
    width: 380,
    height: 300,
    maxWidth: "90%",
    maxHeight: "90%",
  },
  selectWrapper: {
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    fontSize: 30,
    },
    textInput: {
        fontSize: 16,
        height: 50,
        borderWidth: 2,
        borderRadius: 12,
        padding: 10,
        borderColor: '#a50034',
    },
    container: {
        width: '100%',
        height: '100%',
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerInner: {
        width: '100%',
        margin: 5,
    }
}
);
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        height: 50,
        borderWidth: 2,
        borderRadius: 12,
        padding: 10,
        borderColor: '#a50034',
    },
    inputAndroid: {
        fontSize: 16,
        height: 50,
        borderWidth: 2,
        borderRadius: 12,
        padding: 10,
        borderColor: '#a50034',
    },
});


export default AddReservation;