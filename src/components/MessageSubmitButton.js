import React from "react";
import { IconButton } from "@material-ui/core";

import { pushMessage } from "../firebase";

const MessageSubmitButton = ({ name, setText, text }) => {
  return (
    <IconButton
      disabled={text === ""}
      onClick={() => {
        pushMessage({ name, text });
        setText("");
      }}
    >
      SEND
    </IconButton>
  );
};

export default MessageSubmitButton;
