// screens/HomeScreen.js
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

const ScanScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* {['Apple', 'Banana', 'Cherry'].map((item, index) => (
          <View key={index} style={{ padding: 10 }}>
            <Text>{item}</Text>
          </View>
        ))} */}
        <View style={scanButtonStyle.button}>
            <TouchableOpacity style={scanButtonStyle.button} onPress={() => console.log('Pressed')}>
              
              <MaterialCommunityIcons name="barcode-scan" size={100} color="#000" />
            </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  scroll: {padding: 20},
  text: { fontSize: 20 }
});

const scanButtonStyle = StyleSheet.create({
  // container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  button: {
    width: 200,
    height: 200,
    backgroundColor: '#1E90FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  // text: { fontSize: 20 }
});

export default ScanScreen;
