import Link from "next/link";

export default function NavBar() {
  return (
    <div className="w-full h-12 bg-zinc-500 flex justify-around items-center">
      <h2 className="text-lg text-zinc-50">Publication web</h2>
      <nav className="flex justify-center items-center">
        <Link className="mr-2" href={`/`}>
          Home{" "}
        </Link>
        <Link className="mr-2" href={`/listado`}>
          Posts{" "}
        </Link>
        <Link className=" p-2 bg-teal-800 rounded-sm" href={`/newpost`}>
          +{" "}
        </Link>
      </nav>
    </div>
  );
}
