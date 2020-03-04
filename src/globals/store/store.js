import Vuex from "vuex";
import Vue from 'vue'
import { routes} from "@/Routes";
import {stringify} from 'qs';
import axios from "axios";
Vue.use(Vuex)

export const store=new Vuex.Store({
    state:{
            filterSidebar:false,
            modal:{},
            loginUser:{
                username:"",
                password:""
            },
            signUp:{
                username:"",
                password:"",
                email:"",
                userType:0
            },
            company_all:[],
            technologies:[]
    },
    getters:{
        GET_FILTER_SIDEBAR:(state)=>{
          return state.filterSidebar
        },
        GET_TECHNOLOGIES:(state)=>{
          return state.technologies
        },
        GET_ALL_COMPANY:(state)=>{
          return state.company_all
        },
        GET_LOGIN_USER:(state)=>{
            return state.loginUser
        },
        GET_MODAL:(state)=>{
            return state.modal
        }
    },
    mutations:{
        SET_FILTER_SIDEBAR:(state,payload)=>{
          state.filterSidebar=payload
        },
        SET_TECHNOLOGIES:(state,payload)=>{
          state.technologies=payload
        },
        SET_ALL_COMPANY:(state,payload)=>{
          state.company_all=payload
        },

        SET_SIGN_UP:(state,payload)=>{
            state.signUp=payload
        },

        SET_LOGIN_USER:(state,payload)=>{
            state.loginUser=payload
        },
        SET_MODAL:(state,payload)=>{
            state.modal=payload
        }
    },
    actions:{
        SET_TECHNOLOGIES:(context,payload)=>{
          return Vue.axios.get(routes.TECHNOLOGIES)
              .then(res=>{
                  context.commit('SET_TECHNOLOGIES',res.data)
              })
              .catch(e=>{
                  context.commit('SET_MODAL',{status:400,text:'В данный момент список технологий недоступен'})
              })
        },
        SET_ALL_COMPANY:(context,payload)=>{
          return Vue.axios.get(routes.ALL_COMPANY)
              .then(res=>{
                    context.commit('SET_ALL_COMPANY',res.data)
              })
              .catch(e=>{
                  context.commit('SET_MODAL',{status:400,text:'Извините,ведутся технические работы'})
              })
        },
        SET_LOGIN_USER:(context,payload)=>{
          return  Vue.axios.post(`${routes.SIGN_IN}?${stringify(payload)}`)
              .then(res=>{

                  if(res.status===200){
                      context.commit('SET_LOGIN_USER',res.data)
                            sessionStorage.setItem('user',res.data)
                  }

              }).catch(e=>{
                  console.log(JSON.stringify(e));
                  context.commit('SET_MODAL',{status:400,text:'Неверный логин или пароль'})
                  }
              )
        },
        SET_SIGN_UP:(context,payload)=>{
            return axios.post(`${routes.SIGN_UP}?${stringify(payload.userType)}`,payload)
                .then(res=>{
                    if(res.status===200){
                        context.commit('SET_SIGN_UP',res.data)
                    }

                }).catch(e=>{
                    context.commit('SET_MODAL',{status:400,text:'Пользователь уже существует'})
                })


        }
    }
})
