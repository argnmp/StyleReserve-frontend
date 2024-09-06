import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import AssetExample from '../components/ServiceLogo';

const LoadingNext = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("Login")}
      >
        <AssetExample />
        <Text style={styles.smallparagraph}>LG STYLER RESERVATION SERVICE</Text>
        <Text style={styles.bigparagraph}>STYLERESERVE</Text>
        <Text style={styles.copyright}>ⓒ Dressing Sauce</Text>
      </Pressable>
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
    marginBottom: 270,
    fontSize: 35,
    color: "#ffffff",
    fontWeight: 'bold',
    textAlign: 'center',
  },
  smallparagraph: {
    marginTop: 0,
    fontSize: 12,
 
    color: "#CECECE",
    fontWeight: 'light',
    textAlign: 'center',
  },
  copyright: {
    marginBottom: 0,
    fontSize: 9,
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
 
    color: "#eaeaea",
    textAlign: "center", */

export default LoadingNext;
