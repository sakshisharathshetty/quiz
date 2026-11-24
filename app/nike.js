export default function Home() {
  const shoes = [
    {
      name: "Air Max Pulse",
      category: "Men's Shoes",
      price: "₹13,995",
      image: "https://placehold.co/400x300/eeeeee/111111?text=Air+Max+Pulse",
    },
    {
      name: "Air Jordan 1",
      category: "Basketball Shoes",
      price: "₹12,499",
      image: "https://placehold.co/400x300/e5e5e5/111111?text=Air+Jordan+1",
    },
    {
      name: "Dunk Low Retro",
      category: "Casual Shoes",
      price: "₹9,695",
      image: "https://placehold.co/400x300/f3f3f3/111111?text=Dunk+Low",
    },
  ];

  const categories = [
    {
      title: "Running",
      image: "https://placehold.co/500x350/222222/ffffff?text=Running",
    },
    {
      title: "Training",
      image: "https://placehold.co/500x350/444444/ffffff?text=Training",
    },
    {
      title: "Lifestyle",
      image: "https://placehold.co/500x350/666666/ffffff?text=Lifestyle",
    },
  ];

  return (
    <main className="w-[1440px] mx-auto bg-white text-black font-sans overflow-hidden">
      {/* Announcement Bar */}
      <div className="w-[1440px] h-[40px] bg-gray-100 flex items-center justify-center">
        <p className="text-sm font-medium">
          EXTRA 20% OFF SELECT STYLES | LIMITED TIME
        </p>
      </div>

      {/* Navbar */}
      <nav className="w-[1440px] h-[90px] px-[80px] flex items-center justify-between border-b border-gray-200">
        <h1 className="text-4xl font-black italic tracking-tighter">
          NIKE
        </h1>

        <div className="flex items-center gap-10 text-base font-semibold">
          <a href="#new">New & Featured</a>
          <a href="#men">Men</a>
          <a href="#women">Women</a>
          <a href="#kids">Kids</a>
          <a href="#sale">Sale</a>
        </div>

        <div className="flex items-center gap-5">
          <input
            type="text"
            placeholder="Search"
            className="w-[180px] px-5 py-3 bg-gray-100 rounded-full outline-none"
          />

          <button className="w-[50px] h-[50px] rounded-full bg-gray-100 text-xl">
            ♡
          </button>

          <button className="w-[50px] h-[50px] rounded-full bg-gray-100 text-xl">
            Bag
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="new"
        className="w-[1440px] h-[650px] flex items-center justify-between px-[100px] bg-[#f5f5f5]"
      >
        <div className="w-[550px]">
          <p className="text-sm font-bold uppercase tracking-[5px]">
            Just Dropped
          </p>

          <h2 className="text-[82px] font-black leading-[0.95] tracking-tighter mt-6">
            RUN
            <br />
            YOUR
            <br />
            OWN WAY.
          </h2>

          <p className="text-lg leading-8 mt-8 w-[480px] text-gray-700">
            Designed for movement. Built for everyday performance.
            Find your next favorite pair and make every step count.
          </p>

          <div className="flex gap-5 mt-8">
            <button className="px-9 py-4 bg-black text-white rounded-full font-semibold">
              Shop Now
            </button>

            <button className="px-9 py-4 bg-white text-black rounded-full font-semibold border border-gray-300">
              Explore Collection
            </button>
          </div>
        </div>

        <div className="w-[600px] h-[450px] flex items-center justify-center bg-[#e5e5e5]">
          <img
            src="https://placehold.co/600x450/e5e5e5/111111?text=NIKE+AIR+COLLECTION"
            alt="Nike-inspired athletic footwear collection"
            className="w-[600px] h-[450px] object-cover"
          />
        </div>
      </section>

      {/* Trending Section */}
      <section className="w-[1440px] px-[80px] py-[90px]">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold tracking-tight">
            Trending Now
          </h2>

          <div className="flex gap-4">
            <button className="w-[55px] h-[55px] rounded-full bg-gray-100 text-2xl">
              ←
            </button>
            <button className="w-[55px] h-[55px] rounded-full bg-gray-100 text-2xl">
              →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.title} className="w-[390px]">
              <img
                src={category.image}
                alt={category.title}
                className="w-[390px] h-[350px] object-cover"
              />

              <h3 className="text-2xl font-bold mt-5">
                {category.title}
              </h3>

              <button className="mt-4 px-7 py-3 bg-black text-white rounded-full font-semibold">
                Shop
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Banner */}
      <section
        id="sale"
        className="w-[1440px] h-[500px] flex items-center justify-center bg-black text-white"
      >
        <div className="w-[900px] text-center">
          <p className="text-sm uppercase tracking-[6px] font-bold">
            Nike Training Club
          </p>

          <h2 className="text-[72px] font-black leading-none mt-6">
            PUSH YOUR
            <br />
            LIMITS.
          </h2>

          <p className="text-lg text-gray-300 mt-8 leading-8">
            Gear up for every workout with performance essentials
            designed to keep you moving.
          </p>

          <button className="mt-8 px-10 py-4 rounded-full bg-white text-black font-bold">
            Explore Training
          </button>
        </div>
      </section>

      {/* Featured Shoes */}
      <section id="men" className="w-[1440px] px-[80px] py-[90px]">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight">
            Featured Footwear
          </h2>

          <a href="#new" className="underline font-semibold">
            View All
          </a>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {shoes.map((shoe) => (
            <article
              key={shoe.name}
              className="w-[390px] border border-gray-200"
            >
              <img
                src={shoe.image}
                alt={shoe.name}
                className="w-[390px] h-[300px] object-cover"
              />

              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">{shoe.name}</h3>
                  <span className="font-semibold">{shoe.price}</span>
                </div>

                <p className="text-gray-500 mt-2">{shoe.category}</p>

                <button className="w-full mt-6 py-4 bg-black text-white rounded-full font-semibold">
                  Add to Bag
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Membership Section */}
      <section
        id="women"
        className="w-[1440px] h-[350px] px-[100px] flex items-center justify-between bg-[#f3f3f3]"
      >
        <div className="w-[700px]">
          <p className="text-sm font-bold uppercase tracking-[4px]">
            Nike Membership
          </p>

          <h2 className="text-5xl font-black mt-5">
            YOUR MOVEMENT.
            <br />
            YOUR COMMUNITY.
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Get access to member-only products, events, and experiences.
          </p>
        </div>

        <button className="w-[200px] px-8 py-4 bg-black text-white rounded-full font-bold">
          Join Us
        </button>
      </section>

      {/* Footer */}
      <footer
        id="kids"
        className="w-[1440px] px-[100px] py-[70px] bg-black text-white"
      >
        <div className="flex justify-between">
          <div className="w-[300px]">
            <h3 className="text-3xl font-black italic">NIKE</h3>
            <p className="text-gray-400 mt-5 leading-7">
              Move with purpose. Find your style.
              Make every day count.
            </p>
          </div>

          <div className="w-[200px]">
            <h4 className="font-bold text-lg">Shop</h4>
            <p className="mt-5 text-gray-400">New Arrivals</p>
            <p className="mt-3 text-gray-400">Shoes</p>
            <p className="mt-3 text-gray-400">Clothing</p>
            <p className="mt-3 text-gray-400">Sale</p>
          </div>

          <div className="w-[200px]">
            <h4 className="font-bold text-lg">Help</h4>
            <p className="mt-5 text-gray-400">Order Status</p>
            <p className="mt-3 text-gray-400">Shipping</p>
            <p className="mt-3 text-gray-400">Returns</p>
            <p className="mt-3 text-gray-400">Contact Us</p>
          </div>

          <div className="w-[250px]">
            <h4 className="font-bold text-lg">Follow Us</h4>
            <div className="flex gap-4 mt-5">
              <button className="w-[45px] h-[45px] rounded-full bg-gray-800">
                IG
              </button>
              <button className="w-[45px] h-[45px] rounded-full bg-gray-800">
                X
              </button>
              <button className="w-[45px] h-[45px] rounded-full bg-gray-800">
                YT
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700 flex justify-between text-sm text-gray-400">
          <p>© 2026 Skill Academy. Student Practice Project.</p>
          <p>Privacy Policy | Terms of Use</p>
        </div>
      </footer>
    </main>
  );
}
