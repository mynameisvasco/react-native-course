import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screen/StartGameScreen";
import GameScreen from "./screen/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  const gameHoverHandler = () => {
    setUserNumber(undefined)
  }

  let content = <StartGameScreen onStartGame={startGameHandler}/>;

  if (userNumber) {
    content = <GameScreen onGameHover={gameHoverHandler} userChoice={userNumber}/>;
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Header title="Number Guesser" />
        {content}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  }
});
