import { StyleSheet, View, Text } from 'react-native';
import { Link } from 'react-router-native';


export const HomeScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>About Screen</Text>
    <Link to="/about"><Text style={styles.link}>Go to About</Text></Link>
  </View>
);

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    marginTop: 40,
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  link: {
    color: 'blue',
    fontSize: 18,
  }
});