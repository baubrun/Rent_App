import React, { Component } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: 37.323,
        longitude: -122.0322,
        latitudeDelta: 0.09,
        longitudeDelta: 0.035,
      },
      coordinate: {
        latitude: 37.323,
        longitude: -122.0322,
      },
    };
  }

  render() {
    return (
      <MapView
        initialRegion={this.state.region}
        provider="google"
        style={styles.mapContainer}
      >
        <Marker coordinate={this.state.coordinate}/>
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  mapContainer: { flex: 1 },
});

export default Map;
