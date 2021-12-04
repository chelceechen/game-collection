import "./maze.css";
import endImage from "../../image/end.png";
import wallImage from "../../image/wall.png";
import peopleImage from "../../image/people.jpg";
import finishWinImage from "../../image/finishWin.png"
import centerWinImage from "../../image/centerWinImage.png"

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { direction1, checkDiff } from "../../redux/actions/maze";

import { MAZEDATA } from "../../constant/mazedata";

const Maze = () => {
  const mazeData = useSelector((state) => state.mazeData);
  const [diff, setDiff] = useState("");
  const [changeWidth, setChangeWidth] = useState(null);
  const [noClick, setNoClick] = useState(false);

  const dispatch = useDispatch();

  let imagePeople = new Image();
  imagePeople.src = peopleImage;
  let imageEnd = new Image();
  imageEnd.src = endImage;
  let imageWall = new Image();
  imageWall.src = wallImage;
  let imagefinishWin = new Image();
  imagefinishWin.src = finishWinImage;
  let imagecenterWin = new Image();
  imagecenterWin.src = centerWinImage



  const handleStart = () => {
    setNoClick(true);
    let index = Math.floor(Math.random() * 2);
    dispatch(checkDiff(diff, index));
    var c = document.getElementById("mazeCanvas");
    var context = c.getContext("2d");

    //点击重置
    c.width = c.width;
    c.height = c.height;

    for (let i = 0; i < MAZEDATA[diff][0].length; i++) {
      for (let j = 0; j < MAZEDATA[diff][0][0].length; j++) {
        if (MAZEDATA[diff][index][i][j] === "w") {
          context.drawImage(
            imageWall,
            j * changeWidth,
            i * changeWidth,
            changeWidth,
            changeWidth
          );
        } else if (MAZEDATA[diff][index][i][j] === "p") {
          context.drawImage(
            imagePeople,
            j * changeWidth,
            i * changeWidth,
            changeWidth,
            changeWidth
          );
        } else if (MAZEDATA[diff][index][i][j] === "e") {
          context.drawImage(
            imageEnd,
            j * changeWidth,
            i * changeWidth,
            changeWidth,
            changeWidth
          );
        }
      }
    }


  };

  const test = () => {
    // console.log(MAZEDATA[diff][1], mazeData.cordinate, "data");
  }

  const runGame = (e) => {
    if (noClick === true) {
      // console.log(mazeData.cordinate)

      var c = document.getElementById("mazeCanvas");
      var context = c.getContext("2d");
      const canvasInfo = c.getBoundingClientRect();
      var column = Math.floor((e.clientX - canvasInfo.left) / changeWidth);
      var row = Math.floor((e.clientY - canvasInfo.top) / changeWidth);

      if (mazeData.cordinate[row][column] === "b") {
        if (
          //不能小于0
          column - 1 >= 0 ? mazeData.cordinate[row][column - 1] === "p" : false
        ) {
          context.clearRect((column - 1) * changeWidth, row * changeWidth, changeWidth, changeWidth);
          context.drawImage(imagePeople, column * changeWidth, row * changeWidth, changeWidth, changeWidth);
          dispatch(direction1(column, row, column - 1, row));
        }
        else if (
          // <8 不能超过
          column + 1 < mazeData.cordinate[0].length
            ? mazeData.cordinate[row][column + 1] === "p"
            : false
        ) {
          context.clearRect((column + 1) * changeWidth, row * changeWidth, changeWidth, changeWidth);
          context.drawImage(imagePeople, column * changeWidth, row * changeWidth, changeWidth, changeWidth);
          dispatch(direction1(column, row, column + 1, row));
        }
        else if (
          //不能小于0
          row - 1 >= 0 ? mazeData.cordinate[row - 1][column] === "p" : false
        ) {
          context.clearRect(column * changeWidth, (row - 1) * changeWidth, changeWidth, changeWidth);
          context.drawImage(imagePeople, column * changeWidth, row * changeWidth, changeWidth, changeWidth);
          dispatch(direction1(column, row, column, row - 1));

        }
        else if (
          //不能超过4
          row + 1 < mazeData.cordinate.length
            ? mazeData.cordinate[row + 1][column] === "p"
            : false
        ) {
          context.clearRect(column * changeWidth, (row + 1) * changeWidth, changeWidth, changeWidth);
          context.drawImage(imagePeople, column * changeWidth, row * changeWidth, changeWidth, changeWidth);
          dispatch(direction1(column, row, column, row + 1));


        }
      }
      else if (mazeData.cordinate[row][column] === "e") {
        if (
          column - 1 >= 0 ? mazeData.cordinate[row][column - 1] === "p" : false
        ) {
          context.clearRect((column - 1) * changeWidth, row * changeWidth, changeWidth, changeWidth);
          context.clearRect(column * changeWidth, row * changeWidth, changeWidth, changeWidth);
          context.drawImage(imagefinishWin, column * changeWidth, row * changeWidth, changeWidth, changeWidth);
          context.drawImage(imagecenterWin, c.width / 2 - 300, c.height / 2 - 60, 600, 120);
          setNoClick(false);
        }
        else if (
          column + 1 < mazeData.cordinate[0].length
            ? mazeData.cordinate[row][column + 1] === "p"
            : false
        ) {
          context.clearRect((column + 1) * changeWidth, row * changeWidth, changeWidth, changeWidth);
          context.clearRect(column * changeWidth, row * changeWidth, changeWidth, changeWidth);
          context.drawImage(imagefinishWin, column * changeWidth, row * changeWidth, changeWidth, changeWidth);
          context.drawImage(imagecenterWin, c.width / 2 - 300, c.height / 2 - 60, 600, 120);
          setNoClick(false);

        }
        else if (
          row - 1 >= 0 ? mazeData.cordinate[row - 1][column] === "p" : false
        ) {
          context.clearRect(column * changeWidth, row - 1 * changeWidth, changeWidth, changeWidth);
          context.clearRect(column * changeWidth, row * changeWidth, changeWidth, changeWidth);
          context.drawImage(imagefinishWin, column * changeWidth, row * changeWidth, changeWidth, changeWidth);
          context.drawImage(imagecenterWin, c.width / 2 - 300, c.height / 2 - 60, 600, 120);
          setNoClick(false);

        }
        else if (row + 1 < mazeData.cordinate.length
          ? mazeData.cordinate[row + 1][column] === "p"
          : false) {
          context.clearRect(column * changeWidth, row + 1 * changeWidth, changeWidth, changeWidth);
          context.clearRect(column * changeWidth, row * changeWidth, changeWidth, changeWidth);
          context.drawImage(imagefinishWin, column * changeWidth, row * changeWidth, changeWidth, changeWidth);
          context.drawImage(imagecenterWin, c.width / 2 - 300, c.height / 2 - 60, 600, 120);
          setNoClick(false);

        }
      }
    }
    // console.log(MAZEDATA[diff][1], mazeData.cordinate, "data2");
  }
  console.log("page here", MAZEDATA["easy"][1])
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
            <button
              onClick={() => {
                setDiff("easy");
                setChangeWidth(600 / MAZEDATA.easy[0].length);
              }}
            >
              easy
            </button>
            <button
              onClick={() => {
                setDiff("normal");
                setChangeWidth(600 / MAZEDATA.normal[0].length);
              }}
            >
              normal
            </button>
            <button
              onClick={() => {
                setDiff("complex");
                setChangeWidth(600 / MAZEDATA.complex[0].length);
              }}
            >
              complex
            </button>
          </div>
        </div>
        <div className="rightSide">
          <div>
            <canvas
              id="mazeCanvas"
              width="1200"
              height="600"
              style={{ backgroundColor: "pink" }}
              onClick={runGame}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maze;
