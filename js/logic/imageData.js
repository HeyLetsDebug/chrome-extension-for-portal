
document.body.addEventListener(
    'keydown',
    function(e){
        if(e.keyCode && e.keyCode == 27){
            closeCurrentWin();
        }
    },
    false
);

function g(s){
    return chrome.i18n.getMessage(s);
}

function gtn(t){
    return document.getElementsByTagName(t);
}

function gid(id){
    return document.getElementById(id);
}


function closeCurrentWin(){
    chrome.windows.getCurrent(function(w){
        chrome.windows.remove(w.id);
    });
}

function niceBytes(x){
    var units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        n = o = parseInt(x, 10) || 0,
        l = 0,
        result = {};

    while(n > 1024){
        n = n/1024;
        l++;
    }

    result.nice = l > 0 ? n.toFixed(2) + ' ' + units[l] : '';
    result.orig = o.toLocaleString() + ' ' + units[0];

    return result;
}

var bg=chrome.extension.getBackgroundPage(),
    info=bg.imgInfoObj;

gid('loc').innerHTML = g('loc');
gid('loc').nextSibling.nextSibling.innerHTML = "<a id=\"locLink\" target=\"_blank\" href=\""
                                               + info['imgSrc'] + "\">"
                                               + info['imgSrc'] + "</a>";

gid("locLink").addEventListener('click',closeCurrentWin,false);

gid('dims').innerHTML = g('dims');
gid('ftype').innerHTML = g('ftype');
gid('fsize').innerHTML = g('fsize');
gid('altTitleStr').innerHTML = g('altTitleStr');
gid('prev').innerHTML = g('prev');

var tds = gtn('td'),
    xhr = new XMLHttpRequest(),
    imgType,
    imgFileSize,
    oImgFileSize;

var altTitleStr = info['altTitleStr'];

tds[9].innerHTML = altTitleStr;

var nImg = new Image();
    nImg.src=info['imgSrc'];

    nImg.onload=function(){
        var nImgWidth  = nImg.width,
            nImgHeight = nImg.height,
            nImgDims,
            newImgWidth,
            newImgHeight;

        var dispWidth  = info['dispWidth'],
            dispHeight = info['dispHeight'],
            sw,
            sh,
            sstr='';

        sw = dispWidth  != nImgWidth  ? dispWidth  : 0;
        sh = dispHeight != nImgHeight ? dispHeight : 0;

        if(sw&&sh){
            sstr = '<span class="gray">('
                   + g('smsg') + ' ' + sw
                   + ' x '
                   + sh + ' px)</span>';
        };

        nImgDims = nImgWidth && nImgHeight ?
                   (nImgWidth + ' x ' + nImgHeight + ' px  ' + sstr) :
                   g('eid');

        tds[3].innerHTML = nImgDims;

        newImgWidth = nImgWidth >= 600 ? 600 : nImgWidth;
        newImgHeight = nImgWidth >= 600 ?
                        Math.ceil(600*nImgHeight/nImgWidth) :
                        nImgHeight;

        var imgURLWidth=info['imgSrc'].length*8;
            imgURLWidth = imgURLWidth > 680 ? 680 : imgURLWidth;

        var popWinNewHeight=info['popWinHeight']+newImgHeight-16;
            popWinNewHeight = popWinNewHeight > 600 ? 600 : popWinNewHeight;

        if(popWinNewHeight==600){
            document.body.style.overFlowY = "scroll";
        }

        if(newImgWidth>imgURLWidth&&newImgWidth>popWinNewHeight-120){
            document.body.style.overFlowX="scroll";

            chrome.windows.getCurrent(function(w){
                chrome.windows.update(w.id,{width:newImgWidth+125});
            });
        }

        chrome.windows.getCurrent(function(w){
            chrome.windows.update(w.id,{height:popWinNewHeight});
        });
    }

    nImg.onerror=function(){
        document.title="View Image Info [error occurred]";
        tds[3].innerHTML=g('eid');
        tds[5].innerHTML=g('eift');
        tds[7].innerHTML=g('eifz');
        tds[11].innerHTML=g('ilem');
        tds[3].style.color = tds[5].style.color
                           = tds[7].style.color
                           = tds[9].style.color
                           = tds[11].style.color
                           = '#999999';
    }

    tds[11].firstChild.src=nImg.src;

    if(info['linkType']!='base64'){
        xhr.open("GET",nImg.src,true);

        xhr.onreadystatechange=function(){
            if(xhr.status==200&&xhr.readyState==4){
                imgType=xhr.getResponseHeader("Content-Type").split("/")[1],
                oImgFileSize = parseInt(xhr.getResponseHeader("Content-Length"), 10);

                imgFileSize = niceBytes(oImgFileSize);
                if(imgFileSize.nice.length > 0){
                    imgFileSize = imgFileSize.nice
                                + ' <span class="gray">('
                                + imgFileSize.orig
                                + ')</span>';
                }else{
                    imgFileSize = imgFileSize.orig;
                }

                if(oImgFileSize > 0){
                    tds[7].innerHTML = imgFileSize;
                }else{
                    tds[7].innerHTML=g('eifz');
                    tds[7].style.color="#999999";
                }

                imgType = (imgType&&imgType.toLowerCase()!="html") ?
                        '<em>'+imgType.toUpperCase()+'</em> image' : g('eift');

                tds[5].innerHTML=imgType;

                if(imgType==g('eift')){
                    tds[5].style.color="#999999";
                }

                document.title="View Image Info";

            }else if(xhr.status>=300){
                document.title="View Image Info [error occurred]";
                tds[5].innerHTML=g('eift');
                tds[7].innerHTML=g('eifz');
                tds[5].style.color=tds[7].style.color="#999999";
            }
        }
        xhr.send(null);

    }else{
        document.title="View Image Info [Base64 data]";
        imgType = '<em>'
                  + info['imgSrc'].substring(11,info['imgSrc'].indexOf(';')).toUpperCase()
                  + '</em> image <span class="gray">(base64 data)</span>';

        imgFileSize = info['imgSrc'].length;
        imgFileSize = niceBytes(imgFileSize);

        if(imgFileSize.nice.length > 0){
            imgFileSize = imgFileSize.nice
                        + ' <span class="gray">('
                        + imgFileSize.orig
                        + ')</span>';
        }else{
            imgFileSize = imgFileSize.orig;
        }

        tds[5].innerHTML   = imgType;
        tds[7].innerHTML   = imgFileSize;
    }
