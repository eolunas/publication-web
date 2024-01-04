import { deletePostById, updatePostById } from "@/services/postService";
import { useState } from "react";
import { usePosts } from "@/context/PostContext";
import CardItem from "./CardItem";

interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}
export default function PostItem({ data }: { data: IPost }) {
  const { deletePost, updatePost } = usePosts();
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const deleteItem = () => {
    deletePostById(data.id); //Delete BackEnd Post
    deletePost(data.id); //Delete Aplication Post
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const updatedPost = {
      ...data,
      title: e.target[1].value,
      body: e.target[2].value,
    };
    updatePostById(updatedPost).then((res) => {
      console.log(res);
    }); //Update BackEnd Post
    updatePost(data.id, updatedPost); //Update Aplication Post
    setIsEditing(false);
  };

  return (
    <div>
      <div className="w-full p-2">
        {isEditing ? (
          <>
            <form
              className="flex flex-col justify-center items-center"
              onSubmit={handleSubmit}
            >
              <input
                className="w-full hidden"
                name="userId"
                type="text"
                defaultValue={data.userId}
                placeholder="Id de usuario"
              />
              <input
                className="w-full m-2 p-2"
                name="title"
                type="text"
                defaultValue={data.title}
                placeholder="Escribe el titulo"
              />
              <textarea
                className="w-full h-40 m-2 p-2"
                name="body"
                defaultValue={data.body}
                placeholder="Escribe el contenido del post"
              ></textarea>
              <div className="flex justify-center items-center">
                <button className="bg-emerald-900 rounded-md m-2 p-2 text-white">
                  Guardar
                </button>
                <button className="bg-slate-300 rounded-md m-2 p-2 text-black">
                  Cancelar
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <CardItem
              data={{
                ...data,
                src: `https://source.unsplash.com/random/200x200?sig=${Math.random()}`,
                delete: deleteItem,
                edit: setIsEditing,
                editing: isEditing,
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}
