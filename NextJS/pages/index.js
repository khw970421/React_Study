import Link from "next/link";

function Home({ posts, rand }) {
  return (
    <>
      <div>
        <h1>{rand}</h1>
        <ul>
          <li>{posts.userId}</li>
          <li>{posts.title}</li>
        </ul>
      </div>
      <Link href="/about">
        <a className="nav-link">about으로 가기</a>
      </Link>
    </>
  );
}

export const getStaticProps = async () => {
  const rand = Math.floor(Math.random() * 10) + 1;
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${rand}`);
  const posts = await res.json();
  return {
    props: {
      posts,
      rand,
    },
  };
};

/*
export const getServerSideProps = async () => {
  const rand = Math.floor(Math.random() * 10) + 1;
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${rand}`);
  const posts = await res.json();
  return {
    props: {
      posts,
      rand,
    },
  };
};
*/

export default Home;
