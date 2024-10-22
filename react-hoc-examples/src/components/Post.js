import React from 'react';
import withDataFetch from '../basic-hoc/withDataFetch'

const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
};

const Post = ({ data, isLoading, error }) => {
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <ul>
            {data.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    );
}

export default withDataFetch(Post, fetchPosts);

