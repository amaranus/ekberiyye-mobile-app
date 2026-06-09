import React, { useState, useRef } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { BASE_URL } from '../constants';
import { useBackHandler } from '../hooks/useBackHandler';

const WebViewScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const webViewRef = useRef<WebView>(null);

  useBackHandler(webViewRef);

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        source={{ uri: BASE_URL }}
        onLoadEnd={() => setIsLoading(false)}
        domStorageEnabled={true}
        javaScriptEnabled={true}
      />
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
});

export default WebViewScreen;
