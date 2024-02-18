import Drawer from "./components/ui/Drawer";

function App() {
  return (
    <>
      <Drawer.Button target="drawer-main">HI</Drawer.Button>
      {/* <Modal></Modal> */}
      <Drawer
        name="drawer-main"
        dir="down"
        size={{ width: "400px", height: "300px" }}></Drawer>
    </>
  );
}

export default App;
