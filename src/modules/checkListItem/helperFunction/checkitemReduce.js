export default function checkitemReduce(state, action) {
    switch (action.type) {
      case "create_checkitem": {
        return {
          ...state,
          data: [...state.data, action.payload],
        };
      }
      case "delete_checkitem": {
        return {
          ...state,
          data: state.data.filter((ele) => ele.id != action.payload),
        };
      }
      case "update_checkitem": {
        return {
          ...state,
          data: state.data.map((ele,index)=>{ 
            if (ele.id === action.payload.id) {
                ele={...action.payload}
                //   ele.state=45;
              }
              return ele;
          })
        };
      }
    }
  }