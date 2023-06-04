import { useParams } from "react-router-dom";

const DetailWiew = () => {
  const { id } = useParams();
  return <div>DetailWiew {id}</div>;
};
export default DetailWiew;
