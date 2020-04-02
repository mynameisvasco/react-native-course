import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Alert, View } from "react-native";
import NumberContainer from "../components/NumberContainer";

const generateRandomBetween = (min, max, exclude) => {
  let rndNum = 0;
  do {
    rndNum = Math.floor(
      Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min)
    );
  } while (rndNum === exclude);

  return rndNum;
};

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const guessTimes = useRef(-1);

  useEffect(() => {
    guessTimes.current += 1;
    if (props.userChoice === currentGuess) {
      Alert.alert(
        "Game Over!",
        "Computer won after " + guessTimes.current + " times",
        [
          {
            text: "Play Again!",
            style: "default",
            onPress: props.onGameHover
          }
        ]
      );
    }
  });

  const lowerHandler = () => {
    if (props.userChoice > currentGuess) {
      Alert.alert("Don't lie!", "You know you are lying, please don't.", [
        {
          text: "Sorry!",
          style: "cancel"
        }
      ]);
      return;
    }
    const newRndNum = generateRandomBetween(
      currentLow.current,
      currentGuess,
      currentGuess
    );
    currentHigh.current = currentGuess;
    setCurrentGuess(newRndNum);
  };
  const higherHandler = () => {
    if (props.userChoice < currentGuess) {
      Alert.alert("Don't lie!", "You know you are lying, please don't.", [
        {
          text: "Sorry!",
          style: "cancel"
        }
      ]);
      return;
    }
    const newRndNum = generateRandomBetween(
      currentGuess,
      currentHigh.current,
      currentGuess
    );
    currentLow.current = currentGuess;
    setCurrentGuess(newRndNum);
  };

  return (
    <View>
      <NumberContainer
        onLower={lowerHandler}
        onHigher={higherHandler}
        computerGuess={currentGuess}
      />
    </View>
  );
};

export default GameScreen;
