import React, {useState} from "react";
import {Image, Loader} from "@/shared/components";
import {Col, Row} from "react-bootstrap";
import {ObjOfCss} from "@/app-types";
import {FormConstants} from "./formConstants/FormConstants";
import {FormValidation, Logger} from "@/utils";
import RegistrationForm from "./components/RegistrationForm";
import Api from "@/http/api";
import Images from "@/assets";

const IdeaTheoremRegistrationMain = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formState, setFormState] = useState({
    fullName: "",
    contactNumber: "",
    birthDate: "",
    emailAddress: "",
    createPassword: "",
    confirmPassword: ""
  });
  const [fieldErrors, setFieldErrors] = useState({
    fullName: undefined,
    contactNumber: undefined,
    birthDate: undefined,
    emailAddress: undefined,
    createPassword: undefined,
    confirmPassword: undefined
  });

  const handleInputChange = async (event: any) => {
    const {name, value, files} = event.target;

    const newFieldErrors = {
      ...fieldErrors
    };

    const newState = {
      ...formState,
      [name]: value
    };

    switch (name) {
      case FormConstants.FormConfig.fields.fullName.fieldName:
        break;
      case FormConstants.FormConfig.fields.contactNumber.fieldName:
      case FormConstants.FormConfig.fields.birthDates.fieldName:
      case FormConstants.FormConfig.fields.emailAddress.fieldName:
      case FormConstants.FormConfig.fields.createPassword.fieldName:
      case FormConstants.FormConfig.fields.confirmPassword.fieldName:
        const newInputValues = FormValidation.replaceValueForInputFields(value);
        newState[FormConstants.FormConfig.fields[name].fieldName] = newInputValues;
        break;
    }

    setFormState(newState);
    setFieldErrors(newFieldErrors);
  };

  const validateFormFields = () => {
    const fields = Object.values(FormConstants.FormConfig.fields);

    const newFieldErrors = {
      ...fieldErrors
    };

    let isAnyFieldInvalid = false;

    for (let field of fields) {
      const fieldName = field.fieldName;
      switch (fieldName) {
        case FormConstants.FormConfig.fields.fullName.fieldName:
        case FormConstants.FormConfig.fields.contactNumber.fieldName:
        case FormConstants.FormConfig.fields.birthDates.fieldName:
        case FormConstants.FormConfig.fields.emailAddress.fieldName:
        case FormConstants.FormConfig.fields.createPassword.fieldName:
        case FormConstants.FormConfig.fields.confirmPassword.fieldName:
          break;
      }
    }

    if (isAnyFieldInvalid) {
      setFieldErrors(newFieldErrors);
    }

    return isAnyFieldInvalid;
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const isFormFieldValidationFailed = validateFormFields();
    if (isFormFieldValidationFailed) {
      return;
    }
    try {
      setIsLoading(true)
      const response = await Api.Form.registrationFormSubmit(formState);
      alert("  Here is a gentle confirmation that your action was successful.");
    } catch (error: any) {
      setIsLoading(false)
      const errorMessage = error.response?.data?.description;
      console.log("Error submitting form: ", errorMessage);
      alert("Error submitting form " + errorMessage);
    }
    setIsLoading(false)
  };

  return (
    <div style={styles.container}>
      {isLoading ? <Loader /> : null}
      <Row className="align-items-center" style={styles.formHeader}>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Image src={Images.logo} style={{color: "#fffff", maxWidth: "100%"}} />
        </Col>
      </Row>
      <hr style={styles.formDivider} />
      <form className="form-container" style={styles.formContainer} onSubmit={handleSubmit}>
        <RegistrationForm handleInputChange={handleInputChange} formState={formState} fieldErrors={fieldErrors} />
        <Col xs={6} sm={6} md={8} lg={9} className="d-flex justify-content-end">
          <button type="submit" style={styles.submitBtn}>
            Submit
          </button>
          <button type="button" onClick={() => {}}>
            Cancel
          </button>
        </Col>
      </form>
    </div>
  );
};

export default IdeaTheoremRegistrationMain;
const styles: ObjOfCss = {
  container: {
    width: "100vw",
    justifyContent: "center"
  },
  mainContainerStyle: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  formContainer: {
    border: "1px solid #EEEEEE",
    borderRadius: "10px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    margin: "100px auto",
    maxWidth: "500px"
  },
  formHeader: {
    backgroundColor: "#252F3D",
    padding: "20px"
  },
  formDivider: {
    border: "1px solid #d9d9e1"
  }
};
