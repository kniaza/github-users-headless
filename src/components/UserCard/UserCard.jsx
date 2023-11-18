const UserCard = (props) => {
  const { user } = props;

  if (!user) return null;
  return (
    <a
      href={user.html_url}
      target="_blank"
      rel="noreferrer"
      className="userCard"
    >
      <img src={user.avatar_url} alt={user.login} />
      <p>
        <span>{user.login}</span>
      </p>
    </a>
  );
};

export default UserCard;
