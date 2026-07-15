# ThemisV2

ThemisV2 là ứng dụng desktop chấm bài lập trình cục bộ dành cho kỳ thi, câu lạc bộ và lớp học. Ứng dụng chạy trên Windows và macOS, không yêu cầu máy chủ chấm bài riêng.

> Repo này là trang phân phối chính thức, hướng dẫn sử dụng và nơi tiếp nhận báo lỗi của ThemisV2. Mã nguồn ứng dụng được quản lý riêng tư.

## Tải xuống

Mở trang [Releases](https://github.com/ducminh25/themis-v2/releases) và chọn phiên bản ThemisV2 mới nhất:

- Windows 10/11 x64: tải file `.msi`.
- macOS 11 trở lên, Intel hoặc Apple Silicon: tải file universal `.dmg`.
- Dùng file `SHA256SUMS` trong cùng release để kiểm tra tính toàn vẹn trước khi cài.

Xem hướng dẫn chi tiết tại [INSTALL.md](INSTALL.md).

## Tính năng chính

- Chấm C/C++ và Python hoàn toàn trên máy cục bộ.
- Bảng điểm trực quan theo thí sinh và bài.
- Cấu hình điểm, nhóm test, phụ thuộc nhóm và nhiều chế độ checker.
- Chấm lại một bài, một thí sinh hoặc toàn bộ kỳ thi.
- Xuất bảng điểm Excel.
- Giao diện tiếng Việt/tiếng Anh, sáng/tối.
- Tự phát hiện compiler/runtime có sẵn hoặc tải bộ công cụ đã được kiểm tra SHA-256.

## GCC và Python được quản lý

Ở lần mở đầu tiên, ThemisV2 cho phép dùng compiler/runtime đã cài trên máy hoặc tự tải gói độc lập. Các gói công khai nằm trong release [`toolchains-v1`](https://github.com/ducminh25/themis-v2/releases/tag/toolchains-v1).

Ứng dụng kiểm tra manifest, kích thước và SHA-256 trước khi giải nén. Chi tiết nguồn, phiên bản và giấy phép: [TOOLCHAINS.md](TOOLCHAINS.md).

## An toàn khi chấm bài

WSL2 + isolate hoặc Docker là tùy chọn. Khi không có sandbox sẵn sàng, mã nguồn thí sinh có thể chạy trực tiếp trên máy host. Không nên chấm mã nguồn không tin cậy trên máy chứa dữ liệu quan trọng.

## Hỗ trợ

- Báo lỗi hoặc đề xuất tính năng: [GitHub Issues](https://github.com/ducminh25/themis-v2/issues).
- Cách gửi báo cáo có ích: [SUPPORT.md](SUPPORT.md).
- Lỗ hổng bảo mật: [SECURITY.md](SECURITY.md).
