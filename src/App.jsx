import ContextWrappers from "./contexts/ContextWrappers";
import Frame from "./fragments/Frame";

function App() {
    return (
        <ContextWrappers>
            <Frame />
        </ContextWrappers>
    );
}

export default App;
