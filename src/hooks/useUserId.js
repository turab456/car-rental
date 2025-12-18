import { useEffect, useState } from "react";

export const useUserId = () => {
  const [userId, setUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const userDataString = localStorage.getItem("userData");
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        setUserId(userData.id || userData._id || userData.userId);
      }
    } catch (error) {
      console.error("Error parsing userData from localStorage:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { userId, isLoading };
};