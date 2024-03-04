export const FormConstants = {
  styles: {
    bgColor: "#FFFFF0",
    inputLabelColor: "#696969",
    inputBorderColor: "#d3d3d3",
    addMemberBtnBgColor: "#008080",
    submitBtnColor: "#389bd9"
  },
  FILE_SIZE_IN_MB: 4,
  allowedImageFileExtensions: ["jpg", "jpeg", "png", "bmp", "heic", "avif"],
  FormConfig: {
    formId: "230967556705062",
    fields: {
      fullName: {
        customOrder: 1,
        fieldName: "fullName",
        questionText: "Full Name",
        label: "Full Name"
      },
      contactNumber: {
        customOrder: 2,
        fieldName: "contactNumber",
        questionText: "Contact Number",
        label: "Contact Number",
      },
      birthDates: {
        customOrder: 3,
        fieldName: "BirthDates",
        questionText: "Birth Day",
        label: "Birth Dates",
        options: [] //TODO:: update code for birthdate
      },
      emailAddress: {
        customOrder: 4,
        fieldName: "emailAddress",
        questionText: "Email Address",
        label: "Email Address"
      },
     createPassword: {
      customOrder: 5,
        fieldName: "createPassword",
        questionText: "Create password",
        label: "Create Password"
     },
     confirmPassword: {
      customOrder: 6,
        fieldName: "confirmPassword",
        questionText: "Confirm Password",
        label: "Confirm Password"
     }
    }
  }
};
