import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from '../components/ServiceLogo';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function Loading() {
  return (
    <View style={styles.container}>
     <AssetExample />
      <Text style={styles.smallparagraph}>LG STYLER RESERVATION SERVICE</Text>
      <Text style={styles.bigparagraph}>STYLERESERVE</Text>
      <Text style={styles.copyright}>ⓒ Dressing Sauce from Hanyang University</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#A50034',
    padding: 8,
  },
  /** serviceLogoIcon: {
    position: "absolute",
    top: 246,
    left: 70,
    width: 247,
    height: 247,
  },**/
  bigparagraph: {
    margin: 0,
    fontSize: 28,
    fontFamily: "Roboto",
    color: "#ffffff",
    fontWeight: 'bold',
    textAlign: 'center',
  },
  smallparagraph: {
    marginTop: 20,
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#CECECE",
    fontWeight: 'light',
    textAlign: 'center',
  },
  copyright: {
    marginTop: 200,
    marginBottom: 10,
    fontSize: 9,
    fontFamily: "Roboto",
    color: "#eaeaea",
    fontWeight: 'light',
    textAlign: 'center',
  },
});

/** position: "absolute",
    top: 793,
    left: 86,
    fontSize: 12,
    letterSpacing: -0.6,
    fontFamily: "Nanum Gothic",
    color: "#eaeaea",
    textAlign: "center", */
