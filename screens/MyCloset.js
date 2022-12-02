import * as React from "react";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, Image, Pressable, Text, Modal,TextInput, ScrollView, TouchableOpacity } from "react-native";
import { AsyncStorage } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Alarmcenterbanner from "../components/Alarmcenterbanner";
import Layout from "./layout";

const fetchCloset = async (setClosetData) => {
    let result = await axios.post('http://15.165.172.198/cr/clothes', {
        access_token: await AsyncStorage.getItem('access_token'),
    });
    if(result.data.isSuccess){
        setClosetData(result.data.data);
    }
}
  
const Mycloset = () => {
  const [closetData, setClosetData] = useState(undefined);
  const navigation = useNavigation();
  useEffect(()=>{
    fetchCloset(setClosetData);    
  },[]);
  let key = 1;
  return (
    <>
      <Layout title={'My Closet'}>
        <ScrollView style={styles.container}>
          <View style={styles.itemContainer}>
            {closetData && closetData.map(element => {
              return (
                <View style={styles.item} key={key++}>
                  <TouchableOpacity activeOpacity={0.8} style={styles.itemInner} onPress={()=>{navigation.navigate("StylingReservation", {cloth_id: element.id})}}>
                    <Image
                      resizeMode="center"
                      style={styles.itemImage}
                      source={{ uri: element.url }}
                    />
                    <Text style={styles.itemTitleText}>{element.name}</Text>
                    <Text style={styles.itemText}>{element.brand_name}</Text>

                  </TouchableOpacity>
                </View>
              )
            })}
          </View>
        </ScrollView>
      </Layout>

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 10,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  item: {
    width: '50%',
    padding: 10,
  },
  itemInner: {
    borderWidth: 1, 
    borderRadius: 5,
    borderColor: "#a50034",
    padding: 10
  },
  itemImage: {
    width: "100%",
    height: 200,
  },
  itemTitleText: {
    fontSize: 20,
    color:'#a50034',
    fontWeight: "700",
  },
  itemText: {
    fontSize: 12,
    textAlign: 'right'
  }
});

export default Mycloset;