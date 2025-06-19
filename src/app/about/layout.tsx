import { Suspense } from "react";
import Loading from "./loading";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      layout
      <Suspense fallback={<Loading />}>
        <section>{children}</section>
      </Suspense>
    </div>
  );
}
