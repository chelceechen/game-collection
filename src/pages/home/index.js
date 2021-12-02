import Card from "../../components/card/index";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="homePageTitle">Game Collection</div>
      <div className="main">
        <div className="gameCollection">
          <Card
            gameTitle={"Maze"}
            gameContent={
              "A maze is a path or collection of paths, typically from an entrance to a goal."
            }
            path={"maze"}
          />
          <Card
            gameTitle={"Puzzle"}
            gameContent={
              "The solver is expected to put pieces together in a logical way, in order to arrive at the correct or fun solution of the puzzle. "
            }
            path={"puzzle"}
          />
          <Card
            gameTitle={"Sokoban"}
            gameContent={
              "The player pushes crates or boxes around in a warehouse, trying to get them to storage locations."
            }
            path={"sokoban"}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
