import './App.css';
import { Provider } from 'react-redux';
import InBoxScreen from './components/inBoxScreen';
import store from './lib/store';

function App() {
  return (
    <Provider store={store}>
      <InBoxScreen />
    </Provider>
  );
}

export default App;
