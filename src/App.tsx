import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Foores";
import { Layout } from "./components/Layout/Layout";
import { SignIn } from "./pages/Auth/SignIn";
import { SignUp } from "./pages/Auth/SignUp";
import { ErrorBoundary } from "./components/Error/ErrorBoundary";
import { ItemCard } from "./pages/ItemCard/ItemCard";
import { Favorites } from "./pages/Favorites/Favorites";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/characters/:name" element={<ItemCard />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </ErrorBoundary>
      </Layout>
      <Footer />
    </BrowserRouter>
  );
};
