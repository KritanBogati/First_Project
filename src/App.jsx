import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditForm from './EditForm';
import Details from './Details';
import Formpage from './Formpage';
import Aboutuspage from './Aboutuspage';
import Contactuspage from './contactuspage';

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/Formpage" element={<Formpage />} />
            <Route path="/Aboutuspage" element={<Aboutuspage />} />
            <Route path="/Contactuspage" element={<Contactuspage />} />
            <Route path="/edit/:id" element={<EditForm/>} />
            <Route path="/details/:id" element={<Details/>} />
          </Routes>
          <Footer />
        </Router>
      </>
    </div>
  );
}

export default App;
