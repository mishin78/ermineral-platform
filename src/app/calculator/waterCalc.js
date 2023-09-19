export const calculateWaterForMen = (weight, activity) => {
    return (weight * 0.04) + (activity * 0.6)
}

export const calculateWaterForFemale = (weight, activity) => {
    return (weight * 0.03) + (activity * 0.4)
}

