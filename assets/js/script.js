const reproducirVideo = function () {
  function insertarVideo(url, id) {
    let iframe = document.getElementById(id);
    iframe.setAttribute("src", url);
  }
  return function (url, id) {
    insertarVideo(url, id);
  };
};

class Multimedia {
  constructor(url) {
    this.url = url;
  }
  getUrl() {
    return this.url;
  }
  setInicio() {
    return "Este método es para realizar un cambio en la URL del video";
  }
}

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this.id = id;
    this.playVideo = reproducirVideo();
  }
  playMultimedia() {
    this.playVideo(this.getUrl(), this.id);
  }
  setInicio(tiempo) {
    const url = `${this.getUrl()}&start=${tiempo}`;
    this.playVideo(url, this.id);
  }
}

const playMusic = new Reproductor(
  `https://www.youtube.com/embed/jfKfPfyJRdk?si=wg-oLsRw9LE5Y2lk`,
  `musica`
);

const playMovie = new Reproductor(
  `https://www.youtube.com/embed/0vCaRgK_I3I?si=ETeDOiHnAkGimmD0`,
  `peliculas`
);

const playSeries = new Reproductor(
  `https://www.youtube.com/embed/5dkXNhJ-F-c?si=kKNZNwYu535rOAA4`,
  `series`
);

playMusic.playMultimedia();
playMovie.playMultimedia();
playSeries.playMultimedia();

playMovie.setInicio(10);
playSeries.setInicio(10);
