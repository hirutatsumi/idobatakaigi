import React, { useEffect, useRef } from "react";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { gravartPath } from "../gravatar";

const useStyles = makeStyles(() => ({
  inline: {
    display: "inline",
  },
}));

const MessageItem = ({ isLastItem, name, text }) => {
  const ref = useRef(null);
  const classes = useStyles();
  const avatarPath = gravartPath(name);

  useEffect(() => {
    if (isLastItem) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isLastItem]);

  return (
    <ListItem divider={true} ref={ref}>
      <ListItemAvatar>
        <Avatar src={avatarPath} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <Typography
            sx={{ display: "inline" }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            {text}
          </Typography>
        }
      />
    </ListItem>
  );
};

export default MessageItem;
