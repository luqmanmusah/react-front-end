import { React } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import Message from './message';

export const App = () => (
  <Router>

    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/randomMessage">Random Message</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/randomMessage" element={<Message msg="hi" />} />
      </Routes>
    </div>
  </Router>

);

function Home() {
  return <h2>Home</h2>;
}
export default App;
