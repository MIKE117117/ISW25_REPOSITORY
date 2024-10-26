import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./Navigation/Index";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Navigation />
    </SafeAreaProvider>
  );
}
