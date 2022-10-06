import './App.css';
import { ThemeContext } from "./context/theme.context";
import { useContext } from "react";    
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/HomePage";
import Profile from "./pages/Profile"
import RoomListPage from "./pages/RoomListPage";
import RoomDetailsPage from "./pages/RoomDetailsPage";
import RoomEditPage from "./pages/RoomEditPage";
import ItemListPage from "./pages/ItemListPage";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import ItemEditPage from "./pages/ItemEditPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

function App() {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={`App ${theme}`}>

    <Navbar />

    <Routes>
      <Route exact path="/" element={ <Homepage /> } />
      <Route exact path="/users/profile" element={ <Profile /> } />
      <Route exact path="/signup" element={ <IsAnon><SignupPage /></IsAnon> } />
      <Route exact path="/login" element={ <IsAnon><LoginPage /></IsAnon> } />
      <Route exact path="/rooms" element={ <RoomListPage /> } />
      <Route exact path="/rooms/:roomId" element={ <RoomDetailsPage /> } />
      <Route exact path="/rooms/edit/:roomId" element={ <IsPrivate><RoomEditPage /></IsPrivate>  } />
      <Route exact path="/items" element={ <ItemListPage /> } />
      <Route exact path="/items/:itemId" element={ <ItemDetailsPage /> } />
      <Route exact path="/items/edit/:itemId" element={ <IsPrivate><ItemEditPage /></IsPrivate>  } />
    </Routes>

    </div>
  );
}

export default App;
