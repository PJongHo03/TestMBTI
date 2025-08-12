import "./App.css";
import Router from "./router";
import MbtiProvider from "./store/mbti-context";

function App() {
  return (
    <MbtiProvider>
      <Router />
    </MbtiProvider>
  );
}

export default App;
