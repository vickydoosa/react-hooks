import React, { useState } from "react";
import Page from "../common/Page";
import useToggle from "../hooks/useToggle";

class FormUsingClass extends React.Component {
  state = { firstName: "", lastName: "" };

  render() {
    return (
      <>
        <p>
          Hi {this.state.firstName}, {this.state.lastName}
        </p>
        <div className="row">
          <div className="col-sm">
            <input
              className="form-control"
              value={this.state.firstName}
              placeholder="First name"
              onChange={e => this.setState({ firstName: e.target.value })}
            />
          </div>
          <div className="col-sm">
            <input
              className="form-control"
              value={this.state.lastName}
              placeholder="Last name"
              onChange={e => this.setState({ lastName: e.target.value })}
            />
          </div>
        </div>
      </>
    );
  }
}

function Form() {
  const firstName = "";
  const lastName = "";
  return (
    <>
      <p>
        Hi {firstName}, {lastName}
      </p>
      <div className="row">
        <div className="col-sm">
          <input
            className="form-control"
            value={firstName}
            placeholder="First name"
            onChange={() => {}}
          />
        </div>
        <div className="col-sm">
          <input
            className="form-control"
            value={lastName}
            placeholder="Last name"
            onChange={() => {}}
          />
        </div>
      </div>
    </>
  );
}

export default function() {
  const render = useToggle();
  return (
    <Page title="Use state">
      <FormUsingClass />
      <hr />
      <Form />
      <hr />
      {render(<FormSolution />)}
    </Page>
  );
}

function FormSolution() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <>
      <p>
        Hi {firstName}, {lastName}
      </p>
      <div className="row">
        <div className="col-sm">
          <input
            className="form-control"
            value={firstName}
            placeholder="First name"
            onChange={e => setFirstName(e.target.value)}
          />
        </div>
        <div className="col-sm">
          <input
            className="form-control"
            value={lastName}
            placeholder="Last name"
            onChange={e => setLastName(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}