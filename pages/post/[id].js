import { useRouter } from 'next/router';
import { MainLayout } from '../../components/MainLayout';

export default function Post() {
    const {query} = useRouter();
    return (
        <MainLayout>
            <h1>post {query.id}</h1>
        </MainLayout>
    )
}
