import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import { NextRouter, useRouter } from "next/router";

interface Props {}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  return {
    revalidate: 2,
    props: {
      myFavNum: 2,
    },
  };
};

// ! run during build time and not in run time

export const getStaticPaths: GetStaticPaths = async (
  context: GetStaticPathsContext
) => {
  return {
    fallback: false,
    paths: [{ params: { name: "hello" } }, { params: { name: "world" } }],
  };
};

const SubDetails: React.FC<Props> = () => {
  const router: NextRouter = useRouter();
  console.log("router: ", router);

  return (
    <div>
      this is sub details page
      {router.query.name}
      <button onClick={() => router.replace("/")}>
        this is go to home with replace
      </button>
      <button onClick={() => router.push("/")}>
        this is go to home with push
      </button>
    </div>
  );
};

export default SubDetails;
