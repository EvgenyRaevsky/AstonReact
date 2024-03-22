import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { clearUser, setUser } from "../store/slice/userSlice";
import { useAppDispatch } from "./redux";

const register = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      setDoc(doc(db, "users", email), {
        favorite: [],
        history: []
      });
      return user;
    })
    .catch(() => {
      return null;
    });
};

const login = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      return userCredential.user;
    })
    .catch(() => {
      return null;
    });
};

const logout = () =>
  signOut(auth).catch(() => {
    return null;
  });

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const signUpUser = async (email: string, password: string) => {
    const user = await register(email, password);
    if (user) {
      dispatch(setUser({ uid: user.uid, email: user.email }));
    }
    return user;
  };

  const signInUser = async (email: string, password: string) => {
    const user = await login(email, password);
    if (user) {
      dispatch(setUser({ uid: user.uid, email: user.email }));
    }
    return user;
  };

  const signOutUser = async () => {
    await logout();
    localStorage.removeItem("user");
    dispatch(clearUser());
  };

  return { signUpUser, signInUser, signOutUser };
};
