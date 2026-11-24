// export default function Page() {
//   const sales = [
//     { title: "Total Revenue", value: "₹2,45,800", change: "+18.2%" },
//     { title: "Total Orders", value: "1,248", change: "+12.4%" },
//     { title: "Customers", value: "856", change: "+8.6%" },
//     { title: "Products Sold", value: "3,420", change: "+24.8%" },
//   ];

//   const categories = [
//     { name: "Electronics", products: 120, color: "bg-blue-100 text-blue-700" },
//     { name: "Fashion", products: 240, color: "bg-pink-100 text-pink-700" },
//     { name: "Home & Living", products: 85, color: "bg-amber-100 text-amber-700" },
//     { name: "Accessories", products: 156, color: "bg-purple-100 text-purple-700" },
//   ];

//   const orders = [
//     { id: "#ORD-1001", customer: "Rahul Sharma", product: "Wireless Headphones", amount: "₹2,499", status: "Delivered" },
//     { id: "#ORD-1002", customer: "Priya Nair", product: "Smart Watch", amount: "₹4,999", status: "Processing" },
//     { id: "#ORD-1003", customer: "Arjun Kumar", product: "Running Shoes", amount: "₹3,299", status: "Pending" },
//     { id: "#ORD-1004", customer: "Sneha Rao", product: "Laptop Stand", amount: "₹1,499", status: "Delivered" },
//     { id: "#ORD-1005", customer: "Vikram Das", product: "Bluetooth Speaker", amount: "₹1,899", status: "Processing" },
//   ];

//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-black dark:text-white">
//       <div className="flex min-h-screen">
//         <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white dark:bg-zinc-900 p-6 lg:block">
//           <h1 className="text-2xl font-extrabold text-violet-600 dark:text-zinc-300">ShopSphere</h1>
//           <p className="mt-1 text-xs text-slate-400">ADMINISTRATION PANEL</p>

//           <div className="mt-10">
//             <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">Workspace</p>
//             <nav className="space-y-2">
//               {["Dashboard", "Orders", "Products", "Customers", "Categories", "Analytics"].map((item, index) => (
//                 <a key={item} href="#" className={`block rounded-xl px-4 py-3 text-sm font-medium ${index === 0 ? "bg-violet-600 text-whitedark:white " : "text-slate-600 hover:bg-slate-100 dark:hover:bg-zinc-700"}`}>
//                   {item}
//                 </a>
//               ))}
//             </nav>
//           </div>

//           <div className="mt-10">
//             <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">Management</p>
//             <nav className="space-y-2">
//               {["Discounts", "Inventory", "Settings"].map((item) => (
//                 <a key={item} href="#" className="block rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-slate-100 dark:hover:bg-zinc-700">
//                   {item}
//                 </a>
//               ))}
//             </nav>
//           </div>

//           <div className="mt-12 rounded-2xl bg-violet-50 p-4">
//             <p className="font-bold text-violet-900">Need assistance?</p>
//             <p className="mt-2 text-sm text-violet-700">Our support team is here to help you manage your store.</p>
//             <button className="mt-4 w-full rounded-lg bg-violet-600 py-2 text-sm font-semibold text-white hover:bg-violet-700 dark:hover:bg-zinc-700">
//               Contact Support
//             </button>
//           </div>
//         </aside>

//         <main className="min-w-0 flex-1">
//           <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-white dark:bg-zinc-900 px-6 py-5">
//             <div>
//               <h2 className="text-2xl font-bold">Store Overview</h2>
//               <p className="mt-1 text-sm text-slate-500">Monitor your store performance and orders.</p>
//             </div>
//             <div className="flex items-center gap-3">
//               <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-zinc-700">Notifications</button>
//               <button className="rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white dark:bg-zinc-600 dark:hover:bg-violet-700 dark:hover:bg-zinc-700">+ Add Product</button>
//               <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 font-bold text-violet-700 dark:bg-zinc-600 dark:text-zinc-300">
//                 AD
//               </div>
//             </div>
//           </header>

//           <div className="space-y-8 p-6">
//             <section>
//               <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
//                 <div>
//                   <h3 className="text-lg font-bold">Sales Performance</h3>
//                   <p className="mt-1 text-sm text-slate-500">Your store statistics for this month.</p>
//                 </div>
//                 <select className="rounded-xl border border-slate-200 bg-white dark:bg-zinc-900 px-4 py-2 text-sm outline-none focus:border-violet-500">
//                   <option>This Month</option>
//                   <option>Last Month</option>
//                   <option>This Year</option>
//                 </select>
//               </div>

//               <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
//                 {sales.map((item) => (
//                   <div key={item.title} className="rounded-2xl border border-slate-200 bg-white dark:bg-zinc-900 p-5 shadow-sm">
//                     <p className="text-sm text-slate-500">{item.title}</p>
//                     <h3 className="mt-3 text-2xl font-extrabold">{item.value}</h3>
//                     <p className="mt-3 text-sm font-semibold text-emerald-600">{item.change} <span className="font-normal text-slate-400 dark:text-zinc-400">vs last month</span></p>
//                   </div>
//                 ))}
//               </div>
//             </section>

//             <section className="rounded-2xl border border-slate-200 bg-white dark:bg-zinc-900 p-6 shadow-sm">
//               <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
//                 <div>
//                   <h3 className="text-lg font-bold">Recent Orders</h3>
//                   <p className="mt-1 text-sm text-slate-500">Review and manage your latest customer orders.</p>
//                 </div>
//                 <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium hover:bg-slate-50 dark:hover:bg-zinc-700">View All Orders</button>
//               </div>

//               <div className="overflow-x-auto">
//                 <table className="w-full min-w-[700px] text-left text-sm">
//                   <thead>
//                     <tr className="border-b border-slate-200 text-slate-500">
//                       <th className="pb-4 font-semibold">Order ID</th>
//                       <th className="pb-4 font-semibold">Customer</th>
//                       <th className="pb-4 font-semibold">Product</th>
//                       <th className="pb-4 font-semibold">Amount</th>
//                       <th className="pb-4 font-semibold">Status</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {orders.map((order) => (
//                       <tr key={order.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
//                         <td className="py-5 font-semibold text-violet-600 dark:text-zinc-300">{order.id}</td>
//                         <td className="py-5 font-medium">{order.customer}</td>
//                         <td className="py-5 text-slate-500">{order.product}</td>
//                         <td className="py-5 font-semibold">{order.amount}</td>
//                         <td className="py-5">
//                           <span className={`rounded-full px-3 py-1 text-xs font-semibold ${order.status === "Delivered" ? "bg-emerald-100 text-emerald-700" : order.status === "Processing" ? "bg-blue-100 text-blue-700" : "bg-amber-100 text-amber-700"}`}>
//                             {order.status}
//                           </span>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </section>

//             <section>
//               <div className="mb-5">
//                 <h3 className="text-lg font-bold">Product Categories</h3>
//                 <p className="mt-1 text-sm text-slate-500">Explore products across your store categories.</p>
//               </div>

//               <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
//                 {categories.map((category) => (
//                   <div key={category.name} className="rounded-2xl border border-slate-200 bg-white dark:bg-zinc-900 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
//                     <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold ${category.color}`}>
//                       {category.name.charAt(0)}
//                     </div>
//                     <h4 className="mt-4 font-bold">{category.name}</h4>
//                     <p className="mt-2 text-sm text-slate-500">{category.products} products available</p>
//                     <button className="mt-4 text-sm font-semibold text-violet-600 hover:text-violet-800 dark:hover:text-zinc-300">
//                       Manage Category →
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </section>

//             <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
//               <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
//                 <h3 className="text-lg font-bold">Monthly Sales Target</h3>
//                 <p className="mt-2 text-sm text-slate-500">Your progress toward this month's revenue goal.</p>
//                 <div className="mt-6 flex items-end justify-between">
//                   <div>
//                     <p className="text-3xl font-extrabold">₹2.45L</p>
//                     <p className="mt-1 text-sm text-slate-500">of ₹3.00L target</p>
//                   </div>
//                   <span className="font-bold text-violet-600 dark:text-zinc-300">82%</span>
//                 </div>
//                 <div className="mt-4 h-3 rounded-full bg-slate-100">
//                   <div className="h-3 w-[82%] rounded-full bg-violet-600 dark:bg-zinc-300"></div>
//                 </div>
//                 <p className="mt-4 text-sm text-emerald-600">You are on track to reach your monthly goal.</p>
//               </div>

//               <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
//                 <h3 className="text-lg font-bold">Store Summary</h3>
//                 <p className="mt-2 text-sm text-slate-500">A quick look at your store operations.</p>
//                 <div className="mt-6 space-y-5">
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm text-slate-600">Pending Orders</span>
//                     <span className="rounded-lg bg-amber-100 px-3 py-1 text-sm font-bold text-amber-700 dark:bg-amber-900 dark:text-amber-300">24</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm text-slate-600">Low Stock Products</span>
//                     <span className="rounded-lg bg-red-100 px-3 py-1 text-sm font-bold text-red-700 dark:bg-red-900 dark:text-red-300">8</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm text-slate-600">Returns Requested</span>
//                     <span className="rounded-lg bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700 dark:bg-blue-900 dark:text-blue-300">12</span>
//                   </div>
//                 </div>
//               </div>
//             </section>

//             <footer className="border-t border-slate-200 pt-6 text-center text-sm text-slate-400">
//               ©️ 2026 ShopSphere Admin. All rights reserved.
//             </footer>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-white p-8 text-gray-900">
      <h1 className="text-3xl font-bold text-center mb-8 text-black">
        Users
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {data.map((user) => (
          <div
            key={user.id}
            className="bg-white border border-gray-300 rounded-xl p-6 w-72 shadow-md hover:shadow-xl transition"
          >
            <h2 className="text-xl font-bold mb-2">{user.name}</h2>
            <p className="text-gray-600">Email: {user.email}</p>
            <p className="text-gray-600">Phone: {user.phone}</p>
            <p className="text-gray-600">City: {user.address.city}</p>
          </div>
        ))}
      
      </div>
    </div>
  );
}