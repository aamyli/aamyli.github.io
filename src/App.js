import './App.css';
import withSplashScreen from "./components/splashscreen";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default withSplashScreen(App);
