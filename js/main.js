GenerateUPC = () => {
  return UPCdigits = Math.floor(Math.random()*90000) + 1000000000;
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

  AlbumDetails.innerHTML = `${AlbumName.value} - ${ArtistName.value}`;
  LabelDisplay.innerHTML = `© 2020 ${LabelName.value}`;
  ReleaseDateDisplay.innerHTML = `Release Date: ${ReleaseDate.value}`;
  AlbumUPCDisplay.innerHTML = `UPC: ${AlbumUPC.value}`;
  CustomID();
  ClearAlbumInputs();
}

CustomID = () => {
  const CustomIDDisplay = document.getElementById('CustomIDDisplay');
  const LabelName = document.getElementById('LabelName');
  const AlbumUPC = document.getElementById('AlbumUPC');
  CustomIDDisplay.innerHTML = `CustomID: ${LabelName.value}_${AlbumUPC.value}`
};

ClearAlbumInputs = () => {
  const AlbumName = document.getElementById('AlbumName').value = '';
  const ArtistName = document.getElementById('ArtistName').value = '';
  const ReleaseDate = document.getElementById('ReleaseDate').value = '';
  const AlbumUPC = document.getElementById('AlbumUPC').value = '';
  const LabelName = document.getElementById('LabelName').value = '';
}
ResetAlbum = () => {
  const AlbumName = document.getElementById('AlbumName').value = '';
  const AlbumDetails = document.getElementById('AlbumDetails').innerHTML = '';
  const ArtistName = document.getElementById('ArtistName').value = '';
  const ReleaseDate = document.getElementById('ReleaseDate').value = '';
  const AlbumUPC = document.getElementById('AlbumUPC').value = '';
  const LabelName = document.getElementById('LabelName').value = '';
  const ReleaseDateDisplay = document.getElementById('ReleaseDateDisplay').innerHTML = ``;
  const AlbumUPCDisplay = document.getElementById('UPCDisplay').innerHTML = ``;
  const LabelDisplay = document.getElementById('LabelDisplay').innerHTML = ``;
  const CustomIDDisplay = document.getElementById('CustomIDDisplay').innerHTML = ``;
  LabelDisplay.innerHTML = ``;
  ReleaseDateDisplay.innerHTML = ``;
  AlbumUPCDisplay.innerHTML = ``;
}

GenerateISRC = () => {
  const digits = Math.floor(Math.random()*90000) + 1000000;
  return `RBDEV${digits + 1}`
}

const Songs = [
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
  },
];

AddSong = () => {
 const SongName = document.getElementById('SongName');
 const SongISRC = document.getElementById('SongISRC');
 const SongWriter = document.getElementById('SongWriter');
 const newSong = ({
   Name: SongName.value, 
   ISRC: SongISRC.value, 
   Writer: SongWriter.value
  });

  Songs.push(newSong);
  console.log(Songs)
  GetSongs();
  ClearFields();
}

GetSongs = () => {
  const SongList = document.getElementById("SongList");
  SongList.innerHTML = '<ol>' + Songs.map(function (Songs) {
    return '<li>' + 
    '<h1>'+Songs.Name +'</h1>' +
    '<h2> ISRC: '+ Songs.ISRC +'</h2>' +
    '<h3> Writer: '+ Songs.Writer +'</h2>' +
    '<button onclick="DeleteSong()" class="boton remove" >Delete Song</button>'
    '</li>';
  }).join('') + '</ol>';
}


RandomSongs = () => {
  Songs.shuffle();
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