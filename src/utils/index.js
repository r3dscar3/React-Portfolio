export const splitLineBreaks = (str) => str.split(new RegExp('\\r?\\n'));

export const sortAsc = (arr) => arr && arr.sort((a, b) => (a.sortOrder ? a.sortOrder - b.sortOrder : a.id - b.id));
