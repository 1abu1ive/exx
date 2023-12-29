import { faPersonChalkboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

let courses = [
  {
    title: "JavaScript",
    icon: <FontAwesomeIcon icon={faPersonChalkboard} />,
    path: "/javascript",
  },
  {
    title: "Python",
    icon: <FontAwesomeIcon icon={faPersonChalkboard} />,
    path: "/python",
  },
  {
    title: "C#",
    icon: <FontAwesomeIcon icon={faPersonChalkboard} />,
    path: "/csharp",
  },
  {
    title: "Java",
    icon: <FontAwesomeIcon icon={faPersonChalkboard} />,
    path: "/java",
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <Layout>
      <Typography variant="h6">Courses</Typography>
      <Grid container sx={{ mt: 3 }} spacing={2}>
        {courses.map((item) => (
          <Grid key={item.title} item xs={12} sm={6} md={3}>
            <Card
              sx={{
                p: 3,
                textAlign: "center",
                background: "#eb36d955",
              }}
              onClick={() => router.push("/courses" + item.path)}
            >
              <Box
                sx={{
                  mb: 2,
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  background: "blue",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginInline: "auto",
                  "& svg": {
                    color: "white",
                  },
                }}
              >
                {item.icon}
              </Box>
              <Typography variant="h6">{item.title}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}
