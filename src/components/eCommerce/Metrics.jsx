import moment from "moment/moment";
import { PiTrendDownFill, PiTrendUpFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { BarData, statusCard } from "../../utils/data";

const Metrics = () => {
  const navigate = useNavigate();

  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 gap-7 h-[252px] text-text-primary">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 animate-fade">
        {statusCard?.map((card, index) => {
          return (
            <div
              key={index}
              onClick={() => { if (card?.title === "Orders") { navigate("/orders") } }}
              className={`gap-2 p-6 ${card.bg} cursor-pointer rounded-lg flex flex-col justify-around ${index === 0 || index === 3 ? 'text-[#1C1C1C]': null}`}
            >
              <h6 className={`text-sm font-semibold rounded-md hover:bg-bg-hover`} >
                {card?.title}
              </h6>
              <div className="flex items-center justify-between hover:bg-bg-hover rounded-md hover:flex-row-reverse">
                <h6 className='text-2xl font-medium' >
                  {card?.value}
                </h6>
                <div className="flex items-center gap-1">
                  <p className='text-xs font-normal' >
                    {card?.increasedBy ? `+${card?.increasedBy}` : `-${card?.decreasedBy}`}
                  </p>
                  {card.increasedBy ? (
                    <PiTrendUpFill size={14} strokeWidth={1.5} />
                  ) : (
                    <PiTrendDownFill size={14} strokeWidth={1.5} className=' scale-x-[-1]' />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={`py-6 pr-4 flex flex-col gap-4 bg-bg-surface-light rounded-2xl animate-fade text-text-secondary overflow-hidden`} >
        <h6 className={`px-6 text-sm font-semibold text-text-primary`} >
          Projections vs Actuals
        </h6>
        <ResponsiveContainer width={"100%"}  className='text-text-muted -ml-2'>
          <BarChart width={"110%"}  data={BarData} className='w-full '>
            <CartesianGrid
              stroke={`currentColor`}
              strokeOpacity={0.2}
              vertical={false}
              horizontal={true}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              stroke={`currentColor`}
              tickFormatter={(date) => moment(date).format("MMM")}
              tick={{
                fontSize: 12,
                dy: 8,
                fill: `currentColor`,
              }}
              // padding={{ left: -20 }}
              tickLine={false}
            />
            <YAxis
              domain={[0, 30]}
              axisLine={false}
              fontSize={12}
              ticks={[0, 10, 20, 30]}
              // tickMargin={{left: 0, top: 3}}
              tick={{
                // dx: -32, 
                fontSize: 12,
                fill: 'currentColor',
              }}
              tickFormatter={(value) => `${value}M`}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "16px",
                border: "none",
                background: `var(--bg-surface-blue-lighter)`,
                fontFamily: "var(--inter-font)",
              }}
              itemStyle={{
                fontFamily: "var(--inter-font)",
                fontSize: "12px",
                fontWeight: "400",
              }}
              wrapperStyle={{
                background: `var(--bg-surface-blue-lighter)`,
                color: `var(--text-primary)`,
                borderRadius: "16px",
              }}
            />
            <Bar
              dataKey="actual"
              fill={`var(--bg-secondary-cyan)`}
              name="Actual"
              stackId="a"
              barSize={20}
            />
            <Bar
              dataKey="projection"
              radius={[4, 4, 0, 0]}
              fill={`var(--bg-secondary-cyan)`}
              name="Projection"
              stackId="a"
              barSize={20}
              style={{ opacity: "0.5" }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default Metrics;
