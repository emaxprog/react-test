import React, {Component} from 'react';
import axios from 'axios';
import Menu from '../containers/Menu';
import {Container} from 'semantic-ui-react';
import BookCard from '../containers/BookCard';
import Filter from '../containers/Filter';
import {Card} from 'semantic-ui-react';

class App extends Component {
    componentWillMount() {
        const {setBooks} = this.props;
        axios.get('/books.json').then(({data}) => {
            setBooks(data);
        });
    }

    render() {
        const {books, isReady,ownProps} = this.props;
        console.log(ownProps);
        return (
            <Container>
                <Menu/>
                <Filter/>
                <Card.Group itemsPerRow={4}>
                    {
                        !isReady
                            ? 'Загрузка...'
                            : books.map(book => (
                                <BookCard key={book.id} {...book}/>
                            ))
                    }
                </Card.Group>
            </Container>
        );
    };
}

export default App;