import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { getCourse } from "../../api";
import Layout from "../../components/Layout";

export default function Home({ data }) {
  const router = useRouter();

  console.log(data);

  return (
    <Layout>
      <Typography variant="h6">Course: {data?.title}</Typography>
      <img
        src={data?.img}
        alt={data?.title}
        style={{ width: "100%", borderRadius: "14px", margin: "20px 0" }}
      />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  console.log(context.query.course);

  const courseName = context.query.course;

  const res = await getCourse(courseName);

  console.log(res);

  return {
    props: { data: res }, // will be passed to the page component as props
  };
}
