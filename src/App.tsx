import Button from "./components/ui/Button";
import DisplayBlock from "./containers/DisplayBlock";

function App() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <DisplayBlock title="Size">
        <Button size="sm">Small</Button>
        <Button>Base</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
        <Button disabled>Disabled</Button>
      </DisplayBlock>

      <DisplayBlock title="Variants">
        <Button>Base</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </DisplayBlock>
      <DisplayBlock title="Element">
        <Button>Base</Button>
        <Button as="icon">T</Button>
        <Button as="link">Ghost</Button>
      </DisplayBlock>
    </div>
  );
}

export default App;
