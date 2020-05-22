/* 
  src/actions/simpleAction.js
*/

import axios from 'axios';

let baseUrl='http://13.235.242.81:4003/employee/'

export const createEmployee=()=>dispatch =>{

  
axios.get()
      .then(res => {
       dispatch({
			  type: 'EMPLOYEE_CREATE',
			  payload: res.data
		  });
 });
}



export const getEmployeeList=(Obj)=>dispatch =>{

  
  axios.post(baseUrl+'index',Obj)
        .then(res => {
          console.log({res})
         dispatch({
          type: 'EMPLOYEE_INDEX',
          payload: res.data
        });
   });
  }



  export const getAssignList=(Obj)=>dispatch =>{

    
  
  return  axios.post(baseUrl+'index-assign-survey',Obj)
          .then(res => {
            console.log({res})
           dispatch({
            type: 'Assign_INDEX',
            payload: res.data
          });

          return res.data;
     });
    }


    export const createAssignList=(Obj)=>dispatch =>{

    
  
      return  axios.post(baseUrl+'create-assign-survey',Obj)
              .then(res => {
              return res.data;
         });
        }



        export const deleteAssignList=(Obj)=>dispatch =>{

    
  
          return  axios.post(baseUrl+'delete-assign-survey',Obj)
                  .then(res => {
                  return res.data;
             });
            }
    


  export const getSurveyList=(Obj)=>dispatch =>{

    console.log(Obj);
  
  return  axios.post(baseUrl+'survey-index',Obj)
          .then(res => {
            console.log({res})
           dispatch({
            type: 'SURVEY_INDEX',
            payload: res.data
          });

          return res.data;
     });
    }