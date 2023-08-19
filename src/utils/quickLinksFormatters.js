export function formatHeadingId(text) {
    return text.replace(/\W+/g, '-').toLowerCase()
}

export function getQuickLinks(prismic) {
    const slices = prismic.data.body
    const textSlices = slices.filter(slice => slice.slice_type === 'text')
    textSlices.forEach(
        txtSlice => (txtSlice.h2s = txtSlice.primary.content.richText.filter(slc => slc.type === 'heading2'))
    )
    return textSlices
        .map(txSlice => txSlice.h2s)
        .flat()
        .map(h2 => {
            return {
                link: `#${formatHeadingId(h2.text)}`,
                label: h2.text,
                level: 1,
            }
        })
}
