import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer, toast } from 'react-toastify';

function Login(){
    const navigate = useNavigate();
    const handleSignupClick = () => {
        navigate('/register');
      };
      const [username, usernameupdate] = useState('');
      const [password, passwordupdate] = useState('');

      useEffect(()=>{
        sessionStorage.clear();
            },[]);
        
         
        
            const ProceedLoginusingAPI = (e) => {
                e.preventDefault();
                if (validate()) {
                    ///implentation
                     console.log('proceed');
                    let inputobj={
                        "userName": username,
                        "password": password,
                      };
                    fetch("https://localhost:7088/api/User/Authenticate",{
                        method:'POST',
                        headers:{'content-type':'application/json'},
                        body:JSON.stringify(inputobj)
                    }).then((res) => {
                        return res.json();
                    }).then((resp) => {
                        console.log(resp)
                        if (Object.keys(resp).length === 0) {
                            toast.error('Login failed, invalid credentials');
                        }else{

                            if(resp.status==1){
                             toast.success('Successfully autherised');
                             console.log(resp.result.token)
                             sessionStorage.setItem('username',username);
                             sessionStorage.setItem('jwttoken',resp.result.token);
                             navigate('/GroupChat')
                            }
                            else{
                                toast.error('Login failed, invalid credentials');
                            }
                           
                        }
                     
                    }).catch((err) => {
                        console.log(err);
                        toast.error('Login Failed due to :' + err.message);
                    });
                }
            }
            const validate = () => {
             
                let result = true;
                let validationMsg = ''; 
                if (username === '' || username === null) {
                    result = false;
                    validationMsg='Please Enter Username';
                }
                if (password === '' || password === null) {
                    result = false;
                    const passMissErr='Please Enter Password'
                    validationMsg+=validationMsg!=''?' &'+passMissErr:passMissErr;
                    
                }
                if(!result)
                    toast.warning(validationMsg);


                return result;
            }

return(
    
    <div class="px-5 py-24 sm:px-24 lg:px-0">
    <div class="grid items-center justify-center grid-cols-1 lg:grid-cols-12 auth-bg">
        <div class="mx-5 lg:mx-20 lg:col-start-5 lg:col-span-4">
            <div class="text-center">
                <a href="index.html" class="block mb-10">
                    <img src="assets/images/logo-dark.png" alt="" class="block h-8 mx-auto dark:hidden" />
                    <img src="assets/images/logo-light.png" alt="" class="hidden h-8 mx-auto logo-light dark:block" />
                </a>
            
                <h4 class="mb-2 text-gray-800 text-21 dark:text-gray-50">Sign in</h4>
                <p class="mb-6 text-gray-500 dark:text-gray-300">Sign in to continue to Chatvia.</p>
            </div>
            
            <div class="bg-white card dark:bg-zinc-800 dark:border-transparent">
                <div class="p-5">
                    <div class="p-4">
                        <form onSubmit={ProceedLoginusingAPI}>
            
                            <div class="mb-5">
                                <label class="font-medium text-gray-700 dark:text-gray-200">Username</label>
                                <div class="flex items-center mt-2 mb-3 rounded-3 bg-slate-50/50 dark:bg-transparent">
                                    <span class="flex items-center px-4 py-2 text-gray-500 border border-r-0 border-gray-100 rounded rounded-r-none dark:border-zinc-600" id="basic-addon3">
                                        <i class="ri-user-2-line text-16"></i>
                                    </span>
                                    <input type="text" value={username} onChange={e => usernameupdate(e.target.value)}  class="w-full border-gray-100 rounded rounded-l-none placeholder:text-14 bg-slate-50/50 text-14 focus:ring-0 dark:bg-zinc-700 dark:border-zinc-600 dark:text-gray-200" placeholder="Enter Username" aria-label="Enter Username" aria-describedby="basic-addon3" />
                                </div>
                            </div>
            
                            <div class="mb-6">
                              
                                <label class="font-medium text-gray-700 dark:text-gray-200">Password</label>
                                <div class="flex items-center mt-2 mb-3 rounded-3 bg-slate-50/50 dark:bg-transparent">
                                    <span class="flex items-center px-4 py-2 text-gray-500 border border-r-0 border-gray-100 rounded rounded-r-none dark:border-zinc-600" id="basic-addon4">
                                        <i class="ri-lock-2-line text-16"></i>
                                    </span>
                                    <input type="password" value={password} onChange={e => passwordupdate   (e.target.value)} class="w-full border-gray-100 rounded rounded-l-none placeholder:text-14 bg-slate-50/50 text-14 focus:ring-0 dark:bg-zinc-700 dark:border-zinc-600 dark:text-gray-200" placeholder="Enter Password" aria-label="Enter Password" aria-describedby="basic-addon4" />
            
                                </div>
                            </div>
            
                        
            
                            <div class="grid">
                                <button class="py-2 text-white border-transparent btn bg-violet-500 hover:bg-violet-600 text-16" type="submit"> <span></span> Sign in</button>
                            </div>
            
                        </form>
                    </div>
                </div>
            </div>
            
            <div class="mt-10 text-center">
                <p class="mb-5 text-gray-700 dark:text-gray-200">Don't have an account ? <a  onClick={handleSignupClick} class="fw-medium text-violet-500 cursor-pointer"> Signup now </a> </p>
            </div>
        </div>
    </div>
</div>

  );

}



export default Login;
