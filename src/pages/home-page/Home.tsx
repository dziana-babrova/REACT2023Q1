import { CardsList } from 'components/cards/CardsList';
import { Search } from 'components/search/Search';

const HomePage = () => {
  return (
    <main className="wrapper">
      <Search submitValue="Search"></Search>
      <CardsList></CardsList>
    </main>
  );
};

export { HomePage };
