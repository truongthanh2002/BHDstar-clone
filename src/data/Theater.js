const THEATERS = [
  {
    id: 1,
    img: "https://www.bhdstar.vn/wp-content/uploads/2010/08/3.2-470x639.jpg",
    amount_like: "735.841 Thích",
    location: "hochiminh",
    name: "BHD Star 3/2",
    href: "bhd-star-3-thang-2",
    phone: "1900 2099 hoặc gọi 028 6264 5820",
    email: "cskh@bhdstar.vn",
    ticketPrice:
      "https://www.bhdstar.vn/wp-content/uploads/2010/08/BHDS.3.2-Ticket-Price-2023.jpg",
    fTicketPrice:
      "https://www.bhdstar.vn/wp-content/uploads/2010/08/BHDS.3.2.Ticket-Price-Le-2023-1.jpg",
    phongChieu: "5 phòng chiếu 2D & 3D",
    address: "Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM",
  },
  {
    id: 2,
    img: "https://www.bhdstar.vn/wp-content/uploads/2014/01/PH-470x639.jpg",
    amount_like: "782.536 Thích",
    location: "hochiminh",
    name: "BHD Star Phạm Hùng",
    href: "bhd-star-pham-hung",
    phone: "1900 2099 hoặc gọi 028 3758 9142",
    email: "cskh@bhdstar.vn",
    ticketPrice:
      "https://www.bhdstar.vn/wp-content/uploads/2014/01/BHDS.Pham-Hung-Ticket-Price-2023.jpg",
    fTicketPrice:
      "https://www.bhdstar.vn/wp-content/uploads/2014/01/BHDS.PH_.Ticket-Price-Le-2023-1.jpg",
    phongChieu: "6 Phòng chiếu 2D & 3D",
    address:
      "Tầng 4, TTTM Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh, TPHCM.",
  },
  {
    id: 3,
    img: "https://www.bhdstar.vn/wp-content/uploads/2015/01/QUANG-TRUNG-470x639.jpg",
    amount_like: "773.135 Thích",
    location: "hochiminh",
    name: "BHD Star Quang Trung",
    href: "bhd-star-quang-trung",
    phone: "1900 2099 hoặc gọi 028 3989 2468",
    email: "cskh@bhdstar.vn",
    ticketPrice:
      "https://www.bhdstar.vn/wp-content/uploads/2015/01/BHDS.Quang-Trung-Ticket-Price-2023.jpg",
    fTicketPrice:
      "https://www.bhdstar.vn/wp-content/uploads/2015/01/BHDS.QT.Ticket-Price-Le-2023-1.jpg",
    phongChieu: "Phòng chiếu: 8 Phòng chiếu 2D & 3D",
    address: "Tầng B1&B2, TTTM Vincom, số 190 Quang Trung, Gò Vấp, Tp.HCM",
  },
  {
    id: 4,
    img: "https://www.bhdstar.vn/wp-content/uploads/2016/02/THAO-DIEN-CINEMA-470x639.jpg",
    amount_like: "571.029 Thích",
    location: "hochiminh",
    name: "BHD Star Thảo Điền",
    href: "bhd-star-thao-dien",
    phone: "1900 2099 hoặc gọi 028 3744 6969",
    email: "cskh@bhdstar.vn",
    ticketPrice:
      "https://www.bhdstar.vn/wp-content/uploads/2016/02/BHDS.Thao-Dien-Ticket-Price-2023.jpg",
    fTicketPrice:
      "https://www.bhdstar.vn/wp-content/uploads/2016/02/BHDS.TD_.Ticket-Price-Le-2023-1.jpg",
    phongChieu: "6 Phòng chiếu 2D & 3D",
    address: "Tầng 5, TTTM Vincom Center, 159 Xa Lộ Hà Nội, Quận 2, TP.HCM",
  },
  {
    id: 5,
    img: "https://www.bhdstar.vn/wp-content/uploads/2016/04/LVV-470x639.jpg",
    amount_like: "1.379.100 Thích",
    location: "hochiminh",
    name: "BHD Star Lê Văn Việt",
    href: "bhd-star-le-van-viet",
    phone: "1900 2099 hoặc gọi 028 3736 7070",
    email: "cskh@bhdstar.vn",
    ticketPrice:
      "https://www.bhdstar.vn/wp-content/uploads/2016/04/BHDS.LVV-Ticket-Price-2023.jpg",
    fTicketPrice:
      "https://www.bhdstar.vn/wp-content/uploads/2016/04/BHDS.LVV_.Ticket-Price-Le-2023-2.jpg",
    phongChieu: "6 Phòng chiếu 2D & 3D",
    address:
      "Tầng 4, Vincom Plaza Lê Văn Việt, 50 Lê Văn Việt, P.Hiệp Phú, Quận 9, TP.HCM",
  },
  {
    id: 6,
    img: "https://www.bhdstar.vn/wp-content/uploads/2016/07/PNT-CINEMA-470x639.jpg",
    amount_like: "2.132.441 Thích",
    location: "hanoi",
    name: "BHD Star Phạm Ngọc Thạch",
    href: "bhd-star-pham-ngoc-thach",
    phone: "1900 2099 hoặc 024 3637 3355",
    email: "cskh@bhdstar.vn",
    ticketPrice:
      "https://www.bhdstar.vn/wp-content/uploads/2016/07/BHDS.PNT_.Ticket-Price-2023.jpg",
    fTicketPrice:
      "https://www.bhdstar.vn/wp-content/uploads/2016/07/BHDS.PNT_.Ticket-Price-Le-2023-2.jpg",
    phongChieu:
      "7 Phòng chiếu: bao gồm 01 phòng chiếu First Class và 6 phòng chiếu 2D & 3D",
    address: "Tầng 8 của TTTM Vincom, số 2 Phạm Ngọc Thạch, Đống Đa, Hà Nội",
  },
  {
    id: 7,
    img: "https://www.bhdstar.vn/wp-content/uploads/2018/04/Cau-giay-copy-470x639.jpg",
    amount_like: "891.260 Thích",
    location: "hanoi",
    name: "BHD Star Discovery",
    href: "bhd-star-discovery",
    phone: "1900 2099 hoặc 024 3206 0202",
    email: "cskh@bhdstar.vn",
    ticketPrice:
      "https://www.bhdstar.vn/wp-content/uploads/2018/04/BHDS.Dis_.Ticket-Price-2023.jpg",
    fTicketPrice:
      "https://www.bhdstar.vn/wp-content/uploads/2018/04/BHDS.Dis_.Ticket-Price-Le-2023-1.jpg",
    phongChieu: "5 Phòng chiếu 2D",
    address: "Tầng 8, TTTM Discovery - 302 Cầu Giấy , Hà Nội",
  },
  {
    id: 8,
    img: "https://www.bhdstar.vn/wp-content/uploads/2019/12/GARDEN-470x639.jpg",
    amount_like: "387.350 Thích",
    location: "hanoi",
    name: "BHD Star The Garden",
    href: "bhd-star-the-garden",
    phone: "1900 2099 hoặc 024 3206 8678",
    email: "cskh@bhdstar.vn",
    ticketPrice:
      "https://www.bhdstar.vn/wp-content/uploads/2019/12/BHDS.Gar_.Ticket-Price-2023.jpg",
    fTicketPrice:
      "https://www.bhdstar.vn/wp-content/uploads/2019/12/BHDS.Gar_.Ticket-Price-Le-2023-1.jpg",
    phongChieu: "6 Phòng chiếu 2D & 3D. Ghế First Class",
    address:
      "Tầng 4 & 5, TTTM The Garden, khu đô thị The Manor, đường Mễ Trì, phường Mỹ Đình 1, quận Nam Từ Liêm, Hà Nội",
  },
  {
    id: 9,
    img: "https://www.bhdstar.vn/wp-content/uploads/2018/04/HUE-copy-470x639.jpg",
    amount_like: "330.009 Thích",
    location: "hue",
    name: "BHD Star Huế",
    href: "bhd-star-hue",
    phone: "1900 2099 hoặc 023 4625 0238",
    email: "cskh@bhdstar.vn",
    ticketPrice:
      "https://www.bhdstar.vn/wp-content/uploads/2018/04/BHDS.Hue_.Ticket-Price-2023.jpg",
    fTicketPrice:
      "https://www.bhdstar.vn/wp-content/uploads/2018/04/BHDS.Hue_.Ticket-Price-Le-2023-1.jpg",
    phongChieu: "4 Phòng chiếu 2D & 3D",
    address:
      "Vincom Huế, 50A Hùng Vương tổ 10, Phú Nhuận, Thành phố Huế, Thừa Thiên Huế",
  },
  {
    id: 10,
    img: "https://www.bhdstar.vn/wp-content/uploads/2021/12/long-khanh-470x639.jpg",
    amount_like: "388.387 Thích",
    location: "longkhanh",
    name: "BHD Star Long Khánh",
    href: "bhd-star-long-khanh",
    phone: "02512860696",
    email: "cskh@bhdstar.vn",
    ticketPrice:
      "https://www.bhdstar.vn/wp-content/uploads/2021/12/BHDS.LK_.Ticket-Price-T12.2022-copy.jpg",
    fTicketPrice:
      "https://www.bhdstar.vn/wp-content/uploads/2021/12/BHDS.LK_.Ticket-Price-Le-2023.jpg",
    phongChieu: "4 Phòng chiếu 2D",
    address:
      "430 Hồ Thị Hương, KP 6, Phường Xuân An, Thành Phố Long Khánh, Tỉnh Đồng Nai",
  },
];

export default THEATERS;
