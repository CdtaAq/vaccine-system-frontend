import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Switch>
        <Route path="/login" component={() => <Login setUser={setUser} />} />
        <ProtectedRoute
          path="/dashboard"
          component={Dashboard}
          user={user}
          role="Admin"
        />
        {/* Add other routes */}
      </Switch>
    </Router>
  );
}
