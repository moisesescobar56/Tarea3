import { TextInput, Text, View } from "react-native";
import styles from "./syles";

export default function Input({ label, placeholder, type = "default", editable = true, lines = 1 }){
    return (
        <View style={styles.container}>
            <Text style={styles.label} >{label}</Text>
            <TextInput 
                placeholder={placeholder}
                keyboardType= {type}
                editable = {editable}
                style={ lines > 1? styles.textArea : styles.control }
                placeholderTextColor="#999"
                multiline={ lines > 1? true : false }
                numberOfLines= {lines}
                
             />
        </View>
    );
}