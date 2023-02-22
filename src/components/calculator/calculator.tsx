import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

function Calculator() {
  const [variable, setVariable] = useState<String>("");
  const [variable2, setVariable2] = useState<String>("");
  const [anzeige, setAnzeige] = useState<any>("");
  const [operator, setOperator] = useState<String>("");
  const [ergebnis, setErgebnis] = useState<Number>(0);
  const [isVariableTwo, setIsVariableTwo] = useState<Boolean>(false);

  // erweitert die Zahl
  const append = (number: string) => {
    let tmp = "";
    if (!isVariableTwo) {
      tmp = variable.concat(number);
      setAnzeige(anzeige.concat(tmp));
      setVariable(tmp);
    } else {
      tmp = variable2.concat(number);
      setAnzeige(anzeige.concat(tmp));
      setVariable2(tmp);
    }
  };

  // bekommt das Berechnungssymbol
  const getOperator = (symbol: string) => {
    setOperator(symbol);
    setIsVariableTwo(true);
    setAnzeige(anzeige.concat(symbol));
  };

  // berechnet
  const compute = () => {
    if (operator === "+") {
      let ergebnis = Number(variable) + Number(variable2);
      setScreenAndResetStates(ergebnis);
    }
    if (operator === "-") {
      let ergebnis = Number(variable) - Number(variable2);
      setScreenAndResetStates(ergebnis);
    }
    if (operator === "*") {
      let ergebnis = Number(variable) * Number(variable2);
      setScreenAndResetStates(ergebnis);
    }
    if (operator === "/") {
      let ergebnis = Number(variable) / Number(variable2);
      setScreenAndResetStates(ergebnis);
    }

    function setScreenAndResetStates(ergebnis: number) {
      setErgebnis(ergebnis);
      setAnzeige(String(ergebnis));
      resetStates();
    }
  };

  function resetStates() {
    setVariable("");
    setOperator("");
    setVariable2("");
    setIsVariableTwo(false);
  }

  // löscht
  const clear = (e: any) => {
    resetStates();
    setErgebnis(0);
    setAnzeige("");
  };

  useEffect(() => {
    console.table([["variable", variable], ["verändert symbol", operator],["variable2", variable2],["isVariableTwo", isVariableTwo],["ergebnis", ergebnis],["anzeige", anzeige]]);
  }, [variable, operator, ergebnis, variable2, isVariableTwo, anzeige]);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Title>Calculator</Card.Title>
      <Card.Body>
        <Table striped bordered hover>
          <thead></thead>
          <tbody>
            <tr>
              <td colSpan={3}>
                <InputGroup className="mb-3">
                  <Form.Control id="feld" value={anzeige} />
                </InputGroup>
              </td>
              <td>
                <Button
                  onClick={(e) => clear(e)}
                  variant="danger"
                  size="lg"
                  value="delete"
                >
                  DEL
                </Button>{" "}
              </td>
            </tr>

            <tr>
              <td>
                <Button
                  variant="secondary"
                  value="7"
                  onClick={(e: any) => append(e.target.value)}
                >
                  7
                </Button>{" "}
              </td>
              <td>
                <Button
                  variant="secondary"
                  value="8"
                  onClick={(e: any) => append(e.target.value)}
                >
                  8
                </Button>{" "}
              </td>
              <td>
                <Button
                  variant="secondary"
                  value="9"
                  onClick={(e: any) => append(e.target.value)}
                >
                  9
                </Button>{" "}
              </td>
              <td>
                <Button
                  onClick={(e: any) => getOperator(e.target.value)}
                  variant="secondary"
                  value="/"
                >
                  /
                </Button>{" "}
              </td>
            </tr>
            <tr>
              <td>
                <Button
                  variant="secondary"
                  value="4"
                  onClick={(e: any) => append(e.target.value)}
                >
                  4
                </Button>{" "}
              </td>
              <td>
                <Button
                  variant="secondary"
                  value="5"
                  onClick={(e: any) => append(e.target.value)}
                >
                  5
                </Button>{" "}
              </td>
              <td>
                <Button
                  variant="secondary"
                  value="6"
                  onClick={(e: any) => append(e.target.value)}
                >
                  6
                </Button>{" "}
              </td>
              <td>
                <Button
                  onClick={(e: any) => getOperator(e.target.value)}
                  variant="secondary"
                  value="*"
                >
                  *
                </Button>{" "}
              </td>
            </tr>
            <tr>
              <td>
                <Button
                  variant="secondary"
                  value="1"
                  onClick={(e: any) => append(e.target.value)}
                >
                  1
                </Button>{" "}
              </td>
              <td>
                <Button
                  variant="secondary"
                  value="2"
                  onClick={(e: any) => append(e.target.value)}
                >
                  2
                </Button>{" "}
              </td>
              <td>
                <Button
                  variant="secondary"
                  value="3"
                  onClick={(e: any) => append(e.target.value)}
                >
                  3
                </Button>{" "}
              </td>
              <td>
                <Button
                  onClick={(e: any) => getOperator(e.target.value)}
                  variant="secondary"
                  value="-"
                >
                  -
                </Button>{" "}
              </td>
            </tr>
            <tr>
              <td>
                <Button
                  variant="secondary"
                  value="0"
                  onClick={(e: any) => append(e.target.value)}
                >
                  0
                </Button>{" "}
              </td>
              <td>
                <Button variant="secondary">,</Button>{" "}
              </td>
              <td>
                <Button
                  onClick={(e: any) => getOperator(e.target.value)}
                  variant="secondary"
                  value="+"
                >
                  +
                </Button>{" "}
              </td>
              <td>
                <Button size="lg" variant="success" onClick={() => compute()}>
                  =
                </Button>{" "}
              </td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default Calculator;
