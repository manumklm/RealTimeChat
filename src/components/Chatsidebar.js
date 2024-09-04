import { useNavigate, useNavigation } from "react-router-dom";
const Chatsidebar=({onTabChange})=>{

    const navigate=useNavigate();

    const handleTab=(tabname)=>{
        onTabChange(tabname)

    }


    const handleLogout=()=>{
        sessionStorage.setItem('username','');
        sessionStorage.setItem('jwttoken','');
        navigate('/');
    }
    return(
        <>
        <div class="sidebar-menu w-full lg:w-[75px] shadow lg:flex lg:flex-col flex flex-row justify-between items-center fixed lg:relative z-40 bottom-0 bg-white dark:bg-zinc-600 ">
        <div class="hidden lg:my-5 lg:block">
            <a href="index.html" class="block dark:hidden">
                <span>
                    <img src="assets/images/logo.svg" alt="" class="h-[30px]"/>
                </span>
            </a>
    
            <a href="index.html" class="hidden dark:block">
                <span>
                    <img src="assets/images/logo.svg" alt="" class="h-[30px]"/>
                </span>
            </a>
        </div>
        <div class="w-full mx-auto lg:my-auto">
            <ul id="tabs" class="flex flex-row justify-center w-full lg:flex-col lg:flex nav-tabs">
        
                <li onClick={e =>handleTab('pchat')} class="flex-grow lg:flex-grow-0">
                    <a href="#first" class="tab-button active relative flex items-center justify-center mx-auto h-14 w-14 leading-[14px] group/tab my-2 rounded-lg">
                        <div class="absolute items-center hidden -top-10 ltr:left-0 group-hover/tab:flex rtl:right-0">
                            <div class="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                            <span class="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">Chats</span>
                        </div>
                        <i class="text-2xl ri-message-3-line"></i>
                    </a>
                </li>
                <li onClick={e =>handleTab('gchat')} class="flex-grow lg:flex-grow-0">
                    <a href="#second" class="tab-button relative flex items-center justify-center mx-auto h-14 w-14 leading-[14px] group/tab my-2 rounded-lg">
                        <div class="absolute items-center hidden -top-10 ltr:left-0 group-hover/tab:flex rtl:right-0">
                            <div class="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                            <span class="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">Groups</span>
                        </div>
                        <i class="text-2xl ri-group-line"></i>
                    </a>
                </li>              
            </ul>
        </div>
    
        <div class="w-20 my-5 lg:w-auto">
            <ul class="lg:block">
            <li onClick={e =>handleLogout()} class="flex-grow lg:flex-grow-0">
                    <a href="#second" class="tab-button relative flex items-center justify-center mx-auto h-14 w-14 leading-[14px] group/tab my-2 rounded-lg">
                        <div class="absolute items-center hidden -top-10 ltr:left-0 group-hover/tab:flex rtl:right-0">
                            <div class="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                            <span class="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">Logout</span>
                        </div>
                        <i class="text-2xl ri-logout-box-fill"></i>
                    </a>
                </li>  
               
            </ul>
        </div>
    
    </div>

</>

    );
}

export default Chatsidebar;