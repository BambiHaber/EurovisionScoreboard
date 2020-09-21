Array.prototype.map.call(document.querySelectorAll('.aldraw_div:nth-child(2) .aldraw_tr'),
    (domItem, itemIndex) => {

        let countryName = domItem.querySelector('.aldraw_l').textContent

        let countryObject = domItem.querySelector(' img');

        let x = {
            countryName: countryName,
            imageUrl: countryObject.src,//window.getComputedStyle(countryObject).backgroundImage,
            imageBackgroundSize: window.getComputedStyle(countryObject).backgroundSize,
            imageBackgroundPosition: window.getComputedStyle(countryObject).backgroundPosition,
            imagewidth: window.getComputedStyle(countryObject).width,
            imageheight: window.getComputedStyle(countryObject).height
        }
        return {
            img: x.imageUrl,
            name: countryName
        }
        /*
        let el = document.createElement('div');
        el.style.position = 'fixed';
        el.style.top = '0';
        //  el.style.left = itemIndex == 0 ? 0 : String(itemIndex * x.imageBackgroundSize.replace('px','')+'px');
        el.style.left = ~~5 + (~~itemIndex * ~~x.imagewidth.replace('px', '')) + "px";

        el.style.background = x.imageUrl;
        el.style.backgroundSize = x.imageBackgroundSize
        el.style.backgroundPosition = x.imageBackgroundPosition
        el.style.width = x.imagewidth;
        el.style.height = x.imageheight;
        el.style.zIndex = 32434324;
        el.id = 'flag_' + itemIndex;

        let i = new Image(x.imagewidth, x.imageheight);
        i.src = el;
        console.log(i);
        document.body.appendChild(el);*/
    })
