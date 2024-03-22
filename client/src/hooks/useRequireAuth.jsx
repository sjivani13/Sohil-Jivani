// import { useEffect } from "react";
// import { useProvideAuth } from "./useProvideAuth";
// import { useNavigate } from "react-router-dom";

// export function useRequireAuth(redirectUrl = "/login") {
//     const auth = useProvideAuth();
//     let navigate = useNavigate();

//     useEffect(() => {
//         if (auth.state.isAuthenticated === false) {
//             navigate(redirectUrl);
//         }
//     }, [auth, navigate, redirectUrl]);

//     return auth;
// }