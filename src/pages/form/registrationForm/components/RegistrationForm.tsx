import {ObjOfCss} from "@/app-types";
import React from "react";
import {Col, Row} from "react-bootstrap";
import {FormConstants} from "../formConstants/FormConstants";
import {DropdownField, Error, InputEmail, InputText, QuestionText} from "@/shared/components";

type Props = {
  handleInputChange: (event: any) => void;
  formState: any;
  fieldErrors: any;
};

export const RegistrationForm = (props: Props) => {
  return (
    <Col xs={12} md={6} lg={6} className="mb-3" style={styles.colContainer}>
        <Row className="mb-3" style={styles.formBody}>
          <Col sm={12} md={6} lg={12}>
            <QuestionText name={FormConstants.FormConfig.fields.fullName.questionText} isRequired={true} sx={{inputLabel: styles.inputLabel}} />
            <InputText
              name={FormConstants.FormConfig.fields.fullName.fieldName}
              onChange={props.handleInputChange}
              inputStyle={styles.inputStyles}
              value={props.formState.fullName}
              required={true}
            />
            {props.fieldErrors.fullName ? <Error message={props.fieldErrors.fullName} /> : null}
          </Col>
          <Col sm={12} md={6} lg={12}>
            <QuestionText name={FormConstants.FormConfig.fields.contactNumber.questionText} isRequired={true} sx={{inputLabel: styles.inputLabel}} />
            <InputText
              name={FormConstants.FormConfig.fields.contactNumber.fieldName}
              onChange={props.handleInputChange}
              inputStyle={styles.inputStyles}
              value={props.formState.contactNumber}
            />
            {props.fieldErrors.contactNumber ? <Error message={props.fieldErrors.contactNumber} /> : null}
          </Col>
          {/* NOTE:: Haven't added valid code for birthday design and functionality due to time constraint */}
          <Col sm={12} md={6} lg={12}>
            <QuestionText name={FormConstants.FormConfig.fields.birthDates.questionText} isRequired={false} sx={{inputLabel: styles.inputLabel}} />
            <DropdownField
              name={FormConstants.FormConfig.fields.birthDates.fieldName}
              defaultValue={props.formState.birthDates}
              options={FormConstants.FormConfig.fields.birthDates.options}
              onChange={props.handleInputChange}
              style={styles.dropdownStyles}
            />
            {props.fieldErrors?.birthDates ? <Error message={props.fieldErrors.birthDates} /> : null}
          </Col>
          <Col sm={12} md={6} lg={12}>
            <QuestionText name={FormConstants.FormConfig.fields.emailAddress.questionText} isRequired={true} sx={{inputLabel: styles.inputLabel}} />
            <InputEmail
              name={FormConstants.FormConfig.fields.emailAddress.fieldName}
              onChange={props.handleInputChange}
              inputStyle={styles.inputStyles}
              value={props.formState.emailAddress}
              required={true}
            />
            {props.fieldErrors.emailAddress ? <Error message={props.fieldErrors.emailAddress} /> : null}
          </Col>
          <Col sm={12} md={12} lg={12}>
            <QuestionText name={FormConstants.FormConfig.fields.createPassword.questionText} isRequired={true} sx={{inputLabel: styles.inputLabel}} />
            <InputText
              name={FormConstants.FormConfig.fields.createPassword.fieldName}
              onChange={props.handleInputChange}
              inputStyle={styles.inputStyles}
              value={props.formState.createPassword}
            />
            {props.fieldErrors?.createPassword ? <Error message={props.fieldErrors.createPassword} /> : null}
          </Col>
          <Col sm={12} md={6} lg={12}>
            <QuestionText name={FormConstants.FormConfig.fields.confirmPassword.questionText} isRequired={true} sx={{inputLabel: styles.inputLabel}} />
            <InputText
              name={FormConstants.FormConfig.fields.confirmPassword.fieldName}
              onChange={props.handleInputChange}
              inputStyle={styles.inputStyles}
              value={props.formState.confirmPassword}
            />
            {props.fieldErrors?.confirmPassword ? <Error message={props.fieldErrors.confirmPassword} /> : null}
          </Col>
        </Row>
    </Col>
  );
};
export default RegistrationForm;

const styles: ObjOfCss = {
  formHeader: {
    justifyContent: "center",
    margin: "3% 3% 0% 3%"
  },
  formHeaderCardContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    width: "100%"
  },
  colContainer: {
    marginTop: 10
  },
  formHeaderText: {
    fontSize: "30px"
  },
  formHeaderSubText: {
    fontSize: "16px",
    textAlign: "center",
    margin: "2%"
  },
  formBody: {
    alignItems: "center",
    padding: "6%"
  },
  inputLabel: {
    color: FormConstants.styles.inputLabelColor
  },
  inputStyles: {
    border: "1px solid " + FormConstants.styles.inputBorderColor,
    fontSize: "1em",
    padding: "1.5%",
    width: "100%"
  },
  dropdownStyles: {
    border: "1px solid " + FormConstants.styles.inputBorderColor,
    fontSize: "1em",
    padding: "1.5%",
    width: "100%",
    cursor: "pointer"
  },
  submitBtn: {
    cursor: "pointer",
    border: "1px solid #d9d9e1",
    backgroundColor: FormConstants.styles.submitBtnColor,
    color: "#FFFFFF",
    padding: "12px 24px",
    borderRadius: "6px",
    width: "auto",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease-in-out",
    outline: "none"
  }
};
