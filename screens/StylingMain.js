import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { AsyncStorage } from 'react-native';

import Layout from './layout';
import { Modal, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const fetchMonthData = async (setReceivedData, setUserReservedDate, year, month) => {
    let result = await axios.post('http://15.165.172.198/cr/checkUserReserve', {
        access_token: await AsyncStorage.getItem('access_token'),
        year,
        month,
    });
    console.log(result.data.data);
    const receivedData = {};
    const dates = {};
    for (let i of result.data.data) {
        let date = new Date(i.reservation_date);
        dates[`${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${(date.getDate()).toString().padStart(2, '0')}`] = { marked: true, selectedColor: '#3388ff' };
        receivedData[`${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${(date.getDate()).toString().padStart(2, '0')}`] = { description: i.description, cloth_id: i.clothes_id, url: i.Clothe.url, name: i.Clothe.name, brand_name: i.Clothe.brand_name}
    }
    console.log(receivedData)

    setUserReservedDate(dates);
    setReceivedData(receivedData);
}
const StylingMain = () => {
    const [receivedData, setReceivedData] = useState(undefined);
    const [selectedDate, setSelectedDate] = useState(undefined);
    const [userReservedDate, setUserReservedDate] = useState({});
    const [nickname, setNickname] = useState(""); 
    const [modalVisible, setModalVisible] = useState(false);
    const [modalText, setModalText] = useState("");

    const navigation = useNavigation();

    useEffect(() => {
        (async()=>{
            let nickname = await AsyncStorage.getItem('nickname')
            setNickname(nickname); 
        })();
        fetchMonthData(setReceivedData, setUserReservedDate, new Date().getFullYear(), new Date().getMonth()+1);
    }, []);
  

    return (
        <Layout title="Styling Reservation">
            <View style={styles.titleWrapper}>
                <Text style={styles.titleText}>{nickname}님의 옷 예약 일정</Text>
            </View>
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
                        },
                        arrowColor: "#a50034",
                    }}
                    onMonthChange={(day)=>{fetchMonthData(setReceivedData, setUserReservedDate, day.year, day.month)}}
                    markedDates={userReservedDate}
                    onDayPress={(day)=>{
                        console.log('pressed',day);
                        console.log(userReservedDate);
                        if(Object.keys(userReservedDate).includes(day.dateString)){
                            setSelectedDate(day.dateString)
                            setModalVisible(true);
                        }
                    }}
                    disabledDaysIndexes
                />
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => {navigation.navigate("MyCloset")}}>
                        <Text style={styles.text}>내 옷장</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal presentationStyle={"fullScreen"} visible={modalVisible} onDismiss={()=>setModalVisible(false)}>
                {receivedData && selectedDate &&
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitleText}>{selectedDate}</Text>
                    <Text style={styles.modalText}>{receivedData[selectedDate].name}</Text>
                    <Text style={styles.modalText}>{receivedData[selectedDate].brand_name}</Text>
                    <Image
                      resizeMode="center"
                      style={styles.itemImage}
                      source={{ uri: receivedData[selectedDate].url }}
                    />
                    <Text style={styles.commonText}>{receivedData[selectedDate].description}</Text>
                    <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={()=>{setModalVisible(false); }}>
                        <Text style={styles.text}>확인</Text>
                    </TouchableOpacity>
                </View>
                
                }
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
    itemImage: {
        width: "100%",
        height: 200,
        marginVertical: 20,
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
        marginTop: 20,
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
        padding: 20,
    },
    modalTitleText: {
        width: '100%',
        color: "#a50034",
        fontSize: 20,
        fontWeight: "700",
    },
    modalText: {
        width: '100%',
        color: "#a50034",
        fontSize: 16,
        paddingTop: 5,
    },
    commonText: {
        width: '100%',
        fontSize: 16,
        paddingTop: 5,
        textAlign: 'center'
    },
    titleWrapper: {
        height: 50,
        padding: 10,
        backgroundColor: "#a50034",
        justifyContent: 'center',
    },
    titleText: {
        color: '#fff',
        fontSize: 16,
    },
    buttonWrapper: {
        marginTop: 20,
        alignItems: 'center',
    }


});

export default StylingMain;