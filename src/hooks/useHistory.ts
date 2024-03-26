import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc
} from "firebase/firestore";
import { useAppDispatch } from "./redux";
import { db } from "../firebase";
import { setHistory, setSagest } from "../store/slice/historySlice";

export const useHistory = () => {
  const dispatch = useAppDispatch();

  const getHistoryRequestsSagest = async (value: string, email: string) => {
    const data = await getDoc(doc(db, "users", email));
    if (data.exists() && data.data() && data.data()["history"]) {
      const resultRequests = data.data()["history"];
      const res = [...resultRequests]
        .reverse()
        .filter(
          el =>
            el.split("").slice(0, value.length).join("").toLowerCase() ===
            value.toLowerCase()
        )
        .slice(0, 5);
      dispatch(setSagest(res));
    }
  };

  const getHistoryRequests = async (email: string) => {
    const data = await getDoc(doc(db, "users", email));
    if (data.exists() && data.data() && data.data()["history"]) {
      dispatch(setHistory(data.data()["history"]));
    }
  };

  const addHistoryRequests = async (request: string, email: string) => {
    await updateDoc(doc(db, "users", email), {
      ["history"]: arrayUnion(request)
    });
    await getHistoryRequests(email);
  };

  const deleteHistoryRequests = async (request: string, email: string) => {
    await updateDoc(doc(db, "users", email), {
      ["history"]: arrayRemove(request)
    });
    await getHistoryRequests(email);
  };

  return {
    getHistoryRequestsSagest,
    getHistoryRequests,
    addHistoryRequests,
    deleteHistoryRequests
  };
};
