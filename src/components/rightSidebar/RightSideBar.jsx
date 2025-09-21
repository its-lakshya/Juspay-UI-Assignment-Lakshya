import Notifications from "./Notifications";
import Activities from "./Activities";
import Contacts from "./Contacts";

const RightSideBar = () => {
  return (
    <div className="col-span-2 p-5 gap-y-6 hidden xl:grid">
      <Notifications />
      <Activities />
      <Contacts />
    </div>
  );
};

export default RightSideBar;
