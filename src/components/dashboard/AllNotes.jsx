import { useEffect, useState } from "react";
import { request } from "../../utils/axiosUtilis";

export default function AllNotes() {
  const [notes, setNotes] = useState([]);
  const fetchAllNotes = async () => {
    await request({ url: "/notes" })
      .then(({ data }) => {
        setNotes([...data]);
        console.log(data);

        console.log(notes);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchAllNotes();
  });
  return (
    <>
      <div className="p-5 w-[80%] mx-auto">
        <table border={1} className="w-full  ">
          <thead className="bg-gray-50 border-b-2 border-gray-200  text-[#95A4B9] first-letter:uppercase rounded-lg">
            <tr>
              <th className=" p-3 text-sm font-semibold tracking-wide text-left">
                Note
              </th>
              <th className="w-48 p-3 text-sm font-semibold tracking-wide text-left">
                Title
              </th>
              <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                Rank
              </th>
              <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                Owner
              </th>
            </tr>
          </thead>
          <tbody>
            {notes?.map((item, index) => (
              <tr
                key={index}
                className={index % 2 == 0 ? "bg-white" : "bg-slate-100"}
              >
                <td className="p-3 text-sm text-gray-700 first-letter:uppercase">
                  {item.content}
                </td>
                <td className="p-3 text-sm text-gray-700 first-letter:uppercase">
                  {item.title}
                </td>
                <td className="p-3 text-sm font-bold  text-blue-500 ">
                  {index + 1}Th
                </td>
                <td className="p-3 text-sm text-gray-700">
                  <span
                    className="px-2 py-1 text-xs font-medium rounded  text-green-800"
                    style={{
                      background: item.is_owner ? "#FEF08A" : "#BBF7D0",
                    }}
                  >
                    {item.is_owner
                      ? "you"
                      : item.shared_with[0]?.last_name.toLowerCase()}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
