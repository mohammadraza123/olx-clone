import React from 'react'

const Pagination = ({page,setPage}) => {

const handleNext =()=>{
setPage(page+1)
}

const handlePrev =()=>{
  setPage(page-1)
  }

  return (
    <div className="flex justify-center gap-3 pt-5">
      {page >=2 ?  (
        <button
          className="p-1 rounded-md px-2 bg-blue-800 text-sm text-white"
          onClick={handlePrev}
        >
          PREV
        </button>
      ) : null}

      <p className="font-semibold">{page} of 16</p>
      <button
        className="p-1 rounded-md px-2 bg-blue-800 text-sm text-white"
        onClick={handleNext}
      >
        NEXT
      </button>
    </div>
  );
}

export default Pagination