import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import Layout from './components/layout/Layout'
import {createTheme, ThemeProvider} from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

const theme =createTheme({
   palette:{
     primary:{
       main: grey[200]
     },
     secondary:{
       main:grey[800]
     }
   },
   typography:{
     fontFamily:"Quicksand",
     fontWeightLight:400,
     fontWeightRegular:500,
     fontWeightMedium:600,
     fontWeightBold:700
   }
})
function App() {
  return (
    
      <Router>
        <ThemeProvider theme={theme}>
        <Layout>
        <Switch>
            <Route path="/" exact>
                <Notes/>
            </Route>
            <Route path="/create">
                <Create/>
            </Route>
        </Switch>
        </Layout>
        </ThemeProvider>
      </Router>
    
  )
}

export default App
