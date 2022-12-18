import { AlertIcon } from "@chakra-ui/alert";
import React from "react";

function Alert() {
  return (
    <div>
      <Alert status="success">
        <AlertIcon />
        Data uploaded to the server. Fire on!
      </Alert>
    </div>
  );
}

export default Alert;
