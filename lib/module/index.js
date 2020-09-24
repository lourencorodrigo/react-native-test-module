import React from 'react';
import { Alert, Button, View } from 'react-native';
import FlashMessage, { showMessage } from 'react-native-flash-message';

const App = () => {
  Alert.alert('rodrigo', "TEST");
  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(FlashMessage, {
    position: "top"
  }), /*#__PURE__*/React.createElement(Button, {
    title: "Show alert",
    onPress: () => {
      showMessage({
        message: 'Simple message',
        type: 'info'
      });
    }
  }));
};

export default App;
//# sourceMappingURL=index.js.map