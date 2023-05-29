import React, { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

const Alert = () => {
  const { alert } = useContext(AlertContext);

  return alert !== null && (
    <p>
        {alert.type === 'error' && ()}
    </p>
  );
};

export default Alert;
