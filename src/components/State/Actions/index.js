    import { PaymentOutlined } from "@mui/icons-material"

    export const depositMoney =(amount)=>{

        return(dispatch)=>{ 
            dispatch({
            type:'DEPOSIT',
            payload:amount
            })
        }
    }

    export const withDrawMoney =(amount)=>{

        return(dispatch)=>{ 
            dispatch({
            type:'WITHDRAW',
            payload:amount

            })
        }
    }
    export const addtoCart = (productName, productPrice) => {
        return (dispatch) => {
          dispatch({
            type: 'ADDTOCART',
            payload: { name: productName, prize: productPrice }
          });
        };
      };
      
     