import {checkAuth} from "@/store/auth/AuthActionCreators";
import {FC, ReactNode, useEffect, useState} from "react";
import {useActions} from "@/hooks/useActions";
import {TypeComponentAuthFields} from "@/types/authProvider";
import {useAuth} from "@/hooks/useAuth";
import {useRouter} from "next/router";
import dynamic from "next/dynamic";


const DynamicCheckRole = dynamic(() => import('./CheckRole'), {ssr: false})

const AuthProvider: FC<TypeComponentAuthFields> = ({children, Component: {isOnlyAdmin, isOnlyUser}}) => {
    const {user} = useAuth();
    const {checkAuth, logout} = useActions();
    const {pathname}  = useRouter();

    useEffect(() => {
        if(localStorage.getItem('token')) checkAuth();
    }, []);

    useEffect(() => {
        if(!localStorage.getItem('token') && user) logout();
    }, [pathname])

    return !isOnlyAdmin && !isOnlyUser ? <>{children}</> : <DynamicCheckRole Component={{isOnlyUser, isOnlyAdmin}}>
        {children}
    </DynamicCheckRole>
};

export default AuthProvider;