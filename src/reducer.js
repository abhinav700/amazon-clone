
export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal=(basket)=>
  basket?.reduce((amount,item)=>item.price+amount,0)


//anything inside data layer->state
//action-> remove items from basket, add items to basket etc

function reducer(state, action) {
  //switch->used to check against a bunch of cases
  console.log(action); // to check if correct action is getting fired properly
  switch (action.type) {
    case "SET_USER":
      return{
        ...state,user:action.user,
      }
    case "ADD_TO_BASKET":
      //compulsory to return after each action
      //it returns what new data layer looks like.
      return {
        //return the current state to data layer + update the basket
        ...state,
        //.old ItEms + new product that we have added.
        basket: [...state.basket, action.item],
      };
      break;

    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket ];
      const index = state.basket.findIndex(
        (basketItems) => basketItems.id === action.id
      );

      if(index>=0)
      {
          newBasket.splice(index,1)
      }

      else{
        console.log("can't remove this product because index<0")
      }

      return{
        ...state,
        basket:newBasket
      }
      break;

    default:
      return state;
  }
}

export default reducer;
