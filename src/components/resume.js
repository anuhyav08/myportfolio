import React, { Component } from 'react';
import { Grid , Cell} from 'react-mdl';

 
class Resume extends Component {
  render() {
    return (
    <div className = "resumebody">
      <Grid className="contact-grid">
      <Cell col={12} style={{textAlign:'center'}}>
      <button style = {{backgroundColor:'#bf765c', padding: '8px 20px',textAlign : 'center', borderRadius:'15px' }}>
  <a style = {{textDecorationLine: 'none'}} href="" target="_blank"><div style = {{color : 'white', fontFamily : 'merienda', fontSize: '24px'}}>My Resume</div></a>
  </button> 
  </Cell>
      </Grid>

    </div>
    );
  }
}

export default Resume;
