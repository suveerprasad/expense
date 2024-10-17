import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { Auth } from './pages/auth/index';
import { ExpenseTracker } from './pages/expense-tracker/index';


function App() {
  return (
    <center>
      <div className='App'>
        <Router>
          <Routes>
            <Route path='/' exact element ={<Auth/>}/>
            <Route path='/expense-tracker' element={<ExpenseTracker/>}/>
          </Routes>
        </Router>
      </div>
    </center>
  );
  
}

export default App;