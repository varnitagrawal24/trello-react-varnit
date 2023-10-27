export default function listReduce(state, action) {
  switch (action.type) {
    case "list_data_resolve": {
      return {
        data: [...action.payload],
        loader: false,
        error: state.error,
      };
    }
    case "list_data_reject": {
      return {
        data: state.data,
        loader: state.loader,
        error: true,
      };
    }
    case "create_list": {
      return {
        data: [...state.data, action.payload],
        loader: state.loader,
        error: state.error,
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
