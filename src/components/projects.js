import React, { Component } from 'react';
import { Grid, Card, Cell, CardTitle, CardText, CardActions, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  render() {

    return (

      <div className="projects-body">


        <Grid className="projects-grid">
        <Cell col={4}>
          {/* Project 1 */}
          <Card className="cards" style={{ minWidth: '350px', marginTop: '100px', backgroundColor: '#FFEEE8' }}>
            <CardTitle style={{ color: '#FFF', height: '300px', background: 'url(https://sites.psu.edu/siowfa16/files/2016/10/Coffee-w2mvlg.jpg) center / cover' }} ></CardTitle>
            <CardText style={{ fontFamily: 'merienda', fontSize: '18px', color: 'black' }}>
              PROJECT # 1<br /><br />COFFEE SHOP WEBSITE<br /><br />Designed using HTML, CSS, Bootstrap, JQuery
            </CardText>
            <CardActions border>
              <a href="https://github.com/anuhyavyasam/coffee-shop" style={{ color: 'black' }} target="_blank" rel="noopener noreferrer" className="fa fa-github-square" id='item1' aria-hidden="true" rel="noopener noreferrer">GITHUB</a>

              {/* <a href="https://codepen.io/anuhyavyasam" style={{ color: 'black' }} target="_blank" rel="noopener noreferrer" className="fa fa-codepen" id='item2' aria-hidden="true" rel="noopener noreferrer">CODEPEN</a> */}

            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </Cell>
         
          {/* Project 2 */}
          <Cell col={4}>
          <Card className="cards" style={{ minWidth: '350px', marginTop: '100px', backgroundColor: '#FFEEE8' }}>
            <CardTitle style={{ color: '#fff', height: '300px', color: '#fff', background: 'url(https://cdn.pixabay.com/photo/2014/03/24/17/19/teacher-295387_960_720.png) center / cover' }} ></CardTitle>
            <CardText style={{ fontFamily: 'merienda', fontSize: '18px', color: 'black' }}>
              PROJECT # 2 <br /><br />MY PORTFOLIO <br /><br />Designed using ReactJS<br /><br />

            </CardText>
            <CardActions border>
              <a href="https://github.com/anuhyavyasam" style={{ color: 'black' }} target="_blank" rel="noopener noreferrer" className="fa fa-github-square" id='item1' aria-hidden="true" rel="noopener noreferrer">GITHUB</a>

              {/* <a href="https://codepen.io/anuhyavyasam" style={{ color: 'black' }} target="_blank" rel="noopener noreferrer" className="fa fa-codepen" id='item2' aria-hidden="true" rel="noopener noreferrer">CODEPEN</a> */}


            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </Cell>
        
          {/* Project 3 */}
          <Cell col={4}>
          <Card className="cards" style={{ minWidth: '350px', marginTop: '100px', backgroundColor: '#FFEEE8' }}>
            <CardTitle style={{ color: '#fff', height: '300px', color: '#fff', background: 'url(https://assets.pcmag.com/media/images/431558-best-android-weather-apps.jpg?thumb=y&width=810&height=456) center / cover' }} ></CardTitle>
            <CardText style={{ fontFamily: 'merienda', fontSize: '18px', color: 'black' }}>
              PROJECT #3 <br /><br /> WEATHER APP<br /><br />Project is under construction.<br /><br />
            </CardText>
            <CardActions border>
              <a href="https://github.com/anuhyavyasam" style={{ color: 'black' }} target="_blank" rel="noopener noreferrer" className="fa fa-github-square" id='item1' aria-hidden="true" rel="noopener noreferrer">GITHUB</a>

              {/* <a href="https://codepen.io/anuhyavyasam" style={{ color: 'black' }} target="_blank" rel="noopener noreferrer" className="fa fa-codepen" id='item2' aria-hidden="true" rel="noopener noreferrer">CODEPEN</a> */}

            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
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

export default Projects;
