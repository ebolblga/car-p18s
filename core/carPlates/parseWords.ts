export default function parseWords(data: string) {
  return data
    .split('\n')
    .map((word) => (word.at(-1) == '\r' ? word.slice(0, -1) : word))
}
