import React from 'react';
import ReactPaginate from 'react-paginate';
import Items from './Items';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];


function Pagination({ itemsPerPage }) {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const count = Math.ceil(items.length / itemsPerPage);

    const handleClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <Pagination
                breakLabel="..."
                nextLabel="next >"
                onChange={handleClick}
                pageRangeDisplayed={5}
                Count={count}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </>
    );
}

export default Pagination;
