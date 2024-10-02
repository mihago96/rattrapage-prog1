import { it } from "mocha";
import { getMostPopularPlaces } from "./mostPopPlace.js";
import { expect } from "chai";

describe("should give the must popular place", ()=>{
    it("should return the two most popular places", ()=>{
        expect(getMostPopularPlaces("Analamahitsy","Analamahitsy","Itaosy","Behoririka","Itaosy","Itaosy")).to.equal("Itaosy Analamahitsy");
        expect(getMostPopularPlaces("Analamahitsy","Andohalo","Anosy","Anosy","Itaosy","Itaosy")).to.equal("Anosy Itaosy");
        expect(getMostPopularPlaces("Analakely","Analakely","67ha","Ampandrana","Ampandrana","Analakely")).to.equal("Analakely Ampandrana");
        expect(getMostPopularPlaces("Ilafy","Analamahintsy","Analamahintsy","Analamahintsy","Ilafy","Itaosy")).to.equal("Analamahintsy Ilafy");
        expect(getMostPopularPlaces("Ambanidihy","Mandroseza","Atsimbazaza","Atsimbazaza","Ambanidihy","Ambanidihy")).to.equal("Ambanidihy Antsimbazaza");
    })
})