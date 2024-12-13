
//rawon, sate padang, esteh,krupuk, telur asin-->
let totalHargaMakanan = 0;
let food = [
    {
        name:`Nasi Putih`,
        stok: 100,
        harga: 5000,
        image: './assets/images/nasi-putih.jpg'
    },
    {
        name:`Sate Padang`,
        stok: 12,
        harga: 20000,
        image: './assets/images/sate-padang.jpg'
    },
    {
        name:`Krupuk`,
        stok: 12,
        harga: 2000,
        image: './assets/images/kerupuk_putih.jpg'
    },
    {
        name:`Rawon`,
        stok: 30,
        harga: 15000,
        image: './assets/images/rawon.jpg'

    },
    {
        name:`Gulai Ikan`,
        stok: 15,
        harga: 15000,
        image: './assets/images/gulai-ikan.jpg'

    },
    {
        name:`Ikan Bakar`,
        stok: 25,
        harga: 20000,
        image: './assets/images/ikan-bakar.jpg'

    },
    {
        name:`Rendang`,
        stok: 25,
        harga: 15000,
        image: './assets/images/Rendang.jpg'

    },
    {
        name:`Ikan Dory Masam Manis`,
        stok: 25,
        harga: 15000,
        image: './assets/images/ikan-dory-masam-manis.jpg'

    },
    {
        name:`Peyek Udang`,
        stok: 15,
        harga: 6000,
        image: './assets/images/peyek-udang.jpg'

    },
    {
        name:`Sambal Merah`,
        stok: 50,
        harga: 5000,
        image: './assets/images/sambal-merah.jpg'

    },
    {
        name:`Sambal Ijo`,
        stok: 50,
        harga: 5000,
        image: './assets/images/sambal-ijo.jpg'

    },
    {
        name:`Jengkol Balado`,
        stok: 25,
        harga: 18000,
        image: './assets/images/jengkol-balado.jpg'

    },
    {
        name:`Dendeng Batakok`,
        stok: 15,
        harga: 17000,
        image: './assets/images/dendeng-batokok.jpg'

    },
    {
        name:`Ayam Gulai`,
        stok: 20,
        harga: 15000,
        image: './assets/images/ayam-gulai.jpg'

    },
    {
        name:`Ayam Goreng`,
        stok: 20,
        harga: 15000,
        image: './assets/images/ayam-goreng.jpg'

    },
    {
        name:`Ayam Pop`,
        stok: 25,
        harga: 20000,
        image: './assets/images/ayam-pop.jpg'

    },
    {
        name:`Balado Cumi Terong`,
        stok: 25,
        harga: 25000,
        image: './assets/images/balado-cumi-terong.jpg'

    },
    {
        name:`Gulai Tunjang`,
        stok: 25,
        harga: 25000,
        image: './assets/images/gulai-tunjang.jpg'

    },
    {
        name:`Es Teh Manis`,
        stok: 50,
        harga: 5000,
        image: './assets/images/es-teh-manis.jpg'

    },
    {
        name:`Es Jeruk`,
        stok: 50,
        harga: 6000,
        image: './assets/images/es-jeruk.jpg'

    },
    {
        name:`Es Kopyor`,
        stok: 50,
        harga: 10000,
        image: './assets/images/es-kopyor.jpg'

    },
    {
        name:`Cappucino Cincau`,
        stok: 50,
        harga: 8000,
        image: './assets/images/cappucino-cincau.jpg'

    },
    {
        name:`Chessecake Blueberry`,
        stok: 50,
        harga: 15000,
        image: './assets/images/cheesecake-blueberry.jpg'

    },
    {
        name:`Tiramisu`,
        stok: 30,
        harga: 12000,
        image: './assets/images/tiramisu.jpg'

    },
    
    
    
]

let cart = [

];

let pembelian =[

];

function debug(){
    console.log(pembelian); 
}

function checkAvailable(){
    var available = true;
    for(var i = 0; i<cart.length; i++){
        for(var j = 12; j<food.length; j++){
            if(cart[i].name === food[j].name){
                if(food[j].stok < cart[i].jumlah){
                    available = false;
                    alert(`Stok ${food[j].name} tinggal ${food[j].stok}`);
                    break;
                }
            }  
        }
        if(!available){
            break;
        }
    }

    return available
}

function orderFood(){
    // for(var i = 0; i<cart.length; i++){
    //     var notAvailable = false;
    //     for(var j = 0; j<food.length; j++){
    //         if(cart[i].name === food[j].name){
    //             if(food[j].stok < cart[i].jumlah){
    //                 notAvailable = true;
    //                 alert(`Stok ${food[j].name} tinggal ${food[j].stok}`);
    //                 break;
    //             }
    //             // if(!notAvailable){
    //             //     food[j].stok -= cart[i].jumlah;
    //             // }      
    //         }  
    //     }
    //     if(notAvailable){
    //         break;
    //     }
    // }
    if(checkAvailable()){
        for(var x = 0; x<cart.length; x++){
            for(var y = 0; y<food.length; y++){
                if(cart[x].name === food[y].name){  
                        food[y].stok -= cart[x].jumlah;
                }
            }
        }
        var cartList = document.getElementById('cartList');

        // UNTUK MATIKAN CARTLIST
        cartList.setAttribute('style','display:none');
        alert(`Pesanan telah diterima, Mohon menunggu, Total Harga : Rp${toRupiah(totalHargaMakanan)},00`);
        cart.push(totalHargaMakanan);
        pembelian.push(cart);
        totalHargaMakanan = 0;
        cart = [];
        generateData();    
    }
    console.log(pembelian); 
    console.log(food);
}

function addtoCart(index) {
    console.log(food[index].name);
    var hasExist = false;
    var hasEmpty = false;
    if(food[index].stok <= 0){
        alert(`${food[index].name} habis, silahkan pesan menu lainnya`);
        hasEmpty = true;
    }
    for(var i = 0; i<cart.length; i++){
        if(food[index].name === cart[i].name){
            if(food[index].stok - cart[i].jumlah <=0){
                alert(`${food[index].name} habis, silahkan pesan menu lainnya`);
                hasEmpty = true;
                break;
            }else{
                totalHargaMakanan += cart[i].harga;
                //console.log(totalHargaMakanan);
                cart[i].jumlah ++;
                hasExist = true;
                break;
            }      
        }
    }
    if(!hasExist && !hasEmpty){
        let obj ={
            name: food[index].name,
            harga: food[index].harga,
            jumlah: 1,
            image: food[index].image,
        }
        totalHargaMakanan +=food[index].harga;
        cart.push(obj);
    }
    generateData();
    var cartlist = document.getElementById('cartList');
    if(cart.length !== 0){
        cartlist.setAttribute('style', 'display:inline-block');
    }
}

function removeFood(value){
    
    //console.log(cart[value].jumlah);
    if(cart[value].jumlah > 0){
        totalHargaMakanan -=cart[value].harga;
        cart[value].jumlah--;
    }   
    if(cart[value].jumlah === 0){
        cart.splice(value,1);
        
    }
    generateData();
    var cartlist = document.getElementById('cartList');
    if(cart.length !== 0){
        cartlist.setAttribute('style', 'display:inline-block');
    }else{

        // UNTUK MATIKAN CARTLIST

        
        cartlist.setAttribute('style', 'display:none');
    }
}

function toRupiah(harga){
    var result = '';
    harga = String(harga);
    var arr = [];
    var count = 0;
    for(var i = harga.length-1; i>=0; i--){
        if(count === 3 && harga[i] !=undefined){
            arr.push('.');
            arr.push(harga[i]);
            count = 1;
            // console.log(count,i,'MASUK'); 
        }else{
            arr.push(harga[i]);
            count++;
            //console.log(count,i-1);
        }
    }
    //console.log(arr);
    for(var i = arr.length-1; i>=0; i--){
        result += arr[i];
    }
    return result;
}

//console.log(toRupiah(1910450));

function generateData(){
    const foodList = document.getElementById('foodList');
    const cartList = document.getElementById('cartList');
    foodList.innerHTML = '';
    cartList.innerHTML = '';
    
    for(var i =0; i<food.length; i++){
        let name = food[i].name;
        let stok = food[i].stok;
        let harga = food[i].harga;
        let image = food[i].image;
      
        let divCard = document.createElement('div');
        divCard.classList.add('card')

    
        let imageData = document.createElement('img')
        imageData.setAttribute("src",image);
        divCard.appendChild(imageData);
    
        let title = document.createElement('p');
        title.innerHTML = name;
        divCard.appendChild(title);

        let divAction = document.createElement('div');
        divAction.classList.add('action');

        let spanData = document.createElement('span');
        spanData.innerHTML = `Rp ${toRupiah(harga)},00 | Stok : ${stok}`;
        divAction.appendChild(spanData);

        let buttonAdd = document.createElement('button');
        buttonAdd.innerHTML = '<i class="fas fa-cart-plus"></i> Pesan';
        buttonAdd.setAttribute('value', i);
        buttonAdd.setAttribute('onclick', 'addtoCart(this.value)');
        divAction.appendChild(buttonAdd);
        divCard.appendChild(divAction);
        //console.log(divCard);
        foodList.appendChild(divCard);
    
    }

    let totalDiv = document.createElement('div');
    totalDiv.classList.add('total');

    let totalh1 = document.createElement('h1');
    totalh1.innerHTML = `TOTAL : Rp${toRupiah(totalHargaMakanan)},00`;
    totalDiv.appendChild(totalh1);

    let totalhr = document.createElement('hr');
    totalDiv.appendChild(totalhr);
    //console.log(totalDiv);
    cartList.appendChild(totalDiv);

    //console.log('BelumMasuk');
    for(var x =0; x<cart.length; x++){
        
        let name = cart[x].name;
        let jumlah = cart[x].jumlah;
        let harga = cart[x].harga;
        let image = cart[x].image;
        //console.log('MASUK');
        let divCardx = document.createElement('div');
        divCardx.classList.add('card-order') ;  
        //console.log(divCardx);

        let divCardDetail = document.createElement('div');
        divCardDetail.classList.add('detail');

        let imageData = document.createElement('img')
        imageData.setAttribute("src",image);
        divCardDetail.appendChild(imageData);
        
        let foodName = document.createElement('p');
        // foodName.setAttribute('id','nameCart')
        foodName.innerHTML = name;
        divCardDetail.appendChild(foodName);

        let foodJumlah = document.createElement('span');
        foodJumlah.innerHTML = jumlah;
        divCardDetail.appendChild(foodJumlah);
        
        divCardx.appendChild(divCardDetail);

        let buttonCancel = document.createElement('button');
        buttonCancel.setAttribute('value', x );
        buttonCancel.setAttribute('id', 'cancelCart' );
        buttonCancel.setAttribute('onclick', 'removeFood(this.value)');
        buttonCancel.innerHTML = '<i class="fas fa-trash"></i> Hapus';
        divCardx.appendChild(buttonCancel);
        //console.log(divCardx);
    
        cartList.appendChild(divCardx);
    }

    let divbutton = document.createElement('div');
    divbutton.classList.add("card-finish");

    let buttonOrder = document.createElement('button');
    //buttonOrder.classList.add('order');
    buttonOrder.setAttribute('onclick', 'orderFood()');
    buttonOrder.innerHTML = 'ORDER SEKARANG';
    divbutton.appendChild(buttonOrder);
    cartList.appendChild(divbutton);


  

}
generateData()