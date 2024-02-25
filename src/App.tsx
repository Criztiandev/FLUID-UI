import Alert from "./components/ui/Alert";

function App() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {/* <DisplayBlock title="Size"></DisplayBlock> */}
      <Alert>HI</Alert>
      <Alert variant="warning" border>
        HI
      </Alert>
      <Alert variant="success">HI</Alert>
      <Alert variant="danger">HI</Alert>
      <Alert variant="info">HI</Alert>
    </div>
  );
}

export default App;
