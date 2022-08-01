import './styles/App.css';

import Header from './components/Header/Header';
import Bodier1 from './components/Bodier1/Bodier1';
import Bodier2 from './components/Bodier2/Bodier2';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Bodier1 />
      <Bodier2 />
    </div>
  );
}