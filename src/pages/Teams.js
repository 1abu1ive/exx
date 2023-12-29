import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Layout from "../../components/Layouth";
import { Typography } from "@mui/material";
import { getStudents } from "../../api";

export default function Theams({ data }) {
  return (
    <Layout>
      <div>
      <Typography variant="h6" component={"div"}>Teams</Typography>

<TableContainer component={Paper}>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell>Ismi</TableCell>
        <TableCell>Bali</TableCell>
        <TableCell>Qoshilgan sanasi</TableCell>
        <TableCell></TableCell>
        <TableCell>kursi</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {data.map((row) => (
        <TableRow key={row.name}>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell>{row.score}</TableCell>
          <TableCell>{row.submitted}</TableCell>
          <TableCell>{row.carbs}</TableCell>
          <TableCell>{row.garde}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
      </div>
    </Layout>
  );
}

// export async function getStaticProps() {
//   const res = await fetch("http://localhost:3000/api/students");
//   const posts = await res.json();
//   return {
//     props: {
//       posts,
//     },
//   };
// }
export async function getStaticProps(context) {
  const res = await getStudents();
  return {
    props: { data: res.data },
  };
}
