import React from "react";
import { tableData } from "../../utils/data";

const TopSellingProducts = () => {

  return (
    <div className={`md:col-span-3 bg-bg-surface-light rounded-lg p-6 space-y-1 animate-fade`} >
      <h6 className={`text-sm font-semibold text-text-primary`} > Top Selling Products </h6>
      <table className={`w-full text-xs text-left rtl:text-right`}>
        <thead className='font-light [&>*]:font-light'>
          <tr className={`p-3 border-b border-border-primary [&>*]:font-light [&>*]:text-start [&>*]:py-2 text-text-muted`} >
            <th className="w-[38%]"> Name </th>
            <th className="w-[20%]"> Price </th>
            <th className="w-1/5"> Quantity </th>
            <th className="w-1/5"> Amount </th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((item, index) => (
            <tr className="[&>*]:pr-6 [&>*]:py-3 [&>*]:text-start [&>*]:whitespace-nowrap [&>*]:font-light text-text-primary" key={index}>
              <td> {item.name} </td>
              <td> {item.price} </td>
              <td> {item.quantity} </td>
              <td> {item.amount} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopSellingProducts;
