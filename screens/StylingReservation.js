import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { AsyncStorage } from 'react-native';

import Layout from './layout';
import { Modal, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const addCreserve = async (navigation, selectedDate, description, cloth_id, setModalText, setModalVisible) => {
    if(selectedDate==undefined){
        setModalText("달력에서 날짜를 선택해주세요");
        setModalVisible({state: true, reload: false});
        return;
    }
    if(description==undefined){
        setModalText("일정에 대한 설명을 입력해주세요");
        setModalVisible({state: true, reload: false});
        return;
    }
    console.log(selectedDate.getDate());
    let result = await axios.post('http://15.165.172.198/cr/addCReserve', {
        access_token: await AsyncStorage.getItem('access_token'),
        cloth_id,
        year: selectedDate.getFullYear(),
        month: selectedDate.getMonth() + 1,
        date: selectedDate.getDate(),
        description,
    });
    console.log(result.data);
    if(result.data.isSuccess == false){
        setModalText("일정 등록에 실패하였습니다");
        setModalVisible({state: true, reload: false});
        return;
    }
    else {
        setModalText("일정 등록에 성공하였습니다.");
        setModalVisible({state: true, reload: true});
        return;

    }
}
const fetchMonthData = async (setReservedDate, year, month, cloth_id) => {
    let result = await axios.post('http://15.165.172.198/cr/checkReserve', {
        access_token: await AsyncStorage.getItem('access_token'),
        cloth_id,
        year,
        month,
    });
    const dates = {};
    for (let i of result.data.data) {
        let date = new Date(i.reservation_date);
        dates[`${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${(date.getDate()).toString().padStart(2, '0')}`] = { selected: true, selectedColor: 'gray' };
    }
    setReservedDate(dates);
}
const StylingReservation = ({route}) => {
    const [selectedDate, setSelectedDate] = useState(undefined);
    const [reservedDate, setReservedDate] = useState({});
    const [description, setDescription] = useState(undefined);
    const [modalVisible, setModalVisible] = useState({state: false, reload: false});
    const [modalText, setModalText] = useState("");

    const navigation = useNavigation();

    useEffect(() => {
        console.log(route.params.cloth_id);
        fetchMonthData(setReservedDate, new Date().getFullYear(), new Date().getMonth()+1, route.params.cloth_id);
    }, []);
  

    return (
        <Layout title="Add Reservation">
            <View style={styles.container}>
                <Calendar
                    theme={{
                        agendaTodayColor: "#a50034", // today in list
                        textDefaultColor: "#a50034",
                        selectedDayBackgroundColor: "#a50034", // calendar sel date
                        dotColor: "#a50034", // dots
                        'stylesheet.calendar.header': {
                            dayTextAtIndex0: {
                                color: 'red'
                            },
                            dayTextAtIndex6: {
                                color: 'blue'
                            }
                        }
                    }}
                    onMonthChange={(day)=>{fetchMonthData(setReservedDate, day.year, day.month)}}
                    markedDates={reservedDate}
                    onDayPress={(day)=>{
                        if(!Object.keys(reservedDate).includes(day.dateString)){
                            setSelectedDate(new Date(day.dateString))
                        }
                    }}
                    disabledDaysIndexes
                />
                {selectedDate ?
                    <View style={styles.item}>
                        <Text style={styles.mainText}>{selectedDate && selectedDate.toLocaleDateString()}</Text>
                    </View>
                    :
                    <View style={styles.item}>
                        <Text style={styles.mainText}>날짜를 선택해주세요</Text>
                    </View>

                }
                <View style={styles.itemText}>
                    <TextInput
                        style={styles.textInput}
                        placeholder={"설명을 입력해주세요."}
                        onChangeText={setDescription}
                    />
                </View>
                <View style={styles.item}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={()=>{addCreserve(navigation,selectedDate, description, route.params.cloth_id, setModalText, setModalVisible)}}>
                        <Text style={styles.text}>일정등록하기</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal presentationStyle={"formSheet"} visible={modalVisible.state} onDismiss={()=>setModalVisible({state: false, reload: false})}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalText}>{modalText}</Text>
                    <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={()=>{setModalVisible({state: false, reload: false}); if(modalVisible.reload) navigation.replace("StylingMain")}}>
                        <Text style={styles.text}>확인</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        marginTop: 10,
        alignItems: "center",
    },
    itemText: {
        marginTop: 10,
        paddingHorizontal: 30,
    },
    mainText: {
        color: "#a50034",
        fontWeight: "700",
        fontSize: 20,
    },
    textInput: {
        height: 40,
    },
    button: {
        backgroundColor: "#a50034",
        width: 100,
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: "#fff",
    },
    modalContainer: {
        backgroundColor: "#fff",
        margin: 20,
        minHeight: 150,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalText: {
        color: "#a50034",
        fontSize: 20,
        marginVertical: 30,
    }


});

export default StylingReservation;