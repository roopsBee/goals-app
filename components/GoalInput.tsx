import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
  },
  textInput: {
    width: '70%',
    borderWidth: 1,
    borderColor: '#777',
    marginRight: 10,
    padding: 5,
    paddingLeft: 15,
    borderRadius: 5,
  },
});

type GoalInputType = {
  pressHandler: (textInput: string) => void;
};

const GoalInput = ({ pressHandler }: GoalInputType) => {
  const [textInput, setTextInput] = useState('');

  const textInputHandler = (text: string) => {
    setTextInput(text);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={textInputHandler}
        style={styles.textInput}
        placeholder="Add your app goals"
      />
      <Button
        title="Add goal"
        onPress={() => {
          pressHandler(textInput);
        }}
      />
    </View>
  );
};

export default GoalInput;
