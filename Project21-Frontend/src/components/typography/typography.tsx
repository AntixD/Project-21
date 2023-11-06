import { useFonts } from "expo-font";
import { StyleSheet, Text, TextStyle } from "react-native";

export type TypographyVariant =
  | "titleLarge"
  | "titleMedium"
  | "titleSmall"
  | "description"
  | "btnStyleVariant"
  | "btnStyleWelcome"
  | "btnStyleCard"
  | "cardDate"
  | "cardDescription"
  | "bottomTabText"
  | "cardShow"
  | "initialLoad";

export interface TypographyProps {
  variant: TypographyVariant;
  children: React.ReactNode;
  style?: TextStyle;
  onPress?: () => void;
  numberOfLines?: number;
  ellipsizeMode?: "head" | "middle" | "tail" | "clip";
}

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  style,
  onPress,
  numberOfLines,
  ellipsizeMode,
}) => {
  let [fontsLoaded] = useFonts({
    SplineSans: require("../../../assets/fonts/SplineSans-VariableFont_wght.ttf"),
    LexendDeca: require("../../../assets/fonts/LexendDeca-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Text
      style={[styles[variant], style]}
      onPress={onPress}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  titleLarge: {
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 40,
    letterSpacing: -0.408,
    color: "#130F26",
    fontFamily: "SplineSans",
  },
  titleMedium: {
    fontFamily: "SplineSans",
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 26,
    letterSpacing: -0.408,
    color: "#130F26",
  },
  titleSmall: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 22,
    letterSpacing: -0.408,
    color: "#404040",
    fontFamily: "SplineSans",
  },
  description: {
    fontSize: 20,
    fontWeight: "400",
    lineHeight: 22,
    color: "#404040",
    fontFamily: "SplineSans",
  },
  btnStyleVariant: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "LexendDeca",
  },
  cardShow: {
    color: "#000",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "700",
    letterSpacing: -0.408,
    fontFamily: "SplineSans",
  },
  btnStyleWelcome: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 20,
    fontFamily: "LexendDeca",
  },
  btnStyleCard: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 22,
    letterSpacing: -0.408,
    fontFamily: "LexendDeca",
  },
  cardDate: {
    color: "#000",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 22,
    letterSpacing: -0.408,
    fontFamily: "SplineSans",
  },
  initialLoad: {
    color: "#969696",
    fontFamily: "SplineSans",
    letterSpacing: -0.408,
    fontWeight: "400",
    fontSize: 14,
  },
  cardDescription: {
    color: "#000",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 22,
    letterSpacing: -0.408,
    fontFamily: "SplineSans",
  },
  bottomTabText: {
    color: "#969696",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
    fontFamily: "SplineSans",
  },
});
