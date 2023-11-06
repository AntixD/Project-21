import { View, Text, StyleSheet, ScrollView } from "react-native";
import { mockData } from "./MockData";
import Card from "./components/Card/Card";

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.homeCard}>
        {mockData.map((data) => (
          <Card key={data.id} {...data} />
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
  }
});

export default Home;
