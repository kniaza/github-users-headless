import { useState } from 'react';

import { BASE_PATH } from '@/utils/constants';

const useSearchUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const searchUserByName = async (query) => {
    try {
      setIsLoading(true);
      const queryString = 'q=' + encodeURIComponent(query);
      const res = await fetch(`${BASE_PATH}/search/users?${queryString}`)
        .then((data) => data.json())
        .then((data) => data.items);

      if (Array.isArray(res)) {
        setUsers(res);
      }

      return res;
    } catch (error) {
      console.error(error);
      clearResults();

      return [];
    } finally {
      setIsLoading(false);
    }
  };

  const clearResults = () => {
    setUsers([]);
  };

  return { isLoading, users, searchUserByName, clearResults };
};

export default useSearchUsers;
