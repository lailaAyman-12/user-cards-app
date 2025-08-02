import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="container center">
      <img src={user.image} alt={user.firstName} className="avatar-large" />
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Age: {user.age}</p>
      <p>Gender: {user.gender}</p>
    </div>
  );
}

export default UserDetails;
