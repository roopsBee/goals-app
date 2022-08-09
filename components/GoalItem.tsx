import { StyleSheet, Text, View } from 'react-native';
import { GoalItemType } from '../App';

const styles = StyleSheet.create({
  goal: {
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 20,
    borderColor: '#999',
    borderWidth: 1,
    backgroundColor: '#2035ab',
  },
  goalText: {
    color: 'white',
  },
});

function GoalItem({ item }: { item: GoalItemType }) {
  return (
    <View style={styles.goal}>
      <Text style={styles.goalText}>{item.name}</Text>
    </View>
  );
}

export default GoalItem;
