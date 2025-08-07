import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss'

interface Props{
    setCurrentPage:(i:number)=>void;
}


const Pagination = ({setCurrentPage}:Props) =>{
    return(
        <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event)=>setCurrentPage(event.selected+1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    )
}

export default Pagination;