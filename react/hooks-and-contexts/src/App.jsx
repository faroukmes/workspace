import LoginForm from "./components/LoginForm";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import ThemeProvider from "./provider/ThemeProvider";
import UserProvider from "./provider/UserProvider";
import { BrowserRouter, Route, Routes } from "react-router";
function App() {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <UserProvider>
                    <Routes>
                        <Route path="/" Component={Home} />
                        <Route path="/sign-in" Component={SignIn} />
                    </Routes>
                </UserProvider>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
