import React from 'react'

const PaginationNum = ({pageNumber,paginate,next,prev,currentPage}) => {
   

  return (

<>
<nav aria-label="Page navigation example ">
  <ul class="flex items-center -space-x-px h-10 text-base py-16 justify-center">
    <li onClick={prev}>
      <a class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span class="sr-only">Previous</span>
        <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
        </svg>
      </a>
    </li>
  {pageNumber.map((item,i)=>(
 <li onClick={()=>paginate(item)} className={currentPage == i+1 ? " flex items-center justify-center px-4 h-10 leading-tight text-black-500 bg-[#d5d3d3] border border-gray-300 cursor-pointer" : " flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 cursor-pointer"}>
 {item+1}


</li>
  ))}

    <li onClick={next}>
      <a class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span class="sr-only">Next</span>
        <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
      </a>
    </li>
  </ul>
</nav>
</>
  )
}

export default PaginationNum