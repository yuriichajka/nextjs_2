import '../styles/main.scss'

export default function MuApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}