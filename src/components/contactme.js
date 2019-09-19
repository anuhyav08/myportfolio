import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import photo from './photo.jpg'


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={5}>
          <h2 style ={{fontFamily:'merienda'}}>Anuhya Vyasam</h2>
            <img
              src={photo}
              alt="mypic"
              style={{height: '250px' , borderRadius : '200px'}}
               />
             
          </Cell>
          <Cell col={7}>
          <h2 style ={{fontFamily:'merienda'}}>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'merienda', color : 'white'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    <div style ={{fontFamily:'merienda'}}>(443)-315-8520</div>
                  </ListItemContent>
                </ListItem>
            
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'merienda' ,  color : 'white'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    <div style ={{fontFamily:'merienda'}}>anuhya.30490@gmail.com</div>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'merienda' , color: 'white'}}>
                    
                    <a href = "https://www.linkedin.com/in/anuhyavyasam" target= "_blank" className="fa fa-linkedin" id = "social" aria-hidden="true"/>LinkedIn Profile
                  </ListItemContent>
                </ListItem>
                </List>
                
                </div>
                </Cell>
                </Grid>
                <section>
          <br /><br /><br />
        </section>
        <section>
          <br /><br/><br />
        </section>
        <section>
          <br /><br /><br />
        </section>
        <section>
          <br /><br /><hr /><br />
        </section>
                </div>
                
             )
             
  }
}
export default Contact;