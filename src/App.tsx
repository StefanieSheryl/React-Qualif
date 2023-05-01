import './App.css';
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider, 
  gql 
} from '@apollo/client';
import StartPage from './components/pages/StartPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/pages/Search';
import Details from './components/pages/Details';
import Home from './components/pages/Home';
import Favourite from './components/pages/Favourite';
import { useState } from 'react';
import { THEME, ThemeContext } from './components/lib/context/ThemeContext';
import { useContext } from "react";


const client = new ApolloClient({
  uri: "http://127.0.0.1:8080/query",
  cache: new InMemoryCache(),
});

function App() {
  let [currTheme, setCurrTheme] = useState(THEME.light);

  let setTheme = () : void =>{
    if(currTheme === THEME.light) setCurrTheme(THEME.dark);
    else setCurrTheme(THEME.light);
  }
  //console.log(currTheme)

  return (
    <ApolloProvider client={client}>
      <ThemeContext.Provider value={currTheme}>
        <div className={`flex w-full pl-7 py-2 ${currTheme.background6}`}> {currTheme === THEME.light? (
          <button onClick={setTheme}>🌑</button>) :  (<button onClick={setTheme}>☀️</button>
        )}</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage/>}></Route>
          <Route path="/:artistName" element={<Details/>}></Route>
          <Route path="/search" element={<Search/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/fav" element={<Favourite/>}></Route>
        </Routes>
      </BrowserRouter>
      </ThemeContext.Provider>
    </ApolloProvider>
  );
}

export default App;
