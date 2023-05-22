import LoginPage from "./components/LoginPage";
import{Switch , Route} from 'react-router-dom';
import AuthContextProvider  from "./context/AuthContextProvider";
import Chats from './components/Chats';
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
     <Switch>
     <Route path="/Chats" compnent={Chats} /> 
     <Route path="/" component={LoginPage} />
     
      
     </Switch>
     </AuthContextProvider>
    </div>
  );
}

export default App;
