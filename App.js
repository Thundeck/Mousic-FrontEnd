import React from 'react';
import { Main } from './src/components/main/Main';
import { NativeRouter as Router} from 'react-router-native';
import { Provider } from 'react-redux';
import store from './src/Redux/store'


export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Main />
      </Router>
    </Provider>
  );
}

//<Text></Text> se utiliza para mosrar texto, ningun otro componente puede hacerlo
//<View></View> se utiliza para renderizar componentes tal como un div por default tiene flexbox
