import React from 'react';
import { motion } from 'framer-motion';

function GroceryItem({ item, onDelete }) {
  return (
    <motion.li
      className="item-card"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
    >
      <div>
         <strong>{item.itemName}</strong> - {item.quantity} {item.unit}
      </div>
      <motion.button
        whileTap={{ scale: 0.9, rotate: -15 }}
        onClick={onDelete}
        title="Remove"
      >
        🗑️
      </motion.button>
    </motion.li>
  );
}

export default GroceryItem;

