import { Link } from "aleph/react";

export default function Header() {
  return (
    <header className="sticky top-0 w-full h-20">
      <div className="flex items-center justify-between w-[90%] max-w-[900px] h-full m-x-auto">
        <h1>
          <Link to="/">
            <p>Senforsce</p>
          </Link>
        </h1>
        <nav className="flex items-center gap-5">
          <Link to="/contact">
            <p>Contact</p>
          </Link>
        </nav>
      </div>
    </header>
  );
}
