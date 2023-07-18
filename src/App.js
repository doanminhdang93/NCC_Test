import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
  return (
    <div>
      <div className="container">
        <Sidebar></Sidebar>
        <Content></Content>
      </div>
    </div>
  );
}

export default App;
