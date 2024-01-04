"use client";

import CommentList from "../../../components/CommentList";

export default function PostPage({ params }: { params: any }) {
  return (
    <main className="flex h-full flex-col items-center justify-between">
      <h1>Post No {params.id}</h1>
      <CommentList itemId={params.id}></CommentList>
    </main>
  );
}
