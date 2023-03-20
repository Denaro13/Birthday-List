import { useState } from "react";
import data from "./data";
import { Person } from "./Person";
const App = () => {
  const [people, setPeople] = useState(data);

  const removePerson = () => {
    setPeople([]);
  };

  return (
    <main>
      <div className="container">
        <h3>{people.length} birthdays today</h3>
        {people.map((person) => {
          return <Person key={person.id} {...person} />;
        })}
        <button type="button" className="btn btn-block" onClick={removePerson}>
          clear birthday
        </button>
      </div>
    </main>
  );
};
export default App;
