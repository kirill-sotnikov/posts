import { Roboto } from "next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";
import "../global.css";
import { SearchContextProvider } from "../src/searchContext";

const queryClient = new QueryClient();

const inter = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <SearchContextProvider>
      <QueryClientProvider client={queryClient}>
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
      </QueryClientProvider>
    </SearchContextProvider>
  );
}
