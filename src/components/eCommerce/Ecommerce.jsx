import Metrics from "./Metrics";
import RevenueChart from "./RevenueChart";
import RevenueLocation from "./RevenueLocation";
import TopSellingProducts from "./TopSellingProducts";
import TotalSales from "./TotalSales";

const Ecommerce = () => {

  return (
    <div className="flex flex-col gap-y-5">
      <h2 className='text-sm font-semibold text-text-primary' >
        eCommerce
      </h2>
      <div className='grid gap-7'>
        <Metrics />
        <main className="grid gap-7 grid-cols-1 md:grid-cols-4">
          <RevenueChart />
          <RevenueLocation />
        </main>
        <main className="grid gap-7 grid-cols-1 md:grid-cols-4">
          <TopSellingProducts />
          <TotalSales />
        </main>
      </div>
    </div>
  );
};

export default Ecommerce;
