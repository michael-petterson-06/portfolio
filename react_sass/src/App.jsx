import MainContent from './components/Maincontent';
import SideBar from './components/Sidebar';
import './styles/components/app.sass';

function App() {

  return (
    <div id="portfolio">
        <h1>Michael Petterson</h1>
        <SideBar/>
        <MainContent/>
    </div>
  )
}

export default App
