import React from 'react';
import { Alert, Button, View } from 'react-native';
import FlashMessage, { showMessage } from 'react-native-flash-message';

const App = () => {
  Alert.alert('rodrigo', `TEST`);

  return (
    <View>
      <FlashMessage position="top" />
      <Button
        title="Show alert"
        onPress={() => {
          showMessage({
            message: 'Simple message',
            type: 'info',
          });
        }}
      />
    </View>
  );
};

export default App;
