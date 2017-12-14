import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
import { TextField } from "redux-form-antd";
import { Button } from "antd";

const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label>
        7. Tell us about yourself. Apart from university, what other
        experience/extra curricular activities are you involved in?
      </label>
      <Field name="experience" type="text" component={TextField} size="large" />

      <label>
        8. What ideas interest you? Can you give an example of when you have
        generated an idea and tested to see if it had merit ?
      </label>
      <Field name="ideas" type="text" component={TextField} size="large" />

      <label>
        9. If you had an interest in a new field or acquiring a new skill what
        steps do your take to learn and perfect you knowledge?
      </label>
      <Field name="learning" type="text" component={TextField} size="large" />

      <label>
        10. What are 3 values you'd like to bring to your professional life and
        how would integrate these into a workplace?
      </label>
      <br />
      <label>a. First Value</label>
      <Field name="firstValue" type="text" component={TextField} size="large" />
      <label>b. Second Value</label>
      <Field
        name="secondValue"
        type="text"
        component={TextField}
        size="large"
      />
      <label>c. Third Value</label>
      <Field name="thirdValue" type="text" component={TextField} size="large" />

      <label>
        11. Do you believe that you have the power to make a change in the
        world? If so, what would that change be?
      </label>
      <Field name="power" type="text" component={TextField} size="large" />

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
        >
          Next
        </Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "wizard", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormSecondPage);
