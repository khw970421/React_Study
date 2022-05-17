import Link from "next/link";

function Home() {
  return (
    <>
      <Link href="/staticside">
        <a>staticSide로 가기</a>
      </Link>
      <Link href="/serverside">
        <a>serverSide로 가기</a>
      </Link>
    </>
  );
}

export default Home;
