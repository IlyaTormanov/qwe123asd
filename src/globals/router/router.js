import VueRouter from "vue-router";
import App from "../../App";
import Companies from "../../components/pages/content/company/Companies";
import Login from "../../components/Authorization /login/Login";

export const router=new VueRouter({
        mode:"history",
        routes:[
            {
                path:"/App",
                name:'App',
                component:App,
                children:[
                    {
                        path:'companies',
                        name:'Companies',
                        component:Companies
                    },
                    {
                        path:'signin',
                        name:"Login",
                        component:Login
                    }
                ]
            },

        ]
})
