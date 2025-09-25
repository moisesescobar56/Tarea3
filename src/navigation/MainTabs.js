import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CalculadoraScreen, TodoScreen } from '../screens';

import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Calculadora') {
            iconName = 'calculator-outline';
          } else if (route.name === 'Todo') {
            iconName = 'list-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Calculadora" component={CalculadoraScreen} />
      <Tab.Screen name="Todo"
        component={TodoScreen}
        options={{ title: "Tareas" }}
      />
    </Tab.Navigator>
  );
}