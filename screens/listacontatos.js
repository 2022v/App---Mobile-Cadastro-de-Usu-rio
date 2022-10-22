import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { Card, ListItem, Button, Icon, Avatar } from 'react-native-elements'
import { ListItem, Avatar, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';



const list = [
    {
      name: 'Patricia Tavares',
      avatar_url: 'https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg',
      subtitle: '81 998765332'

    },
    {
      name: 'Marcos Andrade',
      avatar_url: 'https://cdn-icons-png.flaticon.com/512/147/147133.png',
      subtitle: '81 988553424'
    },
    {
        name: 'Rodrigo Antunes',
        avatar_url: 'https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg',
        subtitle: '81 987765525'
      },

      {
        name: 'Turma ADS',
        avatar_url: 'https://cdn5.vectorstock.com/i/1000x1000/01/69/businesswoman-character-avatar-icon-vector-12800169.jpg',
        subtitle: '81 12345678'
      },
   // more items
  ]




const ListaContatos = ({navigation}) => {
    return (
      <View style={[styles.container, {
        flexDirection: "column"
      }]}>
  
        <View style={{ flex: 0.5, backgroundColor: "#00A8FF", alignItems: "center", }}>
  
          <Text h1 style={{fontSize:30, color:"white"}}>Lista de Contatos
          <Icon onPress={()=>navigation.navigate('cadastrocontato')} 
             name='plus'
             size={30}
             color='white'
           />
          
          </Text>
       
         



        
          </View>


          <View style={{ flex: 2, backgroundColor: "white", alignItems: "center", }}>
          {
    list.map((l, i) => (
      <ListItem key={i} bottomDivider  onPress={()=>navigation.navigate('alteracao')}>
        <Avatar source={{uri: l.avatar_url}} />
        <ListItem.Content>
          <ListItem.Title>{l.name}</ListItem.Title>
          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }
            


        </View>


          </View>
           );
        };

     



        const styles = StyleSheet.create({
            container: {
              flex: 1,
              padding: 20,
            },
          });
        
          
        
        
          export default ListaContatos;
          