import React, {Component} from 'react';
import Menu from '../containers/Menu';
import {Container} from 'semantic-ui-react';
import Filter from '../containers/Filter';

class About extends Component {
    render() {
        return (
            <Container>
                <Menu/>
                <Filter/>
                About
            </Container>
        );
    };
}

export default About;