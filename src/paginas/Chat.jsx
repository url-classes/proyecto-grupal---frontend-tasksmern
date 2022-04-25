import React, { useEffect, useState } from 'react'
import clienteAxios from "../config/axios";
const chat = () => {
    useEffect(() => {
        const obtenerProyectos = async () => {
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
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };
        obtenerProyectos()
    }, []);
    return (
        <div>
            <h1>Proyectos</h1>
        </div>
    )
}

export default chat