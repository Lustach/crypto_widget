function convertImgToSvg(img) {
    const imgURL = img.src
    const className = img.className
    const width = img.width
    const height = img.height

    return fetch(imgURL)
    .then(r => r.text())
    .then(text => {
        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(text, 'text/xml')
        const svg = xmlDoc.getElementsByTagName('svg')[0]

        if (className) svg.setAttribute('class', className)
        if (width) svg.setAttribute('width', width)
        if (height) svg.setAttribute('height', height)

        img.parentNode.replaceChild(svg, img)

        return svg
    })
    .catch(console.error)
}

export function imgToSvgBySelector(selectors) {
    const loadingSvgPromises = []

    document.querySelectorAll(selectors).forEach(img => {
        loadingSvgPromises.push(convertImgToSvg(img))
    })

    return loadingSvgPromises
}

export function imgToSvgByRef(ref) {
    return convertImgToSvg(ref)
}
