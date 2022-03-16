import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store/store';
import UsersContainer from './components/UsersContainer'
function App() {
  return (
    <Provider store={store}>
     <UsersContainer/>
    </Provider>
  );
}


export default App;