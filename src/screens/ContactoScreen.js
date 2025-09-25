import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';


import { Input } from "../components";


export default function ContactoScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title} >Contacto</Text>
      
      <Input label="Email:" placeholder="name@mail.com" type="email-addres" />
      <Input label="Asunto:" placeholder="Consulta" />
      <Input label="Mensaje:" placeholder="Escribir aqui..." lines={4}/>

      <Button title="Enviar" color="#000c79ff" />
      <br />
      <Button title="Ir a inicio" onPress={() => navigation.navigate('Inicio')}  />

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    alignItems: "stretch", 
    justifyContent: "flex-start",
    padding: 10
  },
  title: {
    fontSize: 18,
    padding: 10,
    textAlign: "center",
    color: "#000",
    fontWeight: "bold",
    verticalAlign: "top"
  }
});