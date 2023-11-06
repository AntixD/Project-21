import { useRef, useState } from "react";
import { StyleSheet, View, ScrollView, Image, Pressable } from "react-native";
import scrollToTopImg from "../../../assets/scrollToTop.png";

const ScrollToTop = () => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [showButton, setShowButton] = useState(false);

  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
        onScroll={(e) => {
          let offset = e.nativeEvent.contentOffset.y;
          if (offset > 100) {
            setShowButton(true);
          } else {
            setShowButton(false);
          }
        }}
        scrollEventThrottle={16}
      ></ScrollView>
      {showButton ? (
        <Pressable
          style={styles.button}
          onPress={() => {
            scrollViewRef.current?.scrollTo({ y: 0, animated: true });
            setShowButton(false);
          }}
        >
          <Image source={scrollToTopImg} style={styles.image} />
        </Pressable>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default ScrollToTop;
