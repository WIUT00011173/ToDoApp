input.addEventListener("change", ({target}) => addToList(target))
select.addEventListener("change", ({target}) => filter(target))

render()