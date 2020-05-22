/* 
  src/reducers/simpleReducer.js
*/
export default (state = {}, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
        return Object.assign({}, state, {
          result: action.payload
        });
        

   case 'EMPLOYEE_CREATE':
      return Object.assign({}, state, {
          result: action.payload
        });
        
        case 'EMPLOYEE_INDEX':
        return Object.assign({}, state, {
            result: action.payload
          }) 
          
          case 'SURVEY_INDEX':
          return Object.assign({}, state, {
              surevey: action.payload
            })  
    default:
      return state
  }
}