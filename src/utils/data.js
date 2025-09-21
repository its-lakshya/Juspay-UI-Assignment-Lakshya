import {
  PiBugBeetleLight,
  PiUserLight,
  PiBroadcastLight,
} from "react-icons/pi";
import user1 from "../assets/images/user1.png";
import user2 from "../assets/images/user2.png";
import user3 from "../assets/images/user3.png";
import user4 from "../assets/images/user4.png";
import user5 from "../assets/images/user5.png";
import profile1 from "../assets/images/profile1.png";
import profile2 from "../assets/images/profile2.png";
import profile3 from "../assets/images/profile3.png";
import profile4 from "../assets/images/profile4.png";
import profile5 from "../assets/images/profile5.png";
import profile6 from "../assets/images/profile6.png";

export const statusCard = [
  {
    title: "Customers",
    value: "3,781",
    increasedBy: "11.01%",
    bg: "bg-bg-surface-blue-light",
  },
  {
    title: "Orders",
    value: "1,219",
    decreasedBy: "0.03%",
    bg: "bg-bg-surface-light",
  },
  {
    title: "Revenue",
    value: "$695",
    increasedBy: "15.03%",
    bg: "bg-bg-surface-light",
  },
  {
    title: "Growth",
    value: "30.1%",
    increasedBy: "6.08%",
    bg: "bg-bg-surface-blue-lighter",
  },
];

export const BarData = [
  { name: "2023-01-01", actual: 19, projection: 3 },
  { name: "2023-02-01", actual: 21, projection: 5 },
  { name: "2023-03-01", actual: 19, projection: 4 },
  { name: "2023-04-01", actual: 22, projection: 7 },
  { name: "2023-05-01", actual: 15, projection: 4 },
  { name: "2023-06-01", actual: 21, projection: 5 },
];

export const LineData = [
  {
    name: "2024-01-20",
    previous: 8,
    currentPredicted: null,
    currentActual: 12,
  },
  {
    name: "2024-02-01",
    previous: 20,
    currentPredicted: null,
    currentActual: 9,
  },
  {
    name: "2024-03-01",
    previous: 16,
    currentPredicted: null,
    currentActual: 9,
  },

  {
    name: "2024-04-01",
    previous: 10,
    currentPredicted: 16,
    currentActual: 16,
  },
  {
    name: "2024-05-01",
    previous: 14,
    currentPredicted: 22,
    currentActual: null,
  },
  {
    name: "2024-06-01",
    previous: 24,
    currentPredicted: 21,
    currentActual: null,
  },
];

export const revenueLocations = [
  {
    place: "New York",
    revenue: 72,
  },
  {
    place: "San Francisco",
    revenue: 39,
  },
  {
    place: "Sydney",
    revenue: 25,
  },
  {
    place: "Singapore",
    revenue: 61,
  },
];

export const tableData = [
  {
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: 82,
    amount: "$6,518.18",
  },
  {
    name: "Marco Lightweight Shirt",
    price: "$128.50",
    quantity: 37,
    amount: "$4,754.50",
  },
  {
    name: "Half Sleeve Shirt",
    price: "$39.99",
    quantity: 64,
    amount: "$2,559.36",
  },
  {
    name: "Lightweight Jacket",
    price: "$20.00",
    quantity: 184,
    amount: "$3,680.00",
  },
  {
    name: "Marco Shoes",
    price: "$79.49",
    quantity: 64,
    amount: "$1,965.81",
  },
];

export const totalSales = [
  {
    item: "Direct",
    price: 300.56,
    color: "#1C1C1C",
    darkColor: "#C6C7F8",
  },
  {
    item: "Affilliate",
    price: 135.18,
    color: "#BAEDBD",
    darkColor: "#BAEDBD",
  },
  {
    item: "Sponsored",
    price: 154.02,
    color: "#95A4FC",
    darkColor: "#95A4FC",
  },
  {
    item: "E-mail",
    price: 48.96,
    color: "#B1E3FF",
    darkColor: "#B1E3FF",
  },
];

export const notifications = [
  {
    message: "You have a bug that needs to be fixed.",
    time: "Just now",
    icon: PiBugBeetleLight,
    color: "bg-[#E3F5FF]",
  },
  {
    message: "New user registered",
    time: "59 minutes ago",
    icon: PiUserLight,
    color: "bg-[#E5ECF6]",
  },
  {
    message: "You have a bug that needs to be fixed.",
    time: "12 hours ago",
    icon: PiBugBeetleLight,
    color: "bg-[#E3F5FF]",
  },
  {
    message: "Andi Lane subscribed to you",
    time: "Today, 11:59 AM",
    icon: PiBroadcastLight,
    color: "bg-[#E5ECF6]",
  },
];

export const activities = [
  {
    message: "You have a bug that needs to be fixed.",
    time: "Just now",
    image: user1,
  },
  {
    message: "Released a new version",
    time: "59 minutes ago",
    image: user2,
  },
  {
    message: "Submitted a bug",
    time: "12 hours ago",
    image: user3,
  },
  {
    message: "Modified A data in Page X",
    time: "Today, 11:59 AM",
    image: user4,
  },
  {
    message: "Deleted a page in Project X",
    time: "Feb 2, 2023",
    image: user5,
  },
];

export const contacts = [
  {
    name: "Natali Craig",
    image: profile1,
  },
  {
    name: "Drew Cano",
    image: profile2,
  },
  {
    name: "Orlando Diggs",
    image: profile3,
  },
  {
    name: "Andi Lane",
    image: profile4,
  },
  {
    name: "Kate Morrison",
    image: profile5,
  },
  {
    name: "Koray Okumus",
    image: profile6,
  },
];

export const ordersList = [
  {
    id: "#CM9801",
    name: "Natali Craig",
    image: profile1,
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    name: "Kate Morrison",
    image: profile5,
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9803",
    name: "Drew Cano",
    image: profile2,
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9804",
    name: "Orlando Diggs",
    image: profile3,
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CM9805",
    name: "Andi Lane",
    image: profile4,
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
  {
    id: "#CM9806",
    name: "Natali Craig",
    image: profile1,
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9807",
    name: "Kate Morrison",
    image: profile5,
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9808",
    name: "Drew Cano",
    image: profile2,
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9809",
    name: "Orlando Diggs",
    image: profile3,
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CM9810",
    name: "Andi Lane",
    image: profile4,
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
  {
    id: "#CM9811",
    name: "Koray Okumus",
    image: profile6,
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
];
