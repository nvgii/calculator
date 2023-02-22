import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

function Calculator() {
  const [variable, setVariable] = useState("");
  const [variable2, setVariable2] = useState("");
  const [operator, setOperator] = useState("");
  const [ergebnis, setErgebnis] = useState(0);
  const [isVariableTwo, setIsVariableTwo] = useState(false);

  // erweitert die Zahl
  const append = (number: string) => {
    if (!isVariableTwo) {
      let tmp = "";
      tmp = variable.concat(number);
      setVariable(tmp);
    } else {
      let tmp = "";
      tmp = variable2.concat(number);
      setVariable2(tmp);
    }
  };

  // bekommt das Berechnungssymbol
  const getOperator = (symbol: string) => {
    setOperator(symbol);
    setIsVariableTwo(true);
  };

  // berechnet
  const compute = () => {
    if (operator === "+") {
      setErgebnis(Number(variable) + Number(variable2));
      reset();
    }
  };

  // löscht
  const clear = (e: any) => {
    setVariable("");
    setOperator("");
    setErgebnis(0);
    setVariable2("");
    setIsVariableTwo(false);
  };

  const reset = () => {
    setVariable("");
    setOperator("");
    setVariable2("");
    setIsVariableTwo(false);
  };

  useEffect(() => {
    console.log("variable", variable);
    console.log("verändert symbol", operator);
    console.log("variable2", variable2);
    console.log("isVariableTwo", isVariableTwo);
    console.log("ergebnis", ergebnis);
  }, [variable, operator, ergebnis, variable2, isVariableTwo]);

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
                  <Form.Control
                    id="feld"
                    ria-describedby="inputGroup-sizing-default"
                    value={ergebnis}
                  />
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
                <Button variant="secondary">/</Button>{" "}
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
                <Button variant="secondary">*</Button>{" "}
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
                <Button variant="secondary">-</Button>{" "}
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
