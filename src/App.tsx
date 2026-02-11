import Card, { CardBody } from "./componentes/Card";
import List from "./componentes/List";

function App() {
  const list = ["goku", "vegeta", "tio", "asa"];
  return (
    <Card>
      klajjsldkjalskjd
      <CardBody title={"Titulo"} text={"Texto"} />
      <List data={list} />
    </Card>
  );
  // return <CardBody title={"Titulo"} text={"texto"} />;
}

export default App;
