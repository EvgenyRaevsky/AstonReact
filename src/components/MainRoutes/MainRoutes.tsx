import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";
import { Loader } from "../Loader/Loader";
import { DefaultRoutes } from "./DefaultRoutes";

const Home = lazy(() =>
  import("../../pages/Home/Home").then(module => ({ default: module.Home }))
);
const SignIn = lazy(() =>
  import("../../pages/Auth/SignIn").then(module => ({ default: module.SignIn }))
);
const SignUp = lazy(() =>
  import("../../pages/Auth/SignUp").then(module => ({ default: module.SignUp }))
);
const Favorites = lazy(() =>
  import("../../pages/Favorites/Favorites").then(module => ({
    default: module.Favorites
  }))
);
const History = lazy(() =>
  import("../../pages/History/History").then(module => ({
    default: module.History
  }))
);
const ItemCard = lazy(() =>
  import("../../pages/ItemCard/ItemCard").then(module => ({
    default: module.ItemCard
  }))
);
const Search = lazy(() =>
  import("../../pages/Search/Search").then(module => ({
    default: module.Search
  }))
);

export const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/signin"
        element={
          <Suspense fallback={<Loader />}>
            <SignIn />
          </Suspense>
        }
      />
      <Route
        path="/signup"
        element={
          <Suspense fallback={<Loader />}>
            <SignUp />
          </Suspense>
        }
      />
      <Route
        path="/:name"
        element={
          <Suspense fallback={<Loader />}>
            <ItemCard />
          </Suspense>
        }
      />
      <Route
        path="/favorites"
        element={
          <Suspense fallback={<Loader />}>
            <DefaultRoutes>
              <Favorites />
            </DefaultRoutes>
          </Suspense>
        }
      />
      <Route
        path="/history"
        element={
          <Suspense fallback={<Loader />}>
            <DefaultRoutes>
              <History />
            </DefaultRoutes>
          </Suspense>
        }
      />
      <Route
        path="/search"
        element={
          <Suspense fallback={<Loader />}>
            <Search />
          </Suspense>
        }
      />
    </Routes>
  );
};
