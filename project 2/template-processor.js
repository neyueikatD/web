function TemplateProcessor(template) {
    this.template = template;
}
 TemplateProcessor.prototype.fillIn = function (dictionary) {
    let filledTemplate = this.template.replace(/\{\{(\w+)\}\}/g, (match, property) => {
      return dictionary[property] || ''; 
    });
    filledTemplate = filledTemplate.replace(/\s+/g, ' ');
    return filledTemplate;
 };
  