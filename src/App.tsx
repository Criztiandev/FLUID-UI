import Badge from "./components/ui/Badge";
import Button from "./components/ui/Button";
import Chips from "./components/ui/Chips";

function App() {
  return (
    <div className="">
      <Button className="m-4 ">
        <span>T</span>
        <Badge as="indicator" className="bg-red-500">
          20
        </Badge>
      </Button>

      <Chips>Close</Chips>
    </div>
  );
}

export default App;
