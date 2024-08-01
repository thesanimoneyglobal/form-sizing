export type Store = {
    show: boolean
    setShow: (show: boolean) => void
}

export type StoreLoading = {
    showLoading: boolean
    setShowLoading: (showLoading: boolean) => void
}


export interface FormComplexity {
    label: string;
    probability: number;
}

export interface StoreComplexity {
    formComplexityData: FormComplexity[];
    setFormComplexityData: (data: FormComplexity[]) => void;
}

export interface PredictedEstimation {
    label: string
    probability: number
}