import { describe, it } from "mocha";
import { removeWords } from "./removeWord.js";
import { expect } from "chai";

describe("this function should remove every words we want to remove", ()=>{
    it("should remove the word(s) if it's in the sentence", ()=>{
        expect(removeWords("Hello, this is a test", ["this","a"])).to.equal("Hello, is test");
        expect(removeWords("this is a damn fantastic day", ["damn"])).to.equal("this is a fantastic day");
        expect(removeWords(" You should get the fucking out of here", ["the","fucking"])).to.equal("You should get out of here");
    })

    it("should not remove if the word it is not exactly write in the exact way",()=>{
        expect(removeWords(" Hello, this is a test", ["This","a"])).to.equal("Hello,this is test");
        expect(removeWords("Some people say bad words, you have to take them off",["some", "Take"])).to.equal("Some people say bad words, you have to take them off");
        expect(removeWords(" Hello Java ", ["java"])).to.equal("Hello Java");
    })
})