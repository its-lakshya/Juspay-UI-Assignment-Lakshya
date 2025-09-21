import { useState } from "react";
import { useSelector } from "react-redux";
import { PiPlus, PiFunnelSimple, PiArrowsDownUp } from "react-icons/pi";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import OrderTable from "./OrderTable";

import PlusIcon from "../../assets/icons/Plus.svg?react";
import FilterIcon from "../../assets/icons/Filter.svg?react";
import SortIcon from "../../assets/icons/Sort.svg?react";
import SearchIcon from "../../assets/icons/Search.svg?react";
import BackIcon from "../../assets/icons/Back.svg?react";
import NextIcon from "../../assets/icons/Next.svg?react";

const Orders = () => {
  const theme = useSelector((state) => state.theme.theme);
  const [state, setState] = useState({
    searchedOrder: "",
    isSortByStatus: false,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handleSearchedOrder = (e) => {
    setState((prev) => {
      return {
        ...prev,
        searchedOrder: e.target.value,
      };
    });
  };

  const handleSortByStatus = () => {
    setState((prev) => ({
      ...prev,
      isSortByStatus: !prev?.isSortByStatus,
    }));
  };

  return (
    <main className="grid gap-y-5 animate-fade text-text-primary">
      <h2 className={`text-sm font-semibold`} >
        Order List
      </h2>
      <div className='space-y-3'>
      <div className={`bg-bg-surface-light flex items-center justify-between p-2 rounded-md`} >
        <div className="flex items-center gap-2">
          <span className='size-7 flex justify-center items-center hover:bg-bg-hover rounded-md'>
            <PlusIcon className="size-5 fill-current selected-icon" />                
          </span>
          <span className='size-7 flex justify-center items-center hover:bg-bg-hover rounded-md'>
            <FilterIcon className="size-5 fill-current selected-icon" />                
          </span>
          <span className='size-7 flex justify-center items-center hover:bg-bg-hover rounded-md'>
            <SortIcon className="size-5 fill-current selected-icon" onClick={() => handleSortByStatus()} />                
          </span>
        </div>
        <div
          className={`flex items-center gap-1 px-2 py-1 rounded-md border border-border-primary font-light ${
            theme
              ? "bg-[#1C1C1C66] border-[#FFFFFF33]"
              : "bg-[#FFFFFF] border-[#1C1C1C1A]"
          }`}
        >
          <SearchIcon className="size-4 fill-current selected-icon" />                
          <input
            type="text"
            value={state.searchedOrder}
            placeholder="Search"
            onChange={(e) => handleSearchedOrder(e)}
            className={`border-none outline-none bg-transparent w-[100px] text-sm text-text-primary placeholder:text-text-muted`}
          />
        </div>
      </div>
      <OrderTable
        searchedOrder={state?.searchedOrder}
        isSortByStatus={state?.isSortByStatus}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <div className="flex items-center gap-2 justify-center md:justify-end font-light">
        <span
          className={`size-7 hidden md:flex md:items-center md:justify-center rounded-md transition-transform hover:scale-105 duration-500 ease-in-out text-current hover:bg-bg-hover ${
            currentPage === 1
              ? "cursor-not-allowed"
              : `cursor-pointer hover:bg-bg-hover`
          }`}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          <BackIcon className="size-5 fill-current selected-icon" />
        </span>
        {[...Array(totalPages)].map((d, i) => (
          <p
            key={i}
            className={`${ currentPage === i + 1 ? `bg-bg-hover` : "" } cursor-pointer text-sm font-light px-2 py-1 size-7 rounded-md flex items-center justify-center transition-transform hover:scale-105 duration-500 ease-in-out bg-bg-base hover:bg-bg-hover`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </p>
        ))}
        
        <span
          className={`size-7 hidden md:flex md:items-center md:justify-center rounded-md transition-transform hover:scale-105 duration-500 ease-in-out text-current hover:bg-bg-hover ${
            totalPages === currentPage
              ? "cursor-not-allowed"
              : `cursor-pointer hover:bg-bg-hover`
          }`}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        >
          <NextIcon className="size-5 fill-current selected-icon" />
        </span>
      </div>
      </div>
    </main>
  );
};

export default Orders;
