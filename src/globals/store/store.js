import Vuex from "vuex";
import Vue from 'vue'
import { routes} from "@/Routes";
import {stringify} from 'qs';
import axios from "axios";
Vue.use(Vuex)

export const store=new Vuex.Store({
    state:{
            filterSidebar:true,
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
            company:{},
            company_all:[],
            technologies:[]
    },
    getters:{
        GET_COMPANY:(state)=>{
            return state.company
        },
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
        SET_COMPANY_REQUEST:(state,payload)=>{
          state.company=payload
        },
        SET_COMPANY_SUCCESS:(state,payload)=>{
            state.company=payload
        },
        SET_FILTER_SIDEBAR:(state,payload)=>{
          state.filterSidebar=payload
        },
        SET_TECHNOLOGIES_REQUEST:(state,payload)=>{
          state.technologies=payload
        },
        SET_TECHNOLOGIES_SUCCESS:(state,payload)=>{
            state.technologies=payload
        },
        SET_ALL_COMPANY_REQUEST:(state,payload)=>{
          state.company_all=payload
        },
        SET_ALL_COMPANY_SUCCESS:(state,payload)=>{
            state.company_all=payload
        },
        SET_SIGN_UP_REQUEST:(state,payload)=>{
            state.signUp=payload
        },
        SET_SIGN_UP_SUCCESS:(state,payload)=>{
            state.signUp=payload
        },
        SET_LOGIN_USER_REQUEST:(state,payload)=>{
            state.loginUser=payload
        },
        SET_LOGIN_USER_SUCCESS:(state,payload)=>{
            state.loginUser=payload
        },
        SET_MODAL:(state,payload)=>{
            state.modal=payload
        }
    },
    actions:{
        SET_COMPANY_REQUEST:(context,payload)=>{
          return Vue.axios.post(`${routes.COMPANY}?${stringify(payload)}`,{'authorization':`Bearer ${this.state.loginUser.token}`})
              .then(res=>{
                  context.commit('SET_COMPANY_SUCCESS',res.data)
              })
        },
        SET_TECHNOLOGIES_REQUEST:(context,payload)=>{
          return Vue.axios.get(routes.TECHNOLOGIES)
              .then(res=>{
                  context.commit('SET_TECHNOLOGIES_SUCCESS',res.data)
              })
              .catch(e=>{
                  context.commit('SET_MODAL',{status:400,text:'В данный момент список технологий недоступен'})
              })
        },
        SET_ALL_COMPANY_REQUEST:(context)=>{
          return Vue.axios.get(routes.ALL_COMPANY)
              .then(res=>{
                    context.commit('SET_ALL_COMPANY_SUCCESS',res.data)
              })
              .catch(e=>{
                  context.commit('SET_MODAL',{status:400,text:'Извините,ведутся технические работы'})
              })
        },
        SET_LOGIN_USER_REQUEST:(context,payload)=>{
          return  Vue.axios.post(`${routes.SIGN_IN}?${stringify(payload)}`)
              .then(res=>{

                  if(res.status===200){
                      context.commit('SET_LOGIN_USER_SUCCESS',res.data)
                            sessionStorage.setItem('user',JSON.stringify(res.data))
                  }

              }).catch(e=>{
                  console.log(JSON.stringify(e));
                  context.commit('SET_MODAL',{status:400,text:'Неверный логин или пароль'})
                  }
              )
        },
        SET_SIGN_UP_REQUEST:(context,payload)=>{
            return axios.post(`${routes.SIGN_UP}?${stringify(payload.userType)}`,payload)
                .then(res=>{
                    if(res.status===200){
                        context.commit('SET_SIGN_UP_SUCCESS',res.data)
                    }

                }).catch(e=>{
                    context.commit('SET_MODAL',{status:400,text:'Пользователь уже существует'})
                })


        }
    }
})
