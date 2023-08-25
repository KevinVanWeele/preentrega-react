import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/itemListContainer/itemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greating={'Hola mundo'}/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
