import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/itemListContainer/itemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greating={'Hola mundo'}/>
    </div>
  );
}

export default App;
