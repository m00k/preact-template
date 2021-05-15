export const locationHashToIndex = (): number => {
    const groupName = window.location.hash || ''
    const idIndex = groupName.indexOf('_')
    return idIndex > -1 ? +groupName.substring(idIndex + 1) : 0
}
