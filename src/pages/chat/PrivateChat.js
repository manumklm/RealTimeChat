import Chatuser from "../../components/Chatusers";
import Chatgroup from "../../components/Chatgroup";
import Chatsidebar from "../../components/Chatsidebar";
import Chatbody from "../../components/Chatbody";

const PrivateChat=()=>{
return(
    <div class="lg:flex">
        <Chatsidebar />

    <div class="chat-leftsidebar lg:w-[380px] group-data-[theme-color=violet]:bg-slate-50 group-data-[theme-color=green]:bg-green-50/20 group-data-[theme-color=red]:bg-red-50/20 shadow overflow-y-hidden mb-[80px] lg:mb-0 group-data-[theme-color=violet]:dark:bg-zinc-700 group-data-[theme-color=green]:dark:bg-zinc-700 group-data-[theme-color=red]:dark:bg-zinc-700">
    <div>
   

        <div class="tab-content">
            <div>
                <div class="px-6 pt-6">
                    <h4 class="mb-0 text-gray-700 dark:text-gray-50">Chats</h4>
            
                    <div class="py-1 mt-5 mb-5 rounded group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600">
                        <span class="group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 pe-1 ps-3 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600" id="basic-addon1">
                            <i class="text-lg text-gray-400 ri-search-line search-icon dark:text-gray-200"></i>
                        </span>
                        <input type="text" class="border-0 group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 placeholder:text-[14px] focus:ring-offset-0 focus:outline-none focus:ring-0 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600 placeholder:text-gray-400" placeholder="Search messages or users" aria-label="Search messages or users" aria-describedby="basic-addon1"/>
                    </div>
                </div>
            
                
                
               <Chatuser />
               
            </div>

        </div>

        <div class="tab-content active">
            
         <Chatgroup />
        </div>

      

        
    </div>
</div>

<Chatbody/>
</div>

);


}

export default PrivateChat;