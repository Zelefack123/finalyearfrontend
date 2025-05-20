// App.tsx
import React from 'react';
// import Navigator from './src/navigator';

// export default function App() {
//   return <Navigator />;
// }
// App.tsx
// import React from 'react';
// import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.content}>
//         <Text style={styles.text}>🚀 Hello World!</Text>
//         <Text style={styles.subtext}>React Native is working!</Text>
//       </View>
//     </SafeAreaView>
//   );
// }



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F0F0F0', // Light gray background
//   },
//   content: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#333333', // Dark gray text
//     marginBottom: 10,
//   },
//   subtext: {
//     fontSize: 18,
//     color: '#666666', // Medium gray text
//   },
// });// src/App.tsx
// src/navigation/AppNavigator.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from '../screens/HomeScreen';
// import CameraScreen from '../screens/CameraScreen';
// import HomeScreen from './src/screens/home/HomeScreen';

// const Stack = createNativeStackNavigator();

// const AppNavigator = () => {
//   return (
//     <Stack.Navigator initialRouteName="Home">
//       <Stack.Screen 
//         name="Home" 
//         component={HomeScreen}
//         options={{ headerShown: false }}
//       />
//       {/* <Stack.Screen 
//         name="Camera" 
//         component={CameraScreen}
//       /> */}
//     </Stack.Navigator>
//   );
// };

// export default AppNavigator;

// App.tsx

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;