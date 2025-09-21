import { useState } from "react";
import { LiaAngleDownSolid, LiaAngleRightSolid } from "react-icons/lia";

const MenuItem = ({ page, index }) => {
  const [state, setState] = useState({ isOpen: true });
  const [openIndex, setOpenIndex] = useState(0);

  const togglePages = (index) => {
    setState((prevState) => ({ isOpen: !prevState.isOpen }));
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div key={index} className="flex flex-col gap-1 text-text-primary">
      <div
        className={`hover:bg-bg-hover group relative px-3 py-1 flex items-center gap-1 rounded-md cursor-pointer transition-transform hover:scale-105 duration-500 ease-in-out `}
        onClick={() => page?.children?.length !== 0 && togglePages(index)}
      >
        {page?.children &&
          (state?.isOpen && openIndex === index ? (
            <LiaAngleDownSolid className="text-text-muted -ml-0.5 size-3" />
          ) : (
            <LiaAngleRightSolid className="text-text-muted -ml-0.5 size-3" />
          ))}
        <div className="flex items-center gap-1">
          <page.icon className='size-5 fill-current selected-icon' />
          {page?.name}
        </div>
      </div>

      {
        page?.children?.length !== 0 &&
          openIndex === index &&
          page?.children?.map((page, i) => (
            <div
              key={i}
              className={`hover:bg-bg-hover group relative px-[50px] py-1 flex items-center rounded-md cursor-pointer transition-transform hover:scale-105 duration-500 ease-in-out`}
            >
              <p>{page?.name}</p>
            </div>
          ))
      }
    </div>
  );
};

export default MenuItem;
