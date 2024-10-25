import { useEffect, useState } from "react"
import withPost from "../hoc/withPost"
const API_PATH = 'https://jsonplaceholder.typicode.com/posts'
const fetchPosts = async () => {
    const res = await fetch(API_PATH)
    return res.json()
}

const Post = ({ data, isLoading, error }) => {
    return (<>
        {error ? (<h3>{error}</h3>) : ''}
        {isLoading ? (<>Loading....2</>) : ''}
        <ul>
            {data ? (<>{data && data.map((v, k) => (
                <li key={k + 1}> {v.title}</li>
            ))}</>
            ) : <></>}

        </ul>
    </>)
}

export default withPost(Post, fetchPosts)