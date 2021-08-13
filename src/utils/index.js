export const splitLineBreaks = (str) => str.split(new RegExp('\\r?\\n'));

export const sortAsc = (arr) => arr && arr.sortOrder((a, b) => a.order - b.order);
