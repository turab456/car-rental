"use client";
import { use, useEffect, useState } from "react";
import Cookies from "js-cookie";


export const useAuthenticate = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = Cookies.get("accessToken");
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    return { isAuthenticated, setIsAuthenticated };
}