import { useEffect, useState } from "react";
import CardList from "./components/CardsList/cardList.component";
import Searchbox from "./components/SearchBox/searchbox.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  console.log("App render top");
  console.log(filteredMonsters);
  console.log(monsters);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        return setMonsters(users);
      })
      .catch((err) => console.log(err));
    console.log("UseEffect Fetching [MONSTERS] once on mount");
  }, []);

  useEffect(() => {
    console.log(
      "UseEffect trigering first and then when [MONSTERS] or [SEARCH] change setting [FILTERMONSTERS  ]"
    );
    const filteredList = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(search.toLocaleLowerCase());
    });
    return setFilteredMonsters(filteredList);
  }, [monsters, search]);

  const onSearchChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Searchbox
          onSearchChange={onSearchChange}
          className={`inputSearch`}
          placeholder={`search for monsters`}
        />
      </div>
      <CardList filteredMonsters={filteredMonsters} />
    </div>
  );
};

export default App;
