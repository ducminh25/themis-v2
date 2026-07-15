# Managed toolchains

ThemisV2 có thể tải compiler/runtime độc lập để không phụ thuộc cấu hình toàn hệ thống.

| Gói | Nền tảng | Phiên bản | Nguồn |
| --- | --- | --- | --- |
| GCC/MinGW-w64 | Windows x64 | GCC 14.2.0 | WinLibs |
| CPython | Windows x64 | Python 3.12.13 | python-build-standalone |
| CPython | macOS Intel | Python 3.12.13 | python-build-standalone |
| CPython | macOS Apple Silicon | Python 3.12.13 | python-build-standalone |

Các file nằm trong release [`toolchains-v1`](https://github.com/ducminh25/themis-v2/releases/tag/toolchains-v1). `toolchains-manifest.json` chứa URL tải, kích thước và SHA-256 mà ứng dụng kiểm tra trước khi cài.

## Nguồn và giấy phép

- GCC: [GNU Compiler Collection](https://gcc.gnu.org/), được đóng gói từ bản dựng [WinLibs](https://github.com/brechtsanders/winlibs_mingw). Gói phát hành bao gồm `COPYING3`, `COPYING.RUNTIME` và `SOURCE.txt`.
- Python: [CPython](https://www.python.org/) từ [python-build-standalone](https://github.com/astral-sh/python-build-standalone). Gói phát hành giữ lại file giấy phép Python.

Repo này không thay đổi giấy phép của các thành phần bên thứ ba. Xem các file giấy phép nằm trong từng archive để biết điều khoản đầy đủ.

## Tái tạo gói

Workflow công khai [Build and Publish Toolchains](.github/workflows/toolchains.yml) tải các archive upstream bằng URL cố định, kiểm tra checksum nguồn, chạy thử executable, tạo manifest/checksum mới rồi tải lên GitHub Release.
