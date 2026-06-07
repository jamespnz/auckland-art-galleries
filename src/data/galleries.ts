export type Category = 'public' | 'dealer' | 'auction';

export interface Gallery {
  id: string;
  name: string;
  category: Category;
  suburb: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  hours: { en: string; ja: string };
  tagline: { en: string; ja: string };
  description: { en: string; ja: string };
  image: string;
  auctionSchedule?: { en: string; ja: string };
}

export const galleries: Gallery[] = [
  {
    id: 'auckland-art-gallery',
    name: 'Auckland Art Gallery Toi o Tāmaki',
    category: 'public',
    suburb: 'CBD',
    address: 'Cnr Kitchener & Wellesley Streets, Auckland CBD',
    phone: '09 379 1349',
    email: 'info@aucklandartgallery.com',
    website: 'https://www.aucklandartgallery.com',
    hours: {
      en: 'Daily 10am–5pm',
      ja: '毎日 10:00〜17:00',
    },
    tagline: {
      en: "New Zealand's largest and most prestigious art institution",
      ja: 'ニュージーランド最大かつ最も権威ある美術館',
    },
    description: {
      en: "Aotearoa New Zealand's largest art institution housing over 18,000 works spanning centuries. The collection includes significant Māori and Pacific art, New Zealand historical paintings, and major international contemporary works. Free entry to the permanent collection makes it an essential first stop for any art lover visiting Auckland.",
      ja: 'アオテアロア・ニュージーランド最大の美術館で、数世紀にわたる18,000点以上の作品を所蔵しています。マオリ・太平洋美術、ニュージーランドの歴史的絵画、国際的な現代美術の重要なコレクションがあります。常設展は入場無料で、オークランドを訪れるアート愛好家の必見スポットです。',
    },
    image: 'https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=800&h=450&fit=crop',
  },
  {
    id: 'gus-fisher-gallery',
    name: 'Gus Fisher Gallery',
    category: 'public',
    suburb: 'CBD',
    address: '74 Shortland Street, Auckland CBD',
    phone: '09 923 6646',
    email: '', // TODO: verify
    website: 'https://www.gusfishergallery.auckland.ac.nz',
    hours: {
      en: 'Tue–Fri 10am–5pm, Sat 11am–4pm',
      ja: '火〜金 10:00〜17:00、土 11:00〜16:00',
    },
    tagline: {
      en: "University of Auckland's acclaimed contemporary art space",
      ja: 'オークランド大学の高い評価を受ける現代アートスペース',
    },
    description: {
      en: "Located in the historic Old Synagogue building, Gus Fisher Gallery is the University of Auckland's public gallery presenting contemporary and historical exhibitions with a focus on New Zealand artists. The programme bridges academic research and public engagement with ambitious, thought-provoking shows.",
      ja: '歴史的な旧シナゴーグの建物にあるガス・フィッシャー・ギャラリーは、オークランド大学の公開ギャラリーです。ニュージーランドのアーティストに焦点を当てた現代・歴史的展覧会を開催し、学術研究と一般公開を橋渡しする意欲的な展示を行っています。',
    },
    image: 'https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?w=800&h=450&fit=crop',
  },
  {
    id: 'artspace-aotearoa',
    name: 'Artspace Aotearoa',
    category: 'public',
    suburb: 'Karangahape Road',
    address: '300 Karangahape Road, Newton, Auckland',
    phone: '', // TODO: verify
    email: '', // TODO: verify
    website: 'https://www.artspace-aotearoa.nz',
    hours: {
      en: 'Tue–Fri 10am–5pm, Sat 11am–4pm',
      ja: '火〜金 10:00〜17:00、土 11:00〜16:00',
    },
    tagline: {
      en: 'Contemporary art with a Tāmaki Makaurau lens',
      ja: 'タマキ・マカウラウの視点から見る現代アート',
    },
    description: {
      en: "One of Aotearoa's most important artist-run spaces, Artspace Aotearoa presents ambitious contemporary art exhibitions that engage with the social and cultural contexts of Tāmaki Makaurau Auckland. Free entry and a commitment to accessibility make it a vital stop on K' Road's gallery strip.",
      ja: 'アオテアロアで最も重要なアーティスト・ラン・スペースの一つで、タマキ・マカウラウ・オークランドの社会的・文化的文脈と関わる意欲的な現代美術展を開催しています。入場無料で、カランガハペ・ロードのギャラリー巡りに欠かせないスポットです。',
    },
    image: 'https://tse2.mm.bing.net/th/id/OIP.rjrzB65H560vkCuEg2Q6ugHaFj?rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    id: 'te-uru',
    name: 'Te Uru Waitākere Contemporary Gallery',
    category: 'public',
    suburb: 'Titirangi',
    address: '420 Titirangi Road, Titirangi, Auckland',
    phone: '', // TODO: verify
    email: '', // TODO: verify
    website: 'https://www.teuru.org.nz',
    hours: {
      en: 'Daily 10am–4:30pm',
      ja: '毎日 10:00〜16:30',
    },
    tagline: {
      en: 'Contemporary art and design in the Waitākere Ranges',
      ja: 'ワイタケレ山脈の麓で現代アートとデザインに出会う',
    },
    description: {
      en: 'Nestled at the edge of the Waitākere Ranges rainforest, Te Uru presents contemporary art and design with a strongly community-focused programme. The gallery building itself is architecturally striking, and the surrounding bush setting creates a unique gallery-going experience. Free entry.',
      ja: 'ワイタケレ山脈の熱帯雨林の入り口に位置するテ・ウルは、地域に根ざしたプログラムで現代アートとデザインを紹介しています。建築的にも印象的なギャラリーで、周囲の自然が独特な鑑賞体験を生み出します。入場無料。',
    },
    image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&h=450&fit=crop',
  },
  {
    id: 'te-tuhi',
    name: 'Te Tuhi',
    category: 'public',
    suburb: 'Pakuranga',
    address: '13 Reeves Road, Pakuranga, Auckland',
    phone: '', // TODO: verify
    email: '', // TODO: verify
    website: 'https://www.tetuhi.art',
    hours: {
      en: 'Tue–Sun 10am–4pm',
      ja: '火〜日 10:00〜16:00',
    },
    tagline: {
      en: 'Experimental contemporary art with a tikanga Māori framework',
      ja: 'ティカンガ・マオリの枠組みによる実験的現代アート',
    },
    description: {
      en: 'Te Tuhi is a contemporary art space that operates within a tikanga Māori framework, presenting experimental exhibitions and community-engaged projects. Located in Pakuranga, it offers a perspective distinct from the central city galleries. Free entry.',
      ja: 'テ・トゥヒはティカンガ・マオリの枠組みの中で運営される現代アートスペースで、実験的な展覧会やコミュニティ参加型プロジェクトを展開しています。パクランガに位置し、中心部のギャラリーとは異なる視点を提供します。入場無料。',
    },
    image: 'https://eastaucklandtourism.co.nz/wp-content/uploads/2024/07/theTuhi4.jpg',
  },
  {
    id: 'objectspace',
    name: 'Objectspace',
    category: 'public',
    suburb: 'Ponsonby',
    address: '13 Rose Road, Ponsonby, Auckland',
    phone: '', // TODO: verify
    email: '', // TODO: verify
    website: 'https://www.objectspace.org.nz',
    hours: {
      en: 'Tue–Fri 10am–5pm, Sat 11am–4pm',
      ja: '火〜金 10:00〜17:00、土 11:00〜16:00',
    },
    tagline: {
      en: 'Where craft, design, and architecture meet contemporary art',
      ja: '工芸、デザイン、建築が現代アートと出会う場所',
    },
    description: {
      en: 'Objectspace is a unique gallery dedicated to the intersection of craft, design, and architecture viewed through a contemporary art lens. Exhibitions range from jewellery and ceramics to furniture and spatial design, offering a refreshing alternative to traditional painting-focused galleries.',
      ja: 'オブジェクトスペースは、工芸・デザイン・建築を現代アートの視点から紹介するユニークなギャラリーです。ジュエリーや陶芸から家具、空間デザインまで幅広い展示を行い、従来の絵画中心のギャラリーとは一線を画しています。',
    },
    image: 'https://cdn.architecturenow.co.nz/site_media/media/cache/01/1d/011dce66ad76498d82d4766176ba98e9.jpg',
  },
  {
    id: 'pah-homestead',
    name: 'Pah Homestead (TSB Wallace Arts Centre)',
    category: 'public',
    suburb: 'Hillsborough',
    address: '72 Hillsborough Road, Hillsborough, Auckland',
    phone: '', // TODO: verify
    email: '', // TODO: verify
    website: 'https://www.tsbbankwallaceartstrust.co.nz',
    hours: {
      en: 'Tue–Fri 10am–3pm, Sat–Sun 10am–5pm',
      ja: '火〜金 10:00〜15:00、土〜日 10:00〜17:00',
    },
    tagline: {
      en: 'Contemporary NZ art in a restored 1879 mansion',
      ja: '1879年築の邸宅で楽しむニュージーランド現代アート',
    },
    description: {
      en: 'The Pah Homestead is a beautifully restored 1879 mansion overlooking One Tree Hill, housing the Wallace Arts Trust collection of contemporary New Zealand art. With elegant period rooms repurposed as gallery spaces and a café on site, it combines heritage architecture with cutting-edge art in a peaceful hillside setting.',
      ja: 'パー・ホームステッドは、ワン・トゥリー・ヒルを見渡す1879年築の美しく修復された邸宅で、ウォレス・アーツ・トラストの現代ニュージーランド美術コレクションを展示しています。優雅な歴史的建築とカフェを備え、穏やかな丘陵地で最先端のアートを楽しめます。',
    },
    image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&h=450&fit=crop',
  },
  {
    id: 'corban-estate',
    name: 'Corban Estate Arts Centre',
    category: 'public',
    suburb: 'Henderson',
    address: '2 Mount Lebanon Lane, Henderson, Auckland',
    phone: '', // TODO: verify
    email: '', // TODO: verify
    website: 'https://www.ceac.org.nz',
    hours: {
      en: 'Daily 9am–4:30pm',
      ja: '毎日 9:00〜16:30',
    },
    tagline: {
      en: 'Multi-disciplinary arts centre on a former winery',
      ja: '元ワイナリーの多分野アートセンター',
    },
    description: {
      en: 'Corban Estate Arts Centre occupies a historic former winery in Henderson, offering 22 working artist studios, gallery spaces, and a vibrant programme of exhibitions and events. The sprawling heritage buildings and grounds create a village-like arts community well worth the trip west of the city.',
      ja: 'コーバン・エステート・アーツ・センターは、ヘンダーソンの歴史あるワイナリー跡地に位置し、22のアーティストスタジオ、ギャラリースペース、活発な展覧会プログラムを提供しています。広大な敷地に広がるアートコミュニティは、市の西側まで足を伸ばす価値があります。',
    },
    image: 'https://images.unsplash.com/photo-1545987796-200677ee1011?w=800&h=450&fit=crop',
  },
  {
    id: 'gow-langsford',
    name: 'Gow Langsford Gallery',
    category: 'dealer',
    suburb: 'CBD',
    address: '26 Lorne Street, Auckland CBD',
    phone: '09 303 4290',
    email: 'art@gowlangsfordgallery.co.nz', // TODO: verify
    website: 'https://www.gowlangsfordgallery.co.nz',
    hours: {
      en: 'Mon–Fri 10am–5pm, Sat 11am–4pm',
      ja: '月〜金 10:00〜17:00、土 11:00〜16:00',
    },
    tagline: {
      en: "One of NZ's most influential dealer galleries",
      ja: 'ニュージーランドで最も影響力のあるディーラーギャラリーの一つ',
    },
    description: {
      en: 'Operating since 1987, Gow Langsford is one of New Zealand\'s most respected commercial galleries with over 300 exhibitions to its name. Representing leading NZ and international artists, it offers museum-quality works across painting, sculpture, and works on paper in an elegant CBD space.',
      ja: '1987年から運営され、300以上の展覧会を開催してきたニュージーランドで最も権威ある商業ギャラリーの一つです。国内外の一流アーティストを代理し、絵画、彫刻、紙作品をエレガントなCBDの空間で提供しています。',
    },
    image: 'https://artlogic-res.cloudinary.com/w_2000,h_2000,c_limit,f_auto,fl_lossy,q_auto/ws-gowlangsford/usr/images/pages/slideshow_backup/1/group-exhibition_2022_installation-view_4.jpg',
  },
  {
    id: 'michael-lett',
    name: 'Michael Lett',
    category: 'dealer',
    suburb: 'Karangahape Road',
    address: '312 Karangahape Road, Newton, Auckland',
    phone: '', // TODO: verify
    email: '', // TODO: verify
    website: 'https://www.michaellett.com',
    hours: {
      en: 'Tue–Fri 11am–5pm, Sat 11am–3pm',
      ja: '火〜金 11:00〜17:00、土 11:00〜15:00',
    },
    tagline: {
      en: 'International contemporary art in a converted historic bank',
      ja: '歴史的な銀行跡地で出会う国際現代アート',
    },
    description: {
      en: 'Michael Lett occupies a stunning converted historic bank on Karangahape Road, representing internationally significant artists including Martin Creed, Simon Denny, Billy Apple, and Kate Newby. The gallery\'s ambitious programme has placed it firmly on the international contemporary art circuit.',
      ja: 'カランガハペ・ロードの歴史的な銀行を改装した印象的な空間で、マーティン・クリード、サイモン・デニー、ビリー・アップル、ケイト・ニュービーなど国際的に重要なアーティストを代理しています。野心的なプログラムで国際的な現代アートシーンに確固たる地位を築いています。',
    },
    image: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=800&h=450&fit=crop',
  },
  {
    id: 'starkwhite',
    name: 'Starkwhite',
    category: 'dealer',
    suburb: 'Karangahape Road',
    address: '510 Karangahape Road, Newton, Auckland',
    phone: '', // TODO: verify
    email: '', // TODO: verify
    website: 'https://www.starkwhite.co.nz',
    hours: {
      en: 'Tue–Fri 11am–5pm, Sat 11am–3pm',
      ja: '火〜金 11:00〜17:00、土 11:00〜15:00',
    },
    tagline: {
      en: 'Australian and NZ artists in a dramatic converted space',
      ja: 'ドラマチックな改装空間でオーストラリアとNZのアートを展示',
    },
    description: {
      en: 'Starkwhite presents a carefully curated programme of Australian and New Zealand contemporary artists in a dramatic, light-filled converted industrial space on upper Karangahape Road. The gallery is known for its strong stable of artists and its role in building trans-Tasman art connections.',
      ja: 'カランガハペ・ロード上部のドラマチックな改装工業空間で、オーストラリアとニュージーランドの現代アーティストを厳選して紹介しています。優れたアーティスト陣とトランス・タスマンのアート交流への貢献で知られています。',
    },
    image: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800&h=450&fit=crop',
  },
  {
    id: 'two-rooms',
    name: 'Two Rooms',
    category: 'dealer',
    suburb: 'Grey Lynn',
    address: '16 Putiki Street, Grey Lynn, Auckland',
    phone: '09 360 5900',
    email: '', // TODO: verify
    website: 'https://www.tworooms.co.nz',
    hours: {
      en: 'Tue–Fri 10am–5pm, Sat 11am–3pm',
      ja: '火〜金 10:00〜17:00、土 11:00〜15:00',
    },
    tagline: {
      en: 'Photography, sculpture, and painting from NZ and international artists',
      ja: 'NZ・国際アーティストの写真、彫刻、絵画',
    },
    description: {
      en: 'Two Rooms is a well-established gallery in Grey Lynn presenting photography, works on paper, sculpture, and painting from New Zealand and international artists. The generous warehouse-style space allows ambitious installations and large-scale works to be shown to their full advantage.',
      ja: 'グレイ・リンにある確立されたギャラリーで、ニュージーランドと海外のアーティストによる写真、紙作品、彫刻、絵画を紹介しています。広々とした倉庫スタイルの空間で、大規模なインスタレーションや作品を十分に楽しめます。',
    },
    image: 'https://www.parnell.net.nz/wp-content/uploads/2020/06/Artis_Parnell_webgallery-768x512.jpg',
  },
  {
    id: 'tim-melville',
    name: 'Tim Melville Gallery',
    category: 'dealer',
    suburb: 'Grey Lynn',
    address: '4 Winchester Street, Grey Lynn, Auckland',
    phone: '', // TODO: verify
    email: '', // TODO: verify
    website: 'https://www.timmelville.com',
    hours: {
      en: 'Tue–Fri 11am–5pm, Sat 11am–3pm',
      ja: '火〜金 11:00〜17:00、土 11:00〜15:00',
    },
    tagline: {
      en: 'Established and emerging NZ contemporary artists',
      ja: 'NZのベテランと新進気鋭の現代アーティスト',
    },
    description: {
      en: 'Tim Melville Gallery presents a programme of established and emerging New Zealand contemporary artists, with a reputation for discovering new talent and supporting mid-career artists through ambitious solo exhibitions. The intimate Grey Lynn space allows for focused, carefully considered presentations.',
      ja: 'ティム・メルヴィル・ギャラリーは、新しい才能の発掘とキャリア中期のアーティストの支援で評価されています。グレイ・リンの親密な空間で、集中的かつ丁寧に考えられた展示を行っています。',
    },
    image: 'https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=800&h=450&fit=crop',
  },
  {
    id: 'melanie-roger',
    name: 'Melanie Roger Gallery',
    category: 'dealer',
    suburb: 'Karangahape Road',
    address: '444 Karangahape Road, Newton, Auckland',
    phone: '', // TODO: verify
    email: '', // TODO: verify
    website: 'https://www.melanieroger.com',
    hours: {
      en: 'Tue–Fri 11am–5pm, Sat 11am–3pm',
      ja: '火〜金 11:00〜17:00、土 11:00〜15:00',
    },
    tagline: {
      en: 'Leading NZ contemporary practitioners',
      ja: 'NZを代表する現代アート実践者たち',
    },
    description: {
      en: 'Melanie Roger Gallery represents some of New Zealand\'s most significant contemporary practitioners across painting, photography, and sculpture. Located on Karangahape Road, the gallery maintains an ambitious exhibition programme and strong relationships with institutional collections.',
      ja: 'メラニー・ロジャー・ギャラリーは、絵画、写真、彫刻の分野でニュージーランドを代表する現代アーティストを代理しています。カランガハペ・ロードに位置し、野心的な展覧会プログラムと美術館コレクションとの強いつながりを維持しています。',
    },
    image: 'https://melanierogergallery.com/media/cache/ae/57/ae57fc86b121af711489461eeadf38b8.jpg',
  },
  {
    id: 'anna-miles',
    name: 'Anna Miles Gallery',
    category: 'dealer',
    suburb: 'Newton',
    address: '1/30 Upper Queen Street, Newton, Auckland',
    phone: '09 368 5792',
    email: '', // TODO: verify
    website: 'https://www.annamilesgallery.com',
    hours: {
      en: 'Wed–Fri 11am–5pm, Sat 11am–3pm',
      ja: '水〜金 11:00〜17:00、土 11:00〜15:00',
    },
    tagline: {
      en: 'Considered, intimate programme of NZ contemporary art',
      ja: '熟慮されたNZ現代アートの親密なプログラム',
    },
    description: {
      en: 'Anna Miles Gallery offers a carefully considered, intimate programme of New Zealand contemporary art. Known for thoughtful curation and deep engagement with artists\' practices, it occupies a special niche in Auckland\'s gallery landscape, appealing to serious collectors and art lovers alike.',
      ja: 'アナ・マイルズ・ギャラリーは、ニュージーランド現代アートの丁寧で親密なプログラムを提供しています。thoughtfulなキュレーションとアーティストの実践への深い関与で知られ、真剣なコレクターやアート愛好家に支持されています。',
    },
    image: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=800&h=450&fit=crop',
  },
  {
    id: 'bergman-gallery',
    name: 'Bergman Gallery',
    category: 'dealer',
    suburb: 'Karangahape Road',
    address: '3/582 Karangahape Road, Grey Lynn, Auckland',
    phone: '09 948 0091',
    email: '', // TODO: verify
    website: 'https://www.bergmangallery.co.nz',
    hours: {
      en: 'Tue–Sat 10am–5pm',
      ja: '火〜土 10:00〜17:00',
    },
    tagline: {
      en: 'Contemporary Pacific and NZ art',
      ja: '太平洋とNZの現代アート',
    },
    description: {
      en: 'Bergman Gallery specialises in contemporary Pacific and New Zealand art, with a particular strength in Pasifika artists and those exploring Pacific identity and diaspora. It plays an important role in elevating Pacific contemporary art within the Auckland and international art world.',
      ja: 'バーグマン・ギャラリーは太平洋とニュージーランドの現代アートを専門とし、特にパシフィカのアーティストや太平洋のアイデンティティを探求する作家に強みがあります。太平洋の現代アートの地位向上に重要な役割を果たしています。',
    },
    image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&h=450&fit=crop',
  },
  {
    id: 'artis-gallery',
    name: 'ARTIS Gallery',
    category: 'dealer',
    suburb: 'Parnell',
    address: '280 Parnell Road, Parnell, Auckland',
    phone: '09 303 1090',
    email: '', // TODO: verify
    website: 'https://www.artisgallery.co.nz',
    hours: {
      en: 'Tue–Fri 10am–5pm, Sat 10am–4pm',
      ja: '火〜金 10:00〜17:00、土 10:00〜16:00',
    },
    tagline: {
      en: 'Established NZ painters and sculptors',
      ja: 'NZを代表する画家と彫刻家',
    },
    description: {
      en: 'ARTIS Gallery on Parnell Road represents established New Zealand painters and sculptors. With a strong focus on accomplished, career artists, it offers collectors access to significant works by some of the country\'s most respected names in a welcoming Parnell setting.',
      ja: 'パーネル・ロードのARTISギャラリーは、確立されたニュージーランドの画家と彫刻家を代理しています。キャリアのあるアーティストに焦点を当て、パーネルの温かみある空間でニュージーランドを代表する作家の重要な作品を提供しています。',
    },
    image: 'https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=800&h=450&fit=crop',
  },
  {
    id: 'fhe-galleries',
    name: 'FHE Galleries',
    category: 'dealer',
    suburb: 'Ponsonby',
    address: '70 Ponsonby Road, Ponsonby, Auckland',
    phone: '', // TODO: verify
    email: '', // TODO: verify
    website: 'https://www.fhegalleries.com',
    hours: {
      en: 'Mon–Fri 9am–5:30pm, Sat 10am–4pm',
      ja: '月〜金 9:00〜17:30、土 10:00〜16:00',
    },
    tagline: {
      en: 'Modern and contemporary NZ art, including secondary market',
      ja: 'NZの近代・現代アート、セカンダリーマーケット対応',
    },
    description: {
      en: 'FHE Galleries on Ponsonby Road deals in modern and contemporary New Zealand art, including both primary (new works) and secondary market (resale of significant pieces). A good option for collectors seeking established NZ artists and historically important works in a relaxed Ponsonby setting.',
      ja: 'ポンソンビー・ロードのFHEギャラリーズは、ニュージーランドの近代・現代アートのプライマリーとセカンダリーマーケットの両方を取り扱っています。確立されたNZアーティストや歴史的に重要な作品を求めるコレクターにおすすめです。',
    },
    image: 'https://images.unsplash.com/photo-1551913902-c92207136625?w=800&h=450&fit=crop',
  },
  {
    id: 'foenander-galleries',
    name: 'Föenander Galleries',
    category: 'dealer',
    suburb: 'Mount Eden',
    address: '455 Mount Eden Road, Mount Eden, Auckland',
    phone: '09 623 1464',
    email: '', // TODO: verify
    website: '', // TODO: verify
    hours: {
      en: 'By appointment', // TODO: verify
      ja: '予約制', // TODO: verify
    },
    tagline: {
      en: 'Curated contemporary NZ art in Mount Eden',
      ja: 'マウント・エデンで厳選されたNZ現代アート',
    },
    description: {
      en: 'Föenander Galleries is a dealer gallery on Mount Eden Road offering a curated selection of contemporary New Zealand art. Located away from the main gallery precincts, it provides an intimate viewing experience.',
      ja: 'フェナンダー・ギャラリーは、マウント・エデン・ロードにあるディーラーギャラリーで、厳選されたニュージーランド現代アートを提供しています。主要なギャラリー地区から離れた場所にあり、親密な鑑賞体験ができます。',
    },
    image: 'https://images.unsplash.com/photo-1565876427310-0695a4ff03b7?w=800&h=450&fit=crop',
  },
  {
    id: 'art-object',
    name: 'Art+Object',
    category: 'auction',
    suburb: 'Newton',
    address: '3 Abbey Street, Newton, Auckland',
    phone: '', // TODO: verify
    email: '', // TODO: verify
    website: 'https://www.artandobject.co.nz',
    hours: {
      en: 'Mon–Fri 9am–5pm (viewing days before auctions)',
      ja: '月〜金 9:00〜17:00（オークション前に内覧日あり）',
    },
    tagline: {
      en: "Aotearoa's leading auction house for modern & contemporary art",
      ja: 'アオテアロアを代表する近現代アートのオークションハウス',
    },
    description: {
      en: "Art+Object is Aotearoa New Zealand's leading auction house specialising in modern and contemporary art, applied art, and rare books. Their Important Paintings & Contemporary Art auctions are major calendar events in the NZ art market, attracting serious collectors from around the country and internationally.",
      ja: 'アート+オブジェクトは、近現代アート、応用美術、希少書籍を専門とするアオテアロア・ニュージーランドを代表するオークションハウスです。重要絵画・現代アートのオークションはNZアート市場の主要イベントで、国内外のコレクターが集まります。',
    },
    image: 'https://tse1.mm.bing.net/th/id/OIP.q4awQyj-xH_4LVaFaEo6lgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    auctionSchedule: {
      en: 'Important Paintings & Contemporary Art auctions multiple times per year (typically March, June, August, November). New Collectors Art auctions scheduled between major sales.',
      ja: '重要絵画・現代アートオークション：年に複数回開催（通常3月、6月、8月、11月）。ニューコレクターズ・アートオークション：大型セールの間に開催。',
    },
  },
  {
    id: 'international-art-centre',
    name: 'International Art Centre',
    category: 'auction',
    suburb: 'Parnell',
    address: '272 Parnell Road, Parnell, Auckland',
    phone: '', // TODO: verify
    email: '', // TODO: verify
    website: 'https://www.internationalartcentre.co.nz',
    hours: {
      en: 'Mon–Fri 9am–5pm (viewing days before auctions)',
      ja: '月〜金 9:00〜17:00（オークション前に内覧日あり）',
    },
    tagline: {
      en: "NZ's most experienced fine art auction house",
      ja: 'NZで最も経験豊富なファインアートオークションハウス',
    },
    description: {
      en: "The International Art Centre is New Zealand's most experienced fine art auction house, conducting Important & Rare Art auctions three times per year alongside regular Collectable Art and Art at Home sales. Their annual Women in Art auction in May is a highlight of the Auckland art calendar.",
      ja: 'インターナショナル・アート・センターは、NZで最も経験豊富なファインアートオークションハウスです。年3回の重要・希少アートオークションに加え、定期的なコレクタブルアートとアート・アット・ホームのセールを実施。毎年5月の「Women in Art」オークションはオークランドのアートカレンダーのハイライトです。',
    },
    image: 'https://artnow-latch.imgix.net/Galleries/IAC-Imp-Rare-Licensed-Low-Res-17-of-18.jpg?auto=compress%2Cformat&dm=1742857148&fit=crop&ixlib=php-3.1.0&step=100&width=1000',
    auctionSchedule: {
      en: 'Important & Rare Art auctions three times per year. Annual "Women in Art" auction in May. Regular Collectable Art and Art at Home auctions throughout the year.',
      ja: '重要・希少アートオークション：年3回。毎年5月「Women in Art」オークション。コレクタブルアート・アット・ホームオークション：年間通じて定期開催。',
    },
  },
  {
    id: 'webbs',
    name: 'Webbs',
    category: 'auction',
    suburb: 'Newmarket',
    address: '18 Manukau Road, Newmarket, Auckland',
    phone: '', // TODO: verify
    email: '', // TODO: verify
    website: 'https://www.webbs.co.nz',
    hours: {
      en: 'Mon–Fri 9am–5pm (viewing days before auctions)',
      ja: '月〜金 9:00〜17:00（オークション前に内覧日あり）',
    },
    tagline: {
      en: 'Specialist auctioneers — fine art, design, jewellery, wine',
      ja: 'ファインアート、デザイン、ジュエリー、ワインの専門オークション',
    },
    description: {
      en: 'Webbs is a specialist auction house dealing in fine art, design objects, jewellery, wine, and collectables. Their live evening auctions are social events in themselves, attracting Auckland\'s collecting community. The breadth of categories makes them a one-stop destination for discerning collectors.',
      ja: 'ウェブズはファインアート、デザインオブジェ、ジュエリー、ワイン、コレクターズアイテムを扱う専門オークションハウスです。ライブイブニングオークションはオークランドのコレクターが集まる社交イベントで、幅広いカテゴリーが魅力です。',
    },
    image: 'https://tse4.mm.bing.net/th/id/OIP.XSzxmXvMkp3r6yWGmIPvbgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    auctionSchedule: {
      en: 'Live evening auctions throughout the year. Specialist sales for fine art, design, jewellery, and wine scheduled regularly.',
      ja: 'ライブイブニングオークション：年間通じて開催。ファインアート、デザイン、ジュエリー、ワインの専門セールを定期的に実施。',
    },
  },
  {
    id: 'cordys',
    name: "Cordy's Auctions",
    category: 'auction',
    suburb: 'Grey Lynn',
    address: '18 Putiki Street, Grey Lynn, Auckland', // TODO: verify
    phone: '', // TODO: verify
    email: '', // TODO: verify
    website: 'https://www.cordys.co.nz',
    hours: {
      en: 'Mon–Fri 9am–5pm',
      ja: '月〜金 9:00〜17:00',
    },
    tagline: {
      en: 'Fine art & antique auctioneers with weekly online sales',
      ja: 'ファインアート＆アンティークのオークションハウス、週次オンラインセール',
    },
    description: {
      en: "Cordy's is a fine art and antique auctioneer in Grey Lynn conducting Jewellery, Decorative & Fine Arts auctions roughly monthly (Tuesdays) and online-only Estate Collectable auctions weekly (Thursday–Monday). Their accessible approach makes them a good entry point for new collectors.",
      ja: "コーディーズはグレイ・リンのファインアート＆アンティークオークションハウスです。ジュエリー・装飾・ファインアートのオークションを月約1回（火曜日）、オンラインのみのエステートコレクタブルオークションを毎週（木〜月）開催。新しいコレクターにも親しみやすいアプローチが特徴です。",
    },
    image: 'https://www.cordys.co.nz/img/default-banner3.jpg',
    auctionSchedule: {
      en: 'Jewellery, Decorative & Fine Arts auctions roughly monthly (Tuesdays). Online-only Estate Collectable auctions weekly (Thursday–Monday).',
      ja: 'ジュエリー・装飾・ファインアートオークション：月約1回（火曜日）。オンラインエステートコレクタブルオークション：毎週（木〜月）。',
    },
  },
  {
    id: 'dunbar-sloane',
    name: 'Dunbar Sloane',
    category: 'auction',
    suburb: 'Auckland', // TODO: verify exact Auckland branch address
    address: 'Auckland', // TODO: verify exact address
    phone: '', // TODO: verify
    email: '', // TODO: verify
    website: 'https://www.dunbarsloane.co.nz',
    hours: {
      en: 'Mon–Fri 9am–5pm',
      ja: '月〜金 9:00〜17:00',
    },
    tagline: {
      en: 'Art, antiques, artefacts, and collectables',
      ja: 'アート、アンティーク、工芸品、コレクターズアイテム',
    },
    description: {
      en: 'Dunbar Sloane is a well-established auction house dealing in art, antiques, artefacts, toys & dolls, and wine. With a strong national presence, their Auckland branch offers access to a wide range of collectables and fine art for both seasoned and beginning collectors.',
      ja: 'ダンバー・スローンは、アート、アンティーク、工芸品、おもちゃ、ワインを取り扱う老舗オークションハウスです。全国的な存在感があり、オークランド支店では幅広いコレクターズアイテムとファインアートを提供しています。',
    },
    image: 'https://cdn.prod.website-files.com/643e15e93d872d7024aa502c/6479026c9734a2cdcb5c1a18_nightshot%20copy.jpg',
    auctionSchedule: {
      en: 'Regular auctions for art, antiques, and collectables. Check website for current Auckland schedule.',
      ja: 'アート、アンティーク、コレクターズアイテムの定期オークション。オークランドの最新スケジュールはウェブサイトをご確認ください。',
    },
  },
];
