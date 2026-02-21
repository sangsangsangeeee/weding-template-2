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

export interface TransportItem {
  title: string;
  content: string[];
}

export const TRANSPORT_DATA: TransportItem[] = [
  {
    title: '지하철 (Subway)',
    content: [
      '5호선 광나루역 2번 출구',
      '2호선 강변역 1번 출구',
      '* 각 역 앞 셔틀버스 정류장에서 호텔 셔틀버스를 이용해주세요.',
    ],
  },
  {
    title: '셔틀버스 (Shuttle Bus)',
    content: [
      '광나루역 2번 출구 맞은편 (10분 간격)',
      '강변역 1번 출구 앞 (10분 간격)',
      '호텔 도착 후, 애스톤 하우스 전용 차량으로 환승',
    ],
  },
  {
    title: '자가용 (Car)',
    content: [
      "네비게이션 '그랜드 워커힐 서울' 또는 '애스톤 하우스' 검색",
      '호텔 주차타워 이용 (주차 확인 도장 발급)',
      '행사 당일 발렛파킹 서비스가 제공됩니다.',
    ],
  },
];
