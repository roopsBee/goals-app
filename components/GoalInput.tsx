import { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    marginHorizontal: 10,
  },
  textInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#777',
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    width: '30%',
    marginHorizontal: 10,
  },
});

type GoalInputType = {
  pressHandler: (textInput: string) => void;
  isModalOpen: boolean;
};

const GoalInput = ({ pressHandler, isModalOpen }: GoalInputType) => {
  const [textInput, setTextInput] = useState('');

  const textInputHandler = (text: string) => {
    setTextInput(text);
  };

  return (
    <Modal visible={isModalOpen} animationType={'slide'}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={textInputHandler}
          style={styles.textInput}
          placeholder="Add your app goals"
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button
              title="Add goal"
              onPress={() => {
                pressHandler(textInput);
              }}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
