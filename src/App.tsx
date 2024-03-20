import { Editor } from "@monaco-editor/react";
import "./App.css";

// 
function App() {
    const value = "select * from user";

    return (
        <div className="App">
            <Editor width={800} height={800} value={value} language="mysql" theme="vs-dark" />
        </div>
    );
}

export default App;
