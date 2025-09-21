import moment from "moment";
import React from "react";
import { GoDotFill } from "react-icons/go";
import { useSelector } from "react-redux";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { LineData } from "../../utils/data";

const RevenueChart = () => {
  const theme = useSelector((state) => state.theme.theme);

  const revenueData = [
    {
      label: "Current Week",
      value: "$58,211",
      color: "text-[#1C1C1C]",
      darkColor: "text-[#C6C7F8]",
    },
    {
      label: "Previous Week",
      value: "$68,768",
      color: "text-[#A8C5DA]",
      darkColor: "text-[#A8C5DA]",
    },
  ];

  return (
    <div className={`py-6 pr-6 col-span-full md:col-span-3 space-y-4 bg-bg-surface-light text-text-primary rounded-lg animate-fade`} >
      <div className="px-6 block md:flex gap-4 items-center">
        <h6 className={`text-sm font-semibold`}>Revenue</h6>
        <span className={`text-text-muted font-light hidden md:flex`}>|</span>
        <div className="block md:flex items-center gap-4 mt-1 md:m-0">
          {revenueData?.map((d, i) => (
            <div key={i} className="px-1 flex items-center gap-1">
              <GoDotFill
                size={10}
                strokeWidth={1.5}
                className={`${theme ? d?.darkColor : d?.color}`}
              />
              <p className={`text-xs text-text-primary font-extralight`}>
                {d?.label}
              </p>
              <b className="pl-0.5 text-xs font-semibold">{d?.value}</b>
            </div>
          ))}
        </div>
      </div>

      <ResponsiveContainer
        width="100%"
        height={232}
        className="text-text-muted"
      >
        <LineChart width={"100%"} height={232} data={LineData}>
          <CartesianGrid
            stroke={`currentColor`}
            vertical={false}
            strokeOpacity={0.2}
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            padding={{ left: 40 }}
            tickMargin={10}
            tick={{
              fontSize: 12,
              fill: `currentColor`,
            }}
            tickFormatter={(date) => moment(date).format("MMM")}
          />
          <YAxis
            domain={[0, 30]}
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            padding={{ left: 40 }}
            ticks={[0, 10, 20, 30]}
            tick={{
              fontSize: 12,
              fill: `currentColor`,
            }}
            tickFormatter={(value) => `${value}M`}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "var(--radius-lg)",
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
              background: "#1C1C1C",
              color: `#1C1C1C`,
              borderRadius: `var(--radius-lg)`,
            }}
          />
          <Line
            type="basis"
            dataKey="currentActual"
            stroke={`var(--bg-surface-dark)`}
            dot={false}
            strokeWidth={3}
            name="Current Week"
          />
          <Line
            type="basis"
            dataKey="currentPredicted"
            stroke={`var(--bg-surface-dark)`}
            dot={false}
            strokeDasharray="6 6"
            strokeWidth={3}
            name="Predicted"
          />
          <Line
            type="basis"
            dataKey="previous"
            stroke={`var(--bg-secondary-cyan)`}
            dot={false}
            strokeWidth={3}
            name="Previous Week"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
