export const handleLeftClick = (e, ref) => {
    e.preventDefault()
    ref.current.scrollLeft -= ref.current.offsetWidth
}

export const handleRightClick = (e, ref) => {
    e.preventDefault()
    ref.current.scrollLeft += ref.current.offsetWidth
}