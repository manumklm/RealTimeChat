import { useState, useRef, useEffect } from "react";
import { sendMessage,sendPrivateMessage } from '../helper/SignalrHelper';
import { joinChatRoom  } from "../helper/SignalrHelper"
import 'react-toastify/dist/ReactToastify.css'; 
import { toast } from 'react-toastify';
const Chatbody=({ isActive,grpName})=>{
const[inputmsg,setInputMsg]=useState();
const [sentMessages, setSentMessages] = useState([]);
const [privateMessages, setPrivateMessages] = useState([]);
const [targetUsername, setTargetUsername] = useState('');




if(isActive){
    const handleMessageReceived = ({ username, msg,private: isPrivate }) => {
        console.log(username +' '+msg+' '+isPrivate)
        if(!isPrivate)
        setSentMessages(prevMessages => [...prevMessages, { username, msg }]);
        else
        toast.info('A private message recieved');
      
    };

    joinChatRoom(grpName, handleMessageReceived);
}

const handleSendMsg= async()=>{

    try
    {
        postMessage()
    }
    catch(e)
    {
        console.log(e)
    }
    
}

const handlePrivate= async()=>{

    try
    {
        await sendPrivateMessage('arya','hello arya')
    }
    catch(e)
    {
        console.log(e)
    }
    
}


const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
        postMessage()
    }
  };

  const postMessage= async()=>{

    if (inputmsg.trim() === "") return;
    console.log(inputmsg);
    await sendMessage(inputmsg);
    setInputMsg('');
  }


return (

    <div className={`w-full overflow-hidden transition-all duration-150 bg-white user-chat dark:bg-zinc-800 ${isActive ? '' : 'hidden'}`}>
        <div class="lg:flex">

            <div class="relative w-full overflow-hidden ">
                <div class="p-4 border-b border-gray-100 lg:p-6 dark:border-zinc-600">
                    <div class="grid items-center grid-cols-12">
                        <div class="col-span-8 sm:col-span-4">
                            <div class="flex items-center">
                                <div class="block ltr:mr-2 rtl:ml-2 lg:hidden">
                                    <a href="javascript: void(0);" class="p-2 text-gray-500 user-chat-remove text-16"><i class="ri-arrow-left-s-line"></i></a>
                                </div>
                                <div class="rtl:ml-3 ltr:mr-3">
                                  
                                </div>
                                <div class="flex-grow overflow-hidden">
                                    <h5 class="mb-0 truncate text-16 ltr:block rtl:hidden"><a href="#" class="text-gray-800 dark:text-gray-50">{grpName}</a> <i class="text-green-500 ltr:ml-1 rtl:mr-1 ri-record-circle-fill text-10 "></i></h5>
                                    <h5 class="mb-0 truncate text-16 rtl:block ltr:hidden"><i class="text-green-500 ltr:ml-1 rtl:mr-1 ri-record-circle-fill text-10 "></i> <a href="#" class="text-gray-800 dark:text-gray-50">Doris Brown</a></h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-4 sm:col-span-8">
                            <ul class="flex items-center justify-end lg:gap-4">
                                <li class="px-3">
                                    <a href="#" class="hidden text-gray-500 dark:text-gray-300 lg:block profileTab">
                                        <i class="text-xl ri-group-line"></i>
                                    </a>
                                </li>

                             
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="h-[80vh] p-4 lg:p-6" data-simplebar>

                    <ul class="mb-0">

                    {sentMessages.map((msg, index) => (
                         <li class="clear-both py-4">
                         <div class="relative inline-flex items-end mb-6 text-left ltr:rtl:float-right ltr:float-left rtl:float-right">
                         <div class="ltr:mr-5 rtl:ml-5">
                                <div class="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                    <span class="font-medium group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                    {msg.username.substring(0, 1)}
                                    </span>
                                </div>
                            </div>

                             <div>
                                 <div class="flex gap-2 mb-2 ltr:justify-end rtl:justify-start">
                                     <div class="relative order-2 px-5 py-3 text-gray-700 rounded-lg ltr:rounded-br-none rtl:rounded-bl-none bg-gray-50 dark:bg-zinc-700 dark:text-gray-50">
                                         <p class="mb-0">
                                         {msg.msg}
                                         </p>
                                         <p class="mt-1 mb-0 text-xs text-left text-gray-500 dark:text-gray-300"><i class="align-middle ri-time-line"></i> <span class="align-middle">10:02</span></p>
                                         <div class="before:content-[''] before:absolute before:border-[5px] before:border-transparent ltr:before:border-r-gray-50 ltr:before:border-t-gray-50 rtl:before:border-l-gray-50 rtl:before:border-t-gray-50 ltr:before:right-0 rtl:before:left-0 before:-bottom-2 ltr:dark:before:border-t-zinc-700 ltr:dark:before:border-r-zinc-700 rtl:dark:before:border-t-zinc-700 rtl:dark:before:border-l-zinc-700"></div>
                                     </div>
                                 </div>

                                 <div class="font-medium text-gray-700 rtl:text-left text-14 dark:text-gray-300">{msg.username}</div>
                             </div>
                         </div>
                     </li>
           
          ))}



                       
                    </ul>
                </div>

                <div class="z-40 w-full p-6 mb-0 bg-white border-t lg:mb-1 border-gray-50 dark:bg-zinc-800 dark:border-zinc-700">

                    <div class="flex gap-2">

                        <div class="flex-grow">
                            <input type="text" value={inputmsg}  onKeyDown={handleKeyDown} onChange={(e) => setInputMsg(e.target.value)} class="w-full border-transparent rounded bg-gray-50 placeholder:text-14 text-14 dark:bg-zinc-700 dark:placeholder:text-gray-300 dark:text-gray-300" placeholder="Enter Message..." />
                        </div>
                        <div>
                            <div>
                                <ul class="mb-0">
                                    <li class="inline-block" title="Emoji">
                                        <button type="button" onClick={handlePrivate} class="border-transparent group/tooltip btn relative group-data-[theme-color=violet]:dark:text-violet-200 group-data-[theme-color=green]:dark:text-green-200 group-data-[theme-color=red]:dark:text-red-200 group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500 text-16">
                                            <div class="absolute items-center hidden -top-10 ltr:-left-2 group-hover/tooltip:flex rtl:-right-2">
                                                <div class="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                                                <span class="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">Emoji</span>
                                            </div>
                                            <i class="ri-emotion-happy-line"></i>
                                        </button>
                                    </li>
                                    
                                    <li class="inline-block">
                                        <button type="button" onClick={handleSendMsg} class="text-white border-transparent btn group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=violet]:hover:bg-violet-600 group-data-[theme-color=green]:hover:bg-green-600">
                                            <i class="ri-send-plane-2-fill"></i>
                                        </button>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
           

            </div>
         
           
        </div>
    </div>
);

}


export default Chatbody;