import React, { useState } from "react";
import { StyleSheet, View, Modal } from "react-native";
import { Button, Input } from "galio-framework";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal)
    setEnteredGoal("")
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Input
          onChangeText={goalInputHandler}
          style={styles.input}
          placeholder="What is your goal today?"
          value={enteredGoal}
        />
        <View style={styles.actions}>
          <Button
            round
            size="small"
            onPress={addGoalHandler}
            style={styles.btn}
          >
            Add
          </Button>
          <Button
            onPress={props.onCancel}
            round
            size="small"
            style={styles.btn}
            color="error"
          >
            Cancel
          </Button>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  input: {
    width: "80%"
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    width: "38%",
    marginHorizontal: 5,
    marginTop: 10
  }
});

export default GoalInput;
