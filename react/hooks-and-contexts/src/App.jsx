import ButtonThemeSwitch from "./components/ButtonThemeSwitch";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/navbar";
import useTheme from "./hooks/useTheme";
import ThemeProvider from "./provider/ThemeProvider";

function App() {
    return (
        <ThemeProvider>
            <UserProvider>
                <Navbar />
                {/* <ButtonThemeSwitch /> */}
                <LoginForm />
            </UserProvider>
        </ThemeProvider>
    );
}

export default App;
