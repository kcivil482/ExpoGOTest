import { Image } from 'expo-image';
import { Platform, StyleSheet,View, Text,FlatList } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const testData=["test 1","test 2", "test 3"]
  type ItemProps = {title: string};

  const ListItem = ({text}: ItemProps) =>(
    <View style={styles.listItem}>
      <Text style={styles.text}>{text}</Text>
    </View>
      );

  return (
    <View >
      <View style={styles.titleContainer}>
        <Text style={styles.text}> Expo Go Showcase</Text>
      </View>
      <FlatList  
        renderItem={({item}) => <ListItem text = {item}  />}
        keyExtractor={item => testData.indexOf(item)}
        data={testData}/>

    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    gap: 8,
    marginTop: 45,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  text:{
    color:'white',
  },
  listItem:{
    height:25,
    alignItems:'center',
    backgroundColor:'gray'
  }
});
