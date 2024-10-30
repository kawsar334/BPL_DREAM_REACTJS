import React from 'react'
import banner from "../../assets/banner-main.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Selected = ({ openCart, openSelectedItems, handleShow, selectedItems, setSelectedItems, data, }) => {

    const deleteFunc = (id) => {
        setSelectedItems(selectedItems.filter(item => item.id !== id));
        alert(`player removed successfully`);
    }

    return (
        <div className='flex flex-col gap-6 '>
            <div className='flex flex-col md:flex-row gap-3 justify-between items-center w-[95%] md:w-[80%] m-auto my-7 flex-wrap '>
                <h2 className='text-2xl font-bold'>Selected player {selectedItems?.length}/6</h2>
                <div className='flex justify-center items-center  border  rounded-[30px] overflow-hidden'>
                    <button className={`border-r p-2 cursor-pointer ${openCart ? "bg-[#E7FE29]" : "bg-[white]"}`} onClick={() => handleShow("available")}>Available</button>
                    <button className={`p-2 cursor-pointer ${openSelectedItems ? "bg-[#E7FE29]" : "bg-[white]"} `} onClick={() => handleShow("selected")}>Selected ({`${selectedItems?.length}`}) </button>
                </div>
            </div>
            <div className='flex justify-start  flex-col  gap-2 w-[80%] m-auto bg-[white] '>
                {
                    openSelectedItems && selectedItems?.length === 0 && (
                        <div className="text-center">
                            <h2 className='text-3xl'>No items selected yet</h2>
                        </div>
                    )

                }
                {selectedItems?.map((i) => (
                    <div className="flex justify-between items-center p-4 border-b  rounded">
                        <div className="flex-col flex md:flex-row items-start md:items-center gap-2">
                            <img
                                src={i?.image}
                                alt="Cart Item"
                                className="w-[100px] h-[100px] object-cover rounded-md"
                            />
                            <div className="flex flex-col">
                                <h3 className="text-xl font-bold">{i?.name}</h3>
                                <p className="text-sm text-gray-600">{i?.desc}.</p>
                                <p><span className='capitalize  font-bold'>price:</span>${i?.price}</p>
                            </div>
                            
                        </div>
                        
                        <button className="text-red-500 hover:text-red-700 text-lg font-semibold" onClick={() => deleteFunc(i.id)}>
                            <i className="fas fa-trash-alt text-red-500 hover:text-red-700 cursor-pointer "></i>
                        </button>
                    </div>
                ))}

            </div>
            <div className='w-[80%] m-auto my-7'>
                <div className='border-[#E7FE29] p-1 rounded-[10px] border-[1px] w-max'>

                    <button className='btn bg-[#E7FE29] border-none rounded-[10px]' onClick={() => handleShow("available")}>Add MOre player</button>
                </div>
            </div>
            
        </div>
    )
}

export default Selected