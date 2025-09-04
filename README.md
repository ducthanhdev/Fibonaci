# Bài 2 – Tính số Fibonacci thứ 50 (F(50)) bằng JavaScript

## 1. Thuật toán triển khai
- **Phương pháp**: Dynamic Programming (bottom-up) với mảng `dp`.  
- **Kiểu dữ liệu**: sử dụng **BigInt** để xử lý số lớn.  
- **Đo thời gian**: dùng `console.time` / `console.timeEnd` để log từng lần, đồng thời tính trung bình bằng `process.hrtime.bigint()`.  
- **Cách duy nhất**: DP mảng, không dùng memoization, không tối ưu O(1).

## 2. Độ phức tạp
- **Thời gian**: `O(n)` – vòng lặp từ 2..n.  
- **Không gian**: `O(n)` – cần mảng `dp[0..n]`.

## 3. Kiểm tra tính đúng đắn
Chương trình trực tiếp tính và in ra kết quả:  
- `F(10) = 55`  
- `F(20) = 6765`  
- `F(50) = 12586269025`  

Đây là các giá trị chuẩn của dãy Fibonacci, chứng minh thuật toán đúng.

## 4. Kết quả chạy thực tế
Khi chạy `node fib50.js`:

### Benchmark 10 lần
Ví dụ (tham khảo, kết quả thực tế tùy máy):
```
Run #1 (n=10): 0.006ms
...
=> n=10: avg=0.1333ms, min=0.0513ms, max=0.2230ms
=> n=20: avg=0.1163ms, min=0.0553ms, max=0.1803ms
=> n=50: avg=0.0759ms, min=0.0340ms, max=0.1500ms
```

### Kết quả giá trị F(n)
```
F(10) = 55
F(20) = 6765
F(50) = 12586269025
```
