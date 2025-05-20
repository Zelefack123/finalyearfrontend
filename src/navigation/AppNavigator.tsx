// // src/navigation/AppNavigator.tsx
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import HomeScreen from '../screens/HomeScreen';
// // import CameraScreen from '../screens/CameraScreen';
// // import SettingsScreen from '../screens/SettingsScreen';
// import { RootStackParamList } from '../types/navigation';
// import HomeScreen from '../screens/home/HomeScreen';

// const Stack = createNativeStackNavigator<RootStackParamList>();

// const AppNavigator = () => {
//   return (
//     <Stack.Navigator initialRouteName="Home">
//       <Stack.Screen 
//         name="Home" 
//         component={HomeScreen} 
//         options={{ title: 'Welcome' }}
//       />
//       {/* <Stack.Screen 
//         name="Camera" 
//         component={CameraScreen} 
//       /> */}
//       {/* <Stack.Screen 
//         name="Settings" 
//         component={SettingsScreen} 
//       /> */}
//     </Stack.Navigator>
//   );
// };

// export default AppNavigator;

// src/navigation/AppNavigator.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
// import HomeScreen from '../screens/HomeScreen';
// import CameraScreen from '../screens/CameraScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen 
        name="Camera" 
        component={CameraScreen}
      />  */}
      {/* <Stack.Screen 
        name="Settings" 
        component={CameraScreen}
      />  */}
    </Stack.Navigator>
  );
};

export default AppNavigator;