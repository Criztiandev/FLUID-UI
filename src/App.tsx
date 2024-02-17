import Accordion from "./components/ui/Accordion";

function App() {
  return (
    <>
      <Accordion>
        <Accordion.Item title="What is the chismis">
          <Accordion>
            <Accordion.Item title="What is the chismis">
              This is the collest accordion
            </Accordion.Item>
            <Accordion.Item title="What is the chismis">
              This is the collest accordion
            </Accordion.Item>
          </Accordion>
        </Accordion.Item>
        <Accordion.Item title="What is the chismis">
          This is the collest accordion
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default App;
