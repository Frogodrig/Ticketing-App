import Link from "next/link";

export default ({ currentUser }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand" href="/">
        Ticketing.com
      </Link>

      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">
          {currentUser ? "Sign Out" : "Sign In/Up"}
        </ul>
      </div>
    </nav>
  );
};
