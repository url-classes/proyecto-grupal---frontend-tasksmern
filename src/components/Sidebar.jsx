import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import useAuth from "../hooks/useAuth";
import AddCircleIcon from '@mui/icons-material/AddCircle';
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
    <aside className="md:w-1/3 lg:w-1/5 xl:w-1/6 px-5 py-10 bg-slate-500 text-white">
      <div className="text-sm px-5 py-3 w-full md:w-auto rounded-lg uppercase font-bold
       text-white text-center mt-5 flex gap-2 items-center justify-center">
        <Stack direction="row" spacing={2}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
            
          >
            <Avatar alt="Remy Sharp" src="" sx={{ width: 80, height: 80 }}/>
          </StyledBadge>
        </Stack>
      </div>

      <p className="text-xl font-bold  text-center">{auth.nombre}</p>
      <Link
        to="CrearProyecto"
        className="bg-indigo-600 w-full p-3 text-white uppercase
            font-bold block mt-5 text-center rounded-lg
            "
      >
        {" "}
          <AddCircleIcon fontSize="small"/>
          <span className="px-2">Nuevo Proyecto</span>
      </Link>
    </aside>
  );
};

export default Sidebar;
