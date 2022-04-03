import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter"


import store from "./store"
import { Provider } from "react-redux"

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
