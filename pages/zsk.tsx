import { useRouter } from "next/router";
interface Props {}

const zsk: React.FC<Props> = () => {
  const router = useRouter();
  return <div onClick={() => router.back()}>this is zsk</div>;
};

export default zsk;
