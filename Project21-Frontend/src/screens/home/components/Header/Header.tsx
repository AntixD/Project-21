import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import HeaderLogo from "../../../../../assets/HeaderLogo.png";
import { Typography } from "../../../../components/typography/typography";

interface HeaderProps {
  headerTitle: string;
  headerImage: string;
}

const Header: React.FC<HeaderProps> = ({ headerTitle, headerImage }) => {
  return (
    <View style={styles.containerHeader}>
      <View style={styles.header}>
        <Image
          source={typeof headerImage === "string" ? { uri: headerImage } : headerImage}
          style={styles.headerImage}
        />
         <Typography variant="titleMedium">{headerTitle}</Typography>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHeader: {
    width: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    gap: 8,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(217, 217, 217, 0.67);",
  },
  headerImage: {
    width: 36,
    height: 36,
  },
  headerText: {
    fontSize: 20,
  },
});

export default Header;
