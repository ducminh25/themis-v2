# Hướng dẫn cài đặt JudgeDesk

Chỉ tải JudgeDesk từ trang [Releases chính thức](https://github.com/ducminh25/themis-v2/releases).

## Windows 10/11 x64

1. Mở release mới nhất và tải file `JudgeDesk_..._x64_en-US.msi`.
2. Tải thêm `SHA256SUMS` trong cùng release.
3. Kiểm tra checksum bằng PowerShell:

   ```powershell
   Get-FileHash .\JudgeDesk_*.msi -Algorithm SHA256
   Get-Content .\SHA256SUMS
   ```

4. Đối chiếu hai giá trị rồi chạy file MSI.
5. Mở JudgeDesk và chọn cách cấu hình compiler/runtime ở màn hình đầu tiên.

MSI v1.2.0 giữ nguyên mã nâng cấp của ThemisV2. Nếu máy đã cài ThemisV2
1.1.3/1.1.4, bộ cài sẽ nâng cấp ứng dụng hiện có sang JudgeDesk thay vì tạo một
bản cài song song. Dữ liệu và toolchain hiện có được giữ nguyên.

Nếu Windows hiển thị cảnh báo nhà phát hành, không tiếp tục nếu file không đến
từ repo này hoặc checksum không khớp.

## macOS Apple Silicon

JudgeDesk v1.2.0 hỗ trợ macOS 11 trở lên trên máy M-chip.

1. Mở release mới nhất và tải file `.dmg` aarch64.
2. Tải `SHA256SUMS`, sau đó kiểm tra trong Terminal:

   ```bash
   shasum -a 256 JudgeDesk_*.dmg
   cat SHA256SUMS
   ```

3. Mở DMG và kéo JudgeDesk vào thư mục Applications.
4. Mở JudgeDesk từ Applications.

Máy đang dùng ThemisV2 1.1.3/1.1.4 có thể dùng chức năng cập nhật trong app;
identifier và kho dữ liệu người dùng được giữ nguyên trong quá trình đổi tên.

Nếu Gatekeeper chặn ứng dụng, chỉ dùng **System Settings → Privacy & Security →
Open Anyway** sau khi đã xác minh checksum và nguồn tải. Không chạy các lệnh xóa
quarantine lấy từ nguồn không tin cậy.

## Compiler và Python

JudgeDesk hỗ trợ ba lựa chọn:

- Dùng G++/Python đã có trên máy.
- Chỉ dùng chức năng judger với môi trường hệ thống.
- Để ứng dụng tải gói GCC/Python độc lập, đã được kiểm tra SHA-256.

Windows có gói GCC và Python được quản lý. macOS sử dụng Apple Clang từ Xcode
Command Line Tools cho C/C++ và có thể tải Python độc lập.

## Gỡ cài đặt

- Windows: **Settings → Apps → Installed apps → JudgeDesk → Uninstall**.
- macOS: xóa JudgeDesk khỏi Applications.

Dữ liệu toolchain được quản lý nằm trong thư mục dữ liệu ứng dụng của người dùng
và có thể gỡ ngay trong màn hình quản lý Tools trước khi gỡ app.
