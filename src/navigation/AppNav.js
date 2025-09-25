import { useColorScheme } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen, ContactoScreen } from '../screens';
import MainTabs from './MainTabs';


const Drawer = createDrawerNavigator();

export default function AppNav() {

  const colorScheme = useColorScheme();

  return (
    <Drawer.Navigator
      // screenOptions={{
      //   drawerStyle: {
      //     backgroundColor:  colorScheme === 'dark'? "#333" : "#fff"
      //   },
      //   drawerLabelStyle: {
      //     color: colorScheme === 'dark'? "#fff" : "#000"
      //   }
      // }}
    >
      <Drawer.Screen name="Inicio" component={HomeScreen} />
      <Drawer.Screen name="Contacto" component={ContactoScreen} />
      <Drawer.Screen  
        name="Extras" 
        component={MainTabs}
        options={{ title: "Extras" }}  />
    </Drawer.Navigator>
  );
}