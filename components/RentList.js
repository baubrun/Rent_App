import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import RentItem from "./RentItem";
import fakeData from "../prac/fakeData";

const RentList = () => {
  return (
    <FlatList
      data={fakeData}
      keyboardShouldPersistTaps="always"
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <RentItem{...item}/>}
    />
  );
};

export default RentList;
