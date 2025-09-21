import { activities } from "../../utils/data";

const Activities = () => {

  return (
    <div className="flex flex-col gap-2 text-start text-text-primary">
      <h6 className={`px-1 py-2 text-sm font-semibold`} >
        Activities
      </h6>
      {activities?.map((activity, index) => (
        <div className="grid grid-cols-6 gap-2 p-1 items-start" key={index} >
          <span className="col-span-1 flex items-center justify-center relative w-fit">
            <img
              src={activity?.image}
              alt={`user${index}`}
              className="size-6 rounded-full object-cover"
            />
            {activities?.length - 1 !== index && (
              <div
                className={`h-[14px] w-[1px] absolute top-[80%] my-3 bg-border-primary`}
              ></div>
            )}
          </span>
          <div className="text-start col-span-5 font-light space-y-[1px]">
            <p className={`text-sm line-clamp-1`} >
              {activity?.message}
            </p>
            {activity?.time && (
              <p className={`text-xs line-clamp-1 text-text-secondary`} >
                {activity?.time}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Activities;
