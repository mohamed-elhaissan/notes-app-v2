import { useEffect, useState } from "react";
import { request } from "../../utils/axiosUtilis";

export default function AllNotes() {
    const [notes,setNotes] = useState([])
  const fetchAllNotes = async () => {
    await request({ url: "/notes" })
      .then((reponse) => {
            setNotes(...reponse.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchAllNotes();
  }, []);
  return (
    <>
      <div>
        <table>
            <thead>
                <tr>
                    <th>Note</th>
                    <th>Note</th>
                </tr>
            </thead>
        </table>
        {notes.map((item,index)=>(
            
        ))}
      </div>
    </>
  );
}
