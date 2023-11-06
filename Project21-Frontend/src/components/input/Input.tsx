import React from "react";
import { View, TextInput, StyleSheet, ViewStyle, StyleProp } from "react-native";

interface InputProps {
  placeholder?: string;
  icon?: React.ReactNode;
  isPasswordInput?: boolean;
  style?: StyleProp<ViewStyle>;
  onChange?: (value: string) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  icon,
  style,
  isPasswordInput,
  onChange,
}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={isPasswordInput}
        onChangeText={onChange}
      />
      {icon && <View style={styles.iconContainer}>{icon}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D2DAEE",
    borderRadius: 4,
    padding: 12,
  },
  input: {
    fontSize: 16,
  },
  iconContainer: {
    marginLeft: 8,
  },
});

export default Input;
