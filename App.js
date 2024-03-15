import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigation>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
          <Stack.Screen name='MealsOverview' components={MealsOverviewScreen}/>
        </Stack.Navigation>
      </NavigationContainer>
      <CategoriesScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
