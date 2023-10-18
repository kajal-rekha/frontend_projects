import { useState } from "react";

const Table = ({ contacts }) => {
  const [filtered, setFiltered] = useState("all");

  const handleChange = (e) => {
    setFiltered(e.target.value);
  };

  let filteredContacts = [];
  if (filtered === "all") {
    filteredContacts = contacts;
  } else {
    filteredContacts = contacts.filter((contact) => contact.group === filtered);
  }
  return (
    <div>
      <div>
        Filter:
        <select value={filtered} onChange={handleChange}>
          <option value="">none</option>
          <option value="all">all</option>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.group}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
