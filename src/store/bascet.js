import {create} from "zustand"

export const useBascetStore = create((set) => ({
    isOpenBascet: false,
    setIsOpenBascet: (value) => {set({isOpenBascet: value})}
}))