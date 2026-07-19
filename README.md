# JudgeDesk

JudgeDesk là ứng dụng desktop chấm bài lập trình cục bộ dành cho kỳ thi, câu lạc
bộ và lớp học. Ứng dụng chạy trực tiếp trên Windows và macOS, không cần một máy
chủ chấm bài riêng.

> Repo này là trang phân phối, tài liệu cài đặt và nơi tiếp nhận báo lỗi chính
> thức của JudgeDesk. Mã nguồn ứng dụng được quản lý trong private repository.

## Tải xuống

Mở [JudgeDesk v1.2.0](https://github.com/ducminh25/themis-v2/releases/tag/v1.2.0)
hoặc trang [Releases](https://github.com/ducminh25/themis-v2/releases):

- Windows 10/11 x64: tải `JudgeDesk_1.2.0_x64_en-US.msi`.
- macOS 11 trở lên, Apple Silicon (M1/M2/M3/M4...): tải file `.dmg` aarch64.
- Máy đang dùng ThemisV2 `1.1.3` hoặc `1.1.4` có thể cập nhật trực tiếp trong
  ứng dụng lên JudgeDesk `1.2.0`.
- Dùng `SHA256SUMS` trong cùng release để kiểm tra tính toàn vẹn trước khi cài.

Xem hướng dẫn chi tiết tại [INSTALL.md](INSTALL.md).

## Tính năng chính

- Judge Workbench với toolbar gọn, scoreboard thích ứng theo cửa sổ và menu
  thao tác bằng chuột phải/secondary click.
- Tạo, mở và lưu trọn kỳ thi trong một file `.judgedesk`, gồm đề, bài làm và kết
  quả chấm.
- Chấm C/C++ và Python hoàn toàn trên máy cục bộ.
- Cấu hình điểm, nhóm test, phụ thuộc nhóm và nhiều chế độ checker.
- Xóa điểm có xác nhận, chấm lại một ô/hàng/cột hoặc toàn bộ kỳ thi.
- Xem chi tiết điểm và số test AC; xuất bảng điểm Excel.
- Giao diện tiếng Việt/tiếng Anh, nền sáng/tối.
- Checker và `testlib.h` tích hợp trong app, chỉ được xuất ra thư mục tạm khi
  người dùng chọn xem source.
- Tự phát hiện compiler/runtime có sẵn hoặc tải bộ công cụ đã kiểm tra SHA-256.

## GCC và Python được quản lý

Ở lần mở đầu tiên, JudgeDesk cho phép dùng compiler/runtime đã cài trên máy hoặc
tự tải gói độc lập. Các gói công khai nằm trong release
[`toolchains-v1`](https://github.com/ducminh25/themis-v2/releases/tag/toolchains-v1).

Ứng dụng kiểm tra manifest, kích thước và SHA-256 trước khi giải nén. Chi tiết
nguồn, phiên bản và giấy phép: [TOOLCHAINS.md](TOOLCHAINS.md).

## An toàn khi chấm bài

WSL2 + isolate hoặc Docker là tùy chọn. Khi không có sandbox sẵn sàng, mã nguồn
thí sinh có thể chạy trực tiếp trên máy host. Không nên chấm mã nguồn không tin
cậy trên máy chứa dữ liệu quan trọng.

## Hỗ trợ

- Báo lỗi hoặc đề xuất tính năng: [GitHub Issues](https://github.com/ducminh25/themis-v2/issues).
- Cách gửi báo cáo có ích: [SUPPORT.md](SUPPORT.md).
- Lỗ hổng bảo mật: [SECURITY.md](SECURITY.md).
