import logo from './logo.svg';
import './App.css';
import  Greet from './greet/greet';
import Greet2 from './greet/greet2'
import NoJsx from './greet/nojsx';

function App() {
  return (
    <div className="App">
      {/* < Greet />
      <h1> Y a quoi</h1>
      < Greet2 /> */}
      <NoJsx name="Monsieur">Un enfant quelconque </NoJsx >
    </div>
  );
}

export default App;
