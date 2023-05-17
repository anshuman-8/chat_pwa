import React, { useEffect, useRef, useState } from "react";
import InputHolder from "./Components/InputHolder";
import Header from "./Components/Header";
import MainThread from "./Components/MainThread";

export default function Container() {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const sentinelRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // observe elements relative to the viewport
      threshold: 0.1, // set the threshold as per your needs
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
      const response = await fetch(`https://3.111.128.67/assignment/chat?page=${page}`);
      const data = await response?.json();

      setChats(prevChats => [...prevChats, ...data.chats]);
      setLoading(false);
      console.log(chats);
    } catch (error) {
      console.error('Error fetching chats:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChats();
    console.log(page);
  }, [page]);

  const handleIntersection = entries => {
    const target = entries[0];

    if (target.isIntersecting && !loading) {
      setPage(prevPage => prevPage + 1);
    }
  };

  return (
    <div className="relative">
      <Header />
      <div className="z-0 overflow-y-scroll">
      <MainThread chats={chats}/>
      </div>
      <div ref={sentinelRef} />
      <InputHolder />
    </div>
  );
}
