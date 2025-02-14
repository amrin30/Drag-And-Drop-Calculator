
import { create } from "zustand";

const useCalculatorStore = create((set, get) => {

  const savedItems = JSON.parse(localStorage.getItem("calculatorItems")) || [];
  const savedResult = localStorage.getItem("calculatorResult") || "";

  return {
    items: savedItems,
    result: savedResult,
    history: [savedItems], 
    currentIndex: 0,

    setItems: (items) => {
      set((state) => {
        const newHistory = state.history.slice(0, state.currentIndex + 1);
        return {
          items,
          history: [...newHistory, items],
          currentIndex: newHistory.length,
        };
      });

      localStorage.setItem("calculatorItems", JSON.stringify(items));
      localStorage.setItem("calculatorResult", get().result);
    },

    addItem: (item) => {
      set((state) => {
        const newItems = [...state.items, item];
        const newHistory = state.history.slice(0, state.currentIndex + 1);
        return {
          items: newItems,
          history: [...newHistory, newItems], 
          currentIndex: newHistory.length,
        };
      });

      localStorage.setItem("calculatorItems", JSON.stringify(get().items));
      localStorage.setItem("calculatorResult", get().result);
    },

    undo: () => {
      set((state) => {
        if (state.currentIndex > 0) {
          return {
            items: state.history[state.currentIndex - 1], 
            currentIndex: state.currentIndex - 1,
          };
        }
        return state;
      });
    },

    redo: () => {
      set((state) => {
        if (state.currentIndex < state.history.length - 1) {
          return {
            items: state.history[state.currentIndex + 1], 
            currentIndex: state.currentIndex + 1,
          };
        }
        return state;
      });
    },

    clearItems: () => {
      set((state) => ({
        items: [],
        history: [...state.history, []], 
        currentIndex: state.history.length,
        result: "",
      }));

      localStorage.removeItem("calculatorItems");
      localStorage.removeItem("calculatorResult");
    },

    backspace: () => {
      set((state) => {
        const newItems = state.items.slice(0, -1);
        const newHistory = state.history.slice(0, state.currentIndex + 1);
        return {
          items: newItems,
          history: [...newHistory, newItems], 
          currentIndex: newHistory.length,
        };
      });

      localStorage.setItem("calculatorItems", JSON.stringify(get().items));
      localStorage.setItem("calculatorResult", get().result);
    },

    setResult: (result) => {
      set({ result });
      localStorage.setItem("calculatorResult", result);
    },
  };
});

export default useCalculatorStore;
