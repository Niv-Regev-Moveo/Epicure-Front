import "./App.css";
import { StyledGlobalContainer, StyledHeaderContainer } from "./globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Header from "./components/Sections/Header";
import Footer from "./components/Sections/Footer";
import RestaurantsPage from "./Pages/RestaurantsPage";
import ChefsPage from "./Pages/ChefsPage/ChefsPage";

function App() {
  return (
    <BrowserRouter>
      <StyledGlobalContainer>
        <StyledHeaderContainer>
          <Header />
        </StyledHeaderContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Restaurants" element={<RestaurantsPage />} />
          <Route path="/Chefs" element={<ChefsPage />} />
          <Route path="/Contact-Us" />
        </Routes>
        <Footer />
      </StyledGlobalContainer>
    </BrowserRouter>
  );
}

export default App;
