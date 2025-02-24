import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text >Home</Text>
      <Link  style={styles.title} href="/login">Login</Link>
      <Link  style={styles.title} href="/register">Register</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  title:{
    backgroundColor: "#159",
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    padding: 10,
    borderRadius: 10
  }
});
