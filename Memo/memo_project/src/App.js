import { Header } from './Components/Header';
import { MainContainer } from './Components/MyComponent';
import { Footer } from './Components/Footer';
import { ColorProvider } from './Components/ColorContext';
import '../src/Css/MyComponent.css';

function App() {

  return (
    <div className="App">
      <ColorProvider>
        <Header />
        <MainContainer />
        <Footer />
      </ColorProvider>
    </div>
  );
}

export default App;
