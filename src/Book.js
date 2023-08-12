const Book = ({img,title,author,id}) =>{
    return(
        <article className='book'>
            <img src={img}/>
            <h1>{title}</h1>
            <h4>{author}</h4>
            <span className="number">#{id}</span>
        </article>
    );
};
export default Book;