import { useState } from "react";
import { StyleSheet, View, FlatList, Button, Image, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

const App = () => {
  const [goals, setGoals] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addGoalHandler = (enteredGoalText) => {
    setGoals((prevGoals) => [
      ...prevGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
    closeModal();
  };

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  const deleteGoalHandler = (goalID) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.key != goalID));
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#5e0acc" onPress={openModal} />
        <GoalInput
          visible={isModalOpen}
          onAddGoal={addGoalHandler}
          closeModal={closeModal}
        />
        <View style={styles.goalsContainer}>
          {goals.length > 0 && (
            <FlatList
              data={goals}
              renderItem={(itemData) => (
                <GoalItem
                  item={itemData.item}
                  onDeleteItem={deleteGoalHandler}
                />
              )}
            />
          )}
          {goals.length === 0 && (
            <Image
              source={require("./assets/images/nothing-found.png")}
              style={styles.image}
            />
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  goalsContainer: {
    borderTopColor: "#cccccc",
    borderTopWidth: 2,
    marginVertical: 20,
    flex: 5,
  },
  image: {
    alignSelf: "center",
    marginTop: 250,
    width: 100,
    height: 100,
  },
});

export default App;
