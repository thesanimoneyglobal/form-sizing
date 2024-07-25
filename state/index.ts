import { create } from 'zustand'

type Store = {
    show: boolean
    setShow: (show: boolean) => void
}

type StoreLoading = {
    showLoading: boolean
    setShowLoading: (showLoading: boolean) => void
}

export const useShowChart = create<Store>()((set) => ({
    show: false,
    setShow: (show: boolean) => set(() => ({ show })),
}))

export const useShowLoading = create<StoreLoading>()((set) => ({
    showLoading: false,
    setShowLoading: (showLoading: boolean) => set(() => ({ showLoading })),
}))