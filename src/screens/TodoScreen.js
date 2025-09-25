import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { Input } from "../components";

export default function TodoScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Input label="Tarea:" placeholder="Titulo" />
      <Input label="Descripcion:" placeholder="Escribir aqui..." lines={4} />

      <Button title="Agregar" color="#000c79ff" />
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