import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import WebViewScreen from './src/screens/WebViewScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <WebViewScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
