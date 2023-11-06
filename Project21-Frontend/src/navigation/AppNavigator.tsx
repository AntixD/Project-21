import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigation from "./AuthNavigation";
import BottomTabNavigation from "./BottomTabNavigation";

const RootStack = createStackNavigator();

const AppNavigator = () => (
  <RootStack.Navigator screenOptions={{ headerShown: false }}>
    <RootStack.Screen name="AuthNavigator" component={AuthNavigation} />
    <RootStack.Screen name="BottomTabNavigator" component={BottomTabNavigation} />
  </RootStack.Navigator>
);

export default AppNavigator;
