import Image from "next/image";
import Head from "next/head";
import SignUpForm from "./Component/SignupForm";

export default function Home() {
  return (
    <div className="bg-green-300 text-center text-white h-screen">
      <Head>
        <title>face.IO login/signup form</title>
        <meta name="description" content="a face.IO login form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SignUpForm />
      </main>
    </div>
  );
}
