// Khai báo class SinhVien
class SinhVien {
    constructor(ma, hoTen, tuoi, diem) {
        this.ma = ma;
        this.hoTen = hoTen;
        this.tuoi = tuoi;
        this.diem = diem;
    }
}

const danhSachSinhVien = [
    new SinhVien("SV01", "Nguyễn Anh Quân", 20, 8),
    new SinhVien("SV02", "Nguyễn Đức Cường", 21, 4),
    new SinhVien("SV03", "Trần Quang Huy", 19, 7),
    new SinhVien("SV04", "Trương thị Hồng", 20, 5),
    new SinhVien("SV05", "Lê Bảo Phúc Khang", 22, 3)
];

const sinhVienDat = danhSachSinhVien.filter(
    sinhVien => sinhVien.diem >= 5
);

console.log("DANH SÁCH SINH VIÊN ĐẠT YÊU CẦU:");

sinhVienDat.forEach(sinhVien => {
    console.log(sinhVien);
});