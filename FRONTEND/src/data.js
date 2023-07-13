const data= [
    {
      id: 1,
      price: 19000,
      brand:"Samsung",
      size:"4GB",
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841896/",
      amount: 1,
      type:"mobile"
    },
    {
      id: 2,
      price: 23000,
      brand:"Vivo",
      size:"8GB",
      img: "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/t/u/m/-original-imaggsuehy3nyj3b.jpeg?q=70",
      amount: 1,
      type:"mobile"
    },
    {
      id: 3,
      price: 17000,
      brand:"Realme",
      size:"12GB",
      img: "https://m.media-amazon.com/images/I/41kyuER2HjL._SL500_.jpg",
      amount: 1,
      type:"mobile"
    },
    {
      id: 4,
      price: 12999,
      brand:"Samsung",
      size:"16GB",
      img: "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1651807558189/e7db3841bf6db0ac7a6f58948e8ab515.png",
      amount: 1,
      type:"mobile"
    },
    {
      id: 5,
      price: 13999,
      brand:"Vivo",
      size:"4GB",
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSp-PdoDDph2E73M5vqYAc53XsJX_H4u5JcPoeHfIpJXBAjf3gQdzB8yhTaGkUkEo2i_scJKArQsFz6bV09wlIRsJOLDgQV0w",
      amount: 1,
      type:"mobile"
    },
    {
      id: 6,
      price: 10135,
      brand:"Realme",
      size:"8GB",
      img: "https://m.media-amazon.com/images/I/31UhwG%2BXTJL._SL500_.jpg",
      amount: 1,
      type:"mobile"
    },
    {
      id: 7,
      price: 12999,
      brand:"Redmi",
      size:"12GB",
      img: "https://image01.realme.net/general/20220505/1651732725473.jpg",
      amount: 1,
      type:"mobile"
    },
    {
      id: 8,
      price: 16999,
      brand:"Oppo",
      size:"16GB",
      img: "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/h/r/b/-original-imagh29eqd3zrvaf.jpeg?q=70",
      amount: 1,
      type:"mobile"
    },
    {
      id: 9,
      price: 18599,
      brand:"Redmi",
      size:"4GB",
      img: "https://static.wixstatic.com/media/6fdaa2_00ddbc41a2d6490798268a9b12be9331~mv2.jpg/v1/fill/w_416,h_538,al_c,lg_1,q_85/6fdaa2_00ddbc41a2d6490798268a9b12be9331~mv2.webp",
      amount: 1,
      type:"mobile"
    },
    {
      id: 10,
      price: 15486,
      brand:"Oppo",
      size:"8GB",
      img: "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/a/x/j/-original-imagmkjfhzjhfhhe.jpeg?q=70",
      amount: 1,
      type:"mobile"
    },
    {
      id: 11,
      price: 18599,
      brand:"Oneplus",
      size:"12GB",
      img: "https://m.media-amazon.com/images/I/41cC9gNr47L._SL500_.jpg",
      amount: 1,
      type:"mobile"
    },
    {
      id: 12,
      price: 1,
      brand:"Oneplus",
      size:"16GB",
      img: "https://www.addmecart.com/wp-content/uploads/2022/12/sk519.png",
      amount: 1,
      type:"mobile"
    },
    {
      id:13,
      price:60000,
      brand:"Lenovo",
      size:"4GB",
      img:"https://media.wired.com/photos/616dcf0aebb034bbe8bec69f/master/w_1920%2Cc_limit/Gear-What-Makes-Laptops-Great.jpg",
      amount:1,
      type:"laptop"
    },
    {
      id:14,
      price:50000,
      brand:"Hp",
      size:"8GB",
      img:"https://media.wired.com/photos/5fb2cc575c9914713ead03de/master/w_1920%2Cc_limit/Gear-Apple-MacBook-Air-top-down-SOURCE-Apple.jpg",
      amount:1,
      type:"laptop"
    },
    {
      id:15,
      price:40000,
      brand:"Dell",
      size:"12GB",
      img:"https://media.wired.com/photos/63a49538145a571e203e3a7d/master/w_1920%2Cc_limit/asuschromebookflipcx5_GEAR.jpg",
      amount:1,
      type:"laptop"
    },
    {
      id:16,
      price:45000,
      brand:"Acer",
      size:"16GB",
      img:"https://media.wired.com/photos/62755f0e74e0428e36b7f383/master/w_1920%2Cc_limit/Acer-Swift-3x-Gear.jpg",
      amount:1,
      type:"laptop"
    },
    {
      id:17,
      price:48000,
      brand:"Lenovo",
      size:"4GB",
      img:"https://media.wired.com/photos/62bf3fcb9c301780cc3296c0/master/w_1920%2Cc_limit/Microsoft-Surface-Laptop-Go-2-Gear.jpg",
      amount:1,
      type:"laptop"
    },
    {
      id:18,
      price:44000,
      brand:"Hp",
      size:"8GB",
      img:"https://media.wired.com/photos/6312591979f10149f7bb9e64/master/w_1920%2Cc_limit/HP%2520Spectre%2520x360%252014.jpg",
      amount:1,
      type:"laptop"
    },
    {
      id:19,
      price:46000,
      brand:"Dell",
      size:"12GB",
      img:"https://media.wired.com/photos/62d07fc50b26fa3011607f0d/master/w_1920%2Cc_limit/MacBook-Air-2022-M2-Featured-Gear.jpg",
      amount:1,
      type:"laptop"
    },
    {
      id:20,
      price:39000,
      brand:"Acer",
      size:"16GB",
      img:"https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg",
      amount:1,
      type:"laptop"
    },
    {
      id:21,
      price:37000,
      brand:"Lenovo",
      size:"4GB",
      img:"https://www.digitaltrends.com/wp-content/uploads/2022/07/hp-pavilion-plus-14-front-angled-e1657729929857.jpg?p=1",
      amount:1,
      type:"laptop"
    },
    {
      id:22,
      price:42000,
      brand:"Hp",
      size:"8GB",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5RdepX7kl5ZmnI6mxJkE3XiBgzrU7G3jhuxUjoSlm2f923rxX5suvUaFVuoqCc0_zUrs&usqp=CAU",
      amount:1,
      type:"laptop"
    },
    {
      id:23,
      price:47000,
      brand:"Lenovo",
      size:"12GB",
      img:"https://reviewed-com-res.cloudinary.com/image/fetch/s--0C1aMpNn--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_792/https://reviewed-production.s3.amazonaws.com/attachment/57c26b93510341ac/DSC_1004.JPG",
      amount:1,
      type:"laptop"
    },
    {
      id:24,
      price:42000,
      brand:"Hp",
      size:"16GB",
      img:"https://cdn.mos.cms.futurecdn.net/nqmZicceVq6dEN6uCKwSN4.jpg",
      amount:1,
      type:"laptop"
    },
    {
      id:25,
      price:33000,
      brand:"asus",
      size:"4GB",
      img:"https://m.media-amazon.com/images/I/51UbIGzvb8L._SL500_.jpg",
      amount:1,
      type:"desktop"
    },
    {
      id:26,
      price:37000,
      brand:"lenovo",
      size:"8GB",
      img:"https://m.media-amazon.com/images/I/41V25yTChsL._SL500_.jpg",
      amount:1,
      type:"desktop"
    },
    {
      id:27,
      price:35000,
      brand:"hp",
      size:"12GB",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxF5vgCkMxrZdW-VRoauI_VQQba_P9lQdykoBT9NWYDg&s",
      amount:1,
      type:"desktop"
    },
    {
      id:28,
      price:33000,
      brand:"dell",
      size:"16GB",
      img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ0YEcG-TZf12Ecr_nzUt0zpR6FDxaZxbEWll1jLQ_cDlwthsUhcvaGwT1RzOmKKtrs1USX2q9vUSczR5zjN5EfIv3hWf8hURYmeSdu9HiqqqrWHGueWpwV",
      amount:1,
      type:"desktop"
    },
    {
      id:29,
      price:34000,
      brand:"acer",
      size:"4GB",
      img:"https://images-eu.ssl-images-amazon.com/images/I/711Oh7-BzdL._AC_UL116_SR116,116_.jpg",
      amount:1,
      type:"desktop"
    },
    {
      id:30,
      price:39000,
      brand:"asus",
      size:"8GB",
      img:"https://m.media-amazon.com/images/I/41T6tUGZYkL._AC_UF320,320_SR320,320_.jpg",
      amount:1,
      type:"desktop"
    },
    {
      id:31,
      price:33000,
      brand:"lenovo",
      size:"12GB",
      img:"https://m.media-amazon.com/images/I/61eo%2Bl0UZuL._SL500_.jpg",
      amount:1,
      type:"desktop"
    },
  
    {
      id:32,
      price:33500,
      brand:"hp",
      size:"16GB",
      img:"https://m.media-amazon.com/images/I/41Ntx9K151L._SL160_.jpg",
      amount:1,
      type:"desktop"
    },
  
    {
      id:33,
      price:33999,
      brand:"dell",
      size:"4GB",
      img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQvd2jBMjRm6ZW9imnzmnLFfwSzlqE_tRFtVaa7bpoGmpFPnRFytLczfJc5kGNDWmVXVAhBkAp08vs&usqp=CAc",
      amount:1,
      type:"desktop"
    },
    {
      id:34,
      price:37999,
      brand:"acer",
      size:"8GB",
      img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcScJohvRIpjRM1IVwvj_aWA5iikYbkqOCg4xmRuQ55I4YsqmiUo1gfVQ-cfaFL0-9fygxSWTykBu3Q&usqp=CAc",
      amount:1,
      type:"desktop"
    },
    {
      id:35,
      price:39999,
      brand:"asus",
      size:"12GB",
      img:"https://m.media-amazon.com/images/I/61wqsR2wrUL._AC_UY327_FMwebp_QL65_.jpg",
      amount:1,
      type:"desktop"
    },
    {
      id:36,
      price:33999,
      brand:"asus",
      size:"16GB",
      img:"https://rukminim1.flixcart.com/image/416/416/kox8b680/allinone-desktop/n/e/s/entwinoallinonewithwificore2duo-entwino-original-imag39w4m8sthmgc.jpeg?q=70",
      amount:1,
      type:"desktop"
    },
    
  
  
    
  ];
  
  export default data;
  
