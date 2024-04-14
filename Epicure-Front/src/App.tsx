import "./App.css";
import { StyledGlobalContainer, StyledHeaderContainer } from "./globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Header from "./components/Sections/Header";
import Footer from "./components/Sections/Footer";
function App() {
  return (
    <BrowserRouter>
      <StyledGlobalContainer>
        <StyledHeaderContainer>
          <Header />
        </StyledHeaderContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Restaurant" />
          <Route path="/Contact-Us" />
        </Routes>
        <Footer />
      </StyledGlobalContainer>
    </BrowserRouter>
  );
}

export default App;
