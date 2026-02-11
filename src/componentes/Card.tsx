import type { ReactNode } from "react";

interface Props {
  // children: string; // Si se pasa un tipo de dato en especifico
  children: ReactNode; // Si se quiere pasar un componente completo
}

function Card(props: Props) {
  const { children } = props;
  const width = {
    width: "350px",
  };
  return (
    <div className="card" style={width}>
      <div className="card-body">{children}</div>
      {/* <div className="card-body"><CardBody {title='Hola', text = "aknsdka"}/></div> */}
    </div>
  );
}

// Se pueden poner mas componentes en un archivo
// Se pone export para exportar mas de un componente de un archivo
// Para esta funcion se tiene que envolver en otra etiqueta (div) o ponerle un fragment con etiqueta <Fragment> e importando la libreria o solamente <>
interface CardBodyProps {
  title: string;
  text?: string; // Con el simbolo ? se indica que el valor es opcional
}

export function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </>
  );
}

export default Card;
