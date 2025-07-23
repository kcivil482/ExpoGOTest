import { Image } from 'expo-image';
import { useEffect, useState } from 'react';
import { Platform, StyleSheet,View, Text,FlatList,TextInput,Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [notes, setNotes] = useState([])
  const [text, setNote] = useState([])
    type ItemProps = {title: string};

  const ListItem = ({text}: ItemProps) =>(
    <View style={styles.listItem}>
      <Text style={styles.text}>{text}</Text>
    </View>
      );
    
  const getData = async ()=>{
    const res = await fetch("/api/Notes");
    const result = await res.json();
    console.log(result.data)
    setNotes(result.data)
  }
   const postData = async ()=>{
    console.log(text)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
    };
    const res = await fetch("/api/Notes", requestOptions);
    const result = await res.json();
    console.log(result)
  }
  const handleSubmit = ()=>{
    postData()
    getData()
  }
  useEffect(() => {
    getData()
  }, [])
  


  return (
    <View >
      <View style={styles.titleContainer}>
        <Text style={styles.text}> Expo Go Showcase</Text>
      </View>
      <View style={styles.InputContainer}>
        <TextInput onChangeText={setNote} value={text} style={styles.textInput} placeholder="Enter new note"></TextInput>
        <Button onPress={handleSubmit} style={styles.button} title="submit" ></Button>
      </View>
      <FlatList  
        renderItem={({item}) => <ListItem text = {item.text}  />}
        keyExtractor={item => item.id}
        data={notes}/>

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
  text:{
    color:'white',
  },
  listItem:{
    margin:"auto",
    width:"80%",
    height:40,
    alignItems:'center',
    justifyContent:"center",
    backgroundColor:'gray'
  },
  textInput:{
    color:"white",
    borderWidth:1,
    borderStyle:"solid",
    borderColor:"white",
    width:"50%",
    margin:"auto",
    marginTop:15,
    marginBottom:15
  },
  button:{
    height:5
  },
  InputContainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around"
  }
});
