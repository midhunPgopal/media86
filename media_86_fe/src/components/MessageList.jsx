import { useState } from "react"
import Form from "./Form"

const MessageList = ({ data = null, setForm, form = null, getAllMessage }) => {

    const [item, setItem] = useState()

    return (
        <div className='message_container'>
            {data && data[0] ?
                <div className='list_container'>
                    {data?.map(item => (
                        <div className='list' key={item.id} onClick={() => setItem(item)}>
                            <div className='list_content' key={item.id}>
                                <h2>{item.name}</h2>
                                &ensp;:&ensp;
                                <p>{item.message}</p>
                            </div>
                        </div>
                    ))}
                </div>
                :
                <div className='list_container'>
                    <div className='list'>
                        <div className='list_content'>
                            <h2>No Messages Found</h2>
                        </div>
                    </div>
                </div>
            }
            {item && <Form setForm={setForm} getAllMessage={getAllMessage} defaultValue={item} setItem={setItem} />}
        </div>
    )
}

export default MessageList