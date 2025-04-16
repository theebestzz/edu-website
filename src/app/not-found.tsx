import NotFound from "@/components/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Page",
};

const ErrorPage = () => {
  return (
    <>
      <NotFound />
    </>
  );
};

export default ErrorPage;
