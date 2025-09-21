import { notifications } from "../../utils/data";

const Notifications = () => {

  return (
    <div className="flex flex-col gap-2 text-start text-text-primary">
      <h6 className={`px-1 py-2 text-sm font-semibold`} >
        Notifications
      </h6>
      {notifications?.map((note, index) => (
        <div className="grid grid-cols-6 gap-2 p-1 items-start" key={index} >
          <span className={`size-6 flex items-center justify-center rounded-md ${note?.color}`} >
            <note.icon size={16} strokeWidth={1.5} className="text-[#1C1C1C]" />
          </span>
          <div className="text-start col-span-5 font-light space-y-[1px]">
            <p className={`text-sm line-clamp-1`} >
              {note?.message}
            </p>
            {note?.time && (
              <p className={`text-xs line-clamp-1 text-text-muted`} >
                {note?.time}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
