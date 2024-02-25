import Drawer from "./components/ui/Drawer";

function App() {
  return (
    <div className="">
      <Drawer.Button target="drawer-btn" className="m-4">
        Drawer
      </Drawer.Button>
      <Drawer name="drawer-btn" dir="left" width="400px" height="300px">
        Test
      </Drawer>
    </div>
  );
}

export default App;
