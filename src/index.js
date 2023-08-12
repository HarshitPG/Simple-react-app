import React from 'react';
import ReactDOM from 'react-dom/client'; 

import "./index.css"

import {books} from './books.js' 

import Book from './Book.js'

const BookList = () => {
    return(
        <>
        <h1>Amazon Best Sellers</h1>
        <section className="booklist">
           {books.map((book)=>{
            return <Book {...book} key={book.id}/>;
           })}
        </section>
        </>
    );
};

const root= ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList/>)