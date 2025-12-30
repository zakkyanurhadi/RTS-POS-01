
import { Product, Transaction } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Kopi Susu Gula Aren',
    price: 18000,
    stock: 45,
    category: 'Coffee',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqIKElypuyxDIWYU0QB582V551iaRzjgPYQCfWMHfGxvr2Lqb5dK1jqt3w-KacxBlUrXKwE4ZJKvHjZr_vVa1FJbNG0bzpboVkWcw8pRKoCxkCrR45FitohEutN-ZJnjkL0JF_uGW_YdrvOZR4cqsyG4RiScH60x47fSsmxHwza-ZS48FZkzXmRhTV8x6ZPgzs45Et6fYLyIEVYP2Qa__5WLcHAj-POtEstgtuP13rvpky6oJJrzo1umDlcbsOFxUVh_-zMz9S3a0'
  },
  {
    id: '2',
    name: 'Green Tea Latte',
    price: 20000,
    stock: 12,
    category: 'Tea',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPDCP9Ikfs987hwdqhwA6iS_oWhlawse5U2S50FiWesm246lypEA7pna2V_o4B2jePj78kIg5_5UY687hdGNiMr2rwX0Dsc7iDBv1u0A09eVpb2-0tccwPWOK4VC8tPB0ZYLNxuxHDYuks25Zj5iW5s_NY2AJqsRUv86y3N3CxdnnRUmEj66Tu6nEW3KqvE_zujNfFfzhkZMHqprhAJ0NuZDi8gdzHMS9cr5RuZFutmcVWRi2PGHHoMXWSdw1E-R_zx-fbcAcWhB8'
  },
  {
    id: '3',
    name: 'Jasa Kirim (Delivery)',
    price: 10000,
    stock: 'infinite',
    category: 'Lainnya'
  },
  {
    id: '4',
    name: 'Red Velvet Cake',
    price: 25000,
    stock: 3,
    category: 'Food',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzJhyE0ycV829SmA0c0lXXQKY1IiOD8Tm2EApIF7l0XXF2dc_-oIp7VNAPdnO3D3dcHcGT3PDdO9sqelRnC2whI6ymFcyne7wCJKcMU6EAsC31swoLhvGXJoiGe6TFL9tRCnXSSKinH-GHT-tarMFQJ-cs98UoCqBVjx6XIu1zg1IizBo6OZnpf_FIS20_HwJrxVpUCRmUlA0itX5NSR2JCxPpEqn5NlHC7JIJ0lgsfgsfyS2MUxCU-eaWNezez2i4JMY2rNFgsMs'
  },
  {
    id: '5',
    name: 'Yakult Lemonade',
    price: 15000,
    stock: 85,
    category: 'Yakult Series',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9WB1QBHLuaotw6njJdyPME1cDYc8bv0L7hpgV57c0I90rgpoxU-_5TLVLgQnXMYGmszBmkuNFpfTeNC7Zq1gkYN1WA2Ppt-45tFGjUQ9icYSkNxyx2311SnSt1JjGipN4MC1A_nAdTr2h4KDo1-EmNIvTQLeOMldfWkZG5h9-XBBMmQR1br1H5D7PRpdddd2EVqaFw9mlSXIfoK1RLCEogViZVn2_mjIcWXaJLC5MstfBfii8Qkdt8WPJNhLe6yuNx6fOXb1nhos'
  }
];

export const TRANSACTIONS: Transaction[] = [
  { id: 'TRX-2849', time: '14:30 WIB', date: 'Hari Ini', amount: 150000, status: 'Lunas', method: 'QRIS' },
  { id: 'TRX-2848', time: '13:15 WIB', date: 'Hari Ini', amount: 45000, status: 'Pending', method: 'Tunai' },
  { id: 'TRX-2845', time: '10:45 WIB', date: 'Kemarin', amount: 120000, status: 'Gagal', method: 'Kartu' },
  { id: 'TRX-2844', time: '09:20 WIB', date: 'Kemarin', amount: 200000, status: 'Lunas', method: 'Tunai' },
];

export const STORE_LOGO = "https://lh3.googleusercontent.com/aida-public/AB6AXuBq3n_D3fShiOpue2CgSAtgMERUMT4m5aYjwnBbxUjrWCRTzRltLfagxSpW_5Hex-dvu2bUkeT-_B1-KzCEqxrxAKK47spRd6IMYveZv_jq12-SVvFPsDiJuOiDvEtZxsNioK6avMVTytcogRAfuYwaRHWgwOv67ey4AH-a2rKyPWFcw0Z8gYziruotezVwelDGPpkSnCimTmmg1e1mHyMZ8Kgyim9zrXOU32RZzg9UyC2lu36367-LCx5aZzwE4HRjypKq86awOE0";
export const PROFILE_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuBYnT0HvQ5I1TE7jmcVLiDWxaOnLtP-6l7uaRvZqQaT7z3fUFW5DTL7cMtH6EyKRBO3wEWUoVJpsBj1d39BNN5jHvGq5FSlIQ1tyqPAio90wz4iwGCY-jGIXg0jIGXMWL18SbThjT0i44X0_T7SOoe4bmMsPSKMWnUVXKMdirjMK4fEWEctg8Eb7DYVOC3DxTZUu9lBkAEFPWJMTOEUSL3rof6UST25tDodovXYEKGGTMvWcvL0iikm8KBg9w4A4aJwi8bqulQ9fWY";
