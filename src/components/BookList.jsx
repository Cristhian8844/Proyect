import React,{useEffect, useState, } from 'react'
import '../App' ;
import { API_URL } from '../API';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import { useAppContext } from './context/appContext';

const BookList = () => {
   const [books,setBooks ]= useState([]);
   useEffect(() => {
    axios.get(API_URL)
      .then(res => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const navigate = useNavigate();



  return (<div className='book-list'>
      {books.map((book) => (
        <div key={book.id} className='book'>
                <div><h4>{book.title}</h4></div>
                <div><img src={book.image_url} alt='#' onClick={()=>navigate(`/book/${book.id}`)}/></div>

      </div> ))}
      </div>
  )
} 

export default BookList