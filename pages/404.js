import Link from 'next/link';
import { MainLayout } from '../components/MainLayout';
import styles from '../styles/error.module.scss'

export default function Error() {
    return (
        <>
            <MainLayout>
                <h1 className={styles.error}>Error 404</h1>
                <p>Please <Link href="/"><a>go</a></Link> to the main page</p>
            </MainLayout>
        </>
    )
}