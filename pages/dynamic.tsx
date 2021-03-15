import { GetStaticProps, GetStaticPropsContext } from "next";

interface Props {
  myFavNum: number;
}

// TODO this fn runs first on render in server

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

// ! called always in every page req even in production . better we avoid it

// export const getServerSideProps: GetServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   return {
//     props: {
//       myFavNum: Math.random(),
//     },
//   };
// };

const Dynamic: React.FC<Props> = ({ myFavNum }) => {
  return <div>this is a dynamic number {myFavNum}</div>;
};

export default Dynamic;
