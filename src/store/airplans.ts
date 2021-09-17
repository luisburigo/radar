import create from "zustand";

interface Airplan {
    y: number;
    x: number;
    angle: number;
}

const useAirplans = create<{ airplans: Airplan[], addAirplan: (airplan: Airplan) => void }>(set => ({
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
