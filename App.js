import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
import Home from './pages/Home';
import Setting from './pages/Setting';
import Chat from './pages/Chat'
import Buy from './pages/Buy';
import Marketting from './pages/Marketting';
import Business from './pages/Business';
import Content from './pages/Content';
import Web from './pages/Web';
import Health from './pages/Health';
import Teachers from './pages/Teachers';
import Music from './pages/Music';
import Education from './pages/Education';
import Food from './pages/Food';
import ManageSubscription from './pages/ManageSubscription';
import Test from './pages/Test';
import TabScreen from './TabScreen';
import Onboarding from './pages/Onboarding';
import ChatReturn from './pages/ChatRetrun';

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator screenOptions={{headerShown: false, animation: 'none'}}>
      {/* <Stack.Screen name="onboarding" component={Onboarding} /> */}
      <Stack.Screen name="/" component={TabScreen} />
      <Stack.Screen name="Test" component={Test} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Buy" component={Buy} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="ChatReturn" component={ChatReturn} />
      <Stack.Screen name="marketting_list" component={Marketting} />
      <Stack.Screen name="business_list" component={Business} />
      <Stack.Screen name="content_list" component={Content} />
      <Stack.Screen name="web_list" component={Web} />
      <Stack.Screen name="health_list" component={Health} />
      <Stack.Screen name="teahers_list" component={Teachers} />
      <Stack.Screen name="music_list" component={Music} />
      <Stack.Screen name="education_list" component={Education} />
      <Stack.Screen name="food_list" component={Food} />
      <Stack.Screen name="manage_subscription" component={ManageSubscription} />
    </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a262f'
  },
});
