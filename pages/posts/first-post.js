import Link from "next/link";
import Head from "next/head";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>first post</title>
      </Head>
      <main>
        <h1>First Post</h1>
        <Link href="/">
          <a>back to home</a>
        </Link>
      </main>
    </>
  );
}
