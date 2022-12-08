import * as React from "react";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, Image, Pressable, Text, TextInput, ScrollView, TouchableOpacity, Keyboard } from "react-native";
import { AsyncStorage } from 'react-native';
import { NavigationHelpersContext, useNavigation } from "@react-navigation/native";
import Layout from "./layout";
import { Modal} from 'react-native-paper';

const search = async (keyword, setSearchData, setModalVisible) => {
    let result = await axios.post('http://15.165.172.198/op/vendorSearch', {
        access_token: await AsyncStorage.getItem('access_token'),
        keyword: keyword,
    });
    if(result.data.isSuccess){
        setSearchData(result.data.data);
        setModalVisible(true);
    }
}

const addClothes = async (setModalText, setCommitModalVisible, selectedData)=>{
    let result = await axios.post('http://15.165.172.198/cr/addCloth', {
        access_token: await AsyncStorage.getItem('access_token'),
        clothName: selectedData.name,
        brand: selectedData.brand_name,
        type: 1,
        Utype: 1,
        URL: selectedData.img_url,
    });
    if(result.data.isSuccess){
        setModalText("새로운 옷이 추가 되었습니다.");
        setCommitModalVisible({state: true, reload: true,})
    }
    else {
        setModalText("옷 등록에 실패하였습니다.");
        setCommitModalVisible({state: true, reload: false,})

    }

}
  
const AddClothes = () => {
    const [keyword, setKeyword] = useState(undefined);
    const [modalVisible, setModalVisible] = useState(false);
    const [commitModalVisible, setCommitModalVisible] = useState({state: false, reload: false});
    const [modalText, setModalText] = useState("");
    const [searchData, setSearchData] = useState(undefined);
    const [selectedData, setSelectedData] = useState(undefined);
    const navigation = useNavigation();
    let key = 1;
    return (
        <>
            <Layout title={'Add Clothes'}>
                <View style={styles.itemWrapper}>
                    <Text>검색어를 입력해주세요</Text>
                    <Text>무신사에서 최대 10개의 검색 결과를 확인할 수 있습니다.</Text>
                </View>
                <View style={styles.itemWrapper}>
                    <TextInput
                        style={styles.textInput}
                        placeholder={"검색어를 입력해주세요."}
                        onChangeText={setKeyword}
                    />
                </View>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={async () => { await search(keyword, setSearchData, setModalVisible); Keyboard.dismiss() }}>
                        <Text style={styles.text}>검색</Text>
                    </TouchableOpacity>
                </View>
                <View style={{padding: 20}}>
                    {selectedData && (
                    <View style={styles.selectedContainer}>
                            <View style={styles.selectedWrapper}>
                                <Text style={styles.modalText}>{selectedData.name}</Text>
                                <Text style={styles.modalSubText}>{selectedData.brand_name}</Text>
                                <Image
                                    resizeMode="center"
                                    style={styles.itemImage}
                                    source={{ uri: selectedData.img_url }}
                                />
                            </View>
                        <View style={styles.buttonWrapper}>
                            <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={async () => {await addClothes(setModalText, setCommitModalVisible, selectedData)}}>
                                <Text style={styles.text}>옷 저장하기</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                    )}
                </View>
            </Layout>
            <Modal presentationStyle={"formSheet"} visible={modalVisible} onDismiss={() => setModalVisible(false)}>
                {searchData && (
                    <ScrollView style={styles.modalScroll}>
                        <View style={styles.modalItemContainer}>
                            <Text style={styles.modalTitleText}>검색결과</Text>
                        </View>
                        {searchData.map((elem) => (
                            <View style={styles.modalContainer} key={key++}>
                                <Text style={styles.modalText}>{elem.name}</Text>
                                <Text style={styles.modalSubText}>{elem.brand_name}</Text>
                                <Image
                                    resizeMode="center"
                                    style={styles.itemImage}
                                    source={{ uri: `https:${elem.img_url.slice(0, elem.img_url.length-7)}500.jpg` }}
                                />
                                <Text style={styles.commonText}>{elem.description}</Text>
                                <View style={{ ...styles.modalItemContainer, backgroundColor: 'none', margin: 0, paddingVertical: 0,}}>
                                    <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => {
                                        setSelectedData({
                                            name: elem.name,
                                            brand_name: elem.brand_name,
                                            img_url: `https:${elem.img_url.slice(0, elem.img_url.length - 7)}500.jpg`,
                                        });
                                        setModalVisible(false);
                                    }}>
                                        <Text style={styles.text}>선택</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        ))}

                        <View style={{ ...styles.modalItemContainer, backgroundColor: 'none' }}>
                            <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => { setModalVisible(false); }}>
                                <Text style={styles.text}>취소</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                )}
            </Modal>
            <Modal presentationStyle={"formSheet"} visible={commitModalVisible.state} onDismiss={()=>setCommitModalVisible({state: false, reload: false})}>
                <View style={styles.modalContainer}>
                    <Text style={styles.commitModalText}>{modalText}</Text>
                    <TouchableOpacity activeOpacity={0.8} style={styles.commitModalButton} onPress={()=>{setCommitModalVisible({state: false, reload: false}); if(commitModalVisible.reload) navigation.pop()}}>
                        <Text style={styles.text}>확인</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    itemWrapper: {
        width: '100%',
        paddingHorizontal: 20,
    },
    selectedWrapper: {
        width: '100%',
        paddingHorizontal: 20,
    },
    textInput: {
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        marginTop: 10,
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
        color: '#fff'
    },
    buttonWrapper: {
        alignItems: 'center',
        margin: 10,
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
        fontWeight: '700',
        fontSize: 16,
        paddingTop: 5,
    },
    modalSubText: {
        width: '100%',
        color: "#808080",
        fontSize: 16,
        paddingTop: 5,
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

    },
    itemImage: {
        width: "100%",
        height: 200,
        marginVertical: 20,
    },
    selectedContainer: {
        width: '100%',
        backgroundColor: '#e2e2e2',
        borderRadius: 5,
        paddingVertical: 20,
    },
    commitModalText: {
        color: "#a50034",
        fontSize: 20,
        marginVertical: 30,
    },
    commitModalContainer: {
        backgroundColor: "#fff",
        margin: 20,
        minHeight: 150,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    commitModalButton: {
        backgroundColor: "#a50034",
        width: 100,
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

});

export default AddClothes;