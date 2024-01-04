import CommentItem from "./CommentItem";

export default async function CommentList({ itemId }: { itemId: number }) {
  const comments = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${itemId}/comments`
  )
    .then((response) => {
      if (response.status == 200) return response.json();
      else if (response.status == 404) {
        throw new Error("No more publications");
      } else throw new Error("Error in fetch");
    })
    .then((data) => data);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full overflow-y-auto">
      {comments &&
        comments.map((item: any, key: number) => {
          return <CommentItem data={item} key={key}></CommentItem>;
        })}
    </div>
  );
}
