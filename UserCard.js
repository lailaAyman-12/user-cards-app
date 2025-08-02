import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <div className="card">
      <img src={user.image} alt={user.firstName} className="avatar" />
      <h3>
        {user.firstName} {user.lastName}
      </h3>
      <Link to={`/users/${user.id}`} className="info-btn">
        Info
      </Link>
    </div>
  );
}

export default UserCard;
