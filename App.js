import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './src/Components/Profile';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Profile</Text>
      <StatusBar style="auto" />
      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslateblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  }
});
