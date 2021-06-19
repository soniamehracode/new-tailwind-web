import React from "react";

const Header = () => {
  return (
    <div>
      <div className="bg-green-700 p-4 flex justify-between items-center">
        {/* left side */}
        <div className="flex items-center">
          <img
            src="https://cdn2.iconfinder.com/data/icons/icontober/64/Inkcontober_Trail-512.png"
            width="50"
            alt="Logo"
            className="mr-2"
          />
          <a className="inline-block p-2 text-green-200 hover:text-red-100">
            Home
          </a>
          <a className="inline-block p-2 text-green-200 hover:text-red-100">
            About
          </a>
        </div>
        {/* right side */}
        <div>
          <a className="inline-block p-2 mr-2 text-green-200 hover:text-indigo-100">
            Login
          </a>
          <a className="inline-block py-2 px-4 text-yellow-700 bg-yellow-400 rounded hover:bg-yellow-300 hover:text-yellow-800 transition ease-in duration-150">
            Signup
          </a>
        </div>
      </div>

      {/* hero section */}
      <div className="md:flex justify-between py-20 px-10 bg-green-600 text-green-100">
        {/* left side */}
        <div className="md:w-1/2 mb-10 mb:mb-0">
          <h2 className="md:text-4xl lg:text-6xl text-white mb-6">
            welcome to Doggo city
          </h2>
          <p className="mb-6">there is never a sad day here</p>
          <a
            href="#"
            className="inline-block py-3 px-6 text-lg bg-gray-400 text-gray-800 hover:bg-gray-300 rounded mr-2"
          >
            Learn More
          </a>
          <a
            href="#"
            className="inline-block py-3 px-6 text-lg bg-yellow-400 text-red-800 hover:bg-yellow-300rounded"
          >
            Get Started
          </a>
        </div>
        {/* right side */}
        <div className="w-1/2">
          <img
            src="https://images.unsplash.com/photo-1536012441472-aae6b3ce330f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="Happiest Doggo"
            class="w-full rounded shadow-2xl"
          />
        </div>
      </div>

      {/* feature */}
      <div className="flex py-16 px-10 bg-green-800 text-green-200 text-center">
        <div className="mr-2 text-center mt-8">
          <img
            src="https://images.unsplash.com/photo-1586179253019-ac8a2522535f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80"
            className="w-full md-4 rounded border-solid border-2 border-indigo-400"
          />
          <p>Cuddles</p>
        </div>
        <div className="mr-2 text-center">
          <img
            src="https://images.unsplash.com/photo-1453369569379-52cd4fc989af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
            className="w-full md-4 rounded border-solid border-2 border-indigo-400"
          />
          <p>Smiles</p>
        </div>
        <div className="mr-2 text-center">
          <img
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
            className="w-full md-4 rounded border-solid border-2 border-indigo-400"
          />
          <p>Games</p>
        </div>
        <div className="mr-2 text-center mt-8">
          <img
            src="https://images.unsplash.com/photo-1505623776320-7edecf5f0771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            className="w-full md-4 rounded border-solid border-2 border-indigo-400"
          />
          <p>Swins</p>
        </div>
      </div>
      {/* footer */}
      <div className="p-10 bg-green-900 text-green-400 flex justify-between">
        <div className="md:w-1/2">
          <h3 className="text-lg mb-2">join the Newsletter</h3>
          <form className="flex">
            <input
              type="email"
              className="w-full rounded py-3 px-4 outline-none focus:bg-green-200"
            />
            <button className="bg-red-300 hover:bg-red-400  px-4 text-red-800 rounded-r">
              join
            </button>
          </form>
        </div>
        <div className="flex items-center">
          Copyright &copy:Doggels 2020-Infinity
        </div>
      </div>
    </div>
  );
};

export default Header;
