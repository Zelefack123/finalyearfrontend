// src/types/navigation.d.ts
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Camera: undefined;
  Settings: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type { RootStackParamList, HomeScreenNavigationProp };