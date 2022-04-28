import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import useAuth from "../hooks/useAuth";
import AddCircleIcon from '@mui/icons-material/AddCircle';

import React, { useEffect, useState } from 'react'
import clienteAxios from "../config/axios";
import '../css/chat.css'
import AddCommentIcon from '@mui/icons-material/AddComment';
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
  const [chats, setChats] = useState([])
  useEffect(() => {
    const obtenerChats = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await clienteAxios.get("/chat", config);
        setChats(data)
        console.log(chats)
      } catch (error) {
        console.log(error);
      }
    };
    obtenerChats()
  }, []);
  const { auth } = useAuth();
  return (
    <aside className="md:w-1/3 lg:w-1/5 xl:w-1/6 px-5 py-1 bg-slate-500 text-white">
      <div className="text-sm px-5 pt-1 pb-2 w-full md:w-auto rounded-lg uppercase font-bold
       text-white text-center mt-5 flex gap-2 items-center justify-center">
        <Stack direction="row" spacing={2}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"

          >
            <Avatar alt="Remy Sharp" src="" sx={{ width: 80, height: 80 }} />
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
        <AddCircleIcon fontSize="small" />
        <span className="px-2">Nuevo Proyecto</span>
      </Link>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl py-4">Mis chats</h1>
          <AddCommentIcon />
        </div>
        {/* <h1 className="text-xl">{chat.nombreChat}</h1> */}
        {chats.map(chat => (
          <div key={chat._id} className='box'>
            <Link to={`/admin/chat/${chat._id}`}>
              {
                chat.esChatGrupal === true
                  ? <h1 className='text-xl'>{chat.nombreChat}</h1>
                  : chat.usuarios[0].nombre != auth.nombre
                    ? <h1 className='text-xl'>{chat.usuarios[0].nombre}</h1>
                    : <h1 className='text-xl'>{chat.usuarios[1].nombre}</h1>
              }
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};
export default Sidebar;
