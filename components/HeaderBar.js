import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { useState, useCallback, useEffect } from "react";
import { StyleSheet, View, Text, Image, Pressable, Modal, AsyncStorage, ScrollView} from "react-native";
import Alarmcenterbanner from "./Alarmcenterbanner";

const HeaderBar = ({title}) => {
  const navigation = useNavigation();
  const [notificationContainerVisible, setNotificationContainerVisible] = useState(false);
  const openNotificationContainer = useCallback(() => {
    setNotificationContainerVisible(true);
  }, []);
  const closeNotificationContainer = useCallback(() => {
    setNotificationContainerVisible(false);
  }, []);
    return (
        <View style={styles.wrapper}>
            <View style={styles.innerWrapper}>
                <View style={styles.itemLeft}>
                    {
                    <Pressable
                        style={styles.pressable}
                        onPress={() => navigation.navigate("MainPage")}
                    >
                        <View style={styles.rectangle}>
                            <Image style={styles.icon}
                                resizeMode="cover"
                                source={require("../assets/back-arrow.png")} />
                        </View>
                    </Pressable>
                    }

                </View>

                <View style={styles.item}>
                    <Text style={styles.title}>{title}</Text>
                </View>


                <View style={styles.itemRight}>
                    {
                    <Pressable
                        style={styles.pressable}
                        onPress={openNotificationContainer}
                    >
                        <View style={styles.rectangle}>
                                <Image
                                    style={styles.icon}
                                    resizeMode="cover"
                                    source={require("../assets/notification-black.png")} />
                        </View>
                    </Pressable>
                        
                    }

                </View>
            </View>
            <Modal
                animationType="fade"
                transparent
                visible={notificationContainerVisible}
            >

                <View style={styles.notificationContainerOverlay}>
                    <Pressable
                        style={styles.notificationContainerBg}
                        onPress={closeNotificationContainer} />
                    <Alarmcenterbanner onClose={closeNotificationContainer} />
                </View>
            </Modal>
        </View>
    )    
}
const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 80,
    paddingHorizontal: 30,
  },
  innerWrapper: {
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  pressable: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flex: '1 1 0',
    height: '100%',
    justifyContent: 'center',
  },
  itemLeft: {
    flex: '0 1 0',
    width: 50,
    height: '100%',
  },
  itemRight: {
    flex: '0 1 0',
    width: 50,
    height: '100%',
  },
  rectangle: {
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
  icon: {
    margin: 10,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  title: {
    fontSize: 20,
    color: "#a50034",
    textAlign: "center",
    fontWeight: '700',
  },
  notificationContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  notificationContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
})

export default HeaderBar;