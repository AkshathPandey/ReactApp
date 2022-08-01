import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
    <Navbar title="TextUtils1" about="aboutTextUtils"/>;
    <div className="container">
    <TextForm heading="Enter the Text"/>
    </div>
    </>
  );
}

export default App;
