import { useParams } from "react-router-dom";

const UpdateNote = () => {
  const { id } = useParams();
  console.log("this is new route");

  console.log(id);

  return (
    <>
      <ToastContainer />
      {open && }
    </>
  );
};
export default UpdateNote;
