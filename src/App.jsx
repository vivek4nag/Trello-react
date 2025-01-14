import Header from "./components/Header"
import Main from "./components/Main"
import SideBar from "./components/SideBar"

function App() {

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex">
        <SideBar />
        <Main />
      </div>
    </div>
  )
}

export default App
