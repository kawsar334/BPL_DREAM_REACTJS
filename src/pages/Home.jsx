


import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import Selected from '../components/selected/Selected'
import useFetch from '../data/UseFetch'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../components/Spinner'

const Home = () => {
    const { data, loading, error } = useFetch();
    const [openCart, setOpenCart] = useState(true);
    const [openSelectedItems, setOpenSelectedItems] = useState(false);
    const [count, setCount] = useState(0);
    const [amount, setAmount] = useState(0);
    const [selectedItems, setSelectedItems] = useState([]);


    // toggling cards and selected items
    const handleShow = (type) => {
        if (type === "available") {
            setOpenCart(true);
            setOpenSelectedItems(false)
        } else {
            setOpenCart(false)
            setOpenSelectedItems(true)
        }
    }


    // handling count function
    const handleCount = () => {
        const newCount = count + 5000000; 
        setCount(newCount); 
        toast.success(`You Added $ ${newCount}`, { 
            position: "top-center"
        });
    };

    // 
    const handleAddPlayer = (player) => {
        if (selectedItems.length >= 6) {
            toast.warning("You can only select up to 6 players!", {
                position: "top-center"
            });
        } else if (count < player.price) {
            toast.error("Not enough money", {
                position: "top-center"
            });
        } else if (selectedItems.some((item) => item.id === player.id)) {
            toast.warning(`${player.name} is already selected!`, {
                position: "top-center"
            });
        } else {
            setCount(count - player.price);
            toast.success(`You Added ${player.name}, and his price: $${player.price}`, {
                position: "top-center"
            });
            setSelectedItems((prevItems) => [...prevItems, player]);
        }
    };
    
    return (
        <>
            <Navbar
                count={count}
            />
            <Hero
                handleCount={handleCount}
            />
         {loading ?<Spinner/>:   <>
            {
                openCart && <Cards
                openCart={openCart}
                openSelectedItems={openSelectedItems}
                handleShow={handleShow}
                data={data}
                handleAddPlayer={handleAddPlayer}
                selectedItems={selectedItems}
                />
            }
            </>}
            {
                openSelectedItems && <Selected
                    openCart ={openCart}
                    openSelectedItems={openSelectedItems}
                    handleShow={handleShow}
                    selectedItems={selectedItems}
                    setSelectedItems={setSelectedItems}
                    data={data}

                />
            }
            <Newsletter />
            <Footer />

        </>
    )
}

export default Home