import Card from "../Card/card.component";
import "./cardList.component.css";
const CardList = ({ filteredMonsters }) => {
  console.log(filteredMonsters);
  return (
    <div className="cardList">
      {filteredMonsters.map((monster) => {
        return <Card monster={monster} key={monster.id} />;
      })}
    </div>
  );
};
export default CardList;
