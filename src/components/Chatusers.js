const Chatuser=()=>{

return(

    <div>
    <h5 class="px-6 mb-4 text-16 dark:text-gray-50">Recent</h5>

    <div class="h-[610px] px-2" data-simplebar>

        <ul class="chat-user-list">
            <li class="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 dark:hover:border-zinc-700">
                <a href="#">
                    <div class="flex">
                        <div class="relative self-center ltr:mr-3 rtl:ml-3">
                            <img src="assets/images/avatar-2.jpg" class="rounded-full w-9 h-9" alt=""/>
                            <span class="absolute w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600"></span>
                        </div>

                        <div class="flex-grow overflow-hidden">
                            <h5 class="mb-1 text-base truncate dark:text-gray-50">Patrick Hendricks</h5>
                            <p class="mb-0 text-gray-500 truncate dark:text-gray-300 text-14">Hey! there I'm available</p>
                        </div>
                        <div class="text-gray-500 text-11 dark:text-gray-300">05 min</div>
                    </div>
                </a>
            </li>

            <li class="unread px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 dark:hover:border-zinc-700">
                <a href="#">
                    <div class="relative flex">
                        <div class="relative self-center ltr:mr-3 rtl:ml-3">
                            <img src="assets/images/avatar-3.jpg" class="rounded-full w-9 h-9" alt=""/>
                            <span class="absolute w-2.5 h-2.5 bg-yellow-500 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600"></span>
                        </div>
                        <div class="flex-grow overflow-hidden">
                            <h5 class="mb-1 text-base truncate dark:text-gray-50">Mark Messer</h5>
                            <p class="mb-0 text-gray-800 truncate dark:text-gray-300 text-14"><i class="align-middle ri-image-fill me-1 ms-0"></i> Images</p>
                        </div>
                        <div class="text-gray-500 text-11 dark:text-gray-300">12 min</div>
                        <div class="absolute bottom-0 ltr:right-0 rtl:left-0">
                            <span class="px-2 py-1 text-red-500 rounded-full bg-red-500/20 text-11">02</span>
                        </div>
                    </div>
                </a>
            </li>

            <li class="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 dark:hover:border-zinc-700">
                <a href="#">
                    <div class="flex">
                        <div class="relative self-center ltr:mr-3 rtl:ml-3">
                            <div class="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                <span class="group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                    G
                                </span>
                            </div>
                        </div>
                        <div class="flex-grow overflow-hidden">
                            <h5 class="mb-1 text-base truncate dark:text-gray-50">General</h5>
                            <p class="mb-0 text-gray-500 truncate dark:text-gray-300 text-14">This theme is awesome!</p>
                        </div>
                        <div class="text-gray-500 text-11 dark:text-gray-300">20 min</div>
                    </div>
                </a>
            </li>

            <li class="px-5 py-[15px] border-b border-white/20 dark:border-zinc-700 group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50/50 group-data-[theme-color=red]:bg-red-50/50 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600">
                <a href="#">
                    <div class="flex">
                        <div class="relative self-center ltr:mr-3 rtl:ml-3">
                            <img src="assets/images/avatar-4.jpg" class="rounded-full w-9 h-9" alt=""/>
                            <span class="absolute w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600"></span>
                        </div>
                        <div class="flex-grow overflow-hidden">
                            <h5 class="mb-1 text-base truncate dark:text-gray-50">Doris Brown</h5>
                            <p class="text-gray-500 dark:text-gray-300 text-14">Nice to meet you</p>
                        </div>
                        <div class="text-gray-500 text-11 dark:text-gray-300">10:12 AM</div>
                    </div>
                </a>
            </li>
            
            <li class="unread px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 dark:hover:border-zinc-700">
                <a href="#">
                    <div class="relative flex ">
                        <div class="relative self-center ltr:mr-3 rtl:ml-3">
                            <div class="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                <span class="group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                    D
                                </span>
                            </div>
                        </div>
                        <div class="flex-grow overflow-hidden">
                            <h5 class="mb-1 text-base truncate dark:text-gray-50">Designer</h5>
                            <p class="mb-0 text-gray-800 truncate dark:text-gray-300 text-14">Next meeting tomorrow 10.00AM</p>
                        </div>
                        <div class="text-gray-500 text-11 dark:text-gray-300">12:01 PM</div>
                        <div class="absolute bottom-0 ltr:right-0 rtl:left-0">
                            <span class="px-2 py-1 text-red-500 rounded-full bg-red-500/20 text-11">01</span>
                        </div>
                    </div>
                </a>
            </li>
            
            <li class="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 dark:hover:border-zinc-700">
                <a href="#">
                    <div class="flex">
                        <div class="relative self-center ltr:mr-3 rtl:ml-3">
                            <img src="assets/images/avatar-6.jpg" class="rounded-full w-9 h-9" alt=""/>
                            <span class="absolute w-2.5 h-2.5 bg-yellow-500 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600"></span>
                        </div>
                        <div class="flex-grow overflow-hidden">
                            <h5 class="mb-1 text-base truncate dark:text-gray-50">Steve Walker</h5>
                            <p class="text-gray-500 truncate dark:text-gray-300 text-14"><i class="align-middle ri-file-text-fill me-1 ms-0"></i> Admin-A.zip</p>
                        </div>
                        <div class="text-gray-500 text-11 dark:text-gray-300">03:20 PM</div>
                    </div>
                </a>
            </li>
            
            <li class="typing px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 dark:hover:border-zinc-700">
                <a href="#">
                    <div class="flex">
                        <div class="relative self-center ltr:mr-3 rtl:ml-3">
                            <div class="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                <span class="group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                    A
                                </span>
                            </div>
                            <span class="absolute w-2.5 h-2.5 bg-yellow-500 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600"></span>
                        </div>
                        <div class="flex-grow overflow-hidden">
                            <h5 class="mb-1 text-base truncate dark:text-gray-50">Albert Rodarte</h5>
                            <div class="flex items-end gap-2 mb-0 group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500 text-14">
                                <p class="mb-0">typing</p>
                                
                                <div class="animate-typing flex gap-0.5">
                                    <p class="w-1 h-1 mb-1 rounded-full dot group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=red]:bg-red-500 animate-bounce"></p>
                                    <p class="w-1 h-1 mb-1 rounded-full dot-2 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=red]:bg-red-500 "></p>
                                    <p class="w-1 h-1 mb-1 rounded-full dot-3 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=red]:bg-red-500 animate-bounce"></p>
                                </div>
                            </div>
                        </div>
                        <div class="text-gray-500 text-11 dark:text-gray-300">04:56 PM</div>
                    </div>
                </a>
            </li>

            <li class="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 dark:hover:border-zinc-700">
                <a href="#">
                    <div class="flex">
                        <div class="relative self-center ltr:mr-3 rtl:ml-3">
                            <div class="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                <span class="group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                    M
                                </span>
                            </div>
                            <span class="absolute w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600"></span>
                        </div>
                        <div class="flex-grow overflow-hidden">
                            <h5 class="mb-1 text-base truncate dark:text-gray-50">Mirta George</h5>
                            <p class="mb-0 text-gray-500 truncate dark:text-gray-300 text-14">Yeah everything is fine</p>
                        </div>
                        <div class="text-gray-500 text-11 dark:text-gray-300">12/07</div>
                    </div>
                </a>
            </li>
            
            <li class="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 dark:hover:border-zinc-700">
                <a href="#">
                    <div class="flex">
                        <div class="relative self-center ltr:mr-3 rtl:ml-3">
                            <img src="assets/images/avatar-7.jpg" class="rounded-full w-9 h-9" alt=""/>
                            <span class="absolute w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600"></span>
                        </div>
                        <div class="flex-grow overflow-hidden">
                            <h5 class="mb-1 text-base truncate dark:text-gray-50">Paul Haynes</h5>
                            <p class="mb-0 text-gray-500 truncate dark:text-gray-300 text-14">Good morning</p>
                        </div>
                        <div class="text-gray-500 text-11 dark:text-gray-300">12/07</div>
                    </div>
                </a>
            </li>
            
            <li class="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 dark:hover:border-zinc-700">
                <a href="#">
                    <div class="flex">
                        <div class="relative self-center ltr:mr-3 rtl:ml-3">
                            <div class="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                <span class="group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                    J
                                </span>
                            </div>
                            <span class="absolute w-2.5 h-2.5 bg-yellow-500 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600"></span>
                        </div>
                        <div class="flex-grow overflow-hidden">
                            <h5 class="mb-1 text-base truncate dark:text-gray-50">Jonathan Miller</h5>
                            <p class="mb-0 text-gray-500 truncate dark:text-gray-300 text-14">Hi, How are you?</p>
                        </div>
                        <div class="text-gray-500 text-11 dark:text-gray-300">12/07</div>
                    </div>
                </a>
            </li>
            
            <li class="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 dark:hover:border-zinc-700">
                <a href="#">
                    <div class="flex">
                        <div class="relative self-center ltr:mr-3 rtl:ml-3">
                            <img src="assets/images/avatar-8.jpg" class="rounded-full w-9 h-9" alt=""/>
                            <span class="absolute w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600"></span>
                        </div>
                        <div class="flex-grow overflow-hidden">
                            <h5 class="mb-1 text-base truncate dark:text-gray-50">Ossie Wilson</h5>
                            <p class="mb-0 text-gray-500 truncate dark:text-gray-300 text-14">I've finished it! See you so</p>
                        </div>
                        <div class="text-gray-500 text-11 dark:text-gray-300">11/07</div>
                    </div>
                </a>
            </li>
            
            <li class="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 dark:hover:border-zinc-700">
                <a href="#">
                    <div class="flex">
                        <div class="relative self-center ltr:mr-3 rtl:ml-3">
                            <div class="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                <span class="group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                    S
                                </span>
                            </div>
                            <span class="absolute w-2.5 h-2.5 bg-yellow-500 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600"></span>
                        </div>
                        <div class="flex-grow overflow-hidden">
                            <h5 class="mb-1 text-base truncate dark:text-gray-50">Sara Muller</h5>
                            <p class="mb-0 text-gray-500 truncate dark:text-gray-300 text-14">Wow that's great</p>
                        </div>
                        <div class="text-gray-500 text-11 dark:text-gray-300">11/07</div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</div>

);

}

export default Chatuser;