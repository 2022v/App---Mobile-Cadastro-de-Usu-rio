import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from "react-native-elements";
import { Input, Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';


const CadastroScreen = () => {
    return (
      <View style={[styles.container, {
        flexDirection: "column"
      }]}>
  
        <View style={{ flex: 0.5, backgroundColor: "#00A8FF", alignItems: "center", }}>
  
          <Text h1 style={{fontSize:30, color:"white"}}>  
          <Icon onPress={()=>navigation.navigate('Login')} 
             name='arrow-left'
             size={30}
             color='white'
           />Usuário
          </Text>

          </View>

          <View style={{ flex: 3, backgroundColor: "white" }}>
       
        <Text style={{ paddingTop: 30, textAlign: "left" }}>Nome</Text>
            <Input
              placeholder=''
              leftIcon={{ type: 'font-awesome', name: '' }}
              textAlign="center"
            />
  
            <Text style={{ paddingTop: 30, textAlign: "left" }}>Cpf</Text>
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
            <Text>Senha</Text>
            <Input placeholder="" secureTextEntry={true}
              textAlign="center"
            />
          
  
        </View>
  
  
       
      <View style={{top:"80px", flex: 2 }} >

<Button title="Salvar"  style={{ paddingTop: 10 }} />

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


  export default CadastroScreen;