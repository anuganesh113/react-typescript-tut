import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
// import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
// import Person from "./components/Person";
import Status from "./components/Status";

function App() {
  // const [count, setCount] = useState(0);

  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];
  return (
    <>
      {/* <Greet name="Anu" messageCount={33} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} /> */}

      {/* <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Anju!</Heading>
      </Oscar>
      <Greet name="Anu" messageCount={3} isLoggedIn={true} /> */}
      {/* <Button
        handleClick={(event) => {
          console.log("Button Clicked.", event, 3);
        }}
      />

      <Input value="" handleChange={(event) => console.log(event)} /> */}
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
    </>
  );
}

export default App;
