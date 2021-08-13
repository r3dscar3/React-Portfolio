export const splitLineBreaks = (str) => str.split(new RegExp('\\r?\\n'));

export const sortAsc = (arr) => arr && arr.sort((a, b) => a.sortOrder - b.sortOrder);
