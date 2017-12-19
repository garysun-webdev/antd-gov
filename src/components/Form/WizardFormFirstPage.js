import React from "react";
import { Field, reduxForm, formValueSelector } from "redux-form";
import validate from "./validate";
import { TextField, SelectField } from "redux-form-antd";
import { Button, Icon } from "antd";
import { connect } from "react-redux";

let WizardFormFirstPage = props => {
  const { handleSubmit, fullName } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Field
          name="firstName"
          type="text"
          component={TextField}
          label="1. What's your first name?"
        />
        <Field
          name="lastName"
          type="text"
          component={TextField}
          label="2. What's your last name?"
        />
        <label htmlFor="email">
          3. Hi {fullName}, can we get a contact email?
        </label>
        <Field name="email" type="text" component={TextField} />
        <label htmlFor="position">
          4. What position are you interested in {fullName}?
        </label>
        <Field
          name="position"
          mode="default"
          component={SelectField}
          options={[
            {
              label: "Digital Producer",
              value: "digitalProducer"
            },
            {
              label: "Software Engineer",
              value: "softwareEngineer"
            }
          ]}
        />

        <label htmlFor="portfollo">
          5. {fullName} do you have an online presence that we can have a look
          at?
        </label>
        <Field name="portfolio" type="text" component={TextField} />

        <label htmlFor="skills">6. Tell us what you are good at?</label>
        <Field
          name="skills"
          component={SelectField}
          mode="multiple"
          placeholder={"Skills"}
          options={[
            {
              label: "HTML",
              value: "HTML"
            },
            {
              label: "CSS",
              value: "CSS"
            },
            {
              label: "JavaScript",
              value: "JavaScript"
            },
            {
              label: "React.js",
              value: "React.js"
            },
            {
              label: "Node.js",
              value: "Node.js"
            },
            {
              label: "Java",
              value: "Java"
            },
            {
              label: "Python",
              value: "Python"
            }
          ]}
        />

        <div>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              margin: "auto",
              display: "-webkit-flex"
            }}
          >
            Forward<Icon type="right" />
          </Button>
        </div>
      </form>
    </div>
  );
};

WizardFormFirstPage = reduxForm({
  form: "wizard", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormFirstPage);

// Decorate with connect to read form values
const selector = formValueSelector("wizard"); // <-- same as form name
WizardFormFirstPage = connect(state => {
  // can select values individually
  // const hasEmailValue = selector(state, 'hasEmail')
  // const favoriteColorValue = selector(state, 'favoriteColor')
  // or together as a group
  const { firstName, lastName } = selector(state, "firstName", "lastName");
  return {
    fullName: `${firstName || ""} ${lastName || ""}`
  };
})(WizardFormFirstPage);

export default WizardFormFirstPage;
