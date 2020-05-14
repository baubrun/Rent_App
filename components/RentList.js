import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import RentItem from "./RentItem";

const RentList = () => {
  const [listings, setListings] = useState([]);

  const fetchData = async () => {
    const response = await fetch("/listings");
    const body = await response.text();
    const parser = JSON.parse(body);
    if (parser.success) {
      setListings(parser.success)
    }
  };

  useEffect(async () => {
    fetchData()
  }, []);

  return (
    <FlatList
      data={listings}
      keyboardShouldPersistTaps="always"
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <RentItem {...item} />}
    />

    );
};


export default RentList;
