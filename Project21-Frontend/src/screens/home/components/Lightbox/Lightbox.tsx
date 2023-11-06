import React, { useRef, useState } from "react";
import {
  Modal,
  View,
  Image,
  StyleSheet,
  FlatList,
  Text,
  Dimensions,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import LightBoxArrow from "../../../../../assets/ArrowBack.png";

interface LightboxProps {
  images: ImageSourcePropType[];
  isVisible: boolean;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, isVisible, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const flatListRef = useRef<FlatList | null>(null);

  const handleThumbnailPress = (index: number) => {
    setCurrentImageIndex(index);
    flatListRef.current?.scrollToIndex({ index });
  };

  return (
    <Modal visible={isVisible} transparent={true} onRequestClose={onClose}>
      <View style={styles.modalBackground}>
        <FlatList
          ref={flatListRef}
          data={images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.imageContainerLightbox}>
              <Image source={item} style={styles.imageLightBox} />
            </View>
          )}
          onMomentumScrollEnd={(ev) => {
            setCurrentImageIndex(
              Math.round(
                ev.nativeEvent.contentOffset.x /
                  ev.nativeEvent.layoutMeasurement.width
              )
            );
          }}
        />
        <View style={styles.counterContainer}>
          <Text style={styles.counterText}>
            {currentImageIndex + 1}/{images.length}
          </Text>
        </View>
        <Pressable style={styles.closeButton} onPress={onClose}>
          <Image source={LightBoxArrow} style={styles.closeIcon} />
        </Pressable>

        <View style={styles.previewContainer}>
          <FlatList
            data={images}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => "preview_" + index.toString()}
            renderItem={({ item, index }) => (
              <Pressable onPress={() => handleThumbnailPress(index)}>
               <Image source={item} style={[styles.imagePreview, index === currentImageIndex && styles.activePreview]} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainerLightbox: {
    width: Dimensions.get("window").width,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  previewContainer: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
  },
  imagePreview: {
    width: 50,
    height: 50,
    marginRight: 5,
    resizeMode: "contain",
  },
  activePreview: {
    borderColor: "#FFF",
    borderWidth: 2,
  },
  closeIcon: {
    width: 32,
    height: 32,
  },
  imageLightBox: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    backgroundColor: "transparent",
  },
  counterContainer: {
    position: "absolute",
    top: 20,
    left: 65,
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: 5,
    padding: 5,
  },
  counterText: {
    color: "#FFF",
    fontSize: 16,
  },
  closeButton: {
    position: "absolute",
    top: 20,
    left: 20,
    borderWidth: 0,
    backgroundColor: "transparent",
  },
  closeButtonText: {
    color: "#FFF",
    fontSize: 18,
  },
});

export default Lightbox;
