import { Card } from "./components/card";
import { Mainlayout } from "./layout/main_layout/main-layout";

function App() {

  return (
    <>
    <Mainlayout>
    <Card name="nosirbekk" age={20}/>
    </Mainlayout>
    </>
  )
}

export default App
