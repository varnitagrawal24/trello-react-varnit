export default function cardReduce(state, action) {
  switch (action.type) {
    case "card_data_resolve": {
      return {
        ...state,
        data: [...action.payload],
        loader: false,
      };
    }
    case "create_card": {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }
    case "delete_card": {
      return {
        ...state,
        data: state.data.filter((ele) => ele.id != action.payload),
      };
    }
  }
}
