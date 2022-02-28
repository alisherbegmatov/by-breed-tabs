import React from "react";
import { cats, dogs } from "./breeds";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome5 } from "react-native-vector-icons";
import BreedList from "./BreedList";

const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: "#1F2C38" },
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Cats") {
            iconName = "cat";
          } else if (route.name === "Dogs") {
            iconName = "dog";
          }

          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#AD8D6C",
        tabBarInactiveTintColor: "#000000",
      })}
    >
      <Tab.Screen
        name="Cats"
        children={() => <BreedList breed={cats} navigation={navigation} />}
      />
      <Tab.Screen
        name="Dogs"
        children={() => <BreedList breed={dogs} navigation={navigation} />}
      />
    </Tab.Navigator>
  );
}

export default HomeScreen;
