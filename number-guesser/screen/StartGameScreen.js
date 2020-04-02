import React, { useState } from "react";
import { StyleSheet, View, Alert, Keyboard } from "react-native";
import { Text, Input, Button, Block } from "galio-framework";

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const handleNumberInput = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99.",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: resetInputHandler
          }
        ]
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(parseInt(enteredValue));
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    console.log(props);
    confirmedOutput = (
      <View>
        <Text h6>Chosen number: {selectedNumber}</Text>
        <Button
          onPress={() => props.onStartGame(selectedNumber)}
          color="primary" round style={styles.btn}> Start Game
        </Button>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Text h5 style={styles.text}>
        Start a New Game!
      </Text>
      <Block card style={styles.card}>
        <Input
          value={enteredValue}
          onChangeText={handleNumberInput}
          placeholder="Insert a number"
          blurOnSubmit
          autofocus
          keyboardType="numeric"
          maxLength={2}
          textAlign={"center"}
          style={styles.numberInput}
        />
        <View style={styles.btnContainer}>
          <Button
            onPress={confirmInputHandler}
            color="success"
            round
            style={styles.btn}
          >
            Confirm
          </Button>
          <Button
            onPress={resetInputHandler}
            color="error"
            round
            style={styles.btn}
          >
            Reset
          </Button>
        </View>
        {confirmedOutput}
      </Block>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: "center",
    height: "auto"
  },
  card: {
    marginTop: 30,
    padding: 10,
    alignItems: "center"
  },
  text: {
    marginTop: 20
  },
  numberInput: {
    width: "80%",
    marginTop: 10,
    textAlign: "center"
  },
  btnContainer: {
    flexDirection: "row",
    marginBottom: 20,
    marginTop: 10,
    justifyContent: "space-between"
  },
  btn: {
    width: "38%",
    marginRight: 10
  }
});
