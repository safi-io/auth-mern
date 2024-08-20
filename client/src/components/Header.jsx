import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="bg-slate-200">
      <div className="flex items-center justify-between max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold">AUTH APP</h1>
        </Link>

        <ul className="flex gap-4 justify-center items-center">
          <Link to="/">
            <li>HOME</li>
          </Link>
          <Link to="/about">
            <li>ABOUT</li>
          </Link>

          {currentUser ? (
            <Link to="/profile">
            <img
            src={currentUser.profilePicture}
            alt="profile_pic"
            className="h-10 w-10 rounded-full object-cover"
            />
            </Link>
          ) : (
            <Link to="/sign-in">
              <li>SIGN-IN</li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
}
