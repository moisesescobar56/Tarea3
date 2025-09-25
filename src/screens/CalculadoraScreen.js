import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { Input } from "../components";

export default function CalculadoraScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Input label="Numero 1:" placeholder="A" type="numeric" />
      <Input label="Numero 2:" placeholder="B" type="numeric" />
      <Input label="Resultado:" placeholder="C" editable="false" />

      <Button title="Calcular" color="#000c79ff" />
      <br />
      <Button title="Ir a Lista" onPress={() => navigation.navigate('Todo')}  />

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