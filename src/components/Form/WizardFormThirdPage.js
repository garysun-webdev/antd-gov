import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import { Button } from "antd";
import { TextField } from "redux-form-antd";
import ReduxFormDropzone from "./ReduxFormDropzone";
import { withRouter } from "react-router-dom";

class WizardFormThirdPage extends Component {
  constructor(props) {
    super(props);
    this.showAndRefresh = this.showAndRefresh.bind(this);
  }

  showAndRefresh(values) {
    this.props.reset();
    this.props.onSubmit(values);
    this.props.jumpToFirstPage();
  }

  render() {
    const { handleSubmit, pristine, previousPage, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.showAndRefresh)}>
        <label>
          12. What do you think about these questions? And why do you think we
          ask them?
        </label>
        <Field name="question" type="text" component={TextField} size="large" />

        <label>13. That's it, do you have any questions for us?</label>
        <Field
          name="questionToAsk"
          type="text"
          component={TextField}
          size="large"
        />

        <label>14. Got a CV or Portfolio you'd like to share?</label>
        <Field name={"resume"} component={ReduxFormDropzone} />

        <div>
          <Button
            type="primary"
            htmlType="button"
            size="large"
            style={{
              display: "inline-block",
              float: "left"
            }}
            onClick={previousPage}
          >
            Previous
          </Button>

          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{
              display: "inline-block",
              float: "right"
            }}
            disabled={pristine || submitting}
          >
            Submit
          </Button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "wizard", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormThirdPage);
