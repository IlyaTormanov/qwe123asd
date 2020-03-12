import VueRouter from "vue-router";
import Companies from "../../components/pages/content/company/Companies";


import Content from "../../components/pages/content/utilsLayouts/rootes/Content";
import Root from "../../components/pages/content/utilsLayouts/rootes/Root";
import Company from "../../components/pages/content/company/Company";
import Vacansies from "../../components/pages/content/resume/Resumes";
import Login from "../../components/authoruzation/login/Login";
import Registration from "../../components/authoruzation/registration/Registration";

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
                            },
                            {
                                path:'vacansies',
                                name:'Vacansies',
                                component:Vacansies
                            }
                        ]
                    },


                ]
            },

        ]
})
