// import DataBinding from "./components/DataBinding";
// import InputElements from "./components/InputElements";
// import Navbar from "./components/Navbar";

import { useState } from "react";
import ContactForm from "./components/ContactForm";
import Table from "./components/Table";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const getData = (values) => {
    // console.log(values);
    setContacts([...contacts, values]);
  };

  console.log(contacts);
  return (
    <div>
      {/* <Navbar />
      <DataBinding />
      <InputElements /> */}
      <ContactForm getData={getData} />
      <Table contacts={contacts} />
    </div>
  );
};

export default App;
