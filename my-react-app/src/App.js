import './App.css'; // Ensure to import the CSS file for styling
import HomePage from './pages/HomePage';
import EmployeePage from './pages/EmployeePage';

function App() {
  return (
    <div className="app-container">
      <HomePage />
      <EmployeePage />
    </div>
  );
}

export default App;
