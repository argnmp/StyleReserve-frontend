import * as React from "react";
import { useState, useCallback, useEffect } from "react";
import { StyleSheet, View, Text, Image, Pressable, Modal, AsyncStorage, ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';

import HeaderBar from '../components/HeaderBar';
import NavigationBar from '../components/NavigationBar';

const Layout = ({children, title, isHeader = true}) => {
    return (
        <View style={styles.wrapper}>
            {isHeader && 
                <View style={styles.header}>
                    <HeaderBar title={title} />
                </View>
            }
            <View style={styles.content}>
                {children}
            </View>
            <View style={styles.footer}>
                <NavigationBar/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
        paddingTop: 50,
        flex: 1,
        flexDirection: 'column',
    },
    header: {
        flex: '0 1 0',
    },
    content: {
        flex: '1 1 0',
        width: '100%',
    },
    footer: {
        flex: '0 1 0' 
    },
})
export default Layout;