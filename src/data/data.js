const colorsData = [
    {
        id: 1,
        shades: ["red", "darkred", "firebrick", "crimson", "indianred", "lightcoral"]
    },
    {
        id: 2,
        shades: ["blue", "darkblue", "mediumblue", "royalblue", "dodgerblue", "skyblue"]
    },
    {
        id: 3,
        shades: ["green", "darkgreen", "forestgreen", "limegreen", "seagreen", "mediumseagreen"]
    },
    {
        id: 4,
        shades: ["yellow", "gold", "khaki", "lemonchiffon", "lightyellow", "palegoldenrod"]
    },
    {
        id: 5,
        shades: ["purple", "indigo", "darkviolet", "blueviolet", "mediumpurple", "plum"]
    },
    {
        id: 6,
        shades: ["orange", "darkorange", "coral", "tomato", "orangered", "lightsalmon"]
    }
];


function getRandomColorData() {
    const shuffledColors = shuffle([...colorsData]);
    return shuffledColors[Math.floor(Math.random() * shuffledColors.length)];
}




export default colorsData;