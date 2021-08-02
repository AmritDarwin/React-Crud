import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Book from "./Book";
import BookList from "./Booklist";
import EditBook from './editBook';
import Navbar from "./Navbar";

const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Book} />
                <Route exact path="/books" component={BookList} />
                <Route exact path="/editbook/:id" component={EditBook} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;