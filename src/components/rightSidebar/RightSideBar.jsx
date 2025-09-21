import Notifications from "./Notifications";
import Activities from "./Activities";
import Contacts from "./Contacts";

const RightSideBar = () => {
  return (
    <div className="xl:grid col-span-4 p-5 gap-y-6">
      <Notifications />
      <Activities />
      <Contacts />
    </div>
  );
};


export default RightSideBar;
