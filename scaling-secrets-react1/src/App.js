import './styles/App.css';

import Header from './components/Header/Header';
import Bodier1 from './components/Bodier1/Bodier1';
import Bodier2 from './components/Bodier2/Bodier2';
import Bodier3 from './components/Bodier3/Bodier3';
import Bodier4 from './components/Bodier4/Bodier4';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Bodier1 />
      <Bodier2 />
      <Bodier3 />
      <Bodier4 />
    </div>
  );
}