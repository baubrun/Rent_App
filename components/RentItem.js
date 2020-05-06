import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import RentSVG from "../assets/forRentCL.svg"

const RentItem = (props) => {
  return (
    <View style={styles.imageContainer}>
      <RentSVG 
      style={styles.rentItem} 
      />
      <View style={styles.aside}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.email}>{props.email}</Text>
        <Text style={styles.phone}>{props.phone}</Text>
        <Text style={styles.address}>{props.address}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rentItem: {
    flex: 1,
    marginRight: 5,
    marginLeft: 5,
    width: 50,
    height: 50,
  },
  imageContainer: {
    backgroundColor: "#D8D78F",
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  aside: {
    flex: 1,

  },
  address: {
    textAlign: "center",
  },
  name: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: "center",
  },
  email: {textAlign: "center"},
  phone: {textAlign: "center"}
});

export default RentItem;
