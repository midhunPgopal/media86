import { useState } from "react"
import Form from "./Form"

const MessageGrid = ({ data = null, setForm, form = null, getAllMessage }) => {

    const [item, setItem] = useState()

    return (
        <div className='message_container'>
            {data && data[0] ?
                <div className='card_container'>
                    {data?.map(item => (
                        <div className='card' key={item.id} onClick={() => setItem(item)}>
                            <div className='card_bg'>{item.name.slice(0, 1).toUpperCase()}</div>
                            <div className='content'>
                                <div className="content_head">
                                    <h2>{item.name}</h2>
                                </div>
                                <div className="content_description">
                                    <p>{item.message}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                :
                <div className='card_container'>
                    <div className='card'>
                        <div className='card_bg'>N</div>
                        <div className='content'>
                            <div className="content_head">
                                <h2>No Messages Found</h2>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {item && <Form setForm={setForm} getAllMessage={getAllMessage} defaultValue={item} setItem={setItem} />}
        </div>
    )
}

export default MessageGrid