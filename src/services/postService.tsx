// services/postService.ts
const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getAllPosts = async () => {
  const response = await fetch(`${BASE_URL}/posts`);
  return response.json();
};

export const getPostByPage = async (filters = "", page = 1) => {
  const apiURL = `/posts?_page=${page}&q=${filters}`;
  const response = await fetch(BASE_URL + apiURL);
  return response.json();
};

export const getPostById = async (postId: string) => {
  const response = await fetch(`${BASE_URL}/posts/${postId}`);
  return response.json();
};

export const createPost = async (postData: any) => {
  const response = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      ...postData,
    }),
  });
  return response.json();
};

export const updatePostById = async (postData: any) => {
  const response = await fetch(`${BASE_URL}/posts/${postData.id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      ...postData,
    }),
  });
  return response.json();
};

export const deletePostById = async (postId: number) => {
  const response = await fetch(`${BASE_URL}/posts/${postId}`, {
    method: "DELETE",
  });
  return response.json();
};
