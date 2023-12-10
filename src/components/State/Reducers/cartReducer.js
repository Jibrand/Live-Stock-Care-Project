const reducer = (state = [], action) => {
   
      if (action.type === 'ADDTOCART') {
        return [...state, { name: action.payload.name, prize: action.payload.prize }];
      
      }
    else{
        return state
    }
}
export default reducer