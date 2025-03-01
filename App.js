import React from "react";
import { View, StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";
import { HomeScreen } from "./screens/HomeScreen";
import { AboutScreen } from "./screens/AboutScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NativeRouter>
        <View style={styles.content}>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
          </Routes>
        </View>
      </NativeRouter>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  content: {
    flex: 1,
  }
});