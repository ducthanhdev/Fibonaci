/**
 * Hàm Fibonacci dùng DP mảng
 * Thời gian: O(n), Không gian: O(n)
 * @param {number} n
 * @returns {bigint}
 */
function fibDP(n) {
  if (n < 0) throw new Error('n must be non-negative');
  if (n === 0) return 0n;
  if (n === 1) return 1n;

  const dp = new Array(n + 1);
  dp[0] = 0n;
  dp[1] = 1n;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

/**
 * Benchmark: chạy k lần, log từng lần, và tính trung bình
 * @param {number} n
 * @param {number} runs
 */
function benchmark(n, runs = 10) {
  const durationsMs = [];
  for (let i = 0; i < runs; i++) {
    const label = `Run #${i + 1} (n=${n})`;
    const t0 = process.hrtime.bigint();
    console.time(label);
    fibDP(n);
    console.timeEnd(label);
    const t1 = process.hrtime.bigint();
    durationsMs.push(Number(t1 - t0) / 1e6);
  }
  const avg = durationsMs.reduce((a, b) => a + b, 0) / runs;
  const min = Math.min(...durationsMs);
  const max = Math.max(...durationsMs);
  console.log(`=> n=${n}: avg=${avg.toFixed(4)}ms, min=${min.toFixed(4)}ms, max=${max.toFixed(4)}ms`);
}

// Main
if (require.main === module) {
  console.log('== Benchmark (10 lần) ==');
  [10, 20, 50].forEach(n => benchmark(n, 10));

  console.log('\n== Kết quả các giá trị F(n) ==');
  console.log(`F(10) = ${fibDP(10)}`);
  console.log(`F(20) = ${fibDP(20)}`);
  console.log(`F(50) = ${fibDP(50)}`);
}

module.exports = { fibDP, benchmark };
