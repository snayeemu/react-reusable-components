import Button from "./components/ui/Button";
import Container from "./components/ui/Container";

function App() {
  return (
    <Container>
      <div className="h-screen w-full flex justify-center items-center">
        <Button variant="outline" className="w-[500px]">
          Click
        </Button>
      </div>
    </Container>
  );
}

export default App;
