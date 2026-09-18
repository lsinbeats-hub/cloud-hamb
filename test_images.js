const fs = require('fs');
const files = [
  'public/images/hero-burger.png',
  'public/images/experience-artisan.jpg',
  'public/images/burgers/cloud-classic.jpg',
  'public/images/burgers/cloud-bacon.jpg',
  'public/images/burgers/cloud-bbq.jpg',
  'public/images/burgers/cloud-double.jpg',
  'public/images/burgers/cloud-crispy.jpg',
  'public/images/gallery/gallery-1.jpg',
  'public/images/gallery/gallery-2.jpg',
  'public/images/gallery/gallery-3.jpg',
  'public/images/gallery/gallery-4.jpg',
  'public/images/gallery/gallery-5.jpg',
  'public/images/gallery/gallery-6.jpg',
  'public/images/instagram/insta-1.jpg',
  'public/images/instagram/insta-2.jpg',
  'public/images/instagram/insta-3.jpg',
  'public/images/instagram/insta-4.jpg'
];
files.forEach(f => {
  const stat = fs.statSync(f);
  console.log(f, stat.size, 'bytes');
});
