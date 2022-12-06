import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { AsyncStorage } from 'react-native';

import Layout from './layout';
import { Modal, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const fetchMonthData = async (setReceivedData, setUserReservedDate, year, month) => {
    let result = await axios.post('http://15.165.172.198/cr/checkUserReserve', {
        access_token: await AsyncStorage.getItem('access_token'),
        year,
        month,
    });
    const receivedData = {};
    const dates = {};
    for (let i of result.data.data) {
        console.log(i);
        let date = new Date(i.reservation_date);
        if(receivedData[`${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${(date.getDate()).toString().padStart(2, '0')}`]){
            receivedData[`${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${(date.getDate()).toString().padStart(2, '0')}`].push({ description: i.description, cloth_id: i.clothes_id, url: i.Clothe.url, name: i.Clothe.name, brand_name: i.Clothe.brand_name});
        }
        else {
            receivedData[`${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${(date.getDate()).toString().padStart(2, '0')}`] = [{ description: i.description, cloth_id: i.clothes_id, url: i.Clothe.url, name: i.Clothe.name, brand_name: i.Clothe.brand_name}]
        }
        dates[`${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${(date.getDate()).toString().padStart(2, '0')}`] = { marked: true};
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
    let key = 1;

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
                {console.log(selectedDate)}
                {receivedData && selectedDate && receivedData[selectedDate] && (
                <ScrollView style={styles.modalScroll}>
                    <View style={styles.modalItemContainer}>
                    <Text style={styles.modalTitleText}>{selectedDate}</Text>
                    </View>
                        {receivedData[selectedDate].map((elem)=>(
                        <View style={styles.modalContainer} key={key++}>
                            <Text style={styles.modalText}>{elem.name}</Text>
                            <Text style={styles.modalText}>{elem.brand_name}</Text>
                            <Image
                                resizeMode="center"
                                style={styles.itemImage}
                                source={{ uri: elem.url }}
                            />
                            <Text style={styles.commonText}>{elem.description}</Text>
                        </View>

                        ))}
                
                    <View style={{...styles.modalItemContainer, backgroundColor: 'none'}}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => { setModalVisible(false); }}>
                        <Text style={styles.text}>확인</Text>
                    </TouchableOpacity>

                    </View>
                </ScrollView>
    )}
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
    },
    text: {
        color: "#fff",
    },
    modalContainer: {
        backgroundColor: "#fff",
        margin: 10,
        minHeight: 150,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        marginBottom: 0,
    },
    modalTitleText: {
        width: '100%',
        color: "#fff",
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
    },
    modalScroll: {
        width: "100%",
    },
    modalItemContainer: {
        backgroundColor: "#a50034",
        margin: 10,
        marginBottom: 0,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,

    }


});

export default StylingMain;