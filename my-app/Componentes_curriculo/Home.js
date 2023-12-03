import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const Home = () => {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      <Image source={require('../assets/image.jpg')} style={styles.image} />
      <Text style={styles.text}>Adriel Fernando</Text>
      <Button
        title="Meu Currículo"
        onPress={() => navigation.navigate('Curriculo')}
      />
    </View>
  );
};

const styles = StyleSheet.create
(
    {
        container: 
        {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        image: 
        {
            width: 200,
            height: 200,
            margin: 10,
            borderRadius: 100
        },
        text:
        {
            margin: 20,
        },
    }
);

export default Home;