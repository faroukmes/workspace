import ButtonThemeSwitch from "./components/ButtonThemeSwitch";
import Navbar from "./components/navbar";
import useTheme from "./components/useTheme";
import ThemeProvider from "./provider/ThemeProvider";

function App() {
    return (
        <ThemeProvider>
            <Navbar />
            <p>hello</p>
            <ButtonThemeSwitch />
        </ThemeProvider>
    );
}

export default App;
