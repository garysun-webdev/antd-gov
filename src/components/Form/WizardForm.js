import React, { Component } from "react";
import WizardFormFirstPage from "./WizardFormFirstPage";
import WizardFormSecondPage from "./WizardFormSecondPage";
import WizardFormThirdPage from "./WizardFormThirdPage";
import { Steps } from "antd";
import "./WizardForm.css";

const Step = Steps.Step;

class WizardForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.jumpToFirstPage = this.jumpToFirstPage.bind(this);
    this.state = {
      page: 1
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  jumpToFirstPage() {
    this.setState({ page: 1 });
  }

  render() {
    const { page } = this.state;
    return (
      <div className="form-style">
        <div className="form-steps">
          <Steps size="small" current={this.state.page - 1}>
            <Step title="Step 1" />
            <Step title="Step 2" />
            <Step title="Step 3" />
          </Steps>
        </div>

        {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} />}
        {page === 2 && (
          <WizardFormSecondPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 3 && (
          <WizardFormThirdPage
            previousPage={this.previousPage}
            jumpToFirstPage={this.jumpToFirstPage}
          />
        )}
      </div>
    );
  }
}

export default WizardForm;
