import VueRouter from "vue-router";
import Companies from "../../components/pages/content/company/Companies";
import Login from "../../components/Authorization /login/Login";
import Registration from "../../components/Authorization /registration/Registration";
import Content from "../../components/pages/content/utilsLayouts/rootes/Content";
import Root from "../../components/pages/content/utilsLayouts/rootes/Root";
import Company from "../../components/pages/content/company/Company";

export const router=new VueRouter({
        mode:"history",
        routes:[
            {
                path:'/',
                name:'Root',
                component:Root,
                children:[
                    {
                        path:'login',
                        name:'Login',
                        component:Login
                    },
                    {
                        path:'registration',
                        name:'Registration',
                        component: Registration
                    },
                    {
                        path:'page',
                        name:'Page',
                        component:Content,
                        children: [
                            {
                                path:'companies',
                                name:'Companies',
                                component:Companies,
                            },
                            {
                                path:':id',
                                name:'company',
                                component:Company
                            }
                        ]
                    },


                ]
            },

        ]
})
