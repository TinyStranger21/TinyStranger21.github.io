const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
// const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']
const images = ['myPic1.jpg', 'myPic2.JPG', 'myPic3.JPG', 'myPic4.jpg', 'myPic5.JPG']

/* Declaring the alternative text for each image file */
// const alts = ['Closeup of a human eye', 'picture of rock', 'picture of pansees', 'Eqyptian heroglyphs', 'Picture of butterfly']
const alts = ['Jar of Lights', 'Close up of Kais Face', 'Pic of Kai in Front of Lights', 'Orange Kai in Store', 'Pondering Life at Lake Kai']

/* Looping through images */
for (let i=0; i<5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/`+images[i]);
    newImage.setAttribute('alt', alts[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', eve => {
        displayedImage.src = eve.target.src;
        displayedImage.alt = eve.target.alt;
    })
}

/* Wiring up the Darken/Lighten button */
// const btnClass = btn.getAttribute('class')
btn.addEventListener('click', d => {
    const btnClass = btn.getAttribute('class')
    if (btnClass === 'dark') {
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
      } else {
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
      }
});