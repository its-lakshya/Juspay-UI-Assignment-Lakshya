import React from "react";
import { useSelector } from "react-redux";
import { totalSales } from "../../utils/data";
import { GoDotFill } from "react-icons/go";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const TotalSales = () => {
  const theme = useSelector((state) => state.theme.theme);

  const totalValue = totalSales?.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className={`md:col-span-1 rounded-lg p-6 space-y-4 h-fit bg-bg-surface-light animate-fade text-text-primary`} >
      <h6 className={`text-sm font-semibold text-text-primary`} >
        Total Sales
      </h6>
        <div className="w-full h-[120px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip
                formatter={(value, name, props) => [
                  `${((value / totalValue) * 100).toFixed(2)}%`,
                  props?.payload?.item || name,
                ]}
                contentStyle={{
                  borderRadius: "8px",
                  border: "none",
                  background: `var(--bg-base)`,
                  fontFamily: `var(--inter-font)`,
                }}
                itemStyle={{
                  fontFamily: `var(--inter-font)`,
                  color: `var(--text-primary)`,
                  fontSize: "12px",
                  fontWeight: "400",
                }}
              />
              <Pie
                data={totalSales}
                cx="50%"
                cy="50%"
                startAngle={30}
                endAngle={-330}
                innerRadius={37}
                outerRadius={60}
                dataKey="price"
                strokeWidth={4}
                paddingAngle={-10}
                cornerRadius={12}
                stroke={`${theme ? "#333333" : "#FFFFFF"}`}
              >
                {totalSales.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={theme ? entry.darkColor : entry.color}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className='flex flex-col gap-[18px] text-xs font-light'>
        {totalSales?.map((item, index) => (
          <div className="flex justify-between items-center" key={index} >
            <div className="flex items-center gap-1">
              <GoDotFill
                size={11}
                strokeWidth={1.5}
                style={{ color: theme ? item?.darkColor : item?.color }}
              />
                {item?.item}
            </div>
              {item?.price}
          </div>
        ))}
        </div>
    </div>
  );
};

export default TotalSales;
