import Badge from "./components/ui/Badge";
import Button from "./components/ui/Button";

function App() {
  return (
    <>
      <Badge dir="left" icon={<div>hi</div>}>
        Hi
      </Badge>
      <Badge dir="right" icon={<div>hi</div>} rounded>
        Hi
      </Badge>
      <Badge>Hi</Badge>

      <Badge
        type="chip"
        onToggle={() => {
          console.log("hi");
        }}>
        Nice
      </Badge>

      <Button>
        <Badge type="indicator">10</Badge>
        Notification
      </Button>
    </>
  );
}

export default App;
