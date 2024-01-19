/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Navigators from './src/navigator';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <Navigators />
    </Provider>
  );
}

export default App;
