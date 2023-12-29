import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getStudents } from "../api";
import Layout from "../components/Layout";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Home({ data }) {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   getStudents().then((res) => {
  //     console.log(res);
  //     setData(res);
  //   });
  // }, []);

  console.log(data);

  return (
    <Layout>
      <Typography variant="h6">Students</Typography>

      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell>Student name</StyledTableCell>
              <StyledTableCell>Score</StyledTableCell>
              <StyledTableCell>Submitted</StyledTableCell>
              <StyledTableCell>Grade</StyledTableCell>
              <StyledTableCell>Pass / Fail</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row, index) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell>{index + 1}</StyledTableCell>
                <StyledTableCell
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Image
                    src={row.img}
                    alt={row.name}
                    width={40}
                    height={40}
                    style={{
                      borderRadius: "50%",
                    }}
                  />{" "}
                  {row.name}
                </StyledTableCell>
                <StyledTableCell>{row.score}</StyledTableCell>
                <StyledTableCell>{row.submitted}</StyledTableCell>
                <StyledTableCell>{row.grade}</StyledTableCell>
                <StyledTableCell>
                  {row.isPass ? "Pass" : "Fail"}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const res = await getStudents();

  console.log(res);

  return {
    props: { data: res }, // will be passed to the page component as props
  };
}
