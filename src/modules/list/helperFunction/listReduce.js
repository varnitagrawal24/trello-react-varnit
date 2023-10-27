export default function listReduce(state, action) {
  switch (action.type) {
    case "list_data_resolve": {
      return {
        ...state,
        data: [...action.payload],
        loader: false,
      };
    }
    case "list_data_reject": {
      return {
        ...state,
        error: true,
      };
    }
    case "create_list": {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }
    case "delete_list": {
      return {
        ...state,
        data: state.data.filter((ele) => ele.id != action.payload),
      };
    }
  }
}
