let cadena = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga cupiditate dolores saepe, praesentium sit eaque recusandae id sapiente similique, laudantium voluptatum perferendis ea iure ad odio doloremque earum voluptate.";

     let expReg = new RegExp("lorem", "ig");
     console.log(expReg.test(cadena));
     console.log(expReg.exec(cadena));

     let expReg2 = /lorem{1,}/ig;
     console.log(expReg2.test(cadena));
     console.log(expReg2.exec(cadena));