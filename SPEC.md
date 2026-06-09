# Spec: Ekberiyye Mobile App

## Objective
The goal is to build a mobile application for Android and iOS that acts as a dedicated wrapper for the website `https://ekberiyye.com`. 
- **User Story:** As a user, I want to open the Ekberiyye app and see the website immediately in a native-like full-screen experience.
- **Success Criteria:**
    - The app opens and loads `https://ekberiyye.com` successfully.
    - The WebView occupies the full screen without any unnecessary borders or navigation bars.
    - The app handles basic navigation (e.g., the hardware back button) by navigating back within the WebView history.

## Tech Stack
- **Framework:** Expo (React Native)
- **Language:** TypeScript
- **Core Library:** `expo-webview`
- **Package Manager:** npm / yarn

## Commands
- **Dev:** `npx expo start`
- **Android Build:** `npx expo run:android` (Local) or `eas build --platform android` (Cloud)
- **Lint:** `npm run lint`
- **Install:** `npm install`

## Project Structure
```
mobile_app_expo/
├── src/
│   ├── assets/           → Images, icons, and local assets
│   ├── components/       → Reusable UI components (buttons, headers, etc.)
│   ├── hooks/            → Custom React hooks for logic
│   ├── screens/          → Application screens (Main WebView screen)
│   ├── constants/        → Configuration (URLs, Theme colors, etc.)
│   └── types/            → TypeScript interfaces and types
├── App.tsx               → Entry point
├── app.json              → Expo configuration
├── package.json
└── ...
```

## Code Style
- Use Functional Components with React Hooks.
- Use TypeScript for all components and functions.
- Use descriptive variable names.
- Style components using standard `StyleSheet` or `StyleSheet.create`.

## Testing Strategy
- **Manual Testing:** The primary verification method. Tests will be performed on physical Android and iOS devices/emulators.
- **Verification Checkpoints:**
    - Verify site loads on startup.
    - Verify scrolling works correctly.
    - Verify back button behavior.

## Boundaries
- **Always:**
    - Use TypeScript for all files.
    - Store the base URL in `src/constants`.
    - Handle WebView loading states (show a loading spinner).
- **Ask first:**
    - Adding custom navigation (React Navigation).
    - Adding native modules or push notifications.
    - Significant changes to the project structure.
- **Never:**
    - Hardcode the website URL directly into the components.
    - Commit any secrets or local environment keys.

## Success Criteria
- [ ] App launches and displays the website on a mobile device.
- [ ] WebView is full-screen and responsive.
- [ ] Hardware back button navigates back in WebView history.
- [ ] Loading indicator is visible while the site is fetching.

## Open Questions
- [ ] Should we implement a "Splash Screen" with a custom logo or just a blank loading state? (Default: Standard Expo Splash)
