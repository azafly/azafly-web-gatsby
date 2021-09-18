
// get the paths from the markdon image label and then format it to a relative path starting with 'image'


// export function getHomeImageStaticPaths(path: string) {
//     const pathMap: Record<string, string> = {}
//     homePageImages.forEach(path => pathMap[path] = `images${path.split('images')[1]}`)
//     console
//     return pathMap[path]
// }

export function getFormattedImageUrl(path: string) {
    return `images${path.split('images')[1]}`
}