# deno-timestamp — Basic static timestamp site

Site tĩnh hiển thị thời gian hiện tại theo định dạng:

DD/MM/YYYY
HH:MM:SS

Clock cập nhật mỗi giây.

Usage

- Mở `index.html` trong trình duyệt để xem bản local.
- Hoặc serve bằng Deno (tùy chọn):

```sh
# Serve thư mục trên localhost:8000 bằng Deno's file_server
denо run --allow-net --allow-read https://deno.land/std@0.198.0/http/file_server.ts
```

License: MIT