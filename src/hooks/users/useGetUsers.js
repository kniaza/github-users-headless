import { useEffect, useState } from 'react';

import { BASE_PATH } from '@/utils/constants';

const useGetUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_PATH}/users`).then((data) => data.json());

      if (Array.isArray(res)) {
        setUsers(res);
      }

      return res;
    } catch (error) {
      console.error(error);

      return [];
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { isLoading, users, fetchUsers };
};

export default useGetUsers;
