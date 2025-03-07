// import React, { useState } from 'react';
// import logoGoogle from '../../assets/logos/logos_google-icon.png';
// import hidePass from '../../assets/form/mdi_eye-off.png';

// const FormLogin = () => {
//     // Menggunakan useState untuk mengelola input form
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     // const handleLoginClick = (e) => {
//     //     e.preventDefault();
//     //     window.location.href = "/home";
//     // };


//     const handleLoginClick = (e) => {
//         e.preventDefault();
//         navigate("/home", { state: { email } });
//     };


//     const handleRegisterClick = (e) => {
//         e.preventDefault();
//         window.location.href = "/register";
//     };

//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     };

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//     };


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Tambahkan logika untuk mengirim data login
//         console.log('Email:', email);
//         console.log('Password:', password);
//     };

//     return (
//         <div className="flex items-center justify-center w-full">
//             <div className='flex flex-col bg-white border-form p-9 rounded-[4px] shadow-lg w-[590px] gap-9'>
//                 <div className='flex flex-col gap-[10px]'>
//                     <h3 className='text-center'>Masuk ke Akun</h3>
//                     <p className="text-center text-input">Yuk, lanjutin belajarmu di videobelajar</p>
//                 </div>
//                 <form action="" method="post" className="space-y-4" onSubmit={handleSubmit}>
//                     <div>
//                         <label htmlFor="email" className="text-input">
//                             <div className='flex gap-1'>
//                                 E-Mail
//                                 <p className='text-red-600'>*</p>
//                             </div>
//                         </label>
//                         <input type="email" name="email" id="email" className='input-form' value={email} onChange={handleEmailChange} />
//                     </div>
//                     <div className='relative'>
//                         <label htmlFor="password" className="text-input">
//                             <div className='flex gap-1'>
//                                 Kata Sandi
//                                 <p className='text-red-600'>*</p>
//                             </div>
//                         </label>
//                         <input type="password" name="password" id="password" className="pr-10 input-form" value={password} onChange={handlePasswordChange} /> 
//                         <img src={hidePass} alt="hide-password" className="absolute right-3 hp:top-7 lg:top-9 cursor-pointer" />
//                     </div>
                    
//                     <div className="w-full text-right">
//                         <a href="#" className="text-home">Lupa Password?</a>
//                     </div>
                    
//                     <button className="btn-login text-button" onClick={handleLoginClick}>Masuk</button>
//                     <button className="btn-register text-button" onClick={handleRegisterClick}>Daftar</button>
                    
//                     <p className="text-input text-center">atau</p>
//                     <button type='button' className="btn-google">
//                         <div className="flex justify-center gap-2 px-[26px] py-2">
//                             <img src={logoGoogle} alt="logo-google" />
//                             <p className="text-button text-slate-600">Masuk dengan Google</p>
//                         </div>
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default FormLogin;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoGoogle from '../../assets/logos/logos_google-icon.png';
import hidePass from '../../assets/form/mdi_eye-off.png';

const FormLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Mengambil data pengguna dari localStorage
        const registeredUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Mencari pengguna yang sesuai dengan email dan password yang dimasukkan
        const user = registeredUsers.find(user => user.email === email && user.password === password);

        if (user) {
            alert("Login berhasil!");
            navigate("/home", { state: { email } });
        } else {
            alert("Email atau password salah!");
        }
    };

    return (
        <div className="flex items-center justify-center w-full">
            <div className='flex flex-col bg-white border-form p-9 rounded-[4px] shadow-lg w-[590px] gap-9'>
                <div className='flex flex-col gap-[10px]'>
                    <h3 className='text-center'>Masuk ke Akun</h3>
                    <p className="text-center text-input">Yuk, lanjutin belajarmu di videobelajar</p>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="text-input">E-Mail <span className='text-red-600'>*</span></label>
                        <input type="email" name="email" id="email" className='input-form' value={email} onChange={handleEmailChange} required />
                    </div>
                    <div className='relative'>
                        <label htmlFor="password" className="text-input">Kata Sandi <span className='text-red-600'>*</span></label>
                        <input type="password" name="password" id="password" className="pr-10 input-form" value={password} onChange={handlePasswordChange} required /> 
                        <img src={hidePass} alt="hide-password" className="absolute right-3 hp:top-7 lg:top-9 cursor-pointer" />
                    </div>
                    
                    <div className="w-full text-right">
                        <a href="#" className="text-home">Lupa Password?</a>
                    </div>
                    
                    <button type="submit" className="btn-login text-button">Masuk</button>
                    <a href="/register" className="btn-register text-button text-center">Daftar</a>
                    
                    <p className="text-input text-center">atau</p>
                    <button type='button' className="btn-google">
                        <div className="flex justify-center gap-2 px-[26px] py-2">
                            <img src={logoGoogle} alt="logo-google" />
                            <p className="text-button text-slate-600">Masuk dengan Google</p>
                        </div>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FormLogin;

