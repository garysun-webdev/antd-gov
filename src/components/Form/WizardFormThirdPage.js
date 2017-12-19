import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import { Button, Icon, Modal } from "antd";
import { TextField } from "redux-form-antd";
import ReduxFormDropzone from "./ReduxFormDropzone";

class WizardFormThirdPage extends Component {
  constructor(props) {
    super(props);
    this.showAndRefresh = this.showAndRefresh.bind(this);
    this.state = {
      ModalText: "Are you sure to submit the form?",
      visible: false,
      confirmLoading: false
    };
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: "This window will be closed after two seconds..",
      confirmLoading: true
    });

    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      visible: false
    });
  };

  showAndRefresh(values) {
    console.log(values);

    this.setState({
      ModalText: `You submitted:\n\n${JSON.stringify(values, null, 2)}`
    });

    this.showModal();
    // this.props.reset();
    // this.props.jumpToFirstPage();
  }

  render() {
    const { handleSubmit, pristine, previousPage, submitting } = this.props;
    const { visible, confirmLoading, ModalText } = this.state;

    return (
      <form onSubmit={handleSubmit(this.showAndRefresh)}>
        <label>
          11. Do you believe that you have the power to make a change in the
          world? If so, what would that change be?
        </label>
        <Field name="power" type="text" component={TextField} size="large" />

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
            style={{
              display: "inline-block",
              float: "left"
            }}
            onClick={previousPage}
          >
            <Icon type="left" />Backward
          </Button>

          {/* <Button
            type="primary"
            htmlType="submit"
            style={{
              display: "inline-block",
              float: "right"
            }}
            disabled={pristine || submitting}
          >
            Submit
          </Button> */}

          <Button
            type="primary"
            htmlType="submit"
            style={{
              display: "inline-block",
              float: "right"
            }}
            disabled={pristine || submitting}
          >
            Submit
          </Button>

          <Modal
            title="Confirm"
            visible={visible}
            onOk={this.handleOk}
            confirmLoading={confirmLoading}
            onCancel={this.handleCancel}
            okText="Submit"
            cancelText="Backward"
          >
            <p>{ModalText}</p>
          </Modal>
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
