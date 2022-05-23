export function collision(objA, objB){
let first = objA.getBoundingClientRect()
let second = objB.getBoundingClientRect()

let hasColligion = !(first.top > second.bottom || first.bottom < second.top || first.right < second.left || first.left > second.right)
return hasColligion
}