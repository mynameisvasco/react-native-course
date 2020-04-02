import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Block, Button } from "galio-framework";

const NumberContainer = props => {
  return (
    <View style={styles.screen}>
      <Text h5 style={styles.text}>
        Computer Guessed
      </Text>
      <Block card style={styles.card}>
        <Text h4>{props.computerGuess}</Text>
        <View style={styles.btnContainer}>
          <Button onPress={props.onLower} color="warning" round style={styles.btn}>
            Lower
          </Button>
          <Button onPress={props.onHigher} color="primary" round style={styles.btn}>
            Higher
          </Button>
        </View>
      </Block>
    </View>
  );
};

export default NumberContainer;

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
