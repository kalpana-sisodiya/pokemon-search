import "../styles/globals.css";
import { Quicksand } from "next/font/google";

const inter = Quicksand({
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${inter.className} container mx-auto px-4 py-10`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
