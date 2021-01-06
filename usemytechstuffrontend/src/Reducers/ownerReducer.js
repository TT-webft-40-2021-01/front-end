import { POST_START, POST_SUCCESS, POST_FAIL } from "../Actions/ownerActions";

const initialState = {
    owner: [
        {
            id: 1,
            renter_id: 1,
            renter_name: 'Test Renter',
            isLoading: false,
            error: '',

        }
    ]
}

const ownerReducer = (state = initialState, action) => {
    switch(action.type){
        case(POST_START):
            return ({
                ...state,
                owner: [...state.owner],
                isLoading: true,
                error: '',
            })
            case(POST_SUCCESS):
                return({
                    ...state,
                    owner: action.paylaod,
                    isLoading: false,
                    error: '',
                })
            case(POST_FAIL):
                return({
                    ...state,
                    isLoading: false,
                    error: action.paylaod,
                })
        default:
            return(state)
    }
}
export default ownerReducer;