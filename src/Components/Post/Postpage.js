import React from "react";

const Postpage = () => {
  return (
    <div className="space-y-4">
      {/*เนื้อหา*/}
      <div>
        {/*หัวข้อ*/}
        <div className="bg-red-400 p-4 text-xl font-bold rounded-t-xl">
          <p>Title</p>
        </div>
        {/*หัวข้อ*/}
        <div className=" bg-white h-96 rounded-b-xl">
          <div className=" break-words text-md p-5">
            <p>Comment</p>
          </div>
        </div>
      </div>
      {/*คอมเม็นท์*/}
      <div>
        <div className=" bg-white h-full rounded-xl">
          <div className=" break-words text-xl p-5 space-y-4 font-bold text-black">
            <p>Content Items</p>
            <textarea
              class=" form-control block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none "
              rows="7"
              placeholder="Your message">
                    At w3schools.com you will learn how to make a website. They offer
                    free tutorials in all web development technologies.</textarea>
            <div className="grid justify-items-end">
            <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-md rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Comment
            </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Postpage;
