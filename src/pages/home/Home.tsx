import React from "react";
import IdeaTheoremRegistrationMain from "@/pages/form/registrationForm/IdeaTheoremRegistrationForm";
import {ObjOfCss} from "@/app-types";

export const Home = () => {
  return (
    <div style={styles.container}>
      <IdeaTheoremRegistrationMain />
    </div>
  );
};

const styles: ObjOfCss = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
};
