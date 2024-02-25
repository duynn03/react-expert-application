export const isNull = (value) => {
    if (value === undefined || value === null || value === "undefined" || value === "null" || value === "") {
        return true;
    }
    return false;
}