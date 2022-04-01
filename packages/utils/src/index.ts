export function add(a: number, b: number): number {
  return a + b
}

export function sum(list: number[]): number {
  return list.reduce((prev, curr) => prev + curr, 0)
}
