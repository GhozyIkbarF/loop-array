import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Header from './page/header/header';
import About from './page/about/about';
import Portofolio from './page/protofolio/portofolio';
function App() {
  return (
    <reactFragment>
      <BrowserRouter>
        <Navbar />
        {/* <Route path="/" exact component={<Header />} /> */}
        <Header />
        <About />
        <Portofolio />
      </BrowserRouter>
      
    </reactFragment>
  );
}

export default App;
