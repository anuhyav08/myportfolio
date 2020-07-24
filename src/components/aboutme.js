import React, { Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent, Card , CardActions, CardTitle, CardText , CardMenu , IconButton } from 'react-mdl';
import photo from './photo.jpg';


class AboutMe extends Component {
    render() {
    return(
        
        <div style ={{width:'100%', margin: 'auto'}}>
            <Grid className = "landing-grid">
                <Cell col={12}>
                <img src= {photo} className = "img" alt="image" style={{height: '250px'}}/>
                <div className = "banner-text">
                    <h1 style ={{fontFamily:'merienda'}}>Anuhya Vyasam</h1>
                    <h1 style ={{fontFamily:'merienda'}}>Web Developer</h1>
                    <hr/>
                    <p>HTML | CSS | Bootstrap | JavaScript | Angular | MongoDB | ExpressJS | NodeJS</p>
                    
                    <p className = "aboutmesection">Hello! I'm an experienced Web Developer with three years of experience in providing high quality responsive websites. I'm currently pursuing Masters in Applied Information Technology from Towson University. I am extremely passionate about web development, design and all it's forms. 
                        <br/><br/>Aside from web development, I enjoy spending time with my family, travelling, photography and watching movies. </p>
                        <div className = "social-links">
                        {/*LinkedIn*/}
                        <a href = "https://www.linkedin.com/in/anuhyavyasam" style ={{color:'white'}} target= "_blank" className="fa fa-linkedin-square" id = 'item' aria-hidden = "true" rel = "noopener noreferrer"></a>
                        
                         {/*Github*/}
                         <a href = "https://github.com/anuhyav08" style ={{color:'white', marginLeft: '20px'}} target= "_blank" rel = "noopener noreferrer" className="fa fa-github-square" id = 'item' aria-hidden = "true" rel = "noopener noreferrer"></a>
                        

                        {/*codepen*/}
                        {/* <a href = "https://codepen.io/anuhyavyasam" style ={{color:'white'}} target= "_blank" rel = "noopener noreferrer" className="fa fa-codepen"  id = 'item' aria-hidden = "true" rel = "noopener noreferrer"></a> */}
                        
                </div>
                    </div>
                    <br/><br/><br/><br/>
                  <h2 style ={{fontFamily:'merienda', color : 'white'}}>My Projects</h2>
                    <hr/>
                    <Grid className="projects-grid">
          <Cell col={4}>
             {/* Project 1 */}
          <Card className = "cards" style={{width: '350px', backgroundColor: '#FFEEE8'}}>
            <CardTitle style={{color: '#FFF', height: '250px', background: 'url(https://sites.psu.edu/siowfa16/files/2016/10/Coffee-w2mvlg.jpg) center / cover'}} ></CardTitle>
            <CardText style = {{fontFamily: 'merienda', fontSize: '18px', color: 'black'}}>
              PROJECT # 1<br/><br/>COFFEE SHOP WEBSITE<br/><br/>Designed using HTML, CSS, Bootstrap, JQuery
            </CardText>
            <CardActions border>
            <a href = "https://github.com/anuhyav08" style ={{color:'black'}} target= "_blank" rel = "noopener noreferrer" className="fa fa-github-square" id = 'item1' aria-hidden = "true" rel = "noopener noreferrer">GITHUB</a>
                        
            {/* <a href = "https://codepen.io/anuhyavyasam" style ={{color:'black'}} target= "_blank" rel = "noopener noreferrer" className="fa fa-codepen" id = 'item1' aria-hidden = "true" rel = "noopener noreferrer">CODEPEN</a> */}
                        
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </Cell>

          
        
          {/* Project 2 */}
          <Cell col={4}>
         
          <Card className = "cards" style={{minWidth: '350px' , backgroundColor: '#FFEEE8'}}>
          <CardTitle style={{color: '#fff', height: '250px', color:'#fff' , background: 'url(https://cdn.pixabay.com/photo/2014/03/24/17/19/teacher-295387_960_720.png) center / cover'}} ></CardTitle>
          <CardText style = {{fontFamily: 'merienda', fontSize: '18px', color: 'black'}}>
              PROJECT # 2 <br/><br/>MY PORTFOLIO <br/><br/>Designed using ReactJS<br/><br/>
              
            </CardText>
            <CardActions border>
            <a href = "https://github.com/anuhyav08" style ={{color:'black'}} target= "_blank" rel = "noopener noreferrer" className="fa fa-github-square" id = 'item1' aria-hidden = "true" rel = "noopener noreferrer">GITHUB</a>
                        
                        {/* <a href = "https://codepen.io/anuhyavyasam" style ={{color:'black'}} target= "_blank" rel = "noopener noreferrer" className="fa fa-codepen" id = 'item1' aria-hidden = "true" rel = "noopener noreferrer">CODEPEN</a> */}
                           
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </Cell>
          
          {/* Project 3 */}
          <Cell col={4}>
          <Card className = "cards" style={{minWidth: '350px' , backgroundColor: '#FFEEE8'}}>
          <CardTitle style={{color: '#fff', height: '250px', color:'#fff' , background: 'url(https://assets.pcmag.com/media/images/431558-best-android-weather-apps.jpg?thumb=y&width=810&height=456) center / cover'}} ></CardTitle>
          <CardText style = {{fontFamily: 'merienda', fontSize: '18px', color: 'black'}}>
             PROJECT #3 <br/><br/> WEATHER APP<br/><br/>Project is under construction.<br/><br/>
            </CardText>
            <CardActions border>
            <a href = "https://github.com/anuhyav08" style ={{color:'black'}} target= "_blank" rel = "noopener noreferrer" className="fa fa-github-square" id = 'item1' aria-hidden = "true" rel = "noopener noreferrer">GITHUB</a>
                        
                        {/* <a href = "https://codepen.io/anuhyavyasam" style ={{color:'black'}} target= "_blank" rel = "noopener noreferrer" className="fa fa-codepen" id = 'item1' aria-hidden = "true" rel = "noopener noreferrer">CODEPEN</a> */}
                     
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
        
          </Card>
          </Cell>
          </Grid>
          <br/><br/><br/>
          <h2 style ={{fontFamily:'merienda' , color : 'white'}}>Contact Me</h2>
                <hr/>
                <div className="contact-list">
                  <List>
                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'merienda' , color: 'white'}}>
                        <i className="fa fa-phone-square" aria-hidden="true"/>
                        (443)-315-8520
                        
                      </ListItemContent>
                    </ListItem>
                    
                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'merienda', color : 'white'}}>
                        <i className="fa fa-envelope" aria-hidden="true"/>
                        anuhya.30490@gmail.com
                      </ListItemContent>
                    </ListItem>
                    
                  </List>
                    
               
            </div>
         
            </Cell>
            </Grid>
            </div>
  
        
        
    );
}
};

export default AboutMe;
