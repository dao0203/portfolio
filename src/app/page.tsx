import Image from "next/image";
import Link from "next/link";
import Title from "../components/title";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="flex justify-between w-full">
        <Title text="Hello World" />
        <div className="flex">
          <Link href="https://github.com/dao0203">
            <Image
              src="/github-mark-white.svg"
              alt="GitHub Logo"
              width={32}
              height={32}
            />
          </Link>
          <div className="w-16" />
          <Link href="https://x.com/yuyuya0203">
            <Image
              src="/x-white.svg"
              alt="X Logo"
              width={32}
              height={32}
            />
          </Link>
        </div>
      </header>
      <h1 className="text-5xl font-bold">Hello World</h1>
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={200}
        height={200}
      />
    </main>
  );
}
