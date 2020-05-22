import React, { Component } from 'react'
import { Button,Container ,Section,Columns,Heading,Dropdown,Box,List,Form ,Icon} from 'react-bulma-components';
export default class Search extends Component {

    constructor(props){
        super(props);
        this.state={
            search:""
        }
    }

    handleLangChange (e)  {
      
        let {name,value}=e.target;
        this.props.onSelectLanguage({[name]:value});            
    }

    render() {

        const props=this.props;
        return (
            <div>
	<Columns>

<Columns.Column size={4}>
<p>Search</p>

</Columns.Column>

<Columns.Column size={8}>

<Form.Input type="text" name={props.name} value={props.value} onChange={(e) => {
    this.handleLangChange( e);
    }}/>

</Columns.Column>



</Columns>

                
            </div>
        )
    }
}
