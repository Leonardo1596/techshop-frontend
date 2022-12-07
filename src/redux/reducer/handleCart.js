const cart = [];

const handleCart = (state = cart, action) => {
    switch (action.type) {
        case "ADDITEM":
            // // Check if product already exist
            // const exist = state.find((x) => x.id === product.id);
            // if (exist) {
            //     // Increase the quantity
            //     return state.map((x) => 
            //     x.id === product.id ? {...x, qty: x.qty + 1} : x
            //     );
            // } else {
            //     const product = action.payload;
            //     return [
            //         ...state,
            //         {
            //             ...product,
            //             qty: 1,
            //         }
            //     ]
            // }

            const exist = state.find((x) => x._id === action.payload._id);
            if (exist) {
                return state.map((x) => x._id === action.payload._id ? { ...x, qty: x.qty + 1 } : x);
            } else {
                return [
                    ...state,
                    {
                        ...action.payload,
                        qty: 1
                    }
                ];
            }

            break;

        case "DELITEM":
            const exist1 = state.find((x) => x._id === action.payload._id);
            if (exist1.qty === 1) {
                return state.filter((x) => x._id !== exist1._id);
            } else {
                return state.map((x) =>
                    x._id === action.payload._id ? { ...x, qty: x.qty - 1 } : x
                );
            }
            break;

        default:
            return state;
            break;
    }
}


export default handleCart;