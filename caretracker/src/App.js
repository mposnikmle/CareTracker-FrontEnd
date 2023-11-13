import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header-section/Header';
import NavigationBar from './components/navigation-section/NavigationBar'
import StaffProfile from './components/staff-profile-section/StaffProfile';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavigationBar/>
      <StaffProfile/>
    </div>
  );
}

export default App;
