import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';

export const AboutScreen = () => (
  <View style={styles.screen}>
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.text}>Learn more about our application and team</Text>
      
      <View style={styles.contentBox}>
        <Text style={styles.contentText}>
          This is a sample Expo application using React Router for navigation.
          The app demonstrates how to implement clean, programmatic routing in a 
          React Native mobile application.
        </Text>
      </View>
      
      <Link to="/" underlayColor="#f0f4f7">
        <View style={styles.button}>
          <Text style={styles.buttonText}>Back to Home</Text>
        </View>
      </Link>
    </View>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  container: { 
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2a2a2a',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
  contentBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 40,
    width: '100%',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
  },
  button: {
    backgroundColor: '#4a80f5',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  }
});