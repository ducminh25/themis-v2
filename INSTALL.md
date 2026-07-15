# Hướng dẫn cài đặt ThemisV2

Chỉ tải ThemisV2 từ trang [Releases chính thức](https://github.com/ducminh25/themis-v2-downloads/releases).

## Windows 10/11 x64

1. Mở release mới nhất và tải file `ThemisV2_..._x64_en-US.msi`.
2. Tải thêm `SHA256SUMS` trong cùng release.
3. Kiểm tra checksum bằng PowerShell:

   ```powershell
   Get-FileHash .\ThemisV2_*.msi -Algorithm SHA256
   Get-Content .\SHA256SUMS
   ```

4. Đối chiếu hai giá trị rồi chạy file MSI.
5. Mở ThemisV2 và chọn cách cấu hình compiler/runtime ở màn hình đầu tiên.

Nếu Windows hiển thị cảnh báo nhà phát hành, không tiếp tục nếu file không đến từ repo này hoặc checksum không khớp. Các bản chưa được ký số chỉ dùng để thử nghiệm và không nên phát hành rộng rãi.

## macOS Intel và Apple Silicon

1. Mở release mới nhất và tải file `.dmg` universal.
2. Tải `SHA256SUMS`, sau đó kiểm tra trong Terminal:

   ```bash
   shasum -a 256 ThemisV2_*.dmg
   cat SHA256SUMS
   ```

3. Mở DMG và kéo ThemisV2 vào thư mục Applications.
4. Mở ThemisV2 từ Applications.

Nếu Gatekeeper chặn ứng dụng, chỉ dùng **System Settings → Privacy & Security → Open Anyway** sau khi đã xác minh checksum và nguồn tải. Không chạy các lệnh xoá quarantine lấy từ nguồn không tin cậy.

## Compiler và Python

ThemisV2 hỗ trợ ba lựa chọn:

- Dùng G++/Python đã có trên máy.
- Chỉ dùng chức năng judger với môi trường hệ thống.
- Để ứng dụng tải gói GCC/Python độc lập, đã được kiểm tra SHA-256.

Windows có gói GCC và Python được quản lý. macOS sử dụng Apple Clang từ Xcode Command Line Tools cho C/C++ và có thể tải Python độc lập.

## Gỡ cài đặt

- Windows: **Settings → Apps → Installed apps → ThemisV2 → Uninstall**.
- macOS: xoá ThemisV2 khỏi Applications.

Dữ liệu toolchain được quản lý nằm trong thư mục dữ liệu ứng dụng của người dùng và có thể gỡ ngay trong màn hình quản lý Tools trước khi gỡ app.

