import { NextRouter, useRouter } from "next/router";

interface Props {}

const Name: React.FC<Props> = () => {
  const router: NextRouter = useRouter();
  console.log("router: ", router);

  // ? catch all the routes
  return <div>this is name device</div>;
};

export default Name;
