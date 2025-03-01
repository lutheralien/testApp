import React from "react";
import { View, StyleSheet } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";
import { HomeScreen } from "./screens/HomeScreen";
import { AboutScreen } from "./screens/AboutScreen";

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
        </Routes>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});
