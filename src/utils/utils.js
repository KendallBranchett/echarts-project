export function createRandom(minnum, maxnum) {
  return Math.floor(Math.random() * (maxnum - minnum + 1)) + minnum;
}
