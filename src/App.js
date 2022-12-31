import './App.css';
import Card from './Components/Card';

function App() {
  return (
    <div className="body">
      <div className="wave">
        <div className="text">
          <h1>Simple, traffic based pricing</h1>
          <p>Sign-up for our 30 day trial. No credit card required.</p>
        </div>
        <Card/>
      </div>
    </div>
  );
}

export default App;
