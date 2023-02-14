import React from "react";
import { View } from "react-native";
import { Header } from "../components/Header/Header";

export const AddFeedScreen: React.FC = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="ADD FEED"></Header.Title>
      </Header>
    </View>
  );
};
