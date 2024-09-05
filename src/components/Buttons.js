import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Buttons() {
  const menuItems = [
    { name: "Bolinhos", path: "/bolinhos" },
    { name: "Porções Quentes", path: "/porcoes-quentes" },
    { name: "Porções Frias", path: "/porcoes-frias" },
    { name: "Lanches", path: "/lanches" },
    { name: "Drinks", path: "/drinks" },
    { name: "Cervejas", path: "/cervejas" },
    { name: "Sem Alcool", path: "/sem-alcool" },
  ];

  return (
    <div className="rounded-3xl overflow-x-auto mt-3 ml-3 mr-3 h-16 bg-white">
      <ul className="text-lg p-4 whitespace-nowrap bg-white flex justify-between h-16 items-center">
        {menuItems.map((item) => (
          <motion.li
            key={item.path}
            className="cursor-pointer px-4 flex items-center p-28"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "bg-red-500 text-white font-bold rounded-xl px-2 py-1"
                  : "bg-white text-black"
              }
            >
              {item.name}
            </NavLink>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default Buttons;
