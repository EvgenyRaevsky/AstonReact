import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc
} from "firebase/firestore";
import { useAppDispatch } from "./redux";
import { db } from "../firebase";
import { setHistory, setSuggest } from "../store/slice/historySlice";

export const useHistory = () => {
  const dispatch = useAppDispatch();

  const readHistoryRequestsSagest = async (value: string, email: string) => {
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
      dispatch(setSuggest(res));
    }
  };

  const readHistoryRequests = async (email: string) => {
    const data = await getDoc(doc(db, "users", email));
    if (data.exists() && data.data() && data.data()["history"]) {
      dispatch(setHistory(data.data()["history"]));
    }
  };

  const addHistoryRequests = async (request: string, email: string) => {
    await updateDoc(doc(db, "users", email), {
      ["history"]: arrayUnion(request)
    });
    await readHistoryRequests(email);
  };

  const deleteHistoryRequests = async (request: string, email: string) => {
    await updateDoc(doc(db, "users", email), {
      ["history"]: arrayRemove(request)
    });
    await readHistoryRequests(email);
  };

  return {
    readHistoryRequestsSagest,
    readHistoryRequests,
    addHistoryRequests,
    deleteHistoryRequests
  };
};
