import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <>

      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <Outlet />
          <ThemeToggle />
      </div>
    </>
  );
}

export default App;
