import React from "react";
import { IconButton } from "@material-ui/core";

import { pushMessage } from "../firebase";

const MessageSubmitButton = ({ inputEl, name, setText, text }) => {
  return (
    <IconButton
      disabled={text === ""}
      onClick={() => {
        pushMessage({ name, text });
        setText("");
        inputEl.current.focus();
      }}
    >
      SEND
    </IconButton>
  );
};

export default MessageSubmitButton;
