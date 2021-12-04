import { MAZEDATA } from "../../constant/mazedata";


const INIT_STATE = {

  cordinate: [
    ["p", "b", "w", "b", "b", "b", "b", "b"],
    ["w", "b", "b", "b", "b", "b", "w", "b"],
    ["w", "b", "w", "w", "w", "w", "e", "b"],
    ["w", "b", "w", "w", "w", "w", "b", "w"],
  ],
};

//action.payload
const MazeReducer = (state = INIT_STATE, action) => {
  console.log("hhh", state.cordinate)
  console.log("lll", MAZEDATA["easy"][1])
  switch (action.type) {
    case "MOVEMENT1": {
      console.log(1)
      // console.log("here", state.array);
      let temp1, temp2, changeRow;
      let result = [];
      let diff = action.newX - action.x;


      //往左右移动
      if (diff === 0) {
        changeRow = state.cordinate[action.newX];
        temp1 = state.cordinate.slice(0, action.newX);
        temp2 = state.cordinate.slice(action.newX + 1);


        //assign新的值
        changeRow[action.newY] = "p";
        changeRow[action.y] = "b";

        //push temp1
        for (let i = 0; i < temp1.length; i++) {
          result.push(temp1[i]);
        }

        //push changeRow
        result.push(changeRow);

        //push temp2
        for (let z = 0; z < temp2.length; z++) {
          result.push(temp2[z]);
        }

        return {
          ...state,
          //变成新的result
          cordinate: result,
        };
      }

      //往下移动
      else if (diff > 0) {
        changeRow = state.cordinate.slice(action.x, action.newX + 1);
        temp1 = state.cordinate.slice(0, action.x);
        temp2 = state.cordinate.slice(action.newX + 1);

        changeRow[1][action.newY] = "p";
        changeRow[0][action.y] = "b";
        for (let i = 0; i < temp1.length; i++) {
          result.push(temp1[i]);
        }

        for (let j = 0; j < 2; j++) {
          result.push(changeRow[j]);
        }

        for (let z = 0; z < temp2.length; z++) {
          result.push(temp2[z]);
        }
        return {
          ...state,
          cordinate: result,
        };
      }

      //往上移动
      else {
        changeRow = state.cordinate.slice(action.newX, action.x + 1);
        temp1 = state.cordinate.slice(0, action.newX);
        temp2 = state.cordinate.slice(action.x + 1);

        changeRow[0][action.newY] = "p";
        changeRow[1][action.y] = "b";

        for (let i = 0; i < temp1.length; i++) {
          result.push(temp1[i]);
        }

        for (let j = 0; j < 2; j++) {
          result.push(changeRow[j]);
        }

        for (let z = 0; z < temp2.length; z++) {
          result.push(temp2[z]);
        }
        return {
          ...state,
          cordinate: result,
        };
      }

    }
    case "CHECKDIFF": {
      console.log(2)

      let result = MAZEDATA["easy"][1]
      console.log('result', result)
      // let result = temp[action.difficulty][action.index].slice(0)
      // console.log("result", state.array);
      // state.array[action.difficulty][action.index];
      return {
        ...state,
        cordinate: result,
      };
    }
    default:
      return state;
  }
};

export default MazeReducer;

//x=1,newx=0
// ["p", "b", "w", "w", "w", "w", "w", "w"],
// ["w", "b", "b", "b", "b", "b", "b", "w"],
// ["w", "w", "w", "w", "w", "w", "b", "w"],
// ["w", "w", "w", "w", "w", "w", "b", "e"],
//  case "MOVEMENT": {
//       let temp1, temp2, changeRow;
//       let result = [];
//       // console.log([action.x], [action.y], [action.newX], [action.newY], 1243);

//       if (action.newY !== 0 && action.newY !== 3) {
//         changeRow = state.cordinate[action.newY];
//         temp1 = state.cordinate.slice(0, action.newY);
//         temp2 = state.cordinate.slice(action.newY + 1);

//         if (changeRow.includes("p")) {
//           changeRow[action.x] = "b";
//         } else {
//           let arr = action.newY - action.y > 0 ? temp1 : temp2;
//           if (arr.length > 1) {
//             arr.forEach((element) => {
//               if (element.includes("p")) {
//                 element[action.x] = "b";
//               }
//             });
//           } else {
//             arr[action.x] = "b";
//           }
//         }

//         changeRow[action.newX] = "p";
//         // console.log(111, temp1.concat(changeRow, temp2));
//         return {
//           ...state,
//           cordinate: temp1.concat(changeRow, temp2),
//         };
//       } else {
//         if (action.newY === 0) {
//           changeRow = state.cordinate[0];
//           temp1 = state.cordinate.slice(1);

//           if (changeRow.includes("p")) {
//             changeRow[action.x] = "b";
//           } else {
//             temp1[action.y - 1][action.x] = "b";
//           }

//           changeRow[action.newX] = "p";
//           result.push(changeRow);
//           result.push(temp1);

//           console. (222, result.length, result);

//           return {
//             ...state,
//             cordinate: result,
//           };
//         } else {
//           changeRow = state.cordinate[3];
//           temp1 = state.cordinate.slice(0, 3);

//           if (changeRow.includes("p")) {
//             changeRow[action.x] = "b";
//           } else {
//             temp1[action.y][action.x] = "b";
//           }

//           changeRow[action.newX] = "p";
//           console.log(333, temp1.concat(changeRow));

//           return {
//             ...state,
//             cordinate: temp1.concat(changeRow),
//           };
//         }
//       }
//     }
