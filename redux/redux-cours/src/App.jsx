import { Provider as ReduxProvider } from "react-redux";
import store from "./store";
import Input from "./components/Inputs";
import Quiz from "./components/Quiz";
import Progress from "./components/Progress";

export default function App() {
    return (
        <ReduxProvider store={store}>
            <div className="flex flex-col lg:flex-row w-full h-screen">
                <Quiz />
                <div className="divider lg:divider-horizontal"></div>
                <Progress />
            </div>
        </ReduxProvider>
    );
}
