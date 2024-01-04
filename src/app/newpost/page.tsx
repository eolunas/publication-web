"use client";

import { createPost } from "@/services/postService";
import { useState } from "react";
import usePostStorage from "../../hooks/usePostStorage";

export default function NewPost() {
  // save in localStorage
  const [localPosts, addItemLocal, deleteItemLocal] = usePostStorage("posts");

  const [post, setPost] = useState({});
  const handleChange = (e: any) => {
    const newPost = {
      ...post,
      [e.target.name]: e.target.value,
    };
    setPost((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addItemLocal(post);
    createPost(post).then((res) => {
      console.log(res);
      e.target.reset();
    });
  };

  return (
    <section className="bg-slate-400 h-lvh flex flex-col justify-center items-center">
      <form
        className="flex flex-col justify-center items-center gap-4 w-1/2 bg-slate-300 p-5 rounded-lg shadow-sm"
        onSubmit={handleSubmit}
      >
        <input
          name="userId"
          type="text"
          placeholder="Id de usuario"
          onChange={handleChange}
        />
        <input
          name="title"
          type="text"
          placeholder="Escribe el titulo"
          onChange={handleChange}
        />
        <textarea
          name="body"
          placeholder="Escribe el contenido del post"
          onChange={handleChange}
        ></textarea>
        <button>Guardar</button>
      </form>

      {localPosts &&
        localPosts.map((item: any, key: number) => {
          return (
            <div key={key}>
              <p>{item.title}</p>
              <p>{item.body}</p>
              <button onClick={() => deleteItemLocal(item.idLocal)}>
                Borrar
              </button>
              <button>Update</button>
            </div>
          );
        })}
    </section>
  );
}
