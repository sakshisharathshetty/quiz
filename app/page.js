// // export default function Home() {
// //   const courses = [
// //     {
// //       title: "Full Stack Development",
// //       description:
// //         "Learn frontend development, backend APIs, databases, and deployment.",
// //       duration: "12 Weeks",
// //       students: "120 Students",
// //     },
// //     {
// //       title: "Data Engineering",
// //       description:
// //         "Learn Python, SQL, data pipelines, and large-scale data processing.",
// //       duration: "10 Weeks",
// //       students: "85 Students",
// //     },
// //     {
// //       title: "Agentic AI",
// //       description:
// //         "Build AI agents, intelligent workflows, and AI-powered applications.",
// //       duration: "8 Weeks",
// //       students: "95 Students",
// //     },
// //   ];

// //   const projects = [
// //     {
// //       title: "Campus Management System",
// //       category: "Full Stack Development",
// //       status: "In Progress",
// //     },
// //     {
// //       title: "AI Quiz Generator",
// //       category: "Artificial Intelligence",
// //       status: "Completed",
// //     },
// //     {
// //       title: "Student Analytics Dashboard",
// //       category: "Data Engineering",
// //       status: "In Progress",
// //     },
// //   ];

// //   return (
// //     <main className="w-full mx-auto bg-white text-gray-900 font-sans">
// //       {/* Navigation */}
// //       <nav className="w-full h-20 px-10 flex items-center justify-between border-b">
// //         <h1 className="text-2xl font-bold text-indigo-600 md:w-[250px]">
// //           Skill Academy
// //         </h1>

// //         <div className="flex items-center gap-8 md:w-[500px]">
// //           <a href="#home">Home</a>
// //           <a href="#courses">Courses</a>
// //           <a href="#projects">Projects</a>
// //           <a href="#contact">Contact</a>
// //         </div>

// //         <button className="md:w-[150px] px-5 py-3 bg-indigo-600 text-white rounded-lg">
// //           Get Started
// //         </button>
// //       </nav>

// //       {/* Hero Section */}
// //       <section
// //         id="home"
// //         className="w-full h-[500px] px-[50px] py-[70px] flex flex-col md:flex-row items-center justify-between bg-indigo-50"
// //       >
// //         <div className="w-full md:w-[550px]">
// //           <h2 className="text-lg md:text-5xl font-bold leading-tight">
// //             Build Your Future With Practical Skills
// //           </h2>

// //           <p className="text-lg leading-8 mt-6">
// //             Learn modern technologies through hands-on projects,
// //             industry-focused courses, and real-world challenges.
// //           </p>

// //           <button className="mt-6 px-8 py-4 bg-indigo-600 text-white rounded-lg">
// //             Explore Courses
// //           </button>
// //         </div>

// //         <div className="w-full md:w-[400px] h-[280px] flex items-center justify-center rounded-xl bg-indigo-200 text-2xl font-semibold">
// //           Learning Illustration
// //         </div>
// //       </section>

// //       {/* Statistics Section */}
// //       <section className="w-full py-12 flex flex-col md:flex-row justify-around">
// //         {[
// //           ["500+", "Active Students"],
// //           ["25+", "Industry Mentors"],
// //           ["40+", "Live Projects"],
// //           ["95%", "Completion Rate"],
// //         ].map(([number, label]) => (
// //           <div key={label} className="w-[250px] text-center">
// //             <h3 className="text-4xl font-bold text-indigo-600">{number}</h3>
// //             <p className="mt-3 text-gray-600">{label}</p>
// //           </div>
// //         ))}
// //       </section>

// //       {/* Courses Section */}
// //       <section id="courses" className="w-full px-10 py-16 bg-gray-50">
// //         <h2 className="text-4xl font-bold text-center">Popular Courses</h2>

// //         <p className="mt-4 mb-12 text-center text-gray-600 text-lg">
// //           Choose a learning path that matches your career goals.
// //         </p>

// //         <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
// //           {courses.map((course) => (
// //             <div
// //               key={course.title}
// //               className="w-[330px] p-5 bg-white border border-gray-200 rounded-xl"
// //             >
// //               <div className="w-full h-[150px] flex items-center justify-center bg-indigo-100 rounded-lg">
// //                 Course Image
// //               </div>

// //               <h3 className="mt-5 text-2xl font-semibold">{course.title}</h3>

// //               <p className="mt-3 leading-7 text-gray-600">
// //                 {course.description}
// //               </p>

// //               <p className="mt-4 text-sm text-gray-500">
// //                 Duration: {course.duration}
// //               </p>

// //               <p className="mt-2 text-sm text-gray-500">{course.students}</p>

// //               <button className="w-full mt-5 py-3 bg-indigo-600 text-white rounded-lg">
// //                 View Course
// //               </button>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* Projects Section */}
// //       <section id="projects" className="w-full px-10 py-16">
// //         <h2 className="text-4xl font-bold text-center">Student Projects</h2>

// //         <p className="mt-4 mb-12 text-center text-lg text-gray-600">
// //           Explore what our students are building.
// //         </p>

// //         <div className="w-full flex flex-col md:flex-row gap-6">
// //           {projects.map((project) => (
// //             <div
// //               key={project.title}
// //               className="w-[340px] min-w-[340px] p-6 border border-gray-200 rounded-xl"
// //             >
// //               <h3 className="text-xl font-semibold">{project.title}</h3>

// //               <p className="mt-5 text-gray-600">
// //                 Category: {project.category}
// //               </p>

// //               <p className="mt-3">
// //                 Status:{" "}
// //                 <span className="font-medium text-indigo-600">
// //                   {project.status}
// //                 </span>
// //               </p>

// //               <button className="mt-6 px-6 py-3 bg-gray-900 text-white rounded-lg">
// //                 View Project
// //               </button>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* Call To Action */}
// //       <section className="w-full px-12 py-16 text-center bg-indigo-600 text-white">
// //         <h2 className="text-4xl font-bold">Ready to Start Learning?</h2>

// //         <p className="mt-5 text-lg">
// //           Join our learning community and build projects that matter.
// //         </p>

// //         <button className="mt-8 px-9 py-4 bg-white text-indigo-600 rounded-lg font-semibold">
// //           Join Now
// //         </button>
// //       </section>

// //       {/* Footer */}
// //       <footer
// //         id="contact"
// //         className="w-full px-10 py-12 flex flex-col md:flex-row justify-between bg-gray-900 text-white"
// //       >
// //         <div className="md:w-[350px]">
// //           <h3 className="text-2xl font-bold">Skill Academy</h3>
// //           <p className="mt-4 leading-7 text-gray-300">
// //             Empowering students through technology, creativity, and practical
// //             learning.
// //           </p>
// //         </div>

// //         <div className="md:w-[200px]">
// //           <h4 className="text-lg font-semibold">Quick Links</h4>
// //           <p className="mt-4">Courses</p>
// //           <p className="mt-3">Projects</p>
// //           <p className="mt-3">About Us</p>
// //         </div>

// //         <div className="md:w-[280px]">
// //           <h4 className="text-lg font-semibold">Contact Us</h4>
// //           <p className="mt-4">Email: hello@skillacademy.com</p>
// //           <p className="mt-3">Phone: +91 98765 43210</p>
// //         </div>
// //       </footer>
// //     </main>
// //   );
// // }
// // "use client";
// // import { useState } from "react";
// // import Navbar from "./components/Navbar";
// // import UserDetails from "./components/UserDetails";

// // export default function Home() {
// //   const [name, setName] = useState("Srinivas");
// //   return (
// //     <div>
// //       <Navbar />
// //       <UserDetails name={name} />
// //     </div>
// //   );
// // }
// "use client";


// import { useEffect, useState, useContext } from "react";
// import { CartContext } from "./context/CartContext";
// import Link from "next/link";

// export default function Home() {

//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const { addToCart, cartItems } = useContext(CartContext);

//     // Fetch products
//     useEffect(() => {

//         async function fetchProducts() {

//             try {

//                 const response = await fetch(
//                     "https://dummyjson.com/products?limit=100"
//                 );

//                 const data = await response.json();

//                 setProducts(data.products);

//             } catch (error) {

//                 console.error("Error fetching products:", error);

//             } finally {

//                 setLoading(false);

//             }

//         }

//         fetchProducts();

//     }, []);

//     return (

//         <div className="p-8">

//             <h1 className="text-3xl font-bold mb-6">
//                 Shopping Application
//             </h1>

//             <Link
//                 href="/cart"
//                 className="bg-green-600 text-white px-4 py-2 rounded"
//             >
//                 Go to Cart ({cartItems.length})
//             </Link>

//             <h2 className="text-2xl font-semibold my-6">
//                 Available Products
//             </h2>

//             {loading && <p>Loading products...</p>}

//             <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

//                 {products.map((product) => (

//                     <div
//                         key={product.id}
//                         className="border rounded-lg p-4 shadow-sm"
//                     >

//                         <img
//                             src={product.thumbnail}
//                             alt={product.title}
//                             className="w-full h-40 object-contain"
//                         />

//                         <h3 className="font-semibold mt-3">
//                             {product.title}
//                         </h3>

//                         <p className="text-gray-600">
//                             Price: ${product.price}
//                         </p>

//                         <p className="text-sm text-gray-500 mb-4">
//                             Category: {product.category}
//                         </p>

//                         <button
//                             onClick={() => addToCart(product)}
//                             className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
//                         >
//                             Add to Cart
//                         </button>

//                     </div>

//                 ))}

//             </div>

//         </div>

//     );

// }
"use client";

import { useState } from "react";


export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");

  async function handleSubmit() {
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>Create User Profile</h1>

      <input
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Enter Age"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Enter Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br /><br />

      <button onClick={handleSubmit}>
        Save Profile
      </button>
    </div>
  );
}