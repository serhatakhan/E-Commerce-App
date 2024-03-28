import React, { useState } from 'react';
import StoreContext from '.';

const Provider = ({children}) => {
    // sepete eklenen ürünler
    const [cart, setCart] = useState([])

    // kullanıcı giriş yaptı mı yapmadı mı
    const [isLogin, setIsLogin] = useState(false)

    const addCart =(product)=>{
        // * butona tıklanınca dizi geldiği için [] içine aldık,
        // * cart'ın içindene varsa al sonra yanına da gelen productları ekle
        setCart([...cart, product])
    }

    return (
        <StoreContext.Provider value={{cart, addCart, isLogin, setIsLogin}}>
            {children}
        </StoreContext.Provider>
    );
};

export default Provider;
