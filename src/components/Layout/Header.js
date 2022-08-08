import React from "react";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <h1>Heading</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras urna ex,
        condimentum eu nunc sit amet, dapibus blandit ex. Phasellus viverra
        vehicula volutpat. Vestibulum eget ante nec urna scelerisque faucibus.
        Nunc non nulla cursus ligula interdum vulputate quis quis leo. Ut
        lobortis tempus blandit.
      </p>
    </div>
  );
};

export default Header;
