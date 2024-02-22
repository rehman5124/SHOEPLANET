export const slideIn = {
    hidden: {
        opacity: 1,
        x: '100%' ,
        transition: {
            type: 'tween',
            duration: 0.5,
        }
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'tween',
            delay: 0.2 ,
            duration: 0.5,
        }
    }
}