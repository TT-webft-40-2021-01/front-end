const initialState = {
    owner: [
        {
            id: 1,
            renter_id: 1,
            renter_name: 'Test Renter',

        }
    ]
}

const ownerReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return(state)
    }
}
export default ownerReducer;