import { ThemeProvider,createTheme } from '@mui/material'
import { defaultTheme } from './assets/defaultTheme'
import './App.css'
import Connexion from './components/Connexion'
import CreationCompte from './components/CreationCompte'
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Pokedex from './components/Pokedex'
import Recherche from './components/Recherche'
import InformationPokemon from './components/InformationPokemon'

function App() {

  const theme = createTheme(defaultTheme)
  
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={
          <ThemeProvider theme={theme} >
            <Connexion />
          </ThemeProvider>
          }
      ></Route>

          <Route path="/CreationCompte" element={
            <ThemeProvider theme={theme} >
              <CreationCompte/>
            </ThemeProvider>
          }></Route>

        <Route path="/Pokedex/:id" element = {
            <ThemeProvider theme={theme} >
            <Pokedex/>
          </ThemeProvider>          
        }></Route>

        <Route path="/Pokedex/:id/Recherche" element = {
            <ThemeProvider theme={theme} >
            <Recherche/>
          </ThemeProvider>          
        }></Route>

        <Route path="/Pokedex/:id/Recherche/Pokemon/:pokemonId" element = {
            <ThemeProvider theme={theme} >
            <InformationPokemon/>
          </ThemeProvider>          
        }></Route>


        </Routes>
    </Router>
    </>
  )
}

export default App
