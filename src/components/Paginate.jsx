import React from 'react'
import './styles/paginate.css'
const Paginate = ({page, setPage, total}) => {

    const handleLess = (num) => {
        if (page > num) {
            setPage(page - num)
        }
        else{
            setPage(total)
        }
    }
    const handlePlus = (num) => {
        if (page <= total - num) {
            setPage(page + num)
        }
        else{
            setPage(1)
        }
    }

    return (
    <div className='pag'>
        <button className='pag_but' onClick={() => {handleLess(10)}}>{'<<<'}</button>
        <button className='pag_but' onClick={() => {handleLess(5)}}>{'<<'}</button>
        <button className='pag_but' onClick={() => {handleLess(1)}}>{'<'}</button>
        <span className='pag_span'>{page} / {total} </span>
        <button className='pag_but' onClick={() => {handlePlus(1)}}>{'>'}</button>
        <button className='pag_but' onClick={() => {handlePlus(5)}}>{'>>'}</button>  
        <button className='pag_but' onClick={() => {handlePlus(10)}}>{'>>>'}</button>      
    </div>
  )
}

export default Paginate     