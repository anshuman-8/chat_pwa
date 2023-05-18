import React, { useEffect, useRef, useState } from "react";
import InputHolder from "./Components/InputHolder";
import Header from "./Components/Header";
import MainThread from "./Components/MainThread";
import { motion } from "framer-motion";

export default function Container() {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const sentinelRef = useRef(null);
  const [header, setHeader] = useState({
    name: "",
    from: "",
    to: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.1,
    });

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, []);

  const fetchChats = async () => {
    setLoading(true);

    try {
      const response = await fetch(`http://3.111.128.67/assignment/chat?page=${page}`);
      const data = await response?.json();
      if (page === 0) {
        setHeader({
          name: data.name,
          from: data.from,
          to: data.to,
        });
      }
      setChats((prevChats) => [...prevChats, ...data.chats]);
      setLoading(false);
      console.log(chats);
    } catch (error) {
      console.error("Error fetching chats:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChats();
    console.log(page);
  }, [page]);

  const handleIntersection = (entries) => {
    const target = entries[0];

    if (target.isIntersecting && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="relative">
      <Header header={header} />
      {/* {loading && (
        <motion.div
          animate={{ x: 100 }}
          transition={{ ease: "easeOut", duration: 10 }}
          className="fixed bottom-28 right-1/2 rounded-xl bg-green-600/60 backdrop-blur-sm font-semibold py-2 px-3 text-white w-fit mx-auto shadow-lg"
        >
          <p>Loading...</p>
        </motion.div>
      )} */}
      <div className="z-0 overflow-y-scroll">
        <MainThread chats={chats} />
      </div>
      <div ref={sentinelRef} />
      <InputHolder />
    </div>
  );
}
