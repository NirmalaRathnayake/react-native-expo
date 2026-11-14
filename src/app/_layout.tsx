import { Stack } from "expo-router";
import "../../global.css";

// Open the (tabs) group first. Without this, Expo Router picks the first
// group alphabetically on a cold start, which is (auth) → sign-in.
export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
