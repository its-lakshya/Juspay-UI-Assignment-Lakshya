import { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { MdCheckBox } from "react-icons/md";
import {
  PiCalendarBlank,
  PiClipboardText,
  PiDotsThreeBold,
  PiSquareLight,
} from "react-icons/pi";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ordersList } from "../../utils/data";

const statusPriority = {
  Approved: 1,
  Pending: 2,
  "In Progress": 3,
  Complete: 4,
  Rejected: 5,
};

const OrderTable = ({ searchedOrder, isSortByStatus, currentPage }) => {
  const theme = useSelector((state) => state.theme.theme);
  //eslint-disable-next-line
  const [ordersData, setOrdersData] = useState(ordersList);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [checkedIDs, setCheckedIDs] = useState([]);
  const [isAllChecked, setIsAllChecked] = useState(false);

  const itemsPerPage = 10;
  // const totalPages = 5;

  const statusColor = {
    "In Progress": "#8A8CD9",
    Complete: "#4AA785",
    Pending: "#59A8D4",
    Approved: "#FFC555",
    Rejected: theme ? "#FFFFFF66" : "#1C1C1C66",
  };

  // Update filtered orders on search, sort, or pagination
  useEffect(() => {
    let list = [...ordersData];

    if (searchedOrder) {
      const term = searchedOrder.toLowerCase();
      list = list.filter(
        (o) =>
          o.name?.toLowerCase().includes(term) ||
          o.project?.toLowerCase().includes(term) ||
          o.address?.toLowerCase().includes(term) ||
          o.status?.toLowerCase().includes(term)
      );
    }

    if (isSortByStatus) {
      list.sort((a, b) => statusPriority[a.status] - statusPriority[b.status]);
    }

    const start = (currentPage - 1) * itemsPerPage;
    const paginated = list.slice(start, start + itemsPerPage);
    setFilteredOrders(paginated);
  }, [searchedOrder, ordersData, isSortByStatus, currentPage]);

  // Update select-all checkbox
  useEffect(() => {
    const visibleIDs = filteredOrders.map((order) => order.id);
    const allSelected =
      visibleIDs.length > 0 &&
      visibleIDs.every((id) => checkedIDs.includes(id));
    setIsAllChecked(allSelected);
  }, [filteredOrders, checkedIDs]);

  const toggleSelectAll = () => {
    const visibleIDs = filteredOrders.map((o) => o.id);
    const updated = isAllChecked
      ? checkedIDs.filter((id) => !visibleIDs.includes(id))
      : Array.from(new Set([...checkedIDs, ...visibleIDs]));

    setCheckedIDs(updated);
  };

  const toggleSelectOne = (id) => {
    const updated = checkedIDs.includes(id)
      ? checkedIDs.filter((item) => item !== id)
      : [...checkedIDs, id];
    setCheckedIDs(updated);
  };

  const handleCopyAddress = (address) => {
    navigator.clipboard.writeText(address);
    toast.success("Address Copied.");
  };

  return (
    <div className="relative overflow-x-auto sm:rounded-lg text-text-primary text-xs">
      <table className="w-full text-sm text-left rtl:text-right">
        <thead>
          <tr className="border-b-[1.3px] border-border-primary text-text-muted text-xs [&>*]:font-light [&>*]:text-xs">
            <th className="px-2 py-2">
              {isAllChecked ? (
                <MdCheckBox
                  size={16}
                  className="text-bg-surface-dark cursor-pointer"
                  onClick={toggleSelectAll}
                />
              ) : (
                <PiSquareLight
                  size={16}
                  className="text-text-muted cursor-pointer"
                  onClick={toggleSelectAll}
                />
              )}
            </th>
            <th>Order ID</th>
            <th>User</th>
            <th>Project</th>
            <th>Address</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {filteredOrders.map((order) => {
            const isChecked = checkedIDs.includes(order.id);

            return (
              <tr
                key={order.id}
                className="group border-b-[0.3px] border-border-primary hover:bg-bg-surface-light [&>*]:font-light [&>*]:text-xs [&>*]:py-2"
              >
                <td className="px-2 py-2 rounded-l-md group text-text-muted">
                  {isChecked ? (
                    <MdCheckBox
                      size={16}
                      className="text-bg-surface-dark cursor-pointer"
                      onClick={() => toggleSelectOne(order.id)}
                    />
                  ) : (
                    <PiSquareLight
                      size={16}
                      className="text-text-muted cursor-pointer opacity-0 group-hover:opacity-100"
                      onClick={() => toggleSelectOne(order.id)}
                    />
                  )}
                </td>

                <td>{order.id}</td>

                <td className="flex items-center gap-2">
                  <img
                    src={order.image}
                    alt={order.name}
                    className="size-6 rounded-full object-cover"
                  />
                  <p className="whitespace-nowrap">{order.name}</p>
                </td>

                <td className="whitespace-nowrap">{order.project}</td>

                <td className="whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    <p className="whitespace-nowrap">{order.address}</p>
                    <PiClipboardText
                      size={24}
                      className="p-1 invisible group-hover:visible cursor-pointer hover:bg-bg-hover rounded-md transition-transform hover:scale-105"
                      onClick={() => handleCopyAddress(order.address)}
                    />
                  </div>
                </td>

                <td className="whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    <PiCalendarBlank size={16} />
                    <p>{order.date}</p>
                  </div>
                </td>

                <td
                  className="whitespace-nowrap rounded-r-md"
                  style={{ color: statusColor[order.status] }}
                >
                  <div className="relative flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1">
                      <GoDotFill size={12} />
                      <p className="whitespace-nowrap line-clamp-1">
                        {order.status}
                      </p>
                    </div>
                    <PiDotsThreeBold
                      size={24}
                      strokeWidth={1.5}
                      className="absolute text-text-primary right-3 p-1 invisible group-hover:visible cursor-pointer hover:bg-bg-hover rounded-md transition-transform hover:scale-105 bg-transparent"
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
