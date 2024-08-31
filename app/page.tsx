import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* <nav className="mx-auto w-5/12 py-5">
        <ul className="flex gap-4">
          <li className="underline">Home</li>
          <li className="underline">Posts</li>
          <li className="underline">Lists</li>
        </ul>
      </nav> */}
      <main className="mx-auto w-5/12 py-5 space-y-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl ">Vili's Vault</h1>
          <div className="border-t w-full border-gray-400"></div>
          <p>
            I'm software engineer based on Brazil, specifically on Rio de
            Janeiro City. I Created this kind of "vault" to put some articles
            and books that i like and i'm reading and some posts that i'm gonna
            eventually write.
          </p>
          <p>
            I enjoy studying some topics and languages that usually are
            correlated to my daily job (react and .net) like other web
            frameworks and languages such as Golang and Typescript.
          </p>
          <p>
            Not only tech things but i have a step in on reading and love magic
            and astronomy
          </p>
          <p>
            If you want to know more about me just check my website{' '}
            <Link
              href="https://guilherme-dev-pi.vercel.app/"
              target="_blank"
              className="text-blue-700 underline"
            >
              here
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl ">Posts</h1>
          <div className="border-t w-full border-gray-400"></div>
        </div>
      </main>
    </>
  );
}
