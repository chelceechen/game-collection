import "./maze.css";
import endImage from "../../image/end.png";
import wallImage from "../../image/wall.png";
import peopleImage from "../../image/people.jpg";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { direction } from "../../redux/actions/maze";

const Maze = () => {
  const dispatch = useDispatch();

  const [testValue, setTestValue] = useState(0);

  let imagePeople = new Image();
  imagePeople.src = peopleImage;
  let imageEnd = new Image();
  imageEnd.src = endImage;
  let imageWall = new Image();
  imageWall.src = wallImage;

  const test = () => {
    // let testValue_ = testValue;
    // testValue_++;
    // setTestValue(testValue_);
    console.log(mazeData);
  };

  const mazeData = useSelector((state) => state);
  const handleStart = () => {
    var c = document.getElementById("mazeCanvas");
    var context = c.getContext("2d");
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 8; j++) {
        if (mazeData.mazeData.cordinate[i][j] === "w") {
          context.drawImage(imageWall, j * 150, i * 150, 150, 150);
        } else if (mazeData.mazeData.cordinate[i][j] === "p") {
          context.drawImage(imagePeople, j * 150, i * 150, 150, 150);
        } else if (mazeData.mazeData.cordinate[i][j] === "e") {
          context.drawImage(imageEnd, j * 150, i * 150, 150, 150);
        }
      }
    }
    c.onclick = function (e) {
      console.log(mazeData, 342355);

      const canvasInfo = c.getBoundingClientRect();
      var column = Math.floor((e.clientX - canvasInfo.left) / 150);
      var row = Math.floor((e.clientY - canvasInfo.top) / 150);
      // console.log(column, row);

      if (mazeData.mazeData.cordinate[row][column] === "b") {
        if (
          mazeData.mazeData.cordinate[row][column - 1]
            ? mazeData.mazeData.cordinate[row][column - 1] === "p"
            : false
        ) {
          context.clearRect((column - 1) * 150, row * 150, 150, 150);
          context.drawImage(imagePeople, column * 150, row * 150, 150, 150);

          dispatch(direction(column, row, column - 1, row));
        } else if (
          mazeData.mazeData.cordinate[row][column + 1]
            ? mazeData.mazeData.cordinate[row][column + 1] === "p"
            : false
        ) {
          context.clearRect((column + 1) * 150, row * 150, 150, 150);
          context.drawImage(imagePeople, column * 150, row * 150, 150, 150);
          dispatch(direction(column, row, column + 1, row));
        } else if (
          mazeData.mazeData.cordinate[row - 1][column]
            ? mazeData.mazeData.cordinate[row - 1][column] === "p"
            : false
        ) {
          context.clearRect(column * 150, (row - 1) * 150, 150, 150);
          context.drawImage(imagePeople, column * 150, row * 150, 150, 150);
          dispatch(direction(column, row, column, row - 1));
        } else if (
          mazeData.mazeData.cordinate[row + 1][column]
            ? mazeData.mazeData.cordinate[row + 1][column] === "p"
            : false
        ) {
          context.clearRect(column * 150, (row + 1) * 150, 150, 150);
          context.drawImage(imagePeople, column * 150, row * 150, 150, 150);
          dispatch(direction(column, row, column, row + 1));
        }
      }
    };
  };

  return (
    <div className="maze">
      <button onClick={test}>test</button>
      <div className="topSide">
        <h1>Maze</h1>
      </div>
      <div className="bottomSide">
        <div className="leftSide">
          <button onClick={handleStart}>start</button>
          <button>reset</button>
          <div>
            <div>difficulty</div>
            <button>easy</button>
            <button>normal</button>
            <button>complex</button>
          </div>
        </div>
        <div className="rightSide">
          <div>
            <canvas
              id="mazeCanvas"
              width="1200"
              height="600"
              style={{ backgroundColor: "pink" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maze;
