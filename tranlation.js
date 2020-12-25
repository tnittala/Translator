
  AWS.config.region = 'us-west-2';
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-west-2:753eb40c-d225-4504-8195-3c884e42c33c',
  });
  function trans(){
      var params = {
  SourceLanguageCode: $( "#flang option:selected" ).val(), /* required */
  TargetLanguageCode: $( "#tlang option:selected" ).val(), /* required */
  Text: document.getElementById('lang1').value, /* required */
};
var translate = new AWS.Translate();

translate.translateText(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else {   
  console.log(data); 
  document.getElementById('lang2').value = data.TranslatedText;
  }// successful response
});
  }