# Tasks: Ekberiyye Mobile App

- [x] Task: Initialize Expo project and install dependencies
  - Acceptance: Project successfully initializes with TypeScript and `react-native-webview` is installed.
  - Verify: Run `npx expo start` and see the default welcome screen.
  - Files: `package.json`, `app.json`, `tsconfig.json`

- [x] Task: Setup project directory structure and constants
  - Acceptance: `src/` folder structure created and `BASE_URL` defined in a constants file.
  - Verify: Files exist in `src/` and `src/constants/` contain the correct URL.
  - Files: `src/`, `src/constants/index.ts`

- [x] Task: Implement Main WebView Screen
  - Acceptance: The app launches and displays `https://ekberiyye.com` with a loading indicator.
  - Verify: Manual check on emulator.
  - Files: `src/screens/WebViewScreen.tsx`, `App.tsx`

- [x] Task: Implement Hardware Back Button handling
  - Acceptance: Pressing the back button navigates backward in the WebView's history.
  - Verify: Manual test on an Android device.
  - Files: `src/hooks/useBackHandler.ts`

- [x] Task: Final UX Polish and Verification
  - Acceptance: App is full-screen, handles Safe Area correctly, and meets all success criteria in SPEC.md.
  - Verify: Full manual walkthrough of the app's functionality.
