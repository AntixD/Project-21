import React, { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/button/Button";
import { Typography } from "../../components/typography/typography";
import Input from "../../components/input/Input";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation();

  return (
    <View style={styles.registerContainer}>
      <View style={styles.headerRegister}>
        <Typography variant="titleMedium" style={styles.titleRegister}>
          Dobrodošli! Registrirajte se da biste dobili najnovije vijesti o svom
          gradu.
        </Typography>
      </View>
      <View style={styles.formContainer}>
        <Input
          placeholder="Korisničko ime"
          onChange={setUsername}
          style={styles.input}
        />
        <Input placeholder="Email" onChange={setEmail} style={styles.input} />
        <Input
          placeholder="Lozinka"
          onChange={setPassword}
          isPasswordInput
          style={styles.input}
        />
        <Input
          placeholder="Potvrdi lozinku"
          onChange={setConfirmPassword}
          isPasswordInput
          style={styles.input}
        />
        <Button
          label="Registriraj se"
          onPress={() => {
            password !== confirmPassword && alert("Lozinke se ne podudaraju");
          }}
          variant="signIn"
          typographyVariant={"btnStyleVariant"}
        />
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Typography variant="titleSmall" style={styles.navigationText}>
            Već imate račun? Prijavite se
          </Typography>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  registerContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: "5%",
    paddingTop: 48,
    height: "100%",
  },
  headerRegister: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  titleRegister: {
    fontSize: 24,
    marginTop: 40,
    color: "#343a40",
  },
  formContainer: {
    marginTop: 30,
    justifyContent: "center",
  },
  navigationText: {
    marginTop: 20,
    textAlign: "center",
  },
  input: {
    marginBottom: 10,
  },
});

export default Register;
