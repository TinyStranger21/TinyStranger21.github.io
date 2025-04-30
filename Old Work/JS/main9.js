const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const storyText = "During their spectactular vacation, it was 94 fahrenheit outside, so :insertx: and Bob went for a swim. When they arrived to :inserty: they realized they left their :insertz: at the hotel. They were devastated, distraught, and bamboozled. At least :insertx: had brought their bag of gummy worms that weighs 300 pounds so they could be well fed throughout the day.";
const insertX = ["Tom Cruise", "Adam Sandler", "Bill Nye"];
const insertY = ["the bathtub", "WaterWorld", "The Panema Canal"];
const insertZ = ["limited edition signed copy of The Goonies on VHS", "Frigidaire 20.5 Cu. Ft. Top Freezer Refrigerator", "lifesize Jimmy Fallon cardboard cutout"];


function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

randomize.addEventListener('click', result);

function result() {
    var newStory = storyText;
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    var newStory = newStory.replaceAll(':insertx:', xItem);
    var newStory = newStory.replaceAll(':inserty:', yItem);
    var newStory = newStory.replaceAll(':insertz:', zItem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name) /* Stopped here 1!!!!!!!!!!!!!!!!!!!!!!! */

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + ' stone';
    const temperature =  Math.round((94 - 32)/1.8) + ' centigrade';
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}