import { useEffect, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  Animated,
} from "react-native";
import Button from "../../components/button/Button";
import { Typography } from "../../components/typography/typography";
import GoogleIcon from "../../../assets/GoogleLoginIcon.png";
import AppleIcon from "../../../assets/AppleLoginIcon.png";
import FacebookIcon from "../../../assets/FacebookLoginIcon.png";
import TerraLogo from "../../../assets/TerraLogo.png";

const LoginScreen = ({ navigation }: any) => {
  const [showMethods, setShowMethods] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const fadeAnim = new Animated.Value(1);
  const mainContentAnim = new Animated.Value(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        setShowSplash(false);
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  Animated.timing(mainContentAnim, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  }).start();

  if (showSplash) {
    return (
      <View
        style={[
          styles.container,
          { justifyContent: "space-between", paddingBottom: 50 },
        ]}
      >
        <Image
          source={require("../../../assets/WelcomeLogo.png")}
          style={styles.welcomeImageLoad}
        />
        <View style={styles.containerLoad}>
          <Typography variant="initialLoad">Powered by </Typography>
          <Image source={TerraLogo} />
        </View>
      </View>
    );
  }

  return (
    <Animated.View style={[styles.container, { opacity: mainContentAnim }]}>
      <TouchableWithoutFeedback onPress={() => setShowMethods(false)}>
        <View style={styles.containerPar}>
          <View>
            <Image
              source={require("../../../assets/WelcomeLogo.png")}
              style={styles.welcomeImage}
            />
            <View style={styles.typesContainer}>
              <Typography variant="titleLarge">
                Dobrodošli u Grad Vis
              </Typography>
              <Typography variant="description">
                Pratite najnovije informacije i budite u toku sa svim
                organiziranim događajima u gradu{" "}
              </Typography>
            </View>
            <Button
              variant="welcome"
              label="Nastavi"
              onPress={() => setShowMethods((prev) => !prev)}
              typographyVariant="btnStyleWelcome"
              textColor="white"
              style={styles.continueMethod}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      {showMethods ? (
        <View style={styles.methodsContainer}>
          <Typography style={styles.headerLogin} variant="titleLarge">
            Prijava
          </Typography>
          <Typography style={styles.subHeaderLogin} variant="titleSmall">
            Odaberi svoj način prijave u aplikaciju
          </Typography>
          <View style={styles.loginMethods}>
            <Button
              variant="signIn"
              label="Prijava sa lozinkom"
              typographyVariant="btnStyleVariant"
              onPress={() => navigation.navigate("CredentialsLogin")}
              textColor="white"
              style={styles.credentialsLogin}
            />
            <View style={styles.hrContainer}>
              <View style={styles.hr} />
              <Typography variant="btnStyleVariant" style={styles.hrText}>
                ILI
              </Typography>
              <View style={styles.hr} />
            </View>
            <Button
              variant="social"
              label="Prijava putem Google-a"
              onPress={() => console.log("Button was pressed")}
              typographyVariant="btnStyleVariant"
              icon={<Image source={GoogleIcon} />}
              style={styles.googleLogin}
            />
            <Button
              variant="social"
              label="Prijava putem Apple-a"
              typographyVariant="btnStyleVariant"
              onPress={() => console.log("Button was pressed")}
              icon={<Image source={AppleIcon} />}
              style={styles.appleLogin}
              textColor="white"
            />
            <Button
              variant="social"
              label="Prijava putem Facebook-a"
              onPress={() => console.log("Button was pressed")}
              typographyVariant="btnStyleVariant"
              icon={<Image source={FacebookIcon} />}
              style={styles.facebookLogin}
              textColor="white"
            />
            <Button
              variant="signIn"
              label="Registriraj se"
              typographyVariant="btnStyleVariant"
              onPress={() => navigation.navigate("Register")}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate("BottomTabNavigator")}
              style={styles.signInGuest}
            >
              <Typography style={styles.guestLogin} variant="btnStyleVariant">
                Prijavi se kao gost
              </Typography>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  containerPar: {
    backgroundColor: "fff",
    paddingHorizontal: "5%",
    paddingVertical: 20,
  },
  containerLoad: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  typesContainer: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    overflow: "visible",
    flex: 1,
    gap: 18,
    justifyContent: "center",
  },
  headerLogin: {
    marginBottom: 12,
  },
  subHeaderLogin: {
    marginBottom: 16,
  },
  hrContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  hr: {
    flex: 1,
    height: 1,
    backgroundColor: "#D9D9D9",
  },
  hrText: {
    marginHorizontal: 8,
    color: "#D9D9D9",
  },
  guestLogin: {
    textDecorationLine: "underline",
    color: "#003665",
  },
  googleLogin: {
    borderWidth: 1,
    borderColor: "#D2DAEE",
  },
  credentialsLogin: {
    backgroundColor: "#003665",
  },
  appleLogin: {
    backgroundColor: "#000",
  },
  facebookLogin: {
    backgroundColor: "#1877F2",
  },
  signInGuest: {
    marginTop: 12,
    marginBottom: 16,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  welcomeImage: {
    marginTop: 70,
    width: "100%",
    height: "50%",
    resizeMode: "contain",
  },
  welcomeImageLoad: {
    marginTop: 100,
    width: "100%",
    height: "50%",
    resizeMode: "contain",
  },
  continueMethod: {
    marginBottom: 8,
  },
  loginMethods: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    marginTop: 24,
    width: "100%",
  },
  methodsContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 24,
    paddingVertical: 16,
    width: "100%",
    height: "auto",
    backgroundColor: "#fff",
    alignItems: "flex-start",
  },
});

export default LoginScreen;
