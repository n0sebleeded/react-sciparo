export const popup = {
    initial: { opacity: 0, scale:0.4 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale:0.4 },
}

export const rotate = {
    initial: { opacity: 1, rotate: 45 },
    animate: { opacity: 1, rotate: 0, transition: {duration: 0.5, delay: 1, type: "spring"} },
}

export const rightout = {
    initial: {x: 0, opacity: 0},
    animate: {x: 0, opacity: 1},
    exit: {x: 375, opacity: 1}
}

export const leftout = {
    initial: {x: 0, opacity: 0},
    animate: {x: 0, opacity: 1},
    exit: {x: -375, opacity: 1}
}

export const topout = {
    initial: {y: 0, opacity: 0},
    animate: {y: 0, opacity: 1},
    exit: {y: 375, opacity: 1}
}

export const bottomout = {
    initial: {y: 0, opacity: 0},
    animate: {y: 0, opacity: 1},
    exit: {y: -375, opacity: 1}
}