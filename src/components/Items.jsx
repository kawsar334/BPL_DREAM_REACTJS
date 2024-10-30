import React from 'react';

const Items = ({ item, handleAddPlayer }) => {
    return (
        <div className="card bg-base-100 w-[95%] md:w-[45%] lg:w-[31%] shadow-xl ">
            <figure className="px-5 pt-5">
                <img
                    src={item?.image}
                    alt={item?.name}
                    className="rounded-xl w-full h-48 object-cover"
                />
            </figure>
            <div className="card-body items-start text-left flex flex-col h-full">
                <h2 className="card-title shadow w-full px-2 rounded"> <i class="fa-solid fa-user"></i> {item?.name}</h2>
                <div className="flex flex-row  justify-between flex-wrap w-full  ">
                    <p className='text-[14px] '><i class="fa-regular fa-flag"></i> <span className={`shadow text-[teal] capitalize  p-1 rounded`}> {item?.country}</span>
                    </p>
                    <p className='text-[14px]  text-right   text-[gray] font-bold ' > {item?.rounderStatus}</p>
                </div>
                <div className="flex flex-row justify-between flex-wrap w-full ">
                    <p className='text-[14px] '><strong>Price:</strong> ${item?.price}</p>
                    <p className='text-[14px] text-right'><strong>Rating:</strong> <span className='text-[#eb984e]'>{item?.rating}</span> </p>
                </div>
                <div className="flex flex-row justify-between flex-wrap w-full ">
                    <p className='text-[14px] flex justify-between items-center '><span className='font-bold'>Batting Status:</span> <span>{item?.battingStatus}</span></p>
                </div>

                <div className="card-actions mt-auto  w-full  flex justify-end">
                    <button className="border rounded-[40px] py-1 px-3 border-[#E7FE29] hover:bg-[#E7FE29] " onClick={() => handleAddPlayer(item)}>Choose Player</button>
                </div>
            </div>
        </div>
    );
}

export default Items;
