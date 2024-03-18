import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Foores";
import { Layout } from "./components/Layout/Layout";
import { SignIn } from "./pages/Auth/SignIn";
import { SignUp } from "./pages/Auth/SignUp";
import { ErrorBoundary } from "./components/Error/ErrorBoundary";

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
          </Routes>
        </ErrorBoundary>
      </Layout>
      <Footer />
    </BrowserRouter>
  );
};
