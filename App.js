import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from "react-native-elements";
import { Input, Button, Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastroScreen from "./screens/cadastrousuario";
import ListaContatos from "./screens/listacontatos";
import CadastroContatosScreen from "./screens/cadastrocontato";
import AlteracaoExclusao from "./screens/AltExContatos";




const LoginScreen = ({navigation}) => {

  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>

      <View style={{ flex: 1, backgroundColor: "white", alignItems: "center", }}>
        <Avatar
          size="xlarge"
          rounded
          source={{
            uri:
              'https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg',
          }}
        />

        </View>

        <View style={{ flex: 1, backgroundColor: "white", alignItems: "center"}}>
        
          {/* <Text style={{ paddingTop: 30, textAlign: "left" }}>Email</Text> */}
          <Input /*style={{textAlign: "center"}}*/
            placeholder='email@address.com'
            leftIcon={ <Icon
              name=''
              size={30}
              color='black'
            />}
            textAlign="center"
          />
          {/* <Text>Senha</Text> */}
          <Input placeholder="Password" secureTextEntry={true}
            textAlign="center"
          />
        

      </View>




      <View style={{top:"60px", flex: 2 }} >

        <Button  title="Logar" onPress={()=>navigation.navigate('Lista de Contatos')} 
/>

        <Button title="Cadastre-se"  onPress={()=>navigation.navigate('Usuario')} style={{ paddingTop: 10}} buttonStyle={{backgroundColor: 'red'}} />

  
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

const Stack = createNativeStackNavigator();

function App() {
return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Login" component={LoginScreen} />
<Stack.Screen name="Usuario" component={CadastroScreen}  />
<Stack.Screen name="Lista de Contatos" component={ListaContatos}  />
<Stack.Screen name="cadastrocontato" component={CadastroContatosScreen}  />
<Stack.Screen name="alteracao" component={AlteracaoExclusao}  />

</Stack.Navigator>
</NavigationContainer>
);
}

export default App;