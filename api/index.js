import axios from "axios";
const baseUrl = "http://localhost:3000/api/";
// const getStudents = () => {
//   try {
//     const res = axios.get(`${baseUrl}/students`);
//   } catch (error) {
//     console.log(error);
//     return { status: "error" };
//   }
// };

const getStudents = async () => {
  try {
    const res = await axios.get(baseUrl + "students");
    return { success: true, data: res.data };
  } catch (error) {
    return { success: false, data: [] };
  }
};

export { getStudents };
