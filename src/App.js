import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import List from './components/List';



function App() {

  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer gretting={'Libreria NB!!'}></ItemListContainer>

    </div>
    
);


}

export default App;
