import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GoalItemType } from '../App';

const styles = StyleSheet.create({
  goal: {
    borderRadius: 5,
    marginBottom: 10,
    marginHorizontal: 20,
    borderColor: '#999',
    borderWidth: 1,
    backgroundColor: '#2035ab',
  },
  goalText: {
    color: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

function GoalItem({
  item,
  deleteGoalHandler,
}: {
  item: GoalItemType;
  deleteGoalHandler: (id: number) => void;
}) {
  return (
    <View style={styles.goal}>
      <Pressable
        android_ripple={{ color: '#10ab7a' }}
        onPress={() => {
          deleteGoalHandler(item.id);
        }}
      >
        <Text style={styles.goalText}>{item.name}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;
