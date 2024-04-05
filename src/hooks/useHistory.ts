import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc
} from "firebase/firestore";
import { useAppDispatch } from "./redux";
import { db } from "../firebase";
import { setHistory } from "../store/slice/historySlice";

export const useHistory = () => {
  const dispatch = useAppDispatch();

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
    readHistoryRequests,
    addHistoryRequests,
    deleteHistoryRequests
  };
};
