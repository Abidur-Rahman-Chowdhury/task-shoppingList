import './App.css';
import ShopingListInput from './components/ShopingListInput/ShopingListInput';
import ShowShoppingList from './components/ShowList/ShowShoppingList';

function App() {
  return (
    <div className="App">
      <h1 className="App">My Shopping List</h1>
      <ShopingListInput />
      <ShowShoppingList />
    </div>
  );
}

export default App;
