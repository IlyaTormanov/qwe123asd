import Vuex from "vuex";
import Vue from 'vue'
import {routes} from "@/Routes";
import {stringify} from 'qs';
import axios from "axios";

Vue.use(Vuex)
import {uniq} from 'fp-ts/es6/Array';
import {fromEquals} from "fp-ts/es6/Eq";

const entityEq = fromEquals((a, b) => a.name === b.name);

export const store = new Vuex.Store({
    state: {
        resumeList:{
            pageresponse:{
                currentPage:1,
                pageSize:1,
                totalPages:0
            }
        },
        filterSidebar: true,
        modal: {},
        loginUser: {
            username: "",
            password: ""
        },
        cityList:[],
        companyFilter: "",
        signUp: {
            username: "",
            password: "",
            email: "",
            userType: 0
        },
        company: {},
        company_all: [],
        technologies: []
    },
    getters: {
        GET_RESUME_LIST:(state)=>{
            return state.resumeList
        },
        GET_COMPANY_FILTER: (state) => {
            return state.companyFilter
        },
        GET_CITY_LIST:(state)=>{
          return state.cityList
        },
        GET_COMPANY: (state) => {
            return state.company
        },
        GET_FILTER_SIDEBAR: (state) => {
            return state.filterSidebar
        },
        GET_TECHNOLOGIES: (state) => {
            return state.technologies
        },
        GET_ALL_COMPANY: (state) => {
            return state.company_all.filter(item => (item.name || '').toLowerCase().includes(state.companyFilter.toLowerCase()))
        },
        GET_LOGIN_USER: (state) => {
            return state.loginUser
        },
        GET_MODAL: (state) => {
            return state.modal
        }
    },
    mutations: {
        SET_RESUME_LIST_REQUEST:(state,payload)=>{
            state.resumeList=payload
        },
        SET_RESUME_LIST_SUCCESS:(state,payload)=>{
          state.resumeList=payload
        },
        SET_CITY_LIST:(state)=>{
          state.company_all.map(i=>state.cityList.push(i.city))
        },
        SET_COMPANY_FILTER: (state, payload) => {
            state.companyFilter = payload
        },
        SET_COMPANY_REQUEST: (state, payload) => {
            state.company = payload
        },
        SET_COMPANY_SUCCESS: (state, payload) => {
            state.company = payload
        },
        SET_FILTER_SIDEBAR: (state, payload) => {
            state.filterSidebar = payload
        },
        SET_TECHNOLOGIES_REQUEST: (state, payload) => {
            state.technologies = payload
        },
        SET_TECHNOLOGIES_SUCCESS: (state, payload) => {
            state.technologies = payload
        },
        SET_ALL_COMPANY_REQUEST: (state, payload) => {
            state.company_all = payload
        },
        SET_ALL_COMPANY_SUCCESS: (state, payload) => {
            state.company_all = payload
        },
        SET_SIGN_UP_REQUEST: (state, payload) => {
            state.signUp = payload
        },
        SET_SIGN_UP_SUCCESS: (state, payload) => {
            state.signUp = payload
        },
        SET_LOGIN_USER_REQUEST: (state, payload) => {
            state.loginUser = payload
        },
        SET_LOGIN_USER_SUCCESS: (state, payload) => {
            state.loginUser = payload
        },
        SET_MODAL: (state, payload) => {
            state.modal = payload
        }
    },
    actions: {
        SET_RESUME_LIST_REQUEST:(context,payload)=>{
          return Vue.axios.get(`${routes.RESUME_LIST}?${stringify(payload)}`)
              .then(res=>{
                  context.commit('SET_RESUME_LIST_SUCCESS',res.data)
              })
        },
        SET_COMPANY_REQUEST: (context, payload) => {
            return Vue.axios.get(`${routes.COMPANY}?${stringify({id:payload})}`,  { headers: {'authorization': `Bearer ${store.state.loginUser.token}`}})
                .then(res => {
                    context.commit('SET_COMPANY_SUCCESS', res.data)
                })
        },
        SET_TECHNOLOGIES_REQUEST: (context, payload) => {
            return Vue.axios.get(routes.TECHNOLOGIES)
                .then(res => {
                    context.commit('SET_TECHNOLOGIES_SUCCESS', res.data)
                })
                .catch(e => {
                    context.commit('SET_MODAL', {status: 400, text: 'В данный момент список технологий недоступен'})
                })
        },
        SET_ALL_COMPANY_REQUEST: (context) => {
            return Vue.axios.get(routes.ALL_COMPANY)
                .then(res => {
                    context.commit('SET_ALL_COMPANY_SUCCESS', res.data)
                })
                .catch(e => {
                    context.commit('SET_MODAL', {status: 400, text: 'Извините,ведутся технические работы'})
                })
        },
        SET_LOGIN_USER_REQUEST: (context, payload) => {
            return Vue.axios.post(`${routes.SIGN_IN}?${stringify(payload)}`)
                .then(res => {
                    if (res.status === 200) {
                        context.commit('SET_LOGIN_USER_SUCCESS', res.data)
                        sessionStorage.setItem('user', JSON.stringify(res.data))
                    }
                }).catch(e => {

                        context.commit('SET_MODAL', {status: 400, text: 'Неверный логин или пароль'})
                    }
                )
        },
        SET_SIGN_UP_REQUEST: (context, payload) => {
            return axios.post(`${routes.SIGN_UP}?${stringify(payload.userType)}`, payload)
                .then(res => {
                    if (res.status === 200) {
                        context.commit('SET_SIGN_UP_SUCCESS', res.data)
                    }

                }).catch(e => {
                    context.commit('SET_MODAL', {status: 400, text: 'Пользователь уже существует'})
                })


        }
    }
})
