import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss'

interface Props{
    setCurrentPage:(i:number)=>void;
    value:number
}


const Pagination = ({value,setCurrentPage}:Props) =>{
    return(
        <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event)=>setCurrentPage(event.selected+1)}
        pageRangeDisplayed={4}
        forcePage={value-1}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    )
}

export default Pagination;