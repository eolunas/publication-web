export default function CommentItem({ data }: { data: any }) {
  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {data.name}
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {data.email}
        </p>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {data.body}
        </p>
      </div>
    </div>
  );
}
