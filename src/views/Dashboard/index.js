import React, { Component, Suspense } from 'react';

import Search from './Search';

import { Button,Container ,Section,Columns,Heading,Dropdown,Box,List,Form } from 'react-bulma-components';

import { connect } from 'react-redux';


import  {getEmployeeList,getSurveyList,getAssignList,createAssignList,deleteAssignList}  from './../../redux/actions'



class Dashboard extends Component{


  constructor(props){

    super(props);
      this.state={
        employee:"",
        survey_search:"",
        assign_search:"",
        surveyList:[],
        assignList:[]
      }
  }



  	 async componentDidMount(){


     this.props.getEmployeeList();

     this.props.getSurveyList().then(data=>{

       this.setState({surveyList:data.data});
    });

    this.getAssignListArray(false);


   }



   deleteData(id){
 this.props.deleteAssignList({id:id}).then(data=>{
  this.getAssignListArray();
 });

   }

   getAssignListArray(flag=true,s=null){


    if(flag){

      if(this.state.employee==""){
        alert("employee is not selected"); 
        return 0;
       }
    }
    

     let search={
      employee_id:this.state.employee
     };

     if(this.state.assign_search!=""){

      search['search']=s?s:this.state.assign_search;
     }
     

   
     this.props.getAssignList(search).then(res=>{

            this.setState({assignList:res.data});
     });
   }


   assignSurvey(employee,id){

     if(employee==""){
      alert("employee is not selected"); 
      return 0;
     }



     this.props.createAssignList({employee_id:employee,survey_id:id}).then(res=>{

      this.getAssignListArray();

     });
   
  
    }

   


   handleChange(e) {
    let {name, value} = e.target;
     this.setState({
      [name]: value,
    
    });
  }    


  renderSurveyList(){

    return this.state.surveyList.map(data=>{

      return ( <List.Item>	<Columns>
        <Columns.Column size={8}>
	       <p>{data.title}</p>
         </Columns.Column>
        <Columns.Column size={4}>
        <Button.Group
         >
	<Button
          onClick={(e)=>{this.assignSurvey(this.state.employee,data._id)}}
          renderAs="span"
          color="success"
        >
          +
        </Button>
        </Button.Group>
  </Columns.Column>
         
        </Columns>
        
        
        </List.Item>
 )
    })
    }


   renderDropDown(data){

    let arr=[];
    

    if(typeof data !="undefined"){

      arr.push(<option value="">Select Employee</option>)
       data.data.map(item=>{
        arr.push( <option value={item._id} >
        {item.title}
      </option>);
       });

    
    }
   
  

   return arr;


   }


   setSearchBrar=(search)=>{
    
    this.setState(search)

     let s="";

     if(search.hasOwnProperty("survey_search")){
         s=search['survey_search'];
     }else{
       s=search['assign_search'];


     }


     if(search.hasOwnProperty("assign_search")){


      this.getAssignListArray(false,s);


     }else{


      this.props.getSurveyList({search:s}).then(data=>{

        this.setState({surveyList:data.data});
     });
     }


   

   }
   

   renderAssignList(){


   return  this.state.assignList.map(item=>{
      return ( <List.Item>	
        <Columns>
        <Columns.Column size={8}>
         <p>{item.user_details.title}</p>
         </Columns.Column>
        <Columns.Column size={4}>
        <Button.Group
         >
  <Button
          renderAs="span"
          color="success"
        >
          +
        </Button>
  
        <Button
          onClick={(e)=>{
            this.deleteData(item._id)
          }}
          renderAs="span"
          color="danger"
        >
          X
        </  Button>
        </Button.Group>
  </Columns.Column>
         
        </Columns>
        
        
        </List.Item>);
    })
    
   }


   changeSelectBox(e){

    this.setState({employee: e.target.value});

    setTimeout(() => {
      this.getAssignListArray();
    }, 500);
  }
	

	render(){

    const {auth} =this.props;  
    
   
    
	return (<div>

		<Section >
		
		<Container fluid>
		
		<div class="flex">

		<Heading size={5} renderAs="p" >Select Employee</Heading>
		</div>
        <div class="flex">
    <Form.Select onChange={(e) => {this.changeSelectBox(e)
   
  }} name="employee" value={this.state.employee}
   >
       {this.renderDropDown(auth)}
         </Form.Select>
		</div>

		<Columns>

		<Columns.Column size={4}>
		<Box>
		<div class="flex">

<Heading size={6} renderAs="p" >Survey List</Heading>
</div>
        <List hoverable>
        <List.Item><Search name="survey_search" value={this.state.survey_search}
        onSelectLanguage={this.setSearchBrar}
        /></List.Item>
        {this.renderSurveyList()}
        
      </List>

		</Box>
		</Columns.Column>

		<Columns.Column size={4}>
	
		</Columns.Column>

		<Columns.Column size={4}>
		<Box>
    <div class="flex">

<Heading size={6} renderAs="p" >Assigned Surveys</Heading>
</div>
        <List hoverable>
        <List.Item><Search name="assign_search"
        value={this.state.assign_search}
        onSelectLanguage={this.setSearchBrar}
        /></List.Item>

      {this.renderAssignList()}
        
      </List>

		</Box>
		</Columns.Column>

		</Columns>
	
		</Container>
		</Section>
		</div>)
}

}

const mapStateToProps = state => {


	return {
		auth :state.simpleReducer.result
	}
}



export default connect(mapStateToProps, {getEmployeeList,getSurveyList,getAssignList,deleteAssignList,createAssignList})(Dashboard);

