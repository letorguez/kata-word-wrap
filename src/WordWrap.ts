export class WordWrap {
  public jumpLine(text: string, maxLength: number): string {
    if(text == null){
      return "";
    }
    if(text.length <= maxLength) {
      return text;
    }

    if(text[maxLength] !== " ") {
      const textMaxLength = text.substring(0, maxLength).lastIndexOf(" ");
      if(textMaxLength !== -1) {
        return text.substring(0, textMaxLength) + "\n" + this.jumpLine(text.substring(textMaxLength + 1), maxLength);
      }
    }
    return text.substring(0, maxLength) + "\n" + this.jumpLine(text.substring(maxLength), maxLength);
  }
}
