import React, { useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { BASE_URL } from '../constants';

const WebViewScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={styles.container}>
      <iframe
        src={BASE_URL}
        style={styles.iframe}
        onLoad={() => setIsLoading(false)}
        title="Ekberiyye"
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
  iframe: {
    flex: 1,
    borderWidth: 0,
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
});

export default WebViewScreen;
