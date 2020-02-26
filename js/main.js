NeedCode = () => {
 const Question =  document.getElementById('CodeSelect');
 const CodeResponse = document.getElementById('UPCWrap');
 const SongISRC = document.getElementById('SongISRC');
 Question.value === 'false' ? (CodeResponse.classList.remove("hidden"), SongISRC.classList.remove("hidden")) : (CodeResponse.classList = ("hidden"), SongISRC.classList = ("hidden"))
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
  AlbumDetails.innerHTML = `${AlbumName.value} - ${ArtistName.value}`;
  LabelDisplay.innerHTML = `© ${Year} ${LabelName.value}`;
  ReleaseDateDisplay.innerHTML = `Release Date: ${ReleaseDate.value}`;
  AlbumUPCDisplay.innerHTML = (AlbumUPC.value > 0) ? AlbumUPC.value : GenerateUPC();

  // Preview Modal
  const PreviewAlbumName = document.getElementById('PreviewAlbumName');
  const PreviewLabelDisplay = document.getElementById('PreviewLabelDisplay');
  PreviewAlbumName.innerHTML = `${AlbumName.value} - ${ArtistName.value}`;
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
  const UPCLabel = document.getElementById('UPCLabel');
  UPCLabel.innerHTML = `HI`;
  const CustomIDDisplay = document.getElementById('CustomIDDisplay');
  const LabelName = document.getElementById('LabelName');
  LabelRegex = LabelName.value.replace(/[\s]|[^A-Za-z0-9]/g, '');
  const UPCDisplay = document.getElementById('UPCDisplay');
  CustomIDDisplay.innerHTML = `CustomID: ${LabelRegex}_${UPCDisplay.innerHTML}`
};

GenerateStorePreview = () => {
}

ClearAlbumInputs = () => {
  document.getElementById('UPCLabel').innerHTML = '';
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
}

GenerateISRC = () => {
  const digits = Math.floor(Math.random()*90000) + 1000000;
  return `RBDEV${digits + 1}`
}

const Songs = [];

ExampleSongs = () => {
  Songs.push(
  {Name:'Bohemian Rhapsody',
  ISRC: GenerateISRC(),
  Writer:'Freddy Mercury', 
  },
  {Name:'Under Pressure',
  ISRC:GenerateISRC(),
  Writer:'Freddy Mercury', 
  },
  {Name:`Don't Stop Me Now`,
  ISRC:GenerateISRC(),
  Writer:'Freddy Mercury', 
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
   Writer: SongWriter.value.length < 1 ? 'No Writter Added' : SongWriter.value
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

  SongList.innerHTML = '<ol>' + Songs.map(function (Songs) {
    return `<li> 
    <h1> ${Songs.Name} </h1> 
    <h2> ISRC:  ${Songs.ISRC} </h2> 
    <h3> Writer:  ${Songs.Writer} </h2> 
    <!-- <button onclick="EditSong()" class="boton edit">Edit Song</button> -->
    <button onclick="DeleteSong()" class="boton remove">Delete Song</button>
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
    <td> ${i++}.</td>
    <td> ${Songs.Name} </td>
    <td> ${GenerateTimeStamp()}</td> 
    <td> <i class="disabled play circle icon"> </td> 
    <td> <button style='float:right' onclick="" class="ui button orange">$1.29</button> </td> 
    </tr>`;
  }).join('') + '</table>';
}

GenerateTimeStamp = () => {
  var Minutos = [2,3,4]
  var Segundo = Math.floor(Math.random() * 31) + 20
  var FirstDigit =  Minutos[Math.floor(Math.random()*Minutos.length)];
  return `${FirstDigit}:${Segundo}`
}

RandomSongs = () => {
  Songs.shuffle();
}

EditSong = (id) => {
  const SongName = document.getElementById('SongName');
  const SongISRC = document.getElementById('SongISRC');
  const SongWriter = document.getElementById('SongWriter');
  
  Songs.map(function (s){
    if (s.id === id) {
      //return id

    SongName.value = s.Name;
    SongISRC.value = s.ISRC;
    SongWriter.value = s.Writer;
    }
    else{
      return s
      // alert('not')
    }
  })
  GetSongs();
}

DeleteSong = (id) => {
  Songs.splice(id, 1);
  GetSongs();
}

ClearFields = () => {
document.getElementById('SongName').value = '';
document.getElementById('SongISRC').value = '';
document.getElementById('SongWriter').value = '';
}

GetSongs();

$('#previewModal').click(function() {
  $('.ui.modal').modal('show');
})