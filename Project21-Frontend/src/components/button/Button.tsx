import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import { Typography, TypographyVariant } from "../typography/typography";

export type ButtonVariants = "welcome" | "social" | "signIn" | "guest" | "card";

export type TextColor = "black" | "white";

interface ButtonProps {
  variant: ButtonVariants;
  label: string;
  icon?: React.ReactNode;
  onPress: () => void;
  textColor?: TextColor;
  style?: StyleProp<ViewStyle>;
  typographyVariant: TypographyVariant;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  label,
  icon,
  onPress,
  style,
  textColor = "black",
  typographyVariant,
}) => {
  return (
    <Pressable style={[styles.base, styles[variant], style]} onPress={onPress}>
      {icon ? <View>{icon}</View> : null}
      <Typography variant={typographyVariant} style={{ color: textColor }}>
        {label}
      </Typography>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 24,
    gap: 16,
  },
  card: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderStyle: "solid",
  },
  label: {
    fontSize: 16,
  },
  welcome: {
    backgroundColor: "#003665",
    borderRadius: 4,
  },
  social: {
    borderRadius: 8,
  },
  signIn: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D2DAEE",
    borderStyle: "solid",
  },
  guest: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderStyle: "solid",
    backgroundColor: "#fff",
  },
});

export default Button;
