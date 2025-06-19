import Link from "next/link";
import { Suspense } from "react";
import AwaitComponent from "./AwaitComponent";

function HomePage() {
  return (
    <>
      <Link prefetch={false} href="/about">
        go test
      </Link>

      <Suspense fallback={<div>LOADING</div>}>
        <AwaitComponent />
      </Suspense>
    </>
  );
}

export default HomePage;
