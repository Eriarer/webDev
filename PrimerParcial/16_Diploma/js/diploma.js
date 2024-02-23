let studenName = localStorage.studentName;
let career = localStorage.career;

let init = () => {
  let canvas = document.getElementById('diploma');
  let ctx = canvas.getContext('2d');

  //cortar al primer nombre del estudiante
  let title = studenName ? studenName.split(' ')[0] : 'Invalid';
  document.title = `Diploma | ${title}`;

  let imgBgPath = 'images/diplomaBackground.jpg';
  let imgLogoPath = 'images/UAA-LOGO.png';
  let imgSignPath = 'images/Firmas_cover.png';

  let imgBg = new Image();
  imgBg.src = imgBgPath;
  imgBg.onload = () => {
    canvas.width = imgBg.width;
    canvas.height = imgBg.height;
    ctx.drawImage(imgBg, 0, 0, canvas.width, canvas.height);

    drawImage(ctx, imgLogoPath, 350, 180, 280);
    let posX = canvas.width / 2 - 380;
    let posY = 2400;
    drawImage(ctx, imgSignPath, 400, posX, posY, 2);
    drawLine(ctx, canvas.width / 2 - 400, 2900, canvas.width / 2 + 400, 2900, '#000', 5);
    allTexting(ctx, canvas);
  }

}

let allTexting = (ctx, canvas) => {
  let titleFont = 'bold 180px Arial';
  let subTitleFont = 'bold 120px Arial';
  let textFont = 'bold 80px Arial';
  let nameFont = 'bold 140px Garamond';
  let posX, posY = 0;
  let text = '';
  let textWidth = 0;

  // Title
  text = 'Certificado de Estudios';
  textWidth = getTextWidth(ctx, text, titleFont);
  posX = canvas.width / 2 - textWidth / 2;
  posY = 800;
  writeText(ctx, text, posX, posY, titleFont, '#000');

  // Subtitle
  text = 'La universidad Autónoma de Aguascalientes';
  textWidth = getTextWidth(ctx, text, subTitleFont);
  posX = canvas.width / 2 - textWidth / 2;
  posY = 1300;
  writeText(ctx, text, posX, posY, subTitleFont, '#000');

  text = 'le otorga el presente diploma a:';
  textWidth = getTextWidth(ctx, text, subTitleFont);
  posX = canvas.width / 2 - textWidth / 2;
  posY += 130;
  writeText(ctx, text, posX, posY, subTitleFont, '#000');

  // Name
  studenName = studenName ? studenName : 'Nombre del Alumno';
  // calcular el ancho del nombre para centrarlo
  textWidth = getTextWidth(ctx, studenName, nameFont);
  posX = canvas.width / 2 - textWidth / 2;
  posY += 200;
  text = studenName;
  writeText(ctx, text, posX, posY, nameFont, '#000');
  // linea 
  let left = canvas.width / 2 - (textWidth / 2 + 200);
  let right = canvas.width / 2 + (textWidth / 2 + 200);
  posY += 50;
  drawLine(ctx, left, posY, right, posY, '#000', 5);

  // Egresado
  text = 'Por haber concluido satisfactoriamente';
  textWidth = getTextWidth(ctx, text, subTitleFont);
  posX = canvas.width / 2 - textWidth / 2;
  posY += 200;
  writeText(ctx, text, posX, posY, subTitleFont, '#000');

  text = 'los estudios de:';
  textWidth = getTextWidth(ctx, text, subTitleFont);
  posX = canvas.width / 2 - textWidth / 2;
  posY += 100;
  writeText(ctx, text, posX, posY, subTitleFont, '#000');

  // Carrera

  career = career ? career : 'Carrera';
  textWidth = getTextWidth(ctx, career, nameFont);
  posX = canvas.width / 2 - textWidth / 2;
  posY += 200;
  text = career;
  writeText(ctx, text, posX, posY, nameFont, '#000');
  // linea
  left = canvas.width / 2 - (textWidth / 2 + 200);
  right = canvas.width / 2 + (textWidth / 2 + 200);
  posY += 50;
  drawLine(ctx, left, posY, right, posY, '#000', 5);

  // Felicitaciones
  text = 'Se lumen proferrere';
  textWidth = getTextWidth(ctx, text, textFont);
  posX = canvas.width / 2 - textWidth / 2;
  posY += 180;
  writeText(ctx, text, posX, posY, textFont, '#000');

  // Fecha
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  text = `Aguascalientes, Ags. a ${day} de ${month} de ${year}`;
  textWidth = getTextWidth(ctx, text, textFont);
  posX = canvas.width / 4 * 3.15 - textWidth / 2;
  posY = canvas.height - 280;
  writeText(ctx, text, posX, posY, textFont, '#000');
  // Director signature
  text = 'Firma del Director: Dr. Francisco Javier';
  textWidth = getTextWidth(ctx, text, textFont);
  posX = canvas.width / 2 - textWidth / 2;
  posY = 2980;
  writeText(ctx, text, posX, posY, textFont, '#000');
}

/**
 * 
 * @param {*} ctx context 2d of the canvas
 * @param {string} text text to measure
 * @param {string} font font style
 * @returns width of the text
 */
let getTextWidth = (ctx, text, font) => {
  ctx.font = font;
  return ctx.measureText(text).width;
}

/**
 * 
 * @param {*} ctx context 2d of the canvas
 * @param {string} path url of the image
 * @param {int} width width of the image
 * @param {int} x position from the left - default 0
 * @param {int} y position from the top - default 0
 * @param {int} mult size multiplier - default 3
 */
let drawImage = (ctx, path, width, x = 0, y = 0, mult = 3) => {
  let image = new Image();
  image.src = path;
  image.onload = () => {
    let aspectRatio = image.width / image.height;
    let height = width / aspectRatio;
    ctx.drawImage(image, x, y, width * mult, height * mult);
  }
}

/**
 * 
 * @param {*} ctx context 2d of the canvas
 * @param {string} text text to write
 * @param {int} x position from the left
 * @param {int} y position from the top
 * @param {string} font font style
 * @param {string} fillStyle color of the text
 */
let writeText = (ctx, text, x, y, font, fillStyle) => {
  ctx.font = font;
  ctx.fillStyle = fillStyle;
  ctx.fillText(text, x, y);
}

/**
 * 
 * @param {*} ctx context 2d of the canvas
 * @param {int} x1 start position from the left
 * @param {int} y1 start position from the top
 * @param {int} x2 end position from the left
 * @param {int} y2 end position from the top
 * @param {string} color color of the line
 * @param {int} width width of the line
 */
let drawLine = (ctx, x1, y1, x2, y2, color, width) => {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.stroke();
}

window.onload = init;