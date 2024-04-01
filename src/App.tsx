import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Layout } from "./components/Layout/Layout";
import { ErrorBoundary } from "./components/Error/ErrorBoundary";
import { MainRoutes } from "./components/MainRoutes/MainRoutes";
import { Toaster } from "react-hot-toast";

export const App = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Header />
        <Layout>
          <MainRoutes />
          <Toaster
            position="top-right"
            containerStyle={{
              top: 90
            }}
          />
        </Layout>
        <Footer />
      </ErrorBoundary>
    </BrowserRouter>
  );
};
