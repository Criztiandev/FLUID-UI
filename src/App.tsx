import Dropdown from "./components/ui/Dropdown";

function App() {
  return (
    <div className="p-12">
      <Dropdown label="Select More" dir="right" flip>
        <Dropdown.Item>
          <div className="w-[24px] h-[24px] border">T</div>
          <span>Malaking Icon</span>
        </Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item>Multi</Dropdown.Item>
        <Dropdown.Item>hi</Dropdown.Item>
        <Dropdown.Item>hi</Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item>hi</Dropdown.Item>
      </Dropdown>
    </div>
  );
}

export default App;
