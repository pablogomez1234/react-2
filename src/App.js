import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CartWidget js from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';





function App() {

  return (
    <ThemeProvider theme={theme}>
    <NavBar/>
    <Buttom variant="contained" color="primary">
      botom
    </Buttom>
    <Buttom variant="contained" color="secondary">
      botom
    </Buttom>
    <Typography variant="h1" color="initial">

    lorem imsut
    </Typography> 
    </ThemeProvider>
);


}

export default App;
