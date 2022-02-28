import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Cell from "./Cell";

function BreedList({ navigation, breed }) {
  return (
    <View style={styles.view}>
      <FlatList
        style={styles.list}
        data={breed}
        renderItem={({ item, index }) => {
          return (
            <Cell
              title={item.breed}
              showDetails={() => navigation.navigate("Details", { item })}
            />
          );
        }}
        keyExtractor={(item) => item.breed}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  buttons: {
    width: "100%",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  list: {
    flex: 1,
    width: "100%",
  },
});
export default BreedList;
