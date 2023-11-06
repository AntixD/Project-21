import { useRef, useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";

const GradVisMap: React.FC = () => {
  const mapRef = useRef<MapView | null>(null);
  const [zoomState, setZoomState] = useState({
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const zoomIn = () => {
    const newLatitudeDelta = zoomState.latitudeDelta * 0.7;
    const newLongitudeDelta = zoomState.longitudeDelta * 0.7;

    setZoomState({
      latitudeDelta: newLatitudeDelta,
      longitudeDelta: newLongitudeDelta,
    });

    mapRef.current?.animateToRegion(
      {
        latitude: 43.0602,
        longitude: 16.1826,
        latitudeDelta: newLatitudeDelta,
        longitudeDelta: newLongitudeDelta,
      },
      350
    );
  };

  const zoomOut = () => {
    const newLatitudeDelta = zoomState.latitudeDelta / 0.7;
    const newLongitudeDelta = zoomState.longitudeDelta / 0.7;

    setZoomState({
      latitudeDelta: newLatitudeDelta,
      longitudeDelta: newLongitudeDelta,
    });

    mapRef.current?.animateToRegion(
      {
        latitude: 43.0602,
        longitude: 16.1826,
        latitudeDelta: newLatitudeDelta,
        longitudeDelta: newLongitudeDelta,
      },
      350
    );
  };

  return (
    <View style={styles.mapContainer}>
      <MapView
        ref={mapRef}
        style={styles.mapView}
        initialRegion={{
          latitude: 43.0602,
          longitude: 16.1826,
          latitudeDelta: zoomState.latitudeDelta,
          longitudeDelta: zoomState.longitudeDelta,
        }}
      />
      <View style={styles.zoomButtons}>
        <TouchableOpacity onPress={zoomIn}>
          <Ionicons name="add-circle" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={zoomOut}>
          <Ionicons name="remove-circle" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
  mapView: {
    flex: 1,
  },
  zoomButtons: {
    position: "absolute",
    bottom: 30,
    right: 30,
    flexDirection: "column",
  },
});

export default GradVisMap;
