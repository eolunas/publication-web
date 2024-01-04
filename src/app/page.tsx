import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Publication page App</h1>
      <p>
        Pagina creada de consumo de API
        <em>
          <a href="https://jsonplaceholder.typicode.com">jsonplaceholder</a>
        </em>
      </p>
      <Link href="/listado">Go to Demo</Link>
    </main>
  );
}
