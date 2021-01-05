const initialState = {
    renter: [
        {
            id: 1,
            renter_id: 1,
            renter_name: 'Test Renter',

        }
    ]
}

const renterReducer = (state = initialState, action)=>{
    switch(action.type){
        default:
            return(state)
    }
}
export default renterReducer;