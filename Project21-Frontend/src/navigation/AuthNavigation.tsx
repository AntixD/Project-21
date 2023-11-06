import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/login/Login";
import CredentialsLogin from "../screens/credentialsLogin/CredentialsLogin";
import Register from "../screens/register/Register";
import ForgotPassword from "../screens/forgotPassword/ForgotPassword";

const AuthStack = createStackNavigator();

const AuthNavigation = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen name="CredentialsLogin" component={CredentialsLogin} />
    <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
    <AuthStack.Screen name="Register" component={Register} />
  </AuthStack.Navigator>
);

export default AuthNavigation;
