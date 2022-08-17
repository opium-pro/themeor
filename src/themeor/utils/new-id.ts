let lastId = 0

export default function newId(prefix='themeor-id') {
  lastId++;
  return `${prefix}-${lastId}`;
}