import { create } from 'zustand'
import {FormComplexity, Store, StoreComplexity, StoreLoading} from "@/types";

export const useShowChart = create<Store>()((set) => ({
    show: false,
    setShow: (show: boolean) => set(() => ({ show })),
}))

export const useShowLoading = create<StoreLoading>()((set) => ({
    showLoading: false,
    setShowLoading: (showLoading: boolean) => set(() => ({ showLoading })),
}))

export const useStoreComplexity = create<StoreComplexity>((set) => ({
    formComplexityData: [],
    setFormComplexityData: (data: FormComplexity[]) => set({ formComplexityData: data })
}));