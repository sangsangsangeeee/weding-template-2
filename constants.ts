export const WEDDING = {
  coupleNames: '상이 & 현아',
  heroSubtitle: '늘 웃음 가득한 부부가 되겠습니다.',
  date: '2026.06.07',
  time: '일요일 오후 03:00',
  venue: '서울여성플라자 피움 서울, 국제회의장',
  venueName: '서울여성플라자 피움 서울',
  venueDetail: '국제회의장',
  mapOptions: {
    lat: 37.51137187820746, // 서울특별시 동작구 여의대방로54길 18 위도
    lng: 126.92713661961623, // 서울특별시 동작구 여의대방로54길 18 경도
  },
  greeting: `햇살이 가장 예쁜 6월에 
저희가 사랑의 결실을 맺게 되었습니다.

늘 웃음 가득한 부부가 되겠습니다.

새로운 시작의 자리에
소중한 분들을 초대합니다.
따뜻한 마음으로 축복해 주시면 
감사하겠습니다.`,
};

import gallery1 from './assets/gallery-1.jpeg';
import gallery2 from './assets/gallery-2.jpeg';
import gallery3 from './assets/gallery-3.jpeg';
import gallery4 from './assets/gallery-4.jpeg';
import gallery5 from './assets/gallery-5.jpeg';
import gallery6 from './assets/gallery-6.jpeg';
import gallery7 from './assets/gallery-7.jpeg';
import gallery8 from './assets/gallery-8.jpeg';
import gallery9 from './assets/gallery-9.jpeg';
import gallery10 from './assets/gallery-10.jpeg';

export const GALLERY_PHOTOS = [
  { id: 1, url: gallery1, caption: 'Scene #01' },
  { id: 2, url: gallery2, caption: 'Scene #02' },
  { id: 3, url: gallery3, caption: 'Scene #03' },
  { id: 4, url: gallery4, caption: 'Scene #04' },
  { id: 5, url: gallery5, caption: 'Scene #05' },
  { id: 6, url: gallery6, caption: 'Scene #06' },
  { id: 7, url: gallery7, caption: 'Scene #07' },
  { id: 8, url: gallery8, caption: 'Scene #08' },
  { id: 9, url: gallery9, caption: 'Scene #09' },
  { id: 10, url: gallery10, caption: 'Scene #10' },
];

export interface AccountInfo {
  bank: string;
  accountNumber: string;
  owner: string;
}

export const GROOM_ACCOUNTS: AccountInfo[] = [
  { bank: '우리은행', accountNumber: '1002-160-707015', owner: '남상이' },
  { bank: 'oo은행', accountNumber: '000-00-0000-000', owner: '이일순' },
];

export const BRIDE_ACCOUNTS: AccountInfo[] = [
  { bank: '신한은행', accountNumber: '110-478-330600', owner: '김현아' },
  { bank: '국민은행', accountNumber: '639002-01-132410', owner: '임민자' },
];

export interface TransportItem {
  title: string;
  content: string[];
}

export const TRANSPORT_DATA: TransportItem[] = [
  {
    title: '지하철 (Subway)',
    content: ['1호선 대방역 하차', '3번 출구 좌측 골목 50m 위치'],
  },
  {
    title: '버스 (Bus)',
    content: ['마을버스: 동작01, 동작05, 동작05-1, 동작08, 동작12, 영등포07, 영등포 10, 영등포 11', '지선: 5531, 5634, 5623, 5633, 6211, 6411', '간선: 150, 163, 360, 361, 461, 505'],
  },
  {
    title: '자가용 (Car)',
    content: [
      '네비게이션: "서울여성플라자" 또는 "서울시 동작구 여의대방로 54 18"',
      '지하 주차장 (2시간 무료)',
    ],
  },
];
