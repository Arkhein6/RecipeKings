import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Recipes = () => {
    const [selectedId, setSelectedId] = React.useState(null);
    const items = [
        { subtitle: "this is subtitle", title: "this is title", id: 1 },
        { subtitle: "this is subtitle", title: "this is title", id: 2 },
        { subtitle: "this is subtitle", title: "this is title", id: 3 },
        { subtitle: "this is subtitle", title: "this is title", id: 4 },
    ];
    return (
        <div className="flex cursor-pointer gap-5">
            {items.map((item) => (
                <motion.div
                    layoutId={item.id}
                    onClick={() => setSelectedId(item.id)}
                    className="h-[100px] w-[100px] bg-yellow-400">
                    <motion.h5>{item.subtitle}</motion.h5>
                    <motion.h2>{item.title}</motion.h2>
                </motion.div>
            ))}
            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        layoutId={selectedId}
                        className="h-[100px] w-[100px] bg-orange-500 "
                        onClick={() => setSelectedId(null)}
                        >
                        <motion.h5>{items[selectedId-1].subtitle}</motion.h5>
                        <motion.h2>{items[selectedId-1].title}</motion.h2>
                        <motion.button onClick={() => setSelectedId(null)} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Recipes;
