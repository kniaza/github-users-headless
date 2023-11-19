import { useGetUsers } from '@/hooks';
import { UserCard } from '@/components/UserCard';
import { Header } from '@/components/Header';

function App() {
  const { users } = useGetUsers();

  return (
    <div>
      <Header />

      <hr />

      <section className="container">
        <div className="user_lists">
          {users?.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
