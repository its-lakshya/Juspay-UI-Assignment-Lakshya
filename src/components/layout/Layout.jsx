import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { setRightSidebar } from "../../store/layoutSlice";
import Header from "../Header/Header";
import LeftSideBar from "../leftSideBar/LeftSideBar";
import RightSideBar from "../rightSidebar/RightSideBar";

const Layout = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const currentPath = location.pathname
    ?.split("/")
    .filter((path) => path !== "");

  const isRightSidebarVisible = useSelector(
    (state) => state.layout.rightSidebarVisible
  );
  const isLeftSidebarVisible = useSelector(
    (state) => state.layout.leftSidebarVisible
  );

  // This ref prevents repeated initializations
  const initializedRef = useRef(false);

  useEffect(() => {
    // Only do this if the path is /orders AND not initialized yet
    if (!initializedRef.current && currentPath[0] === "orders") {
      dispatch(setRightSidebar(false));
      initializedRef.current = true;
    }
    // If route changes away from orders, reset the ref to allow future toggles
    if (initializedRef.current && currentPath[0] !== "orders") {
      initializedRef.current = false;
    }
  }, [currentPath, dispatch]);

  return (
    <section className="min-h-screen w-full font-Inter scroll-smooth grid grid-cols-20 items-start animate-fade bg-bg-base">
      {isLeftSidebarVisible && (
        <div className="col-span-3">
          <LeftSideBar />
        </div>
      )}

      <div
        className={`border-x-[1px] border-border-primary min-h-screen ${
          isLeftSidebarVisible && isRightSidebarVisible
            ? "col-span-13"
            : isLeftSidebarVisible
            ? "col-span-17"
            : isRightSidebarVisible
            ? "col-span-16"
            : "col-span-20"
        }`}
      >
        <Header />
        <div className="p-8">
          <Outlet />
        </div>
      </div>

      {isRightSidebarVisible && (
        <div className="col-span-4">
          <RightSideBar />
        </div>
      )}

      <ToastContainer />
    </section>
  );
};

export default Layout;
