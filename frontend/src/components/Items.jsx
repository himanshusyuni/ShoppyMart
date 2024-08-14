import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import axios from "axios";

export const Items = ({ fetchCart }) => {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/item/bulk?filter=" + filter, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then((response) => {
                setItems(response.data.items);
            });
    }, [filter]);

    return (
        <>
            <div className="font-bold mt-6 text-lg">
                Items
            </div>
            <div>
                <input 
                    onChange={(e) => {setFilter(e.target.value)}}
                    placeholder="Search Items"
                    type="text"
                    className="w-full px-2 py-1 border rounded-lg border-gray-300 mb-4"
                />
            </div>
            <div className="h-96 overflow-y-auto no-scrollbar">  
                {/* Adjust height as needed */}
                <div className="flex justify-between border-b-2 border-gray-300 py-4 font-bold">
                    <div className="w-1/3">Item</div>
                    <div className="w-1/3">Price</div>
                    <div className="w-1/3"></div>
                </div>
                {items.map((item) => <Item key={item._id} item={item} fetchCart={fetchCart} />)}
            </div>
        </>
    );
}

function Item({ item, fetchCart }) {
    const id = item._id;

    return (
        <div className="flex justify-between py-4 border-b border-gray-300">
            <div className="w-1/3">{item.name}</div>
            <div className="w-1/3">₹{item.price}</div>
            <div className="w-1/3 flex">
                <Button 
                    label={"+"} 
                    onClick={() => {
                        axios.post("http://localhost:3000/api/v1/item/addToCart/" + id,
                            {},
                            {
                                headers: {
                                    Authorization: "Bearer " + localStorage.getItem("token")
                                }
                            }
                        ).then(() => fetchCart());
                    }}
                />
                <Button 
                    label={"-"}
                    onClick={() => {
                        axios.post("http://localhost:3000/api/v1/item/removeFromCart/" + id, 
                            {},
                            {
                                headers: {
                                    Authorization: "Bearer " + localStorage.getItem("token")
                                }
                            }
                        ).then(() => fetchCart());
                    }}
                />
            </div>
        </div>
    );
}
