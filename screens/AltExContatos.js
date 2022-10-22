import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from "react-native-elements";
import { Input, Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';


const AlteracaoExclusao = ({navigation}) => {
    return (
      <View style={[styles.container, {
        flexDirection: "column"
      }]}>
  
        <View style={{ flex: 0.5, backgroundColor: "#00A8FF", alignItems: "center", }}>
  
          <Text h1 style={{fontSize:30, color:"white"}}>  
          <Icon onPress={()=>navigation.navigate('Lista de Contatos')} 
             name='arrow-left'
             size={30}
             color='white'
           />Contato
          </Text>

          </View>

          <View style={{ flex: 3, backgroundColor: "white" }}>
       
        <Text style={{ paddingTop: 30, textAlign: "left" }}>Nome</Text>
            <Input
              placeholder=''
              leftIcon={{ type: 'font-awesome', name: '' }}
              textAlign="center"
            />
  
            <Text style={{ paddingTop: 30, textAlign: "left" }}>Email</Text>
            <Input
              placeholder=''
              leftIcon={{ type: 'font-awesome', name: '' }}
              textAlign="center"
            />


            <Text style={{ paddingTop: 30, textAlign: "left" }}>Telefone</Text>
            <Input
              placeholder=''
              leftIcon={{ type: 'font-awesome', name: '' }}
              textAlign="center"
            />
        
        </View>
  
  
       
      <View style={{top:"80px", flex: 2 }} >

<Button title="Alterar"  style={{ paddingTop: 10 }} />
<Button title="Excluir"  buttonStyle={{backgroundColor: 'red'}} style={{ paddingTop: 10, color:'red' }} />

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






  export default AlteracaoExclusao;