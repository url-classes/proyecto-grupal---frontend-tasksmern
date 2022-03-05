import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import useAuth from "../hooks/useAuth";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 4px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },



  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));


const Sidebar = () => {
  const { auth } = useAuth();
  return (
    <aside className="md:w-80 lg:w-56 px-5 py-10 bg-slate-500 text-white">
      <div className="md:flex md:justify-center ">
        <Stack direction="row" spacing={2}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
            
          >
            <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/31397287?v=4" sx={{ width: 80, height: 80 }}/>
          </StyledBadge>
        </Stack>
      </div>

      <p className="text-xl font-bold  text-center">{auth.nombre}</p>

      <Link
        to="crear-proyecto"
        className="bg-indigo-600 w-full p-3 text-white uppercase
            font-bold block mt-5 text-center rounded-lg
            "
      >
        {" "}
        Nuevo Proyecto
      </Link>
    </aside>
  );
};

export default Sidebar;