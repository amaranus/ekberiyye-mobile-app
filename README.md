# Ekberiyye Mobile App

A mobile application that wraps [ekberiyye.com](https://ekberiyye.com) as a native WebView experience for Android and iOS.

Built with [Expo](https://expo.dev) (SDK 50) and React Native.

## Getting Started

```bash
npm install
npx expo start
```

Scan the QR code with Expo Go (Android/iOS) or press `w` to open in a web browser.

### Web

```bash
npx expo start --web
```

### Android APK

```bash
npx eas build --platform android --profile production
```

### iOS IPA

```bash
npx eas build --platform ios --profile production
```

## Project Structure

```
src/
  constants/    # Base URL and configuration
  hooks/        # Custom hooks (back handler, etc.)
  screens/      # WebView screen (native + web variants)
```

## Tech Stack

- **Framework:** Expo (React Native) SDK 50
- **Language:** TypeScript
- **Core:** react-native-webview (native), iframe (web)
- **Build:** EAS Build

## License

MIT
