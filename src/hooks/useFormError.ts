import { useState } from "react";

export const useFormError = () => {
  const [error, setError] = useState(false);
  return { error, setError };
};
