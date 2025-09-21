import { useSelector } from "react-redux";
import worldMapDark from "../../assets/world-map-dark.svg";
import worldMap from "../../assets/world-map.svg";
import { revenueLocations } from "../../utils/data";

const RevenueLocation = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      className={`col-span-full md:col-span-1 space-y-4 bg-bg-surface-light p-6 h-full text-xs rounded-lg animate-fade`}
    >
      <h6 className={`text-sm font-semibold text-text-primary`}>
        {" "}
        Revenue by Location{" "}
      </h6>
      <img
        src={theme ? worldMapDark : worldMap}
        alt="image"
        className="w-full"
      />
      {revenueLocations?.map((item, i) => (
        <div key={i} className="flex flex-col gap-[2px] justify-between">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <p className={`font-normal text-text-primary`}>{item?.place}</p>
            </div>
            <p
              className={`font-normal ${
                theme ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
              }`}
            >
              {item?.revenue}K
            </p>
          </div>
          <div className={`h-[2px] rounded-full bg-bg-surface-blue-lighter`}>
            <div
              className="h-full rounded-full bg-bg-secondary-cyan"
              style={{ width: `${item?.revenue}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RevenueLocation;
