import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';

export const HomeScreen = () => (
  <View style={styles.screen}>
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Home</Text>
      <Text style={styles.text}>Your personal dashboard</Text>
      
      <Link to="/about" component={TouchableOpacity} underlayColor="#f0f4f7">
        <View style={styles.button}>
          <Text style={styles.buttonText}>Go to About</Text>
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
    marginBottom: 40,
    textAlign: 'center',
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