export default function checklistReduce(state, action) {
  switch (action.type) {
    case "checklist_data_resolve": {
      return {
        ...state,
        data: [...action.payload],
        loader: false,
      };
    }
    case "create_checklist": {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }
    case "delete_checklist": {
      return {
        ...state,
        data: state.data.filter((ele) => ele.id != action.payload),
      };
    }
  }
}
