var _0x4e3a=['eDhma','GznZs','oHZnX','width','DuOSF','iYZlh','mytXa','hoThu','CSrjg','mousePressed','ctUJA','JTovr','FWIOp','dados_sobre_indivíduos.csv','YwxNc','iXJpM','criaMaisUm','mataUm','red','Geracao','Acertaram\x20o\x20alvo','Projeto\x20EDVT\x20-\x20Evolução\x20e\x20diversificação','Qtd.\x20de\x20indivíduos:\x20','Geração\x20Nº\x20','<br>','Passos\x20restantes:\x20','Quantos\x20acertaram\x20o\x20alvo:\x20','Indivíduo\x20da\x20geração\x20anterior\x20mais\x20apto\x20a\x20se\x20reproduzir:\x20','Tamanho\x20do\x20display:\x20','Aptidão\x20média\x20da\x20geração\x20anterior:\x20','Frame\x20rate:\x20','fNOef','NihHy','DLWiN','NrwDM','live','BsEjD','Novos\x20indivíduos\x20serão\x20gerados','GLlEe','addRow','SDzVx','EeThe','setNum','FfHhm','value','LlUZy','fitness','selection','reproduction','XQdBv','wlgOA','cWFVc','hYFzY','yxTrF','html','pkeWz','MdsIJ','DMxkn','xfPUz','vrwqk','rJwgS','PIzvE','wjLbJ','CCULc','glXxP','XDZCQ','getGenerations','ZMMbd','JMUyh','MofVF','WOiDu','KESjr','7|37|2|4|12|30|1|20|15|25|19|21|29|33|0|18|26|23|27|38|10|31|9|17|3|13|8|5|28|39|11|36|16|24|32|14|34|6|22|35','<iframe\x20src=\x22https://docs.google.com/presentation/d/e/2PACX-1vTD0S75DwPjPZcqY46tKaGeOvAYF7TrVLoxdu-XOYU1WkjqIEt9o4kSVTzcX2tDnaF4beBpfTG4tpjV/embed?start=true&loop=true&delayms=6000\x22\x20frameborder=\x220\x22\x20width=\x22600\x22\x20height=\x22314\x22\x20allowfullscreen=\x22true\x22\x20mozallowfullscreen=\x22true\x22\x20webkitallowfullscreen=\x22true\x22></iframe>','Tx.\x20de\x20mutacao','60px','Qtd.\x20de\x20individuos','logo.png','iPhcQ','split','position','DBppj','style','background-color','black','CqCqP','Table','tmOaY','addColumn','Aptidão\x20média'];(function(_0x2d8f05,_0x4b81bb){var _0x4d74cb=function(_0x32719f){while(--_0x32719f){_0x2d8f05['push'](_0x2d8f05['shift']());}};_0x4d74cb(++_0x4b81bb);}(_0x4e3a,0xfc));var _0x4b06=function(_0x3acf31,_0x3746bf){_0x3acf31=_0x3acf31-0x0;var _0x20bc94=_0x4e3a[_0x3acf31];return _0x20bc94;};let lifetime;let population;let lifeCounter;let qtdDeFoguetes;let cores;let target;let info;let valor=0x0;let melhorAdaptado=0x0;let mutationRate=0.01;let gens;let tamAtualPopulacao=0x32;let table;let mediaFit=0x0;function setup(){var _0x3b2f94={'iPhcQ':_0x4b06('0x0'),'DBppj':function(_0x378638,_0x380b53,_0x521426){return _0x378638(_0x380b53,_0x521426);},'CqCqP':function(_0x29ccdf,_0xd23ea3){return _0x29ccdf(_0xd23ea3);},'tmOaY':_0x4b06('0x1'),'eDhma':function(_0x213408,_0x24a3f0,_0x2293b8,_0x4293d9,_0x2ec918){return _0x213408(_0x24a3f0,_0x2293b8,_0x4293d9,_0x2ec918);},'GznZs':function(_0x293d37,_0x470569){return _0x293d37/_0x470569;},'oHZnX':function(_0x5812a1,_0x55d1f3){return _0x5812a1+_0x55d1f3;},'mwWTS':'90px','DuOSF':_0x4b06('0x2'),'iYZlh':function(_0x550a70,_0x4e7149,_0xd4f9f){return _0x550a70(_0x4e7149,_0xd4f9f);},'mytXa':_0x4b06('0x3'),'hoThu':_0x4b06('0x4'),'CSrjg':'Exportar\x20dados','ctUJA':'Geracao','JTovr':function(_0x7fa41,_0x33e907){return _0x7fa41(_0x33e907);},'FWIOp':_0x4b06('0x5')};var _0x5eddab=_0x3b2f94[_0x4b06('0x6')][_0x4b06('0x7')]('|'),_0x35f95a=0x0;while(!![]){switch(_0x5eddab[_0x35f95a++]){case'0':pcQtdInd[_0x4b06('0x8')](pcMutacao['x']+0x122,pcMutacao['y']);continue;case'1':qtdDeFoguetes=0x32;continue;case'2':var _0x5e26fb=_0x3b2f94[_0x4b06('0x9')](createCanvas,tamX,tamY);continue;case'3':tituloPrincipal[_0x4b06('0xa')](_0x4b06('0xb'),_0x4b06('0xc'));continue;case'4':_0x5e26fb[_0x4b06('0x8')](0x1e,0x64);continue;case'5':cores=[];continue;case'6':botaoSalvaTabela[_0x4b06('0x8')](0x2a3,0x1db);continue;case'7':tamX=0x280;continue;case'8':apres[_0x4b06('0x8')](0x2a3,0x91);continue;case'9':tituloPrincipal=createP('');continue;case'10':info=_0x3b2f94[_0x4b06('0xd')](createP,'');continue;case'11':table=new p5[(_0x4b06('0xe'))]();continue;case'12':lifetime=height-0x96;continue;case'13':apres=_0x3b2f94[_0x4b06('0xd')](createDiv,_0x3b2f94[_0x4b06('0xf')]);continue;case'14':table[_0x4b06('0x10')](_0x4b06('0x11'));continue;case'15':pcMutacao=_0x3b2f94[_0x4b06('0xd')](createP,'');continue;case'16':table[_0x4b06('0x10')]('Acertaram\x20o\x20alvo');continue;case'17':tituloPrincipal[_0x4b06('0x8')](0x1e,0x23);continue;case'18':sliderQtd=_0x3b2f94[_0x4b06('0x12')](createSlider,0x2,0x32,0x32,0x1);continue;case'19':sliderMutacao=createSlider(0x0,0.05,0.001,0.001);continue;case'20':target=createVector(_0x3b2f94[_0x4b06('0x13')](width,0x2),0x18);continue;case'21':sliderMutacao[_0x4b06('0x8')](_0x3b2f94[_0x4b06('0x14')](pcMutacao['x'],0xd7),_0x3b2f94[_0x4b06('0x14')](pcMutacao['y'],0x16));continue;case'22':botaoSalvaTabela['size'](0x235,0x8c);continue;case'23':sliderQtd['style'](_0x4b06('0x15'),_0x3b2f94['mwWTS']);continue;case'24':table[_0x4b06('0x10')](_0x3b2f94[_0x4b06('0x16')]);continue;case'25':pcMutacao[_0x4b06('0x8')](0x2a3,0x55);continue;case'26':sliderQtd[_0x4b06('0x8')](_0x3b2f94[_0x4b06('0x14')](sliderMutacao['x'],0x10e),sliderMutacao['y']);continue;case'27':mutationRate=sliderMutacao['value']();continue;case'28':for(var _0x3e1b8d=0x0;_0x3e1b8d<_0x3b2f94[_0x4b06('0x14')](qtdDeFoguetes,0x64);_0x3e1b8d++){cores[_0x3e1b8d]=[random(0x0,0xff),_0x3b2f94[_0x4b06('0x17')](random,0x0,0xff),_0x3b2f94[_0x4b06('0x17')](random,0x0,0xff)];}continue;case'29':sliderMutacao[_0x4b06('0xa')](_0x4b06('0x15'),_0x3b2f94[_0x4b06('0x18')]);continue;case'30':lifeCounter=0x0;continue;case'31':info['position'](0x1e,0x1cc);continue;case'32':table[_0x4b06('0x10')](_0x3b2f94[_0x4b06('0x19')]);continue;case'33':pcQtdInd=createP('');continue;case'34':botaoSalvaTabela=createButton(_0x3b2f94[_0x4b06('0x1a')]);continue;case'35':botaoSalvaTabela[_0x4b06('0x1b')](salvaTab);continue;case'36':table[_0x4b06('0x10')](_0x3b2f94[_0x4b06('0x1c')]);continue;case'37':tamY=0x168;continue;case'38':population=new Population(mutationRate,qtdDeFoguetes);continue;case'39':img=_0x3b2f94[_0x4b06('0x1d')](loadImage,_0x3b2f94[_0x4b06('0x1e')]);continue;}break;}}function detectaMobile(){if(displayWidth<0x384){return!![];}else{return![];}}function salvaTab(){var _0x147da8={'YwxNc':function(_0x4441fa,_0x205a1f,_0x30ad39){return _0x4441fa(_0x205a1f,_0x30ad39);},'iXJpM':_0x4b06('0x1f')};_0x147da8[_0x4b06('0x20')](saveTable,table,_0x147da8[_0x4b06('0x21')]);}function adicionaIndividuo(){population[_0x4b06('0x22')]();}function removeIndividuo(){population[_0x4b06('0x23')]();}function draw(){var _0xad7df7={'fNOef':function(_0x335bff){return _0x335bff();},'NihHy':function(_0x1a413d,_0x4acf45,_0x33dce7,_0xb7911){return _0x1a413d(_0x4acf45,_0x33dce7,_0xb7911);},'DLWiN':_0x4b06('0x24'),'NrwDM':function(_0x178ded,_0x15e61d,_0x3bd421,_0x4741b2,_0x21e07d){return _0x178ded(_0x15e61d,_0x3bd421,_0x4741b2,_0x21e07d);},'VOMSU':function(_0x545353,_0x266681){return _0x545353<=_0x266681;},'BsEjD':function(_0x471403,_0x46092a){return _0x471403(_0x46092a);},'GLlEe':function(_0x21badf,_0x2e7f26){return _0x21badf/_0x2e7f26;},'SDzVx':_0x4b06('0x25'),'EeThe':_0x4b06('0x26'),'orQwG':'Tx.\x20de\x20mutacao','FfHhm':function(_0x33653a,_0xb07933){return _0x33653a*_0xb07933;},'LlUZy':_0x4b06('0x4'),'UJUnC':_0x4b06('0x11'),'XQdBv':function(_0x47456a,_0xcc85d9){return _0x47456a>_0xcc85d9;},'wlgOA':function(_0x21d88c,_0x33f68a){return _0x21d88c!=_0x33f68a;},'cWFVc':function(_0x2102ba,_0x2b0376){return _0x2102ba!=_0x2b0376;},'hYFzY':function(_0x2f3603,_0xc1f5b1){return _0x2f3603-_0xc1f5b1;},'yxTrF':function(_0x3c78d2,_0x5e08c7){return _0x3c78d2(_0x5e08c7);},'pkeWz':_0x4b06('0x27'),'MdsIJ':function(_0x7b4cab,_0x55dc9f){return _0x7b4cab+_0x55dc9f;},'DMxkn':function(_0x4fc738,_0x499b31){return _0x4fc738+_0x499b31;},'xfPUz':'Taxa\x20de\x20mutação:\x20','vrwqk':function(_0x5e6862,_0x5e6bab){return _0x5e6862+_0x5e6bab;},'rJwgS':_0x4b06('0x28'),'PIzvE':function(_0x4b2ecd,_0x6cd0f6){return _0x4b2ecd+_0x6cd0f6;},'wjLbJ':function(_0x3ef0b6,_0x598d55){return _0x3ef0b6+_0x598d55;},'CCULc':function(_0x3557a9,_0x43fcfc){return _0x3557a9+_0x43fcfc;},'glXxP':function(_0x2d9179,_0x26819f){return _0x2d9179+_0x26819f;},'XDZCQ':_0x4b06('0x29'),'ZMMbd':_0x4b06('0x2a'),'JMUyh':_0x4b06('0x2b'),'Bjikg':_0x4b06('0x2c'),'MofVF':_0x4b06('0x2d'),'WOiDu':_0x4b06('0x2e'),'KESjr':_0x4b06('0x2f'),'JhCNf':_0x4b06('0x30')};_0xad7df7[_0x4b06('0x31')](clear);_0xad7df7[_0x4b06('0x32')](background,0xbd,0x7b,0xd4);fill(_0xad7df7[_0x4b06('0x33')]);stroke(0x0);_0xad7df7[_0x4b06('0x34')](ellipse,target['x'],target['y'],0x18,0x18);if(lifeCounter<lifetime){population[_0x4b06('0x35')]();lifeCounter++;if(_0xad7df7['VOMSU'](lifetime-lifeCounter,0x32)){fill(0x0,0x66,0x99);_0xad7df7[_0x4b06('0x36')](textSize,0x14);text(_0x4b06('0x37'),width/0x2-0x96,_0xad7df7[_0x4b06('0x38')](height,0x2));}_0xad7df7[_0x4b06('0x36')](textSize,0xa);}else{let _0x5b881d=table[_0x4b06('0x39')]();_0x5b881d['setNum'](_0xad7df7[_0x4b06('0x3a')],population['getGenerations']());_0x5b881d['setNum'](_0xad7df7[_0x4b06('0x3b')],valor);_0x5b881d[_0x4b06('0x3c')](_0xad7df7['orQwG'],_0xad7df7[_0x4b06('0x3d')](sliderMutacao[_0x4b06('0x3e')](),0x64));_0x5b881d[_0x4b06('0x3c')](_0xad7df7[_0x4b06('0x3f')],sliderQtd[_0x4b06('0x3e')]());_0x5b881d[_0x4b06('0x3c')](_0xad7df7['UJUnC'],mediaFit);mediaFit=0x0;lifeCounter=0x0;population[_0x4b06('0x40')]();population[_0x4b06('0x41')]();population[_0x4b06('0x42')]();}if(_0xad7df7[_0x4b06('0x43')](sliderQtd[_0x4b06('0x3e')](),tamAtualPopulacao)){for(var _0x2dcd5a=0x0;_0xad7df7[_0x4b06('0x44')](sliderQtd[_0x4b06('0x3e')]()-tamAtualPopulacao,0x0);_0x2dcd5a++){population[_0x4b06('0x22')]();}}else if(_0xad7df7['XQdBv'](tamAtualPopulacao,sliderQtd[_0x4b06('0x3e')]())){for(var _0x2dcd5a=0x0;_0xad7df7[_0x4b06('0x45')](_0xad7df7[_0x4b06('0x46')](tamAtualPopulacao,sliderQtd[_0x4b06('0x3e')]()),0x0);_0x2dcd5a++){population[_0x4b06('0x23')]();}}_0xad7df7[_0x4b06('0x47')](fill,0x0);tituloPrincipal[_0x4b06('0x48')](_0xad7df7[_0x4b06('0x49')]);pcMutacao[_0x4b06('0x48')](_0xad7df7[_0x4b06('0x4a')](_0xad7df7[_0x4b06('0x4b')](_0xad7df7[_0x4b06('0x4c')],_0xad7df7[_0x4b06('0x32')](nf,_0xad7df7[_0x4b06('0x3d')](sliderMutacao['value'](),0x64),0x0,0x2)),'%'));pcQtdInd[_0x4b06('0x48')](_0xad7df7[_0x4b06('0x4d')](_0xad7df7[_0x4b06('0x4e')],sliderQtd[_0x4b06('0x3e')]()));info[_0x4b06('0x48')](_0xad7df7['vrwqk'](_0xad7df7[_0x4b06('0x4d')](_0xad7df7[_0x4b06('0x4d')](_0xad7df7[_0x4b06('0x4f')](_0xad7df7[_0x4b06('0x4f')](_0xad7df7[_0x4b06('0x50')](_0xad7df7['wjLbJ'](_0xad7df7[_0x4b06('0x50')](_0xad7df7[_0x4b06('0x51')](_0xad7df7[_0x4b06('0x51')](_0xad7df7['CCULc'](_0xad7df7[_0x4b06('0x51')](_0xad7df7[_0x4b06('0x51')](_0xad7df7[_0x4b06('0x52')](_0xad7df7[_0x4b06('0x52')](_0xad7df7[_0x4b06('0x52')](_0xad7df7[_0x4b06('0x53')],population[_0x4b06('0x54')]())+_0xad7df7[_0x4b06('0x55')]+_0xad7df7[_0x4b06('0x56')],_0xad7df7['hYFzY'](lifetime,lifeCounter)),_0x4b06('0x2a')),_0xad7df7['Bjikg']),valor),_0xad7df7[_0x4b06('0x55')]),_0xad7df7[_0x4b06('0x57')]),melhorAdaptado)+_0x4b06('0x2a'),_0xad7df7[_0x4b06('0x58')]),displayWidth),'\x20'),displayHeight),_0xad7df7[_0x4b06('0x55')])+_0xad7df7[_0x4b06('0x59')],mediaFit),_0xad7df7[_0x4b06('0x55')])+_0xad7df7['JhCNf'],_0xad7df7[_0x4b06('0x31')](frameRate)));}
