interface userState {
  uid: string;
  email: string | null;
}

export const savingUserData = (user: userState) => {
  localStorage.setItem(
    "user",
    JSON.stringify({
      uid: user.uid,
      email: user.email
    })
  );
};

export const clearingUserData = () => {
  localStorage.removeItem("user");
};
