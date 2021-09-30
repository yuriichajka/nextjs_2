import { useState, useEffect } from 'react';
import { MainLayout } from '../components/MainLayout';

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function load() {
            const response = await fetch('http://localhost:4200/posts')
            const json = await response.json()
            setPosts(json)
        }
        load();
    }, [])
    return (
        <MainLayout title={'Posts Page'}>
            <h1>Posts page</h1>
            <pre>{JSON.stringify(posts)}</pre>
        </MainLayout>
    )
}
