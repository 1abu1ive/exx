import { Dashboard } from "@mui/icons-material";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpenReader,
  faGraduationCap,
  faPersonChalkboard,
} from "@fortawesome/free-solid-svg-icons";

const menu = [
  {
    title: "Dashboard",
    icon: <Dashboard />,
    path: "/",
  },
  {
    title: "Overview",
    icon: <AccountBalanceIcon />,
    path: "/overview",
  },
  {
    title: "Courses",
    icon: <FontAwesomeIcon icon={faBookOpenReader} />,
    path: "/courses",
  },
  {
    title: "Students",
    icon: <FontAwesomeIcon icon={faGraduationCap} />,
    path: "/students",
  },
  {
    title: "Teachers",
    icon: <FontAwesomeIcon icon={faPersonChalkboard} />,
    path: "/teachers",
  },
  {
    title: "Exam",
    icon: <Dashboard />,
    path: "/exam",
  },
  {
    title: "Result",
    icon: <InsertChartIcon />,
    path: "/result",
  },
  {
    title: "Videos",
    icon: <OndemandVideoIcon />,
    path: "/videos",
  },
];

export default menu;
