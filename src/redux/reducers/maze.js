const INIT_STATE = {
  cordinate: [
    ["p", "b", "w", "w", "w", "w", "w", "w"],
    ["w", "b", "b", "b", "b", "b", "b", "w"],
    ["w", "w", "w", "w", "w", "w", "b", "w"],
    ["w", "w", "w", "w", "w", "w", "b", "e"],
  ],
};

//action.payload
const MazeReducer = (state = INIT_STATE, action) => {
  // var temp1 = null;
  // var temp2 = null;
  // var changeRow = null;
  switch (action.type) {
    case "MOVEMENT": {
      let temp1, temp2, changeRow;
      let result = [];
      console.log([action.x], [action.y], [action.newX], [action.newY], 1243);

      if (action.newY !== 0 && action.newY !== 3) {
        changeRow = state.cordinate[action.newY];
        temp1 = state.cordinate.slice(0, action.newY);
        temp2 = state.cordinate.slice(action.newY + 1);

        if (changeRow.includes("p")) {
          changeRow[action.x] = "b";
        } else {
          let arr = action.newY - action.y > 0 ? temp1 : temp2;
          if (arr.length > 1) {
            arr.forEach((element) => {
              if (element.includes("p")) {
                element[action.x] = "b";
              }
            });
          } else {
            arr[action.x] = "b";
          }
        }

        changeRow[action.newX] = "p";
        // console.log(111, temp1.concat(changeRow, temp2));
        return {
          ...state,
          cordinate: temp1.concat(changeRow, temp2),
        };
      } else {
        if (action.newY === 0) {
          changeRow = state.cordinate[0];
          temp1 = state.cordinate.slice(1);

          if (changeRow.includes("p")) {
            changeRow[action.x] = "b";
          } else {
            temp1[action.y - 1][action.x] = "b";
          }

          changeRow[action.newX] = "p";
          result.push(changeRow);
          result.push(temp1);

          console.log(222, result.length, result);

          return {
            ...state,
            cordinate: result,
          };
        } else {
          changeRow = state.cordinate[3];
          temp1 = state.cordinate.slice(0, 3);

          if (changeRow.includes("p")) {
            changeRow[action.x] = "b";
          } else {
            temp1[action.y][action.x] = "b";
          }

          changeRow[action.newX] = "p";
          console.log(333, temp1.concat(changeRow));

          return {
            ...state,
            cordinate: temp1.concat(changeRow),
          };
        }
      }

      // console.log("changeRow", changeRow);
      // console.log("temp1", temp1);
      // console.log("temp2", temp2);

      return {
        ...state,
        // Array: [[]],
      };
    }
    default: {
      return state;
    }
  }
};

export default MazeReducer;
//P[0,0] B[0,1]
//B[action.newY,action.newX]
//p[action.y,action.x]
