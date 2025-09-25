import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title} >Inicio</Text>
      
      <br />
      <Button title="Ir a Contacto" onPress={() => navigation.navigate('Contacto')}  />

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