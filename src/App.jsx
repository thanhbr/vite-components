import './App.css'
import {GlobalStore} from "./provider/GlobalStore";
import LayoutWrapper from "./LayoutWrapper";

function App() {

  return (
    <GlobalStore>
      <LayoutWrapper />
    </GlobalStore>
  )
}

export default App
