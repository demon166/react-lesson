import { ReactElement } from "react";

const user = {
  name: "Илон Маск",
  img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg",
};

const Profile = ({ children }: any) => {
  return (
    <>
      {children}
      <strong>{user.name}</strong>
      <img
        className="img"
        src={user.img}
        alt="Илон Маск"
        style={{
          maxWidth: "100px",
        }}
      />
    </>
  );
};

export default Profile;
