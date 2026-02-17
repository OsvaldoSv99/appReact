import Card, { CardBody } from "./componentes/Card";
import List from "./componentes/List";

function App() {
  const list = ["goku", "vegeta", "tio", "asa"];
  const handleSelect = (elemento: string) => {
    console.log("Imprimiento", elemento);
  };
  return (
    <Card>
      klajjsldkjalskjd
      <CardBody title={"Titulo"} text={"Texto"} />
      <List data={list} onSelect={handleSelect} />
    </Card>
  );
  // return <CardBody title={"Titulo"} text={"texto"} />;
}

export default App;
