import { View, StyleSheet, Text, Pressable } from "react-native";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import { Typography } from "../../components/typography/typography";
import { useNavigation } from "@react-navigation/native";

const CredentialsLogin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.containerCredentialsLogin}>
      <View style={styles.headerCredentialsLogin}>
        <View style={styles.titleCredentialsLogin}>
          <Typography variant="titleLarge">Dobrodošli!</Typography>
          <Typography variant="titleLarge">Prijavite se sa</Typography>
          <Typography variant="titleLarge">svojim akreditivima.</Typography>
        </View>
        <Typography
          variant="titleSmall"
          style={styles.descriptionCredentialsLogin}
        >
          Unesti svoju email adresu kako bih dobili email sa vasim kodom
        </Typography>
      </View>
      <View>
        <Input placeholder="Email" style={styles.inputCredentialsLogin} />
        <Input
          placeholder="Lozinka"
          isPasswordInput
          style={styles.inputCredentialsLogin}
        />
        <Button
          label="Prijavi se"
          onPress={() => {}}
          variant="signIn"
          typographyVariant="btnStyleVariant"
        />
        <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={styles.forgotPasswordText}>Zaboravili ste lozinku?</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerCredentialsLogin: {
    backgroundColor: "#fff",
    paddingHorizontal: "5%",
    paddingTop: 48,
    height: "100%",
  },
  headerCredentialsLogin: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 60,
  },
  titleCredentialsLogin: {
    marginTop: 40,
  },
  descriptionCredentialsLogin: {
    marginTop: 8,
  },
  forgotPasswordText: {
    textDecorationLine: "underline",
    textAlign: "center",
    marginTop: 10,
  },
  inputCredentialsLogin: {
    marginBottom: 10,
  },
});

export default CredentialsLogin;
