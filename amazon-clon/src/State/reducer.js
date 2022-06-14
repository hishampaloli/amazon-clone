export const initialState = {
  basket: [],
  user: null,
  fav: [],
  notification: false,
  order: [],
  seeOrder: false,
  nothin: [],
};

export const reducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action],
      };

    case "REMOVE_FROM_CART":
      const index = state.basket.findIndex((basketItem) => {
        return basketItem.item.id === action.id;
      });
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log("not removed");
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "ADD_FAV":
      return {
        ...state,
        fav: [...state.fav, action.items],
      };

    case "REMOVE_FROM_FAV":
      const ind = state.fav.findIndex((Item) => {
        return Item.id === action.id;
      });
      let newFav = [...state.fav];

      if (ind >= 0) {
        newFav.splice(ind, 1);
      } else {
        console.log("not removed");
      }

      return {
        ...state,
        fav: newFav,
      };

    case "SET_NOTIFIACTION":
      return {
        ...state,
        notification: action.notification,
      };

    case "EMPTY_CART":
      while (state.basket.length > 0) {
        state.basket.pop();
      }
      return {
        ...state,
        nothing: [state.basket],
      };

    case "ADD_TO_ORDER":
      return {
        ...state,
        order: [...state.order, action],
      };

    case "SEE_ORDER":
      return {
        ...state,
        seeOrder: action.seeOrder,
      };

    case "REMOVE_FROM_ORDER":
      let position = state.order.findIndex((item) => {
        return item.items.id === action.id;
      });

      let newOrder = [...state.order];

      if (position >= 0) {
        newOrder.splice(position, 1);
      } else {
        console.log("not removed");
      }

      return {
        ...state,
        order: newOrder,
      };

    default:
      return state;
  }
};
