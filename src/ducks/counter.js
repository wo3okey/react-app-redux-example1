//기존방식의 #1
const INCREMENT = "counter/increment"
const DECREMENT = "counter/decrement"

//기존방식의 #2
export const increment = () => ({
  type : INCREMENT,
})

export const decrement = () =>({
  type : DECREMENT,
})

//기존방식의 #3
const initialState = {
  count : 0 ,
}

export default (state = initialState, action)=>{
  switch(action.type){
    case INCREMENT:
      return {...state, count : state.count+1 }
    case DECREMENT:
      return {...state, count : state.count-1 }
    default:
      return state
  }
}