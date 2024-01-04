"use client";

import { useState } from "react";
import PostList from "../../components/PostList";
import Link from "next/link";

export default function Listado() {
  const [filters, setFilters] = useState("");
  return (
    <main className="h-full flex flex-col justify-center items-center">
      <div className="w-full flex justify-center items-center">
        <Link href={`/newpost`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            +
          </button>
        </Link>
        <input
          className="outline-none m-2 p-2 rounded-full shadow-sm transition duration-500 focus-within:shadow-sm focus:ring-2 focus:w-11/12"
          type="search"
          placeholder="Buscar..."
          onChange={(e) => setFilters(e.target.value)}
        />
      </div>
      <PostList filters={filters}></PostList>
    </main>
  );
}
