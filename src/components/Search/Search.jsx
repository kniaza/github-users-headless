import { useEffect, useState } from 'react';
import { useDebounce, useSearchUsers } from '@/hooks';

const Search = () => {
  const [showResult, setShowResult] = useState(false);

  const { users, searchUserByName, clearResults } = useSearchUsers();

  const handleSearchUsers = useDebounce(
    (value) => searchUserByName(value),
    500
  );

  const handleChange = async ({ target }) => {
    if (!target.value) {
      clearResults();
      return;
    }

    handleSearchUsers(target.value);
  };

  const showResultBlock = () => {
    if (users.length) {
      setShowResult(true);
    }
  };

  useEffect(() => {
    showResultBlock();
  }, [users]);

  return (
    <section className="search">
      <input
        type="text"
        placeholder="search..."
        onChange={handleChange}
        onFocus={() => {
          showResultBlock();
        }}
        onBlur={() => {
          setTimeout(() => {
            setShowResult(false);
          }, 200);
        }}
      />

      {showResult && (
        <div className="search__results">
          {users?.map((user) => (
            <a
              key={user.id}
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              <img src={user.avatar_url} alt={user.login} />
              <span>{user.login}</span>
            </a>
          ))}
        </div>
      )}
    </section>
  );
};

export default Search;
