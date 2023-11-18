import { Search } from '@/components/Search';

const Header = () => {
  return (
    <header className="header">
      <div className="container header__content">
        <h1>
          <span className="icon">🐙</span> Github Users
        </h1>
        <Search />
      </div>
    </header>
  );
};

export default Header;
