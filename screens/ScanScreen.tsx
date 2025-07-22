// screens/HomeScreen.js
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BarcodeScanningResult } from 'expo-camera';
import React, { useEffect, useRef, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Camera } from 'expo-camera';

const ScanScreen = () => {
  const [hasPermission, setHasPermission] = useState(Boolean);
  const [scannedData, setScannedData] = useState<String | null>(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data } : BarcodeScanningResult) => {
    setScannedData(data);
    alert(`Scanned ${type}: ${data}`);
  };

  if (hasPermission === null) return <Text>Requesting camera permission...</Text>;
  if (hasPermission === false) return <Text>No access to camera</Text>;


  return (
    <View style={styles.container}>
              {scannedData && (
                <Button title="Scan Again" onPress={() => setScannedData(null)} />
              )}
              {scannedData && <Text>Data: {scannedData}</Text>}
      <ScrollView contentContainerStyle={styles.scroll}>
              {scannedData && (
                <Button title="Scan Again" onPress={() => setScannedData(null)} />
              )}
              {scannedData && <Text>Data: {scannedData}</Text>}
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
