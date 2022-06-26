import { configureStore } from "@reduxjs/toolkit";

import { CryptoApi } from "../Services/CryptoApi";
import { CryptoNewsApi } from "../Services/CryptoNewsApi";
export default configureStore({

    reducer:{
        [CryptoApi.reducerPath]:CryptoApi.reducer,
        [CryptoNewsApi.reducerPath]:CryptoNewsApi.reducer,
    },

});