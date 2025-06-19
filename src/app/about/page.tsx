import Link from "next/link";

export default async function TestLoading() {
  console.log("before await");
  await new Promise((resolve) =>
    setTimeout(() => {
      console.log("timeout");
      resolve(3);
    }, 10000)
  );
  console.log("after await");

  return (
    <div>
      TestLoading
      <Link href="/home">home</Link>
    </div>
  );
}
