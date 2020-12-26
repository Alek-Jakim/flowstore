// Applies the appropriate class to the icon depending on the product rating
export const starRating = (value, fullStarValue, halfStarValue) => {
    let str = ''
    if (value >= fullStarValue) {
        str = 'fas fa-star'
    } else if (value >= halfStarValue) {
        str = 'fas fa-star-half-alt'
    } else {
        str = 'far fa-star'
    }
    return str
}