import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import NavigationScreen from './assets/Screens/NavigationScreen';
export default function App() {
  return (
    <View style={styles.container}>
       <NavigationScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
