import React, { useState } from "react";

import SignIn from "./SignIn";

export default () => {
  const [name, setName] = useState('');
  consol.log{( name )};

  return <SignIn setName={setName} />;
};
