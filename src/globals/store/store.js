import Vuex from "vuex";
import Vue from 'vue'
import { routes} from "@/Routes";
import {stringify} from 'qs';
import axios from "axios";
Vue.use(Vuex)

export const store=new Vuex.Store({
    state:{
            modal:{},
            loginUser:{
                username:"",
                password:""
            },
            signUp:{
                username:"",
                password:"",
                email:"",
                userType:1||2
            }
    },
    getters:{

        GET_LOGIN_USER:(state)=>{
            return state.loginUser
        },
        GET_MODAL:(state)=>{
            return state.modal
        }
    },
    mutations:{

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
        SET_LOGIN_USER:(context,payload)=>{
          return  Vue.axios.post(`${routes.SIGN_IN}?${stringify(payload)}`)
              .then(res=>{

                  if(res.status===200){
                      context.commit('SET_LOGIN_USER',res.data)

                  }

              }).catch(e=>{
                  context.commit('SET_MODAL',{status:400,text:'Неверный логин или пароль'})
                  }
              )
        },
        SET_SIGN_UP:(context,payload)=>{
            return axios.post(`${routes.SIGN_UP}?${{payload}}`)
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