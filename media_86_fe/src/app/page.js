'use client'
import './styles.css'
import 'react-toastify/dist/ReactToastify.css';
import NavBar from '@/components/NavBar'
import MessageGrid from '@/components/MessageGrid'
import { useEffect, useState } from 'react'
import MessageList from '@/components/MessageList'
import Form from '@/components/Form'
import { axiosInstance } from '../../axios/axiosInstance'
import { ToastContainer, toast } from 'react-toastify';

export default function Home() {
  const [list, setList] = useState(false)
  const [form, setForm] = useState(false)
  const [data, setData] = useState()

  const notify = (message) => toast.error(message);

  const getAllMessage = () => {
    axiosInstance.get('/all').then(response => {
      if (response.data.error) {
        notify(response.data.message)
      } else {
        setData(response.data.result)
      }
    }).catch(err => console.log(err))
  }

  useEffect(() => {
    //api call to get the all messages
    getAllMessage()
  }, [])

  return (
    <main className='main_container'>
      <ToastContainer />
      <NavBar list={list} setList={setList} setForm={setForm} />
      {list ?
        <MessageGrid data={data} setForm={setForm} form={form} getAllMessage={getAllMessage} /> :
        <MessageList data={data} setForm={setForm} form={form} getAllMessage={getAllMessage} />
      }
      {form && <Form setForm={setForm} getAllMessage={getAllMessage} />}
    </main>
  )
}
