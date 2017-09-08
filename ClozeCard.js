var ClozeCard = function(fullText, cloze) {
    this.fullText = fullText;
    this.cloze = cloze;
    this.partial = fullText.replace(cloze, "_______");
      
  }



module.exports = ClozeCard;