import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  textInput: {
    width: '70%',
    borderWidth: 1,
    borderColor: '#777',
    marginRight: 10,
    padding: 5,
    borderRadius: 5,
  },
  button: {
    width: '30%',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Add your app goals" />
        <Button title="Add goal" />
      </View>
      <View>
        <Text>New goals here!</Text>
      </View>
    </View>
  );
}
