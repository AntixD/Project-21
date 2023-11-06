import { View, StyleSheet, Pressable, Text, Alert } from "react-native";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import { Typography } from "../../components/typography/typography";
import { useNavigation } from "@react-navigation/native";

const ForgotPassword = () => {
  const navigation = useNavigation();

  const handleSendMessage = () => {
    
    Alert.alert(
      'Uspješno!', 
      "Poslali ste email na važeću adresu", 
      [
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate("Login"); 
          },
        },
      ],
      { cancelable: false }
    );
  };
  

  return (
    <View style={styles.containerForgotPassword}>
      <View style={styles.headerForgotPassword}>
        <View style={styles.titleForgotPassword}>
          <Typography variant="titleLarge">Dobrodošli!</Typography>
          <Typography variant="titleLarge">Unesite svoj email</Typography>
          <Typography variant="titleLarge">kako bi obnovili lozinku</Typography>
        </View>
        <Typography
          variant="titleSmall"
          style={styles.descriptionCredentialsLogin}
        >
          Unesti svoju email adresu kako bih dobili email sa vasim linkom za obnavljanje lozinke
        </Typography>
      </View>
      <View>
        <Input placeholder="Email" style={styles.inputCredentialsLogin} />
        <Button
          label="Pošalji poruku"
          onPress={handleSendMessage}
          variant="signIn"
          typographyVariant="btnStyleVariant"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerForgotPassword: {
    backgroundColor: "#fff",
    paddingHorizontal: "5%",
    paddingTop: 48,
    height: "100%",
  },
  headerForgotPassword: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 60,
  },
  titleForgotPassword: {
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

export default ForgotPassword;
