import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = (props) => {
  const { item, onDeleteItem } = props;

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={() => onDeleteItem(item.key)}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "purple",
  },
  goalText: {
    padding: 8,
    color: "white",
  },
});

export default GoalItem;
