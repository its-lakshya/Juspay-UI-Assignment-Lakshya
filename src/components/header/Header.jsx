import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../store/themeSlice";

import DashboardRouter from "./DashboardRouter";
import userProfile from "../../assets/images/userProfile.png";

import StarIcon from "../../assets/icons/Star.svg?react";
import NotificationIcon from "../../assets/icons/Notification.svg?react";
import LightModeIcon from "../../assets/icons/LightMode.svg?react";
import ClockIcon from "../../assets/icons/Clock.svg?react";
import MenuIcon from "../../assets/icons/Menu.svg?react";
import CommandIcon from "../../assets/icons/Command.svg?react";
import SearchIcon from "../../assets/icons/Search.svg?react";
import { toggleLeftSidebar, toggleRightSidebar } from "../../store/layoutSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");

  const handleLeftSidebarVisibility = () => {
    dispatch(toggleLeftSidebar())
  }

  const handleRightSidebarVisibility = () => {
    dispatch(toggleRightSidebar())
  }

  const handleSearchInput = (e) => setSearchInput(e.target.value);

  return (
    <div className="px-7 py-5 flex items-center justify-between text-text-primary border-b-1 border-border-primary bg-bg-base z-10 transition-transform duration-500 text-sm">
      <div className="flex items-center gap-2">
        <figure className="flex items-center lg:hidden">
          <img
            src={userProfile}
            alt="User Profile"
            className="w-[20px] h-[20px] rounded-full object-cover"
          />
          <h1 className="text-sm font-normal ps-2">ByeWind</h1>
        </figure>

        <div className="flex items-center gap-2">
          {[MenuIcon, StarIcon].map((Icon, idx) => (
            <span
              key={idx} // Add key to the list
              className="size-7 flex items-center justify-center rounded-md cursor-pointer transition-transform hover:scale-105 duration-500 ease-in-out text-current hover:bg-bg-hover"
              onClick={() => {idx === 0 ? handleLeftSidebarVisibility() : null}}
            >
              <Icon className="size-5 fill-current selected-icon" />
            </span>
          ))}
        </div>

        <DashboardRouter />
      </div>

      <div className="md:flex items-center gap-2 md:gap-5">
        <div className="px-2 py-1 w-40 hidden md:flex md:justify-between gap-1 rounded-md bg-bg-surface-light">
          <div className="flex items-center gap-1">
            <SearchIcon className="size-4" />
            <input
              type="text"
              value={searchInput}
              placeholder="Search"
              onChange={handleSearchInput}
              className="w-24 border-none outline-none text-text-primary font-light placeholder:text-text-muted"
            />
          </div>
          <CommandIcon className='size-5 fill-current selected-icon' />
        </div>

        <div className="flex gap-2">
          {[LightModeIcon, ClockIcon, NotificationIcon, MenuIcon].map((Icon, idx) => (
            <span
              key={idx}  // Add key to the list
              className="size-7 flex items-center justify-center rounded-md cursor-pointer transition-transform hover:scale-105 duration-500 ease-in-out hover:bg-bg-hover"
              onClick={() => {
                idx === 0 ? dispatch(toggleTheme()) : null;
                idx === 3 ? handleRightSidebarVisibility() : null;
              }}
            >
              <Icon className="size-5 fill-current selected-icon" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
