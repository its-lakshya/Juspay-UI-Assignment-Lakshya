import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import {
  setRightSidebar,
  setLeftSidebar,
} from "../../store/layoutSlice";

import Header from "../Header/Header";
import LeftSideBar from "../leftSideBar/LeftSideBar";
import RightSideBar from "../rightSidebar/RightSideBar";
import useScreenSize from "../../hooks/userScreenSize";

const Layout = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const initializedRef = useRef(false);

  const isRightSidebarVisible = useSelector((state) => state.layout.rightSidebarVisible);
  const isLeftSidebarVisible = useSelector((state) => state.layout.leftSidebarVisible);

  const { isTablet, isBelowLg } = useScreenSize();

  const currentPath = location.pathname?.split("/").filter((path) => path !== "");

  // Automatically hide sidebars on screen resize
  useEffect(() => {
    if (isBelowLg && isLeftSidebarVisible) {
      dispatch(setLeftSidebar(false));
    }
    if (isTablet && isRightSidebarVisible) {
      dispatch(setRightSidebar(false));
    }
  }, [isBelowLg, isTablet]);

  // Route-specific logic (e.g. "orders")
  useEffect(() => {
    if (!initializedRef.current && currentPath[0] === "orders") {
      dispatch(setRightSidebar(false));
      initializedRef.current = true;
    }
    if (initializedRef.current && currentPath[0] !== "orders") {
      initializedRef.current = false;
    }
  }, [currentPath, dispatch]);

  // Determine which sidebars are effectively visible
  const showLeft = isLeftSidebarVisible && !isBelowLg;
  const showRight = isRightSidebarVisible && !isTablet;

  // Determine column span for main content
  const getContentColSpan = () => {
    if (showLeft && showRight) return "col-span-13";
    if (showLeft) return "xl:col-span-17 col-span-16";
    if (showRight) return "col-span-16";
    return "col-span-20";
  };

  return (
    <section className="relative min-h-screen w-full font-Inter scroll-smooth grid grid-cols-20 items-start animate-fade bg-bg-base">
      {/* Left Sidebar (inline) */}
      {showLeft && (
        <div className={`${isTablet ? "col-span-4" : "col-span-3"}`}>
          <LeftSideBar />
        </div>
      )}

      {/* Main Content */}
      <div className={`border-x-[1px] border-border-primary min-h-screen ${getContentColSpan()}`}>
        <Header />
        <div className="p-8">
          <Outlet />
        </div>
      </div>

      {/* Right Sidebar (inline) */}
      {showRight && (
        <div className="col-span-4">
          <RightSideBar />
        </div>
      )}

      {/* Fixed Left Sidebar for screens < lg */}
      {isBelowLg && isLeftSidebarVisible && (
        <div className="fixed top-0 left-0 h-full w-64 z-50 bg-bg-base shadow-lg animate-slide-in-left">
          <LeftSideBar />
        </div>
      )}

      {/* Fixed Right Sidebar for screens < xl */}
      {isTablet && isRightSidebarVisible && (
        <div className="fixed top-0 right-0 h-full w-64 z-50 bg-bg-base shadow-lg animate-slide-in-right">
          <RightSideBar />
        </div>
      )}

      {/* Backdrop when any sidebar is fixed */}
      {(isBelowLg && isLeftSidebarVisible) || (isTablet && isRightSidebarVisible) ? (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => {
            dispatch(setLeftSidebar(false));
            dispatch(setRightSidebar(false));
          }}
        />
      ) : null}

      <ToastContainer />
    </section>
  );
};

export default Layout;
