import { create } from 'zustand'

type Store = {
    show: boolean
    setShow: (show: boolean) => void
}

export const useShowChart = create<Store>()((set) => ({
    show: false,
    setShow: (show: boolean) => set(() => ({ show })),
}))