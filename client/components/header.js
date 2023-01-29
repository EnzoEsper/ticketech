import React from "react";
import Link from "next/link";

const header = ({ currentUser }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand">Ticketech</a>
      </Link>

      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">{currentUser ? "Sign Out" : "Sign In / Sign Up"}</ul>
      </div>
    </nav>
  );
};

export default header;
