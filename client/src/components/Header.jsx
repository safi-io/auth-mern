import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-slate-200">
      <div className="flex items-center justify-between max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold">AUTH APP</h1>
        </Link>

        <ul className="flex gap-4">
          <Link to="/">
            <li>HOME</li>
          </Link>
          <Link to="/about">
            <li>ABOUT</li>
          </Link>
          <Link to="/sign-in">
            <li>SIGN-IN</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
