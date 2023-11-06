import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  ImageSourcePropType,
} from "react-native";
import axios from "axios";
import Card from "./components/Card/Card";

type EventData = {
  id: number;
  categoryImageUrl: ImageSourcePropType;
  categoryTitle: string;
  date: string;
  evenLocation: string;
  description: string;
  eventImages: ImageSourcePropType[];
};
const Home = () => {
  const [data, setData] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/mockdata");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.homeCard}>
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "5%",
  },
  homeCard: {
    marginTop: 24,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
