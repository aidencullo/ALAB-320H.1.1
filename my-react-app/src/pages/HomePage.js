import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import EmployeeList from '../components/EmployeeList';

export default function HomePage() {
  return (
    <div>
      <Header />
      <SearchBar />
      <EmployeeList />
    </div>
  );
}
