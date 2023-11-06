import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  FlatList,
  ImageSourcePropType,
} from "react-native";
import Button from "../../../../components/button/Button";
import Lightbox from "../Lightbox/Lightbox";
import { Typography } from "../../../../components/typography/typography";

export interface CardProps {
  id: number;
  categoryImageUrl: ImageSourcePropType;
  categoryTitle: string;
  date: string;
  evenLocation: string;
  description: string;
  eventImages: ImageSourcePropType[];
}

const Card: React.FC<CardProps> = ({
  categoryImageUrl,
  categoryTitle,
  date,
  evenLocation,
  description,
  eventImages,
}) => {
  const [isTextExpanded, setIsTextExpanded] = useState(false);
  const [isLightboxVisible, setIsLightboxVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <View style={styles.containerCard}>
      <View style={styles.topSection}>
        <Image source={categoryImageUrl} style={styles.emblem} />
        <View style={styles.textContainer}>
          <Typography variant="titleMedium">{categoryTitle}</Typography>
          <Typography variant="cardDate">{date}</Typography>
        </View>
      </View>
      <Button
        variant="card"
        label={evenLocation}
        onPress={() => {
          //  O ovome ce mo trebat pricat dalje da znamo oko filtera koji je plan
        }}
        style={styles.location}
        textColor="black"
        typographyVariant="btnStyleCard"
      />
      <Typography
        variant="cardDescription"
        style={styles.description}
        numberOfLines={isTextExpanded ? undefined : 7}
        ellipsizeMode="tail"
      >
        {description}
      </Typography>
      {description.length > 200 ? (
        <Typography
          variant="cardShow"
          onPress={() => setIsTextExpanded((prev) => !prev)}
        >
          {isTextExpanded ? "Prikaži manje" : "Prikaži više"}
        </Typography>
      ) : null}
      {eventImages.length > 0 && (
        <Pressable onPress={() => setIsLightboxVisible(true)}>
          <Image source={eventImages[0]} style={styles.eventImage} />
        </Pressable>
      )}
      {eventImages.length > 1 && (
        <FlatList
          data={eventImages}
          horizontal
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <Pressable
              onPress={() => setSelectedImageIndex(index)}
              style={
                index === selectedImageIndex ? styles.selectedThumbnail : {}
              }
            >
              <Image source={item} style={styles.thumbnailImage} />
            </Pressable>
          )}
        />
      )}
      <Lightbox
        images={eventImages}
        isVisible={isLightboxVisible}
        onClose={() => setIsLightboxVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    width: "100%",
    marginBottom: 32,
  },
  eventImage: {
    width: "100%",
    height: 156,
    marginTop: 10,
    marginBottom: 8,
  },
  thumbnailContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    padding: 8,
    borderRadius: 10,
  },
  thumbnailImage: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  selectedThumbnail: {
    borderColor: "#000",
  },
  topSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 10,
  },
  emblem: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  location: {
    width: "50%",
    marginTop: 10,
  },
  description: {
    marginTop: 8,
  },
});

export default Card;
