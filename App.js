import { StatusBar } from "expo-status-bar";
import { DefaultTheme, Provider as ThemeProvider } from "react-native-paper";
import { store } from "./src/context/store";
import { Provider } from "react-redux";
import Notification from "./src/components/Notification";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/navigations/MainNavigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["new NativeEventEmitter"]);
LogBox.ignoreAllLogs();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
      staleTime: Infinity
    }
  }
});
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: "transparent" // Use transparent to disable the little highlighting oval
  }
};

export default function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <StatusBar style="light" />
            <NavigationContainer>
              <MainNavigation />
            </NavigationContainer>
            <Notification />
          </ThemeProvider>
        </Provider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
