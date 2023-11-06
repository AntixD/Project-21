import { useState } from "react";
import {
  createBottomTabNavigator,
  BottomTabBar,
  BottomTabBarButtonProps,
} from "@react-navigation/bottom-tabs";
import {
  View,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
} from "react-native";
import MyProfile from "../screens/home/components/ProfileModal/ProfileModal";
import Home from "../screens/home/Home";
import Header from "../screens/home/components/Header/Header";
import { Ionicons, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import Input from "../components/input/Input";
import SavedArticles from "../screens/savedArticles/savedArticles";
import { Typography } from "../components/typography/typography";
import Map from "../components/map/map";
import HeaderLogo from "../../assets/HeaderLogo.png";
import TabIcons from "../components/tabIcons/TabIcons";

const Tab = createBottomTabNavigator();

const BottomTabNavigation: React.FC = () => {
  const [isSearchFocused, setSearchFocused] = useState(false);
  const [isProfileModalVisible, setProfileModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("Početna");

  const closeSearchBar = () => {
    setSearchFocused(false);
  };

  const handleTabPress = (name: string) => {
    setActiveTab(name);
  };

  return (
    <View style={styles.containerNavigator}>
      {isSearchFocused ? (
        <View style={styles.searchContainer}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="gray"
            onPress={closeSearchBar}
            style={styles.backIcon}
          />
          <Input
            style={styles.searchInput}
            placeholder="Pretraži..."
            icon={<Ionicons name="search" size={24} color="gray" />}
          />
        </View>
      ) : (
        <Header headerTitle="Grad Vis" headerImage={HeaderLogo} />
      )}

      {isProfileModalVisible && (
        <MyProfile
          isVisible={isProfileModalVisible}
          onClose={() => setProfileModalVisible(false)}
          username="Antonio Dedić"
          iconUri="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAAB1dXWXl5fs7OzR0dH7+/vg4ODm5ub4+Pje3t47Ozvj4+NCQkLJyckgICDy8vKdnZ22trYuLi6lpaVVVVVhYWGNjY1sbGxaWloYGBiysrLCwsK6urqTk5NJSUkSEhJ+fn5oaGiDg4MkJCQ1NTULCwtHR0c2NjZPT0/Ozs5NNl5mAAAEqElEQVR4nO3di3aiMBQF0IaHAgUBBQUBrdra6v9/4FhnzdhWkEcu5mLP/oKcFcw78ekJAAAAAAAAAAAAAAAAAAAA4OHYhuWaRRTqYVQcXcsIVBeIlmUWu8NSXLysN9lxPFJdLiJGHs1fRIk4zC3VhSNgRclrWbwzfxs6qgsoKdDj0ur7b39YGKoLKWPq7W/mO3uOVBezM3deH+/sYKouaid25jcMeBIOsPMwFs3znWzGqgvclpO0CihEOrAv1YlbBjw1OBPVhW7DPLQOKISXqy52cx1q8BxxMLVoNe0lfjoMZIATaB0DCrEdxDh1FHYOKMTCVl38BvJlfZBqU9XFrxd0aUYv3vh/p+2GMtc01QHqWJIBheA+ttlKJ1yrjnDbscF8sA7vxqbteLtMqjrELeYHQcIZ5/HpiiCgEDvVMaoZXQek38V8h6f5jCThMlMdpFJEElAIXXWQKkb3ScV3c66LNqZHlHDGdSqcE3T3fxWqo1TIqAKKiOeulC0z9f1ux3OBONiQJZzznCV2XoC69s6zMXXlZvdfzXiOasZUnYUQPtOEz2QJlzwTOg+f8PG/0sdvaQh7C49nb0E2tRAi5dnj2zpZwg3PUdvjj7x/wezp8WfAZE1NyrMpPaGaIC5UB6lUVJ9CbGPPdzWRaEWY84GFh1/V/wU7MzS7a6zPYxDskO5575A+ybc1nuoINVzphEfVEersJAPOVQeoZcut1vgDOLk/aXG8+wr3ZuZMaiK8Y91T/CMxxWC6X3Fl3O2IsBBr7ie+/uu4Nsx24lvC6TKNWrIej/7ktj934g/mE/3LbftbHM5v8B9rc/ta3g8J41lvlSBqPlmc6QMYylwbmU2P06aTQXT0JYKi0ZcaMV3DbySoX7nhukfRmB161Rcwls+Loef7NCq0Q9kI4HWtZUP9/V0xpqtN+nyZVi0/Ym2VuaqLRWs0nhRZFOq6HkbZdOI8TO0BAAAAAAAAwKMY2UFgWGYe6TttnsZxnM61zSrKTdcIAnvYixm24TpmoWuHqo2o13Wymh6dsTHEnKdKm+rJe6M1by9ZZacqZXq2u4x7+iITr9XWk9g/b09fLtuzwV/Yub5J31qFu5jF2qpgvQtlRKffnOTZvdk6CZlWpaGvfZrrCHvfW3ALaVshzRHvi5cFn2XxYDzteoDmtnXmcNiZsvIddfVdLDXlzasZyT8MdVsamQo7SnNBd6mymrdTdVbK1Ogu/t72tlWR0dBkzpG25c/vfd6m5SvBFLR7nswMpl3HZTL86G4DuiPdhd925vf5OQZZf/1fnf09qtHZKMv3Sev9COOknwFac17Pd4QLmhfZZPi9/tEA3X10GWF/wziqF+dkLfqKyKMGP4X9BMxV5/qil7vQJDdgqfRxNcOguABLJ6U/2BiRPXpBg/x9TPNddaQfqL9Tqcfy+0F8fprwHS8qr7Qj1KnqPCVIn+mR+MuK/sSUMylD3ZTwBsplDUd1mFKUrSmnAdsF5TSKy6TiO8pXXuheYqNE+WcfSKgGEiIhEqqHhEiIhOohIRIioXpIiIS/KyHN27LUEsKEeaLxk/B9UBkAAAAAAAAAAAAAAAAAAAB+qz/Ur1izYu5ZcQAAAABJRU5ErkJggg=="
        />
      )}

      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={(props) => (
          <BottomTabBar {...props} style={styles.tabBarStyle} />
        )}
      >
        <Tab.Screen
          name="Početna"
          component={Home}
          options={{
            tabBarButton: (props: BottomTabBarButtonProps) => {
              const isActive = activeTab === "Početna";

              return (
                <Pressable
                  style={styles.tabButton}
                  onPress={(e) => {
                    handleTabPress("Početna");
                    props.onPress!(e);
                  }}
                >
                  <TabIcons type="Home" isActive={isActive} />
                  <Typography variant="bottomTabText">Početna</Typography>
                </Pressable>
              );
            },
          }}
        />
        <Tab.Screen
          name="Grad Vis Map"
          component={Map}
          options={{
            tabBarButton: (props: BottomTabBarButtonProps) => {
              const isActive = activeTab === "Grad Vis Map";

              return (
                <Pressable
                  style={styles.tabButton}
                  onPress={(e) => {
                    handleTabPress("Grad Vis Map");
                    props.onPress!(e);
                  }}
                >
                  <TabIcons type="Map" isActive={isActive} />
                  <Typography variant="bottomTabText">Mapa</Typography>
                </Pressable>
              );
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={Home}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              setSearchFocused(!isSearchFocused);
            },
          }}
          options={{
            tabBarButton: (props: BottomTabBarButtonProps) => {
              const isActive = activeTab === "Search";

              return (
                <Pressable
                  style={styles.tabButton}
                  onPress={(e) => {
                    handleTabPress("Search");
                    props.onPress!(e);
                  }}
                >
                  <TabIcons type="Search" isActive={isActive} />
                  <Typography variant="bottomTabText">Istraži</Typography>
                </Pressable>
              );
            },
          }}
        />
        {/* <Tab.Screen
          name="Spremljeno"
          component={SavedArticles}
          options={{
            tabBarButton: (props: BottomTabBarButtonProps) => {
              const isActive = activeTab === "Spremljeno";

              return (
                <Pressable
                  style={styles.tabButton}
                  onPress={(e) => {
                    handleTabPress("Spremljeno");
                    props.onPress!(e);
                  }}
                >
                  <TabIcons type="SavedArticle" isActive={isActive} />
                  <Typography variant="bottomTabText">Spremljeno</Typography>
                </Pressable>
              );
            },
          }}
        /> */}
        <Tab.Screen
          name="Profile"
          component={Home}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              setProfileModalVisible(true);
              closeSearchBar();
            },
          }}
          options={{
            tabBarButton: (props: BottomTabBarButtonProps) => {
              const isActive = activeTab === "Profile";

              return (
                <Pressable
                  style={styles.tabButton}
                  onPress={(e) => {
                    handleTabPress("Profile");
                    props.onPress!(e);
                  }}
                >
                  <TabIcons type="ProfileModal" isActive={isActive} />
                  <Typography variant="bottomTabText">Moj profil</Typography>
                </Pressable>
              );
            },
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  containerNavigator: {
    flex: 1,
    paddingTop: 48,
    justifyContent: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  backIcon: {
    position: "absolute",
    zIndex: 1,
    left: 5,
    top: "50%",
    transform: [{ translateY: -12 }],
  },
  searchInput: {
    flex: 1,
    paddingLeft: 35,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "gray",
    borderWidth: 0,
    borderBottomWidth: 1,
    position: "relative",
  },
  tabBarStyle: {
    height: 65,
  },
  tabButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default BottomTabNavigation;
