import Button from "./components/ui/Button";
import IconButton from "./components/ui/IconButton";

function App() {
  return (
    <>
      <Button dir="left" icon={<div>hi</div>} disabled>
        Button
      </Button>
      <Button dir="left" icon={<div>hi</div>} rounded>
        Button
      </Button>
      <Button as="outline" dir="right" icon={<div>Hi</div>}>
        Button
      </Button>
      <Button as="ghost" dir="top" icon={<div>Hi</div>}>
        Button
      </Button>
      <Button as="link" dir="bottom" icon={<div>Hi</div>}>
        Button
      </Button>

      <IconButton>Hi</IconButton>
      <IconButton rounded>Hi</IconButton>
    </>
  );
}

export default App;
