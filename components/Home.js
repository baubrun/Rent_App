import React from "react";
import {
  Image,
  TouchableHighlight,
  StyleSheet,
  View,
} from "react-native";

const HomeScreen = (props) => {
  const { navigate } = props.navigation;
  return (
    <View style={styles.container}>
      <TouchableHighlight 
      onPress={() => navigate("RentList")}
      style={styles.topBox}      
      >
        <Image
          source={require("../assets/real-estate.png")}
          style={styles.homeImg}
        />
      </TouchableHighlight>

      <View style={styles.bottomBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  topBox: {
    backgroundColor: "#cce5ff",
    flex: 2,
  },
  bottomBox: {
    backgroundColor: "#ffffcc",
    flex: 1,
  },
  homeImg: {
    alignSelf: "auto",
    bottom: 0,
    flex: 1,
    height: undefined,
    width: undefined,
  },
});

export default HomeScreen;
