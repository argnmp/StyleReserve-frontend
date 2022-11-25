import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-white.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 180,
    alignItems: 'center',
    backgroundColor: '#A50034',
    padding: 0,
  },

  
  logo: {
    height: 210,
    width: 210,
  }
});


