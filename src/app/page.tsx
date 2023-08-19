import profilePic from "@/assets/pic.jpg"
import chairPic from "@/assets/chair.webp"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faStar, faHeart } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="w-11/12 max-w-xl mx-auto py-20 px-10 flex flex-col space-y-10">
      <div className="bg-white p-8 rounded-3xl shadow-xl">
        <span className="font-semibold text-3xl">Select Item</span>
        <div className="flex justify-between my-2">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Tooly Table</span>
          <span className="font-semibold">$80</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span className="font-semibold">Total</span>
          <span className="font-semibold">$99</span>
        </div>
        <div className="flex justify-center">
          <button className="w-40 py-3 mt-5 bg-red-400 text-white p-2 rounded-lg shadow-lg hover:bg-red-300 hover:-translate-y-1 transition ease-in-out duration-200 active:bg-red-400">
            Checkout
          </button>
        </div>
      </div>
      <div className="bg-white overflow-hidden rounded-2xl shadow-xl">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-2xl font-medium">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-400 font-medium">Orders</span>
              <span className="font-semibold">340</span>
            </div>
            <Image src={profilePic} alt="profile" className="w-24 h-24 rounded-full" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-400 font-medium">Spent</span>
              <span className="font-semibold">$2,310</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center -mt-10">
            <span className="text-lg font-semibold">
              Jane Doe
            </span>
            <span className="text-sm text-gray-500">
              New York, USA
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-xl">
        <div className="flex mb-5 justify-between">
          <button><FontAwesomeIcon icon={faArrowLeft} /></button>
          <div className="space-x-3 flex items-center">
            <span className="font-semibold">
              <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-1" />
              4.9
            </span>
            <button>
              <FontAwesomeIcon icon={faHeart} className="text-red-500 shadow-xl p-2 rounded-md" />
            </button>
          </div>
        </div>
        <Image src={chairPic} alt="chair" />
        <div className="flex flex-col">
          <span className="font-semibold text-xl tracking-tight">Swoon Lounge</span>
          <span className="text-sm text-gray-500">Chair</span>
          <div className="mt-1 mb-5 flex justify-between items-center">
            <div className="space-x-2 flex">
              <div className="w-6 h-6 rounded-full bg-stone-300" />
              <div className="w-6 h-6 rounded-full bg-orange-300" />
              <div className="w-6 h-6 rounded-full bg-indigo-400" />
            </div>
            <div className="flex items-center space-x-5">
              <button className="rounded-lg bg-stone-300 active:bg-stone-400 flex justify-center items-center aspect-square w-10 text-xl text-gray-500">
                -
              </button>
              <span className="text-xl">1</span>
              <button className="rounded-lg bg-stone-300 active:bg-stone-400 flex justify-center items-center aspect-square w-10 text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="mt-5 flex justify-between items-center">
            <span className="text-2xl font-semibold">$450</span>
            <button className="w-40 bg-stone-500 text-white p-3 rounded-lg shadow-xl hover:bg-stone-600 hover:-translate-y-1 transition ease-in-out duration-200">Add to Cart</button>
          </div>
        </div>
      </div>
      {/* <div className="bg-white p-10 rounded-2xl shadow-xl"></div> */}
    </div>
  );
};

export default Home;
