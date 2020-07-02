/* Variants and Transitions for Framer Motion */

const VariantSlideDown = {
    initial: {
        y: "-10vh"
    },
    in: {
        y: "0"
    }
}

const VariantSlideUp = {
    initial: {
        y: "10vh"
    },
    in: {
        y: "0"
    }
}

const VariantPageSlideLeft = {
    in: {
        x: 0
    },
    out: {
        x: "100vw"
    }
}

const VariantPageSlideRight = {
    in: {
        x: 0
    },
    out: {
        x: "-100vw"
    }
}
const VariantPageSlideUp = {
    initial: {
        y: "100vh"
    },
    in: {
        y: 0 
    }, 
    out: {
        opacity: 0
    }
}

const VariantSlideShrink = {
    initial: {
        y: "10vh",
        scale: 1.5
    }, 
    in: {
        y: 0,
        scale: 1
    }
}

const VariantShrink = {
    initial: {
        scale: 2
    }, 
    in: {
        scale: 1
    }
}

const VariantConstrain = {
    initial: {
        scale: 1.1
    }, 
    in: {
        scale: 0.97,
    }
}

const VariantFadeIn = {
    initial: {
        y: 0,
        opacity: 0
    },
    in: {
        y: 0,
        opacity: 1
    },
    out: {
        y: "-100vh"
    }
}

const VariantExitFade = {
    initial: {
        opacity: 1
    },
    out: {
        opacity: 0
    }
}

const TransitionLinear = {
    transition: 'linear'
}

const TransitionLinearMid = {
    transition: 'linear',
    duration: 1.2
}

const TransitionLinearSlow = {
    transition: 'linear',
    duration: 2
}

export { VariantSlideUp, VariantSlideDown, VariantPageSlideLeft, VariantPageSlideRight, VariantPageSlideUp, VariantSlideShrink, VariantShrink, VariantFadeIn, VariantConstrain, VariantExitFade, TransitionLinear, TransitionLinearMid, TransitionLinearSlow};