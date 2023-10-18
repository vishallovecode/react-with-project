import { useEffect, useState } from "react";
import DropDown from "./component/dropdown";

const DropDownExample = () => {
  // dropdown handling

  const OrgList = [
    { ordId: "123456", orgName: "Mh-delhi4" },
    { ordId: "123457", orgName: "Mh-delhi3" },
    { ordId: "123458", orgName: "Mh-delhi2" },
    { ordId: "123459", orgName: "Mh-delhi1" },
  ];

  const MhList = [
    { mhId: "123456", mhName: "Mh-delhi4" },
    { mhId: "123457", mhName: "Mh-delhi3" },
    { mhId: "123458", mhName: "Mh-delhi2" },
    { mhId: "123459", mhName: "Mh-delhi1" },
  ];

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await fetch("https://dummyjson.com/users");
    const userData = await res.json();
    setUsers(userData?.users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      {/* <select onChange={handleChange}> */}
      {/* [<option value={"123456"}>Mh-delhi4</option>,
        <option value={"123457"}>Mh-delhi2</option>,
        <option value={"123458"}>Mh-delhi3</option>,
        <option value={"123459"}>Mh-delhi4</option>] */}
      {/* {OrgList.map((org) => {
          console.log(org);
          return <option value={org.ordId}>{org.orgName}</option>;
        })}
      </select> */}

      <DropDown
        options={OrgList}
        handleChange={handleChange}
        idKey="ordId"
        labelKey="orgName"
      />

      {/* <select onChange={handleChange}>
        {users.map((user) => {
          console.log(user);
          return <option value={user.id}>{user.firstName}</option>;
        })}
      </select> */}
      <DropDown
        options={users}
        handleChange={handleChange}
        idKey="id"
        isMulti={true}
        labelKey="firstName"
      />
      <DropDown
        options={MhList}
        handleChange={handleChange}
        idKey="mhId"
        labelKey="mhName"
      />
    </div>
  );
};

export default DropDownExample;

// keys
// conditional rendering

// const idKey = "orgId";
// {
//   /*  const data = {
//   orgId:123c, name:'Vishal'
//  } */
// }

// data[idKey];
