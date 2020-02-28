NeedCode = () => {
 const Question =  document.getElementById('CodeSelect');
 const CodeResponse = document.getElementById('UPCWrap');
 const SongISRC = document.getElementById('ISRCWrap');
 Question.value === 'false' 
 ? 
 (CodeResponse.classList.remove("esconde"), SongISRC.classList.remove("esconde")) 
 : 
 (CodeResponse.classList = ("esconde"), SongISRC.classList = ("esconde"))
}

GenerateUPC = () => {
  const UPCdigits = Math.floor(Math.random()*90000) + 1000;
  return `978898${UPCdigits}`
}

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
  <h3 class="ui orange header">${ArtistName.value}</h3>
  `;
  PreviewLabelDisplay.innerHTML = `© ${Year} ${LabelName.value}`;
  CustomID();
  ClearAlbumInputs();
}

proccessCover = () => {
  var AlbumCoverUpload = document.getElementById("AlbumCoverUpload"),
    preview = document.getElementById("preview");
    previewModalCover = document.getElementById("previewModalCover");
    
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
  // document.getElementById("preview").style.display='none';
  // document.getElementById("previewModalCover").style.display='none';
}
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
  document.getElementById("UPCResponse").classList = ""
  document.getElementById("UPCResponse").innerHTML = ""
  document.getElementById('AddAlbumValidate').classList.remove('disabled');;
}

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

AddSong = () => {
 const SongName = document.getElementById('SongName');
 const SongISRC = document.getElementById('SongISRC');
 const SongWriter = document.getElementById('SongWriter');
 const newSong = ({
   Name: SongName.value, 
   ISRC: SongISRC.value < 1 ? GenerateISRC() : SongISRC.value, 
   Writer: SongWriter.value.length < 1 ? 'No Writter Added' : SongWriter.value,
   id:getUniqId(),
  });

  Songs.push(newSong);
  console.log(Songs)
  GetSongs();
  ClearFields();
}

GetSongs = () => {
  const SongList = document.getElementById("SongList");
  const SongListModal = document.getElementById("SongListModal");
  var i = 1;

  SongList.innerHTML = Songs < 1 ?  'Add Some Songs Below' : '<ol>' + Songs.map(function (Songs) {
    return `<li> 
    <h1> ${Songs.Name} </h1> 
    <h2> ISRC:  ${Songs.ISRC} </h2> 
    <h3> Writer:  ${Songs.Writer} </h2> 
    <button onclick="EditSong()" class="ui button inverted yellow">Edit Song</button>
    <button onclick="DeleteSong()" class="ui button inverted red">Delete Song</button>
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
    <tr id='PlayHover'> 
    <td> ${i++}.</td>
    <td> ${Songs.Name} </td>
    <td> ${GenerateTimeStamp()}</td> 
    <td> <i class="disabled play circle icon"> </td> 
    <td> <button style='float:right' onclick="" class="ui button orange">$1.29</button> </td> 
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

RandomSongs = () => {
  Songs.sort(() => Math.random() - 0.5);
   GetSongs();
}

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

// EditSong = (id) => {
//   const updatedSong = {
//   Name: document.getElementById('SongName').value = '',
//   ISRC: document.getElementById('SongISRC').value = '',
//   Writer: document.getElementById('SongWriter').value = '',
//   }
//   const id = updatedSong.id
//   const index = Songs.findIndex(song => song.id === id)
//   Songs.splice(index, 1, updatedSong)
//   console.log(Songs)
//  }

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

$('#previewModal').click(function() {
  $('.ui.modal').modal('show');
})

// VALIDATIONS

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
}

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
}