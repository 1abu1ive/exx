import { styled } from "@mui/system";
import ListItem from "@mui/material/ListItem";

const MyListItem = styled(ListItem)(({ theme }) => ({
  "& span": { fontWeight: "400 !important" },
  "&:hover, &.active": {
    transition: "0.3s",
    color: "white",
    background: `linear-gradient(to right top, ${theme.palette.primary.dark}, ${theme.palette.primary.light}) `,
    fill: "white",
    "& svg": { color: "white" },
  },
}));

export default MyListItem;
