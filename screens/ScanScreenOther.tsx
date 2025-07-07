// screens/HomeScreen.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ScanScreenOther = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Other Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20 }
});

export default ScanScreenOther;
