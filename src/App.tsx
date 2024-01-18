import MainLayout from "./components/layout/MainLayout";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";

function App() {
  return (
    <Container>
      <div className="h-screen w-full flex justify-center items-center">
        <h1>This is a h1 tag</h1>
        <button className="px-3 py-2 bg-purple-400 rounded-md ">
          This is a button
        </button>
        <button className="btn btn-primary">This is a button</button>
        <button className="btn btn-danger">This is a button</button>
        <Button outline={true} className="bg-green-500" />
      </div>
    </Container>
  );
}

export default App;
