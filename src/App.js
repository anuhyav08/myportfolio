import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from "./components/main";
import { Link } from 'react-router-dom';
function App() {
    return (
        <div className="demo-big-content">
            <Layout>
                <Header className="header-color" title=" " scroll>
                    <Navigation>

                        <Link to="/"></Link>
                        <Link to="/aboutme"><div className="links" style={{ fontFamily: 'merienda', fontSize: '15px' }}>ABOUT ME</div></Link>
                        <Link to="/resume"><div className="links" style={{ fontFamily: 'merienda', fontSize: '15px' }}>RESUME</div></Link>
                        <Link to="/projects"><div className="links" style={{ fontFamily: 'merienda', fontSize: '15px' }}>PROJECTS</div></Link>
                        <Link to="/contact"><div className="links" style={{ fontFamily: 'merienda', fontSize: '15px' }}>CONTACT</div></Link>
                    </Navigation>
                </Header>
                <Drawer>
                    <Navigation>
                        <Link to="/aboutme"><div className="drawer" style={{ fontFamily: 'merienda', fontSize: '15px' }}>ABOUT ME</div></Link>
                        <Link to="/resume"><div className="drawer" style={{ fontFamily: 'merienda', fontSize: '15px' }}>RESUME</div></Link>
                        <Link to="/projects"><div className="drawer" style={{ fontFamily: 'merienda', fontSize: '15px' }}>PROJECTS</div></Link>
                        <Link to="/contact"><div className="drawer" style={{ fontFamily: 'merienda', fontSize: '15px' }}>CONTACT</div></Link>

                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main />
                </Content>
            </Layout>

        </div>
    );
}

export default App;
