export function getMostPopularPlaces(places){
    let x = [];
   for(let i = 0; i<places.length;i++){
    if(places[i]==places[i+1]){
        x.push(places[i])
    }
    
   }

    return x.join(' ').toString();
}

console.log(getMostPopularPlaces(["Analamahitsy","Analamahitsy","Itaosy","Behoririka","Itaosy","Itaosy"]));
