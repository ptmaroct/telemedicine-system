import Vue from 'vue'
import Router from 'vue-router'

//Components
import Home from '@/components/Home'
import Diagnosis from '@/components/Diagnosis'
import Result from '@/components/Result'
import Doctor from '@/components/Doctor'
// import Chat from '@/components/Chat'

const Chat = () => import('@/components/Chat') 
import Assistant from '@/components/Assistant'
const AssistantChat = () => import('@/components/Assistant/Chat') 

// import AssistantChat from '@/components/Assistant/Chat'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/diagnosis',
      name: 'diagnosis',
      component: Diagnosis
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    },
    {
      path: '/doctor',
      name: 'doctor',
      component: Doctor
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },
    ,
    {
      path: '/assistant',
      name: 'assistant',
      component: Assistant
    },
    {
      path: '/assistant/chat',
      name: 'assistantchat',
      component: AssistantChat
    }
  ]
})
