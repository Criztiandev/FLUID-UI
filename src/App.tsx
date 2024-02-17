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
      <Badge as="link">Hi</Badge>

      <Button>
        <Badge as="child">1</Badge>
        Notification
      </Button>
    </>
  );
}

export default App;
