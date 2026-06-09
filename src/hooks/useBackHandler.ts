import { useEffect } from 'react';
import { BackHandler, Platform } from 'react-native';
import WebView from 'react-native-webview';

export const useBackHandler = (webViewRef: React.RefObject<WebView>) => {
  useEffect(() => {
    if (Platform.OS === 'web') return;

    const onBackPress = () => {
      if (webViewRef.current) {
        window.history.back();
        return true;
      }
      return false;
    };

    const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);

    return () => {
      subscription.remove();
    };
  }, [webViewRef]);
};
