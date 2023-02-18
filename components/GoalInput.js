import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const GoalInput = (props) => {
  const { visible, onAddGoal, closeModal } = props;

  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => setEnteredGoalText(enteredText);

  const closeModalHandler = () => {
    setEnteredGoalText("");
    closeModal();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal-icon.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal..."
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              color="#5e0acc"
              onPress={() => {
                onAddGoal(enteredGoalText);
                setEnteredGoalText("");
              }}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color="#f31282"
              onPress={closeModalHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 116,
    height: 108,
    margin: 32,
  },
  textInput: {
    color: "white",
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "90%",
    height: 35,
  },
  buttonContainer: {
    flexDirection: "row",
    margin: 16,
  },
  button: {
    margin: 10,
    width: 100,
  },
});

export default GoalInput;
