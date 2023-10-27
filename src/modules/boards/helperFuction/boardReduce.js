export default function boardReduce(state,action){
    switch(action.type){
        case "board_data_resolve": {
            return {
                data: [...action.payload],
                loader: false,
                error:state.error
            }
        }
        case "board_data_reject": {
            return {
                data: state.data,
                loader: state.loader,
                error:true
            }
        }
        case "create_board": {
            return {
                data: [...state.data,action.payload],
                loader: state.loader,
                error:state.error
            }
        }
    }
}