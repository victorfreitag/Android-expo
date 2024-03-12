import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet,Image} from 'react-native';

export default function App() {
  return (
    <ScrollView>
        <Image style={styles.container}
          source={{uri:'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt9fe9558d24baef49/60db8067bbd30c0f67e173b9/67c8b47220e1250c61851fd2229bfa6a412656ac.jpg?auto=webp&format=pjpg&width=3840&quality=60'}}  
        />
    </ScrollView>
  );
}

const styles = StyleSheet.create({


  container: {
    height:800,
    backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  
});
