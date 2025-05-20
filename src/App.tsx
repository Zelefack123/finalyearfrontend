// // src/App.tsx
// import React from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { Provider as ReduxProvider } from 'react-redux';
// import { AuthProvider } from '../context/AuthContext';
// import store from '../store/store';
// import AppNavigator from './navigation/AppNavigator';

// const App = () => {
//   return (
//     <ReduxProvider store={store}>
//       <AuthProvider>
//         <SafeAreaProvider>
//           <AppNavigator />
//         </SafeAreaProvider>
//       </AuthProvider>
//     </ReduxProvider>
//   );
// };

// export default App;