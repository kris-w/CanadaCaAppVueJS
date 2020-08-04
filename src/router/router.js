//import home from "../components/test.vue"
import main from "../components/main.vue"
import login from "../components/login.vue"
import secure from "../components/secure.vue"
import secure2 from "../components/secure2.vue"

export const routes=[
        {
            path: '/',
            redirect: {
                name: "main"
            }
        },
         {
            path: "/main",
            name: "main",
            component: main
        },
        {
            path: "/login",
            name: "login",
            component: login
        },
        {
            path: "/secure",
            name: "secure",
            component: secure
        },
        {
            path: "/secure2",
            name: "secure2",
            component: secure2
        }
    ]