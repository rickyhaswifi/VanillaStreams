const SelectCodeOption = document.getElementById('CodeSelect')
SelectCodeOption.addEventListener('change', 
NeedCode = () => {
 const Question =  document.getElementById('CodeSelect');
 const CodeResponse = document.getElementById('UPCWrap');
 const SongISRC = document.getElementById('ISRCWrap');
 Question.value === 'true' 
 ? 
(CodeResponse.classList = ("esconde"), SongISRC.classList = ("esconde"))
: 
 (CodeResponse.classList.remove("esconde"), SongISRC.classList.remove("esconde")) 
})

GenerateUPC = () => {
  const UPCdigits = Math.floor(Math.random()*90000) + 1000;
  return `978898${UPCdigits}`
}

// Check if Album form is filled out.
const AlbumForm = document.getElementById('LabelName');
AlbumForm.addEventListener('focus', 
albumValidate = () => {

  const albumClass = document.getElementById('AddAlbumValidate')

  if (LabelName.value < 1) {
    albumClass.classList.remove("disabled")
  }
}
)

const albumButton = document.getElementById('AddAlbumValidate')
albumButton.addEventListener('click',
AddAlbum = () => {
  const AlbumName = document.getElementById('AlbumName');
  const AlbumDetails = document.getElementById('AlbumDetails');
  const ArtistName = document.getElementById('ArtistName');
  const ReleaseDate = document.getElementById('ReleaseDate');
  const AlbumUPC = document.getElementById('AlbumUPC');
  const LabelName = document.getElementById('LabelName');
  const ReleaseDateDisplay = document.getElementById('ReleaseDateDisplay');
  const AlbumUPCDisplay = document.getElementById('UPCDisplay');
  const LabelDisplay = document.getElementById('LabelDisplay');
  const Year = parseInt(ReleaseDate.value);
  const UPCLabel = document.getElementById('UPCLabel');
  const StreetDate = document.getElementById('StreetDate');

  StreetDate.innerHTML = `Streaming: ${ReleaseDate.value}`;
  AlbumDetails.innerHTML = AlbumName.length < 1 ? 'Add Album Details' : `${AlbumName.value} - ${ArtistName.value}`;
  LabelDisplay.innerHTML = `© ${Year} ${LabelName.value}`;
  ReleaseDateDisplay.innerHTML = `Release Date: ${ReleaseDate.value}`;
  AlbumUPCDisplay.innerHTML = (AlbumUPC.value > 0) ? AlbumUPC.value : GenerateUPC();
  UPCLabel.innerHTML = AlbumUPC.value === 0  ? '' :`UPC: `;

  // Preview Modal
  const PreviewAlbumName = document.getElementById('PreviewAlbumName');
  const PreviewLabelDisplay = document.getElementById('PreviewLabelDisplay');
  PreviewAlbumName.innerHTML = `
  <h1 class="ui header">${AlbumName.value}</h1>
  <h3 class="ui orange header mbMinus">${ArtistName.value}</h3>
  `;
  PreviewLabelDisplay.innerHTML = `© ${Year} ${LabelName.value}`;

  // Promote Modal
  const promoteAlbumText = document.getElementById('promoteAlbumText')
  promoteAlbumText.innerHTML=`
  <h1 class='sombra'>${AlbumName.value}</h1>
  <h2 class="ui yellow header mbMinus sombra">${ArtistName.value}</h2>
  `

  CustomID();
  ClearAlbumInputs();
  albumButton.classList = 'ui inverted green animated button disabled';
})

proccessCover = () => {
  var AlbumCoverUpload = document.getElementById("AlbumCoverUpload"),
    preview = document.getElementById("preview");
    previewModalCover = document.getElementById("previewModalCover");
    promoteImageCover = document.getElementById("promoteImageCover");
    
    AlbumCoverUpload.addEventListener("change", function() {
  changeImage(this);
  });
  
  changeImage = (input) => {
  var reader;
  
  if (input.files && input.files[0]) {
    reader = new FileReader();
  
    reader.onload = function(e) {
      preview.setAttribute('src', e.target.result);
      previewModalCover.setAttribute('src', e.target.result);
      promoteImageCover.setAttribute('src', e.target.result);
    }
  
    reader.readAsDataURL(input.files[0]);
  }
  }
}
proccessCover();

CustomID = () => {
  const CustomIDDisplay = document.getElementById('CustomIDDisplay');
  const LabelName = document.getElementById('LabelName');
  LabelRegex = LabelName.value.replace(/[\s]|[^A-Za-z0-9]/g, '');
  const UPCDisplay = document.getElementById('UPCDisplay');
  CustomIDDisplay.innerHTML = `CustomID: ${LabelRegex}_${UPCDisplay.innerHTML}`
};

GenerateStorePreview = () => {
}

ClearAlbumInputs = () => {
  document.getElementById('AlbumName').value = '';
  document.getElementById('ArtistName').value = '';
  document.getElementById('ReleaseDate').value = '';
  document.getElementById('AlbumUPC').value = '';
  document.getElementById('LabelName').value = '';
}

const resetAlbumButton = document.getElementById('ResetAlbum')
resetAlbumButton.addEventListener('click', 
ResetAlbum = () => {
  document.getElementById('AlbumName').value = '';
  document.getElementById('AlbumDetails').innerHTML = '';
  document.getElementById('ArtistName').value = '';
  document.getElementById('ReleaseDate').value = '';
  document.getElementById('AlbumUPC').value = '';
  document.getElementById('LabelName').value = '';
  document.getElementById('ReleaseDateDisplay').innerHTML = ``;
  document.getElementById('UPCDisplay').innerHTML = ``;
  document.getElementById('LabelDisplay').innerHTML = ``;
  document.getElementById('CustomIDDisplay').innerHTML = ``;
  document.getElementById("UPCResponse").classList = "";
  document.getElementById("UPCResponse").innerHTML = "";
  document.getElementById('AddAlbumValidate').classList.remove('disabled');
  document.getElementById('PreviewAlbumName');
})

GenerateISRC = () => {
  const digits = Math.floor(Math.random()*90000) + 1000000;
  return `RBDEV${digits + 1}`
}

const Songs = [];

getUniqId = () => {
  //NOTE We are just using this as a helper function for id's since we aren't using a db yet
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
 }

const ExampleSongsButton = document.getElementById('ExampleSongs')
ExampleSongsButton.addEventListener('click', 
 ExampleSongs = () => {
   Songs.push(
   {Name:'Bohemian Rhapsody',
   ISRC: GenerateISRC(),
   Writer:'Freddy Mercury', 
   id:getUniqId(),
   },
   {Name:'Under Pressure',
   ISRC:GenerateISRC(),
   Writer:'Freddy Mercury', 
   id:getUniqId(),
   },
   {Name:`Don't Stop Me Now`,
   ISRC:GenerateISRC(),
   Writer:'Freddy Mercury', 
   id:getUniqId(),
   })
   GetSongs();
 }
)

// Check if Album form is filled out.
const SongFormInput = document.getElementById('SongName');
SongFormInput.addEventListener('focus', 
SongValidate = () => {

  const SongNameCheck = document.getElementById('SongSubmit')

  if (SongFormInput.value < 1) {
    SongNameCheck.classList.remove("disabled")
  }
}
)

const SongSubmitButton = document.getElementById('SongSubmit')
SongSubmitButton.addEventListener('click', 
AddSong = () => {

 const SongWrap = document.getElementById('SongForm');

 const SongName = document.getElementById('SongName');
 const SongISRC = document.getElementById('SongISRC');
 const SongWriter = document.getElementById('SongWriter');

//  FORM FOR EACH SONG
// var SongFormCard = document.createElement("section");
// SongFormCard.innerHTML = `
// <section class="SongCard">
//   <input id='SongName' placeholder="Song Name"/>
//   <section id="ISRCWrap">
//     <input id='SongISRC' placeholder="Song ISRC"/>
//     <div id='ISRCResponse'>
//       <p id="ISRCvalid" class=""></p>
//     </div> 
//   </section>
//   <input id='SongWriter' placeholder="Song Writer"/>
// </section>
// `
//  x.setAttribute("id", "SongISRC");
//  x.setAttribute("placeholder", "Song Name");
//  x.classList = ('ui form')
// SongWrap.appendChild(SongFormCard);


  const SongInput = SongName.value;
  CapCase = SongInput.replace(/\b\b\w/g, c => c.toUpperCase());
  let LowCase = CapCase.replace(/\B\B\w/g, l => l.toLowerCase());
  //document.getElementById("userInputCase").value = LowCase;


 const newSong = ({
   Name: LowCase, 
   ISRC: SongISRC.value < 1 ? GenerateISRC() : SongISRC.value, 
   Writer: SongWriter.value.length < 1 ? 'No Writter Added' : SongWriter.value,
   id:getUniqId(),
  });
  Songs.push(newSong);
  GetSongs();
  ClearFields();
  SongSubmitButton.classList = 'ui inverted green animated button disabled'
})

// const SongForm = document.getElementById('SongForm')
// SongForm.addEventListener('submit', AddSong())

GetSongs = () => {
  const SongList = document.getElementById("SongList");
  const SongListModal = document.getElementById("SongListModal");
  const LabelCopyTableContainer = document.getElementById('LabelCopyTableContainer');
  var i = 1;

  SongList.innerHTML = Songs < 1 ?  `<h1 class='pushLeft'>Add songs on form below</h1>` : '<ol>' + Songs.map(function (Songs) {
    return `<li> 
    <h1> ${Songs.Name} </h1> 
    <h2> ISRC:  ${Songs.ISRC} </h2> 
    <h3> Writer:  ${Songs.Writer} </h2> 
    <!-- <button onclick="EditSong(id)" class="ui button inverted yellow">Edit Song</button> -->
    <button onclick="DeleteSong()" class="ui button inverted red"><i class="trash alternate icon"></i></button>
    </li>`;
  }).join('') + '</ol>';

SongListModal.innerHTML = `<table class='ui table'>
<tr>
<th><i class="disabled hashtag icon"></i></th>
<th>Track</th>
<th><i class="disabled clock icon"></i></th>
<th>Play</th>
<th>Download</th>
</tr>
` + Songs.map(function (Songs) {
    return `
    <tr> 
    <td> <span id='PlayHover'>${i++}.</span></td>
    <td> ${Songs.Name} </td>
    <td> ${GenerateTimeStamp()}</td> 
    <td> <i class="disabled play circle icon"> </td> 
    <td> <button style='float:right' onclick="" class="ui button orange">$1.29</button> </td> 
    </tr>
    `;
  }).join('') + '</table>';

  // LABEL COPY LOGIC
let n = 1;
const cLline = document.getElementById('LabelDisplay').innerHTML;
const rDate = document.getElementById('ReleaseDateDisplay').innerHTML;
console.log(cLline)
LabelCopyTableContainer.innerHTML = `<table class='ui striped celled table LabelTable'>
<tr>
<th>#</th>
<th>Label</th>
<th>Date</th>
<th>UPC</th>
<th>Title</th>
<th>Writer</th>
<th>ISRC</th>
<th>Youtube ID</th>
<th>C Line</th>
</tr>
` + Songs.map(function (Songs) {
    return `
    <tr> 
    <td> ${n++}.</td>
    <td> ${PreviewLabelDisplay.innerHTML.substring(6)} </td>
    <td> ${rDate.substring(14)} </td>
    <td> ${UPCDisplay.innerHTML} </td>
    <td> ${Songs.Name} </td>
    <td> ${Songs.Writer} </td>
    <td> ${Songs.ISRC}</td> 
    <td> ${CustomIDDisplay.innerHTML.substring(10)}_${Songs.ISRC}</td> 
    <td> ${cLline}</td> 
    </tr>
    `;
  }).join('') + '</table>';
}

GenerateTimeStamp = () => {
  var Minutos = [2,3,4]
  var Segundo = Math.floor(Math.random() * 31) + 20
  var FirstDigit =  Minutos[Math.floor(Math.random()*Minutos.length)];
  return `${FirstDigit}:${Segundo}`
}

const RandomSongsButton = document.getElementById('RandomSongs')
RandomSongsButton.addEventListener('click', 
RandomSongs = () => {
  Songs.sort(() => Math.random() - 0.5);
   GetSongs();
}
)

// EditSong = (id) => {
//   const SongName = document.getElementById('SongName');
//   const SongISRC = document.getElementById('SongISRC');
//   const SongWriter = document.getElementById('SongWriter');
  
//   Songs.map(function (s){
//     if (s.id === id) {
//     Songs.splice(s.id, 0);
//     SongName.value = s.Name;
//     SongISRC.value = s.ISRC;
//     SongWriter.value = s.Writer;
//     }
//     else{
//       return s
//       // alert('not')
//     }
//   })
//   GetSongs();
// }

// EditSong = () => {
//   Songs.map((id) => {
//     if (Songs.id === id) {
//       document.getElementById('SongName').value = song[id].Name;
//       document.getElementById('SongISRC').value = song[id].ISRC;
//       document.getElementById('SongWriter').value = song[id].Writer;
//     } else {
//      return song
//       console.log(this.Songs[song])
//     }
//   })
// }

DeleteSong = (id) => {
  Songs.splice(id, 1);
  GetSongs();
}

ClearFields = () => {
document.getElementById('SongName').value = '';
document.getElementById('SongISRC').value = '';
document.getElementById('SongWriter').value = '';
document.getElementById("ISRCResponse").innerHTML = ""
document.getElementById("ISRCResponse").classList = ""
}

GetSongs();

// MODALS

$('#previewModal').click(function() {
  $('.uiPreview.PreviewModal').modal('show');
})

$('#LabelCopyModal').click(function() {
  $('.uiLabel.modalLabel').modal('show');
})

$('#PromoteModal').click(function() {
  $('.uiPromote.modalPromote').modal('show');
})

// VALIDATIONS

const validateUPCInput = document.getElementById('AlbumUPC')
validateUPCInput.addEventListener('change', 
ValidateUPC = () => {
  const AddAlbumValidate = document.getElementById('AddAlbumValidate');
  const UPC = document.getElementById("AlbumUPC").value;
  const UpcOutput = document.getElementById("UPCvalid");
  const Valid = UPC.length;
  const regDigitUPC = /\d{12}/
  const regDigitEAN = /\d{13}/
  const regAlpha = /\D/
  const redMadeup = /000|123|0123|45678|\b(\d\d)\1+\b/

  if (redMadeup.test(UPC) === true) {
    UpcOutput.innerHTML = `UPC may be made up`;
    document.getElementById("UPCResponse").classList = "ui inverted segment yellow"
    AddAlbumValidate.classList.add('disabled');
  } 
  else if (regDigitUPC.test(UPC) && Valid === 12 ) {
    UpcOutput.innerHTML = `UPC is Valid at ${Valid} charecters long`;
    document.getElementById("UPCResponse").classList = "ui inverted segment green"
    AddAlbumValidate.classList.remove('disabled');
  } 
  else if (regDigitEAN.test(UPC) && Valid === 13 ) {
    UpcOutput.innerHTML = `Input is an EAN with ${Valid}`;
    document.getElementById("UPCResponse").classList = "ui inverted segment blue"
    AddAlbumValidate.classList.remove('disabled');
  } 
  else if (regAlpha.test(UPC) === true) {
    UpcOutput.innerHTML = `UPC invalid contains charecters, UPC can only contain digits`;
    document.getElementById("UPCResponse").classList = "ui inverted segment red"
    AddAlbumValidate.classList.add('disabled');
  } 
  else {
    UpcOutput.innerHTML = `UPC is invalid, a valid UPC is 12 digits`;
    document.getElementById("UPCResponse").classList = "ui inverted segment red"
    AddAlbumValidate.classList.add('disabled');
  }
})


// const ValidateISRCInput = document.getElementsByClassName('SongISRCcls')
// ValidateISRCInput.addEventListener('focus', 
// ValidateISRC = () => {
//   const SongSubmit = document.getElementById('SongSubmit');
//   const ISRC = document.getElementById("SongISRC").value;
//   const ISRCOutput = document.getElementById("ISRCvalid");
//   const Valid = ISRC.length;
//   const regISRC = /[a-zA-Z]{5}\d{7}/;
//   const resInvalidISRC = /abc|ABC|123|0123|1234/;

//   if (resInvalidISRC.test(ISRC) === true) {
//     ISRCOutput.innerHTML = `ISRC may be made up`;
//     document.getElementById("ISRCResponse").classList = "ui inverted segment yellow"
//     SongSubmit.classList.add('disabled');
//   } 
//   else if (regISRC.test(ISRC) === true && Valid === 12 ) {
//     ISRCOutput.innerHTML = `ISRC is valid`;
//     document.getElementById("ISRCResponse").classList = "ui inverted segment green"
//     SongSubmit.classList.remove('disabled');
//   } 
//   else if (Valid < 12 ) {
//     ISRCOutput.innerHTML = `ISRC is invalid: Valid ISRC only 12 charecters, ${Valid} above`;
//     document.getElementById("ISRCResponse").classList = "ui inverted segment red"
//     SongSubmit.classList.add('disabled');
//   } 
//   else if (Valid > 12 ) {
//     ISRCOutput.innerHTML = `ISRC is invalid: Valid ISRC only 12 charecters, ${Valid} above`;
//     document.getElementById("ISRCResponse").classList = "ui inverted segment red"
//     SongSubmit.classList.add('disabled');
//   } 
//   else {
//     ISRCOutput.innerHTML = `ISRC is invalid`;
//     document.getElementById("ISRCResponse").classList = "ui inverted segment red"
//     SongSubmit.classList.add('disabled');
//   }
// })
const ValidateISRCInput = document.getElementById('SongISRC')
ValidateISRCInput.addEventListener('change', 
ValidateISRC = () => {
  const SongSubmit = document.getElementById('SongSubmit');
  const ISRC = document.getElementById("SongISRC").value;
  const ISRCOutput = document.getElementById("ISRCvalid");
  const Valid = ISRC.length;
  const regISRC = /[a-zA-Z]{5}\d{7}/;
  const resInvalidISRC = /abc|ABC|123|0123|1234/;

  if (resInvalidISRC.test(ISRC) === true) {
    ISRCOutput.innerHTML = `ISRC may be made up`;
    document.getElementById("ISRCResponse").classList = "ui inverted segment yellow"
    SongSubmit.classList.add('disabled');
  } 
  else if (regISRC.test(ISRC) === true && Valid === 12 ) {
    ISRCOutput.innerHTML = `ISRC is valid`;
    document.getElementById("ISRCResponse").classList = "ui inverted segment green"
    SongSubmit.classList.remove('disabled');
  } 
  else if (Valid < 12 ) {
    ISRCOutput.innerHTML = `ISRC is invalid: Valid ISRC only 12 charecters, ${Valid} above`;
    document.getElementById("ISRCResponse").classList = "ui inverted segment red"
    SongSubmit.classList.add('disabled');
  } 
  else if (Valid > 12 ) {
    ISRCOutput.innerHTML = `ISRC is invalid: Valid ISRC only 12 charecters, ${Valid} above`;
    document.getElementById("ISRCResponse").classList = "ui inverted segment red"
    SongSubmit.classList.add('disabled');
  } 
  else {
    ISRCOutput.innerHTML = `ISRC is invalid`;
    document.getElementById("ISRCResponse").classList = "ui inverted segment red"
    SongSubmit.classList.add('disabled');
  }
})