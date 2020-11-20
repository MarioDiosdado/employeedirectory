import React from "react";

const styles = {
    header: {
      width: "100%",
      textAlign: "center",
      padding: "25px 0"
    }
  }

function Header() {
   return <h1 style={styles.header}>Employee Directory</h1>
}

export default Header;