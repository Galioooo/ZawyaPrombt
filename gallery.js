// ===== Zawya Gallery =====
// لإضافة صور:
//   1. اعمل مجلد  images/gallery/  جوه zawya-v35
//   2. حط صورتك وسميها بنفس الاسم الموجود هنا
//   مثال:  images/gallery/large-01.jpg

const GALLERY = {
  large: [
    'images/gallery/large-01.jpg',
    'images/gallery/large-02.jpg',
    'images/gallery/large-03.jpg',
    'images/gallery/large-04.jpg',
    'images/gallery/large-05.jpg',
  ],
  wide: [
    'images/gallery/wide-01.jpg',
    'images/gallery/wide-02.jpg',
    'images/gallery/wide-03.jpg',
    'images/gallery/wide-04.jpg',
    'images/gallery/wide-05.jpg',
    'images/gallery/wide-06.jpg',
    'images/gallery/wide-07.jpg',
    'images/gallery/wide-08.jpg',
  ],
  small: [
    'images/gallery/small-01.jpg',
    'images/gallery/small-02.jpg',
    'images/gallery/small-03.jpg',
    'images/gallery/small-04.jpg',
    'images/gallery/small-05.jpg',
    'images/gallery/small-06.jpg',
    'images/gallery/small-07.jpg',
    'images/gallery/small-08.jpg',
    'images/gallery/small-09.jpg',
    'images/gallery/small-10.jpg',
    'images/gallery/small-11.jpg',
    'images/gallery/small-12.jpg',
    'images/gallery/small-13.jpg',
    'images/gallery/small-14.jpg',
    'images/gallery/small-15.jpg',
    'images/gallery/small-16.jpg',
    'images/gallery/small-17.jpg',
  ],
};

// للتوافق مع الكود القديم
const GALLERY_IMAGES = [...GALLERY.large, ...GALLERY.wide, ...GALLERY.small];
