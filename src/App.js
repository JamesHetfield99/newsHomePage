import './App.css';

import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Aside from "./components/Aside/Aside"
import BlogShowcase from './components/BlogShowcase/BlogShowcase';

function App() {
  return (
    <div className="App">
        <Header />
        <main>
          <Section />
          <Aside />
        </main>
        <BlogShowcase />
    </div>
  );
}

export default App;
