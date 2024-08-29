import Header from "./components/title";
import MainContent from "./components/MainContent.jsx";
import Footer from "./components/footer";
import "./styles/App.css";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

// Wrapper component to use URL parameters and pass them to MainContent
function MainContentWrapper() {
  const { title } = useParams(); // Extracts the 'title' parameter from the URL
  return <MainContent title={title} />; // Passes the 'title' parameter to MainContent component
}

function App() {


  return (
    <>
      {/* Header component */}
      <Header />
      
      <Router>
        <div>
          {/* Navigation component */}
          <Nav />
          <Routes>
            {/* Route for SCP pages, using MainContentWrapper to handle URL parameters */}
            <Route path="/scp/:title" element={<MainContentWrapper />} />
          </Routes>
        </div>
      </Router>
      {/* Footer component */}
      <Footer />
    </>
  );
}

export default App;
