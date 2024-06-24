const foodMenu = [
  {
    nama: "Nasi Goreng",
    deskripsi:
      "Nasi yang digoreng dengan bumbu rempah khas Indonesia dan pembakaran masih menggunakan arang",
    harga: 25000,
    foto: "/food/nasi-goreng.jpg",
    stok: Math.random() >= 0.5 ? true : false,
  },
  {
    nama: "Sate Ayam",
    deskripsi:
      "Potongan daging ayam yang ditusuk dan dibakar, disajikan dengan bumbu kacang",
    harga: 15000,
    foto: "/food/sate-ayam.jpg",
    stok: Math.random() >= 0.5 ? true : false,
  },
  {
    nama: "Gado-Gado",
    deskripsi:
      "Sayuran segar dengan bumbu kacang khas Indonesia, dan terdapat lontong sebagai pemenuhan karbohidrat",
    harga: 20000,
    foto: "/food/gado-gado.jpg",
    stok: Math.random() >= 0.5 ? true : false,
  },
  {
    nama: "Rendang",
    deskripsi:
      "Daging yang dimasak dengan santan dan rempah-rempah khas Padang",
    harga: 30000,
    foto: "/food/rendang.jpg",
    stok: Math.random() >= 0.5 ? true : false,
  },
  {
    nama: "Soto Ayam",
    deskripsi:
      "Sup ayam dengan kuah kuning dan berbagai rempah-rempah khas Indonesia",
    harga: 18000,
    foto: "/food/soto-ayam.jpg",
    stok: Math.random() >= 0.5 ? true : false,
  },
  {
    nama: "Martabak",
    deskripsi:
      "Makanan dadakan yang terbuat dari adonan tepung dengan berbagai isian seperti daging",
    harga: 20000,
    foto: "/food/martabak.jpg",
    stok: Math.random() >= 0.5 ? true : false,
  },
  {
    nama: "Bakso",
    deskripsi: "Bola daging yang direbus disajikan dengan mie dan kuah kaldu",
    harga: 12000,
    foto: "/food/bakso.jpg",
    stok: Math.random() >= 0.5 ? true : false,
  },
  {
    nama: "Soto Betawi",
    deskripsi:
      "Sup daging dengan kuah santan kental serta rempah khusus khas Betawi",
    harga: 22000,
    foto: "/food/soto-betawi.jpg",
    stok: Math.random() >= 0.5 ? true : false,
  },
  {
    nama: "Ayam Penyet",
    deskripsi:
      "Ayam yang digeprek dengan bumbu rempah dan disajikan dengan sambal terasi",
    harga: 18000,
    foto: "/food/ayam-penyet.jpg",
    stok: Math.random() >= 0.5 ? true : false,
  },
  {
    nama: "Gurami Bakar",
    deskripsi:
      "Gurami bakar dengan bumbu rempah dan disajikan dengan sambal terasi mantap",
    harga: 45000,
    foto: "/food/ikan-bakar.jpg",
    stok: Math.random() >= 0.5 ? true : false,
  },
];

export default foodMenu;
