import create from "zustand";

interface Airplan {
    y: number;
    x: number;
    angle: number;
}

interface Store {
    airplans: Airplan[],
    addAirplan: (airplan: Airplan) => void
}

const useAirplans = create<Store>(set => ({
    airplans: [
        {
            angle: 350,
            x: 5,
            y: 15
        }
    ],
    addAirplan: airplan => set(state => ({airplans: [...state.airplans, airplan]}))
}));

export default useAirplans;
