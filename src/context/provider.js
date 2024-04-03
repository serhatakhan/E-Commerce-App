import React, { useState } from 'react';
import StoreContext from '.';

const Provider = ({children}) => {
    // sepete eklenen ürünler
    const [cart, setCart] = useState([])
    // kullanıcı giriş yaptı mı yapmadı mı
    const [isLogin, setIsLogin] = useState(false)
    // favorilerin tutulduğu state
    const [favorites, setFavorites] = useState([])

    const addCart =(product)=>{
        // * butona tıklanınca dizi geldiği için [] içine aldık,
        // * cart'ın içindene varsa al sonra yanına da gelen productları ekle
        setCart([...cart, product])
    }
    // favorileri ürünlerin eklendiği state
    const addToFavorites =(product)=>{
        // product bilgilerinin içine favorite isminde bir veri daha ekledik
        product.favorite = true
        setFavorites([...favorites, product])
    }

    return (
        <StoreContext.Provider value={{cart, addCart, isLogin, setIsLogin, favorites, setFavorites, addToFavorites}}>
            {children}
        </StoreContext.Provider>
    );
};

export default Provider;
